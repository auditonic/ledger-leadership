-- Ledger Leadership: Complete Supabase Schema
-- Includes field notes, user profiles, and authentication

-- ============================================================================
-- User Profiles (for authentication & roles)
-- ============================================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'user' check (role in ('user', 'reviewer', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Policy: Users can read their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Policy: Service role can do anything (for Netlify Functions)
-- (This is default, but explicit for clarity)

-- ============================================================================
-- Field Notes
-- ============================================================================

create table if not exists public.field_notes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Contact info (private, not published)
  name text null,
  email text null,
  role text null,
  org_context text null,

  -- Field note content
  edge text not null check (edge in ('reality', 'obligation', 'continuity', 'margin', 'reconciliation', 'multiple')),
  situation text not null,
  applied text not null,
  result text not null,
  unclear text null,

  -- Attribution & publishing
  attribution text not null check (attribution in ('featured','anonymous','private')),
  followup boolean not null default false,
  publish_status text not null default 'submitted' check (publish_status in ('submitted','reviewing','published','rejected')),

  -- Public display fields (curated by admin)
  public_role text null,
  public_context text null
);

-- Indexes for field_notes
create index if not exists field_notes_created_at_idx on public.field_notes (created_at desc);
create index if not exists field_notes_publish_status_idx on public.field_notes (publish_status);
create index if not exists field_notes_edge_idx on public.field_notes (edge);

-- Enable RLS on field_notes
alter table public.field_notes enable row level security;

-- Policy: Public can read published notes only
create policy "Public can read published notes"
  on public.field_notes for select
  using (publish_status = 'published' AND attribution != 'private');

-- Policy: Service role can do anything (for Netlify Functions)
-- (This is default)

-- ============================================================================
-- Contact Submissions (optional, for contact form)
-- ============================================================================

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  
  name text not null,
  email text not null,
  subject text null,
  message text not null,
  source text null, -- 'contact', 'podcast', etc.
  
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived'))
);

-- Indexes
create index if not exists contact_submissions_created_at_idx on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_status_idx on public.contact_submissions (status);

-- Enable RLS
alter table public.contact_submissions enable row level security;

-- Policy: Only service role can read/write (all via Netlify Functions)
-- (Default service role bypass is sufficient)

-- ============================================================================
-- Functions & Triggers
-- ============================================================================

-- Auto-update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at
  before update on public.profiles
  for each row
  execute function update_updated_at_column();

create trigger update_field_notes_updated_at
  before update on public.field_notes
  for each row
  execute function update_updated_at_column();

-- ============================================================================
-- Initial Admin User Setup (run manually after creating first user in Supabase Auth)
-- ============================================================================

-- After creating your first admin user via Supabase Auth UI:
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'your-admin@email.com';

-- Ledger Leadership: Initial Supabase Schema
-- Run this migration in your Supabase SQL editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Field notes table
create table if not exists public.field_notes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Contributor info (optional, may be null for anonymous)
  name text null,
  email text null,
  role text null,
  org_context text null,

  -- Field note content
  edge text not null,
  situation text not null,
  applied text not null,
  result text not null,
  unclear text null,

  -- Attribution and publishing
  attribution text not null check (attribution in ('featured','anonymous','private')),
  followup boolean not null default false,
  publish_status text not null default 'submitted' check (publish_status in ('submitted','reviewing','published','rejected')),

  -- Public display fields (optional curation by admin)
  public_role text null,
  public_context text null
);

-- Indexes for performance
create index if not exists field_notes_created_at_idx on public.field_notes (created_at desc);
create index if not exists field_notes_publish_status_idx on public.field_notes (publish_status);
create index if not exists field_notes_edge_idx on public.field_notes (edge);
create index if not exists field_notes_attribution_idx on public.field_notes (attribution);

-- Profiles table for user roles (for LLOps access control)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null check (role in ('admin', 'reviewer', 'user')) default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for profiles
create index if not exists profiles_role_idx on public.profiles (role);

-- Function to automatically create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'user');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on user creation
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security (RLS) Policies

-- Enable RLS
alter table public.field_notes enable row level security;
alter table public.profiles enable row level security;

-- Public can read published field notes
create policy "Public can read published field notes"
  on public.field_notes
  for select
  using (publish_status = 'published' and attribution != 'private');

-- Service role can do everything (for Netlify Functions)
-- Note: Service role bypasses RLS by default, so no policy needed

-- Users can read their own profile
create policy "Users can read own profile"
  on public.profiles
  for select
  using (auth.uid() = id);

-- Admins can read all profiles
create policy "Admins can read all profiles"
  on public.profiles
  for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Grant permissions
grant usage on schema public to anon, authenticated;
grant select on public.field_notes to anon, authenticated;
grant all on public.field_notes to service_role;
grant select on public.profiles to authenticated;
grant all on public.profiles to service_role;

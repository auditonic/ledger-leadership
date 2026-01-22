# Supabase Setup - Step by Step

## Step 1: Create Supabase Project

1. **Go to Supabase:**
   - Visit: https://supabase.com
   - Sign in or create account (can use GitHub to sign in)

2. **Create New Project:**
   - Click **"New Project"** (or the "+" button)
   - **Organization:** Select or create one
   - **Project Name:** `ledger-leadership` (or any name you prefer)
   - **Database Password:** 
     - Create a strong password
     - **SAVE THIS PASSWORD** - you'll need it to connect
     - Store it securely (password manager recommended)
   - **Region:** Choose closest to you
   - **Pricing Plan:** Free tier is fine to start

3. **Click "Create new project"**
   - Wait 2-3 minutes for setup to complete
   - You'll see a progress indicator

## Step 2: Get Your Credentials

Once the project is ready:

1. **Go to Settings:**
   - Click the **gear icon** (⚙️) in the left sidebar
   - Or go to: **Settings** → **API**

2. **Copy These Values:**

   **Project URL:**
   - Look for "Project URL"
   - Copy the entire URL (looks like: `https://xxxxx.supabase.co`)
   - This is your `SUPABASE_URL`

   **API Keys:**
   - **anon public** key:
     - Under "Project API keys"
     - Find the one labeled **"anon" "public"**
     - Click the eye icon to reveal, then copy
     - This is your `SUPABASE_ANON_KEY`

   - **service_role** key:
     - Find the one labeled **"service_role" "secret"**
     - ⚠️ **IMPORTANT:** This is secret! Never expose to client-side
     - Click the eye icon to reveal, then copy
     - This is your `SUPABASE_SERVICE_ROLE_KEY`

3. **Save these somewhere temporarily** - you'll add them to `.env.local` next

## Step 3: Run Database Migration

1. **Open SQL Editor:**
   - In Supabase dashboard, click **"SQL Editor"** in left sidebar
   - Click **"New query"** button

2. **Get the Migration:**
   - Open this file on your computer:
     - `supabase/migrations/001_initial_schema.sql`
   - **Select ALL** the contents (Cmd+A)
   - **Copy** (Cmd+C)

3. **Paste and Run:**
   - Paste into the SQL Editor
   - Click **"Run"** button (or press Cmd+Enter / Ctrl+Enter)
   - Wait a few seconds

4. **Verify Success:**
   - Should see: "Success. No rows returned" or similar
   - If you see errors, let me know and I'll help fix them

## Step 4: Enable Email Authentication

1. **Go to Authentication:**
   - Click **"Authentication"** in left sidebar
   - Click **"Providers"** tab

2. **Enable Email:**
   - Find **"Email"** provider
   - Toggle it to **"Enabled"**
   - (Other settings can stay default for now)

3. **Optional - Configure Email Templates:**
   - You can customize email templates later
   - For now, defaults are fine

## Step 5: Update .env.local File

1. **Open the file:**
   ```bash
   cd "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership"
   nano .env.local
   ```
   Or open it in your favorite editor

2. **Replace the placeholder values:**
   ```bash
   SUPABASE_URL=https://your-actual-project-id.supabase.co
   SUPABASE_ANON_KEY=eyJhbGc...your-actual-anon-key
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-actual-service-role-key
   LLOPS_AUTH_DISABLED=true
   ```

3. **Save the file**

## Step 6: Verify Setup

Let's test the connection:

1. **Check the tables were created:**
   - In Supabase dashboard → **Table Editor**
   - You should see:
     - `field_notes` table
     - `profiles` table

2. **Test locally (optional):**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see if it connects

## Step 7: Create Admin User (After Netlify is Set Up)

Once you've deployed to Netlify and can sign up:

1. **Sign up via your site:**
   - Visit your Netlify site
   - Create an account (will use Supabase Auth)

2. **Set admin role:**
   - Go to Supabase → **SQL Editor**
   - Run this (replace with your email):
   ```sql
   UPDATE public.profiles 
   SET role = 'admin' 
   WHERE email = 'your-email@example.com';
   ```

3. **Verify:**
   ```sql
   SELECT email, role FROM public.profiles WHERE email = 'your-email@example.com';
   ```
   Should show `role = 'admin'`

## Troubleshooting

### Migration Errors

**"relation already exists"**
- Tables might already exist
- This is okay - the migration uses `IF NOT EXISTS`

**"permission denied"**
- Make sure you're running in SQL Editor (not a restricted view)
- Try running sections one at a time

### Connection Issues

**"Invalid API key"**
- Double-check you copied the entire key
- Make sure there are no extra spaces
- Verify you're using the right key (anon vs service_role)

**"Failed to fetch"**
- Check your Supabase URL is correct
- Verify the project is active (not paused)

## Quick Reference

**Files to reference:**
- Migration: `supabase/migrations/001_initial_schema.sql`
- Environment template: `.env.local`

**Where to find things in Supabase:**
- Settings/API: Project URL and keys
- SQL Editor: Run migrations
- Table Editor: View tables
- Authentication: Enable providers

## Next Steps

After Supabase is set up:
- ✅ Step 3 Complete
- ⏭️ Step 4: Connect to Netlify
- ⏭️ Then create admin user

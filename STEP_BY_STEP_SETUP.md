# Step-by-Step Setup Instructions

Follow these steps in order to get everything connected.

## Step 1: Navigate to Project Directory

Open Terminal and run:

```bash
cd "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership"
```

## Step 2: Initialize Git Repository

```bash
# Make the script executable
chmod +x scripts/setup-git.sh

# Run the setup script
./scripts/setup-git.sh
```

This will:
- Initialize Git (if not already done)
- Add all files
- Create initial commit

## Step 3: Create GitHub Repository

1. **Go to GitHub:**
   - Visit https://github.com/new
   - Or click the "+" icon in top right → "New repository"

2. **Repository Settings:**
   - **Repository name:** `ledger-leadership`
   - **Description:** (optional) "Ledger Leadership website and LLOps Control Center"
   - **Visibility:** Choose Public or Private
   - **DO NOT** check "Initialize with README" (we already have one)
   - **DO NOT** add .gitignore or license (we have them)
   - Click **"Create repository"**

3. **Copy the repository URL:**
   - GitHub will show you the URL
   - It will look like: `https://github.com/YOUR_USERNAME/ledger-leadership.git`
   - Copy this URL

## Step 4: Connect Local Repository to GitHub

Back in Terminal, run:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ledger-leadership.git

# Verify it was added
git remote -v

# Push to GitHub
git push -u origin main
```

If it asks for credentials:
- Use a Personal Access Token (not your password)
- Or use GitHub CLI if you have it installed

## Step 5: Set Up Supabase

### 5a. Create Supabase Project

1. **Go to Supabase:**
   - Visit https://supabase.com
   - Sign in or create account
   - Click **"New Project"**

2. **Project Settings:**
   - **Name:** `ledger-leadership` (or any name)
   - **Database Password:** Create a strong password (save it!)
   - **Region:** Choose closest to you
   - Click **"Create new project"**
   - Wait 2-3 minutes for setup

### 5b. Get Your Credentials

1. **In Supabase Dashboard:**
   - Go to **Settings** (gear icon) → **API**

2. **Copy these values:**
   - **Project URL** → This is your `SUPABASE_URL`
   - **anon public** key → This is your `SUPABASE_ANON_KEY`
   - **service_role** key → This is your `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

### 5c. Run Database Migration

1. **In Supabase Dashboard:**
   - Click **SQL Editor** in left sidebar
   - Click **"New query"**

2. **Copy Migration:**
   - Open this file: `supabase/migrations/001_initial_schema.sql`
   - Copy ALL the contents

3. **Paste and Run:**
   - Paste into SQL Editor
   - Click **"Run"** (or press Cmd+Enter)
   - Should see "Success. No rows returned"

### 5d. Enable Email Auth

1. **In Supabase Dashboard:**
   - Go to **Authentication** → **Providers**
   - Find **Email** provider
   - Make sure it's **Enabled**
   - Configure email templates if desired

## Step 6: Set Up Local Environment

Create `.env.local` file:

```bash
# In the project directory, create the file
cat > .env.local << 'EOF'
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
LLOPS_AUTH_DISABLED=true
EOF
```

**Replace the values:**
- `your-project-id` with your actual Supabase project ID
- `your-anon-key-here` with your actual anon key
- `your-service-role-key-here` with your actual service role key

Or edit manually:
```bash
# Open in your editor
open -e .env.local
# Or use nano
nano .env.local
```

## Step 7: Install Dependencies

```bash
# Make sure you're in the project directory
cd "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership"

# Install npm packages
npm install
```

## Step 8: Test Locally (Optional but Recommended)

```bash
# Test the build
npm run build

# If that works, start dev server (in one terminal)
npm run dev

# In another terminal, test Netlify Functions
npm run netlify:dev
```

Visit `http://localhost:3000` to see if it works.

## Step 9: Set Up Netlify

### 9a. Create Netlify Account (if needed)

1. **Go to Netlify:**
   - Visit https://netlify.com
   - Sign up or sign in (can use GitHub account)

### 9b. Connect Repository

1. **In Netlify Dashboard:**
   - Click **"Add new site"** → **"Import an existing project"**
   - Click **"Deploy with GitHub"** (or GitLab/Bitbucket)
   - Authorize Netlify to access GitHub
   - Select repository: `ledger-leadership`
   - Click **"Next"**

### 9c. Configure Build Settings

Netlify should auto-detect, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (if using Next.js) or `dist` (if using Vite)
- Click **"Show advanced"** if you need to change Node version:
  - Node version: `18` or `20`

Click **"Deploy site"**

### 9d. Add Environment Variables

1. **While it's deploying:**
   - Go to **Site settings** → **Environment variables**
   - Click **"Add variable"**

2. **Add these variables one by one:**

   ```
   Name: SUPABASE_URL
   Value: (paste your Supabase URL)
   Scope: All deploys
   ```

   ```
   Name: SUPABASE_ANON_KEY
   Value: (paste your anon key)
   Scope: All deploys
   ```

   ```
   Name: SUPABASE_SERVICE_ROLE_KEY
   Value: (paste your service role key)
   Scope: All deploys
   ```

   ```
   Name: LLOPS_AUTH_DISABLED
   Value: false
   Scope: All deploys
   ```

3. **Optional variables** (if you set them up):
   - `GITHUB_TOKEN`
   - `GITHUB_REPO`
   - `GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`, `GMAIL_REFRESH_TOKEN`

4. **After adding variables:**
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Clear cache and deploy site"**
   - This redeploys with the new environment variables

## Step 10: Create Admin User

### 10a. Sign Up via Supabase Auth

1. **Get your site URL from Netlify:**
   - In Netlify dashboard, your site URL is shown (e.g., `https://your-site.netlify.app`)
   - Visit: `https://your-site.netlify.app` (or your custom domain)

2. **Create account:**
   - If you have a sign-up page, use it
   - Or go directly to Supabase Dashboard → **Authentication** → **Users** → **Add user**

### 10b. Set Admin Role

1. **In Supabase Dashboard:**
   - Go to **SQL Editor**
   - Click **"New query"**

2. **Run this SQL** (replace with your email):

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

## Step 11: Test Everything

### 11a. Test Public Site

1. Visit your Netlify URL
2. Check if pages load
3. Try submitting a field note (if you have a form)

### 11b. Test LLOps Dashboard

1. Visit: `https://your-site.netlify.app/llops`
2. Sign in with your admin account
3. Verify:
   - Health checks show status
   - Metrics load
   - Submissions list works
   - Can update submission status

### 11c. Test Netlify Functions

Visit these URLs (replace with your site):

- Health: `https://your-site.netlify.app/.netlify/functions/llops-health`
- Metrics: `https://your-site.netlify.app/.netlify/functions/llops-metrics`
- List notes: `https://your-site.netlify.app/.netlify/functions/list-field-notes`

Should return JSON responses.

## Troubleshooting

### Git Push Fails

```bash
# If you get authentication errors, use a Personal Access Token:
# 1. GitHub → Settings → Developer settings → Personal access tokens
# 2. Generate token with 'repo' scope
# 3. Use token as password when pushing
```

### Build Fails on Netlify

- Check build logs in Netlify dashboard
- Verify Node version (should be 18+)
- Check that all dependencies are in `package.json`

### Functions Not Working

- Check function logs in Netlify dashboard
- Verify environment variables are set correctly
- Test locally with `npm run netlify:dev`

### Auth Not Working

- Verify Supabase Auth is enabled
- Check user has admin role in profiles table
- Verify JWT is being sent in requests

## You're Done! 🎉

Everything should now be connected:
- ✅ Code in GitHub
- ✅ Database in Supabase
- ✅ Site deployed on Netlify
- ✅ Admin dashboard accessible
- ✅ All functions working

## Next Steps (Optional)

- Set up custom domain in Netlify
- Configure GitHub Actions for auto-deploy
- Set up Gmail API for LLOps
- Add monitoring/alerts
- Review security settings

# Quick Start Guide

Get up and running in 15 minutes.

## Step 1: Navigate to Project

```bash
cd "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership"
```

## Step 2: Initialize Git (if not done)

```bash
chmod +x scripts/setup-git.sh
./scripts/setup-git.sh
```

Then create GitHub repo and push:
```bash
# After creating repo on GitHub
git remote add origin https://github.com/YOUR_USERNAME/ledger-leadership.git
git push -u origin main
```

## Step 3: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) → New Project
2. Copy your project URL and keys
3. Run migration:
   - Supabase Dashboard → SQL Editor
   - Copy `supabase/migrations/001_initial_schema.sql`
   - Run it
4. Enable Email Auth in Authentication settings

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Configure Environment

Create `.env.local`:

```bash
# Copy template (create manually if .env.example doesn't exist)
cat > .env.local << EOF
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
LLOPS_AUTH_DISABLED=true
EOF
```

## Step 6: Test Locally

```bash
# Start dev server
npm run dev

# In another terminal, test functions
npm run netlify:dev
```

## Step 7: Set Up Netlify

1. Go to [netlify.com](https://netlify.com)
2. Add new site → Import from GitHub
3. Select your repository
4. Set build command: `npm run build`
5. Set publish directory: `.next` (or `dist`)
6. Add environment variables (see SETUP.md)

## Step 8: Create Admin User

1. Sign up via Supabase Auth UI (or create manually)
2. Update role in Supabase SQL Editor:

```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## Step 9: Deploy

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

Netlify will auto-deploy!

## Step 10: Verify

1. Visit your Netlify URL
2. Test field note submission
3. Visit `/llops` and sign in
4. Verify dashboard works

## Troubleshooting

**Functions not working?**
- Check Netlify environment variables
- Verify Supabase credentials
- Check function logs in Netlify dashboard

**Auth not working?**
- Verify Supabase Auth is enabled
- Check user has admin role
- Verify JWT is being sent

**Build fails?**
- Check Node version (18+)
- Verify all dependencies installed
- Check build logs

## Next Steps

- Set up Gmail API (optional)
- Configure GitHub integrations (optional)
- Set up custom domain
- Review security settings

See [SETUP.md](./docs/SETUP.md) for detailed instructions.

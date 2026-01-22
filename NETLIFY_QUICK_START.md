# Netlify Quick Start Guide

## Step 1: Create New Site

1. In Netlify dashboard, click **"Add new project"** (top right, teal button)
2. Click **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify (if prompted)
5. Find and select: **`ledger-leadership`** repository
6. Click **"Next"**

## Step 2: Configure Build Settings

Netlify should auto-detect, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (if Next.js) or `dist` (if Vite)
- **Base directory:** (leave empty)

**If auto-detection doesn't work:**
- Click **"Show advanced"**
- Set Node version to `18` or `20`

Click **"Deploy site"**

## Step 3: Add Environment Variables

**While it's building (or after):**

1. Go to your site dashboard
2. **Site settings** → **Environment variables**
3. Click **"Add variable"**

Add these 4 variables (one at a time):

### Variable 1:
- **Key:** `SUPABASE_URL`
- **Value:** `https://homsaurlketpzzjtsyxn.supabase.co`
- **Scope:** All deploys

### Variable 2:
- **Key:** `SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTAzNTQsImV4cCI6MjA4NDYyNjM1NH0.FkkQZIFwR45I2Tz3XcbaChyxCxtnitlwnGwcNRazDI4`
- **Scope:** All deploys

### Variable 3:
- **Key:** `SUPABASE_SERVICE_ROLE_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo`
- **Scope:** All deploys

### Variable 4:
- **Key:** `LLOPS_AUTH_DISABLED`
- **Value:** `false`
- **Scope:** All deploys

## Step 4: Redeploy with Variables

After adding all variables:

1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Wait for deployment to complete

## Step 5: Verify Deployment

1. **Check Site URL:**
   - Your site will be at: `https://your-site-name.netlify.app`
   - Found in site overview

2. **Test Functions:**
   - Visit: `https://your-site.netlify.app/.netlify/functions/list-field-notes`
   - Should return JSON (may be empty array if no data)

3. **Test LLOps Dashboard:**
   - Visit: `https://your-site.netlify.app/llops`
   - Should show auth gate (since no admin user yet)

## Troubleshooting

### Build Fails
- Check build logs in Deploys tab
- Verify Node version (18+)
- Check `package.json` has all dependencies

### Functions Not Working
- Check function logs
- Verify environment variables are set
- Make sure variables are for "All deploys"

### Site Not Loading
- Check build succeeded
- Verify publish directory is correct
- Check for errors in deploy logs

## Next Steps After Deployment

1. Create admin user (sign up via site)
2. Set admin role in Supabase SQL Editor
3. Test LLOps dashboard
4. Test field note submission

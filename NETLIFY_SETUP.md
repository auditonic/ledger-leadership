# Netlify Setup - Step by Step

## Step 1: Create/Login to Netlify Account

1. **Go to Netlify:**
   - Visit: https://netlify.com
   - Sign in or create account (can use GitHub to sign in)

## Step 2: Connect GitHub Repository

1. **Add New Site:**
   - In Netlify dashboard, click **"Add new site"**
   - Select **"Import an existing project"**

2. **Connect to Git:**
   - Click **"Deploy with GitHub"** (or GitLab/Bitbucket)
   - Authorize Netlify to access your GitHub account
   - Select repository: **`ledger-leadership`**
   - Click **"Next"**

## Step 3: Configure Build Settings

Netlify should auto-detect, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (if using Next.js) or `dist` (if using Vite)
- **Base directory:** (leave empty unless project is in a subdirectory)

**If using Next.js:**
- Build command: `npm run build`
- Publish directory: `.next`

**If using Vite/React:**
- Build command: `npm run build`
- Publish directory: `dist`

Click **"Deploy site"**

## Step 4: Add Environment Variables

**While it's deploying (or after):**

1. **Go to Site Settings:**
   - Click on your site name
   - Go to **Site settings** → **Environment variables**
   - Click **"Add variable"**

2. **Add These Variables One by One:**

   **Required:**
   ```
   Name: SUPABASE_URL
   Value: https://homsaurlketpzzjtsyxn.supabase.co
   Scope: All deploys
   ```

   ```
   Name: SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTAzNTQsImV4cCI6MjA4NDYyNjM1NH0.FkkQZIFwR45I2Tz3XcbaChyxCxtnitlwnGwcNRazDI4
   Scope: All deploys
   ```

   ```
   Name: SUPABASE_SERVICE_ROLE_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo
   Scope: All deploys
   ```

   ```
   Name: LLOPS_AUTH_DISABLED
   Value: false
   Scope: All deploys
   ```

   **Optional (for later):**
   - `GITHUB_TOKEN` (if you want GitHub integration)
   - `GITHUB_REPO` (if you want GitHub integration)
   - `GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`, `GMAIL_REFRESH_TOKEN` (for Gmail API)

3. **After Adding Variables:**
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Clear cache and deploy site"**
   - This redeploys with the new environment variables

## Step 5: Verify Deployment

1. **Check Build Logs:**
   - Go to **Deploys** tab
   - Click on the latest deploy
   - Check for any errors

2. **Visit Your Site:**
   - Your site URL will be: `https://your-site-name.netlify.app`
   - Or check the **Site overview** for the URL

3. **Test Functions:**
   - Visit: `https://your-site.netlify.app/.netlify/functions/list-field-notes`
   - Should return JSON (may be empty if no data yet)

## Step 6: Create Admin User (After Site is Live)

1. **Sign Up:**
   - Visit your Netlify site
   - Create an account (will use Supabase Auth)

2. **Set Admin Role:**
   - Go to Supabase → **SQL Editor**
   - Run (replace with your email):
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

### Build Fails

- Check build logs for errors
- Verify Node version (should be 18+)
- Check that all dependencies are in `package.json`
- Make sure build command is correct

### Functions Not Working

- Check function logs in Netlify dashboard
- Verify environment variables are set
- Test locally with `npm run netlify:dev`

### Environment Variables Not Working

- Make sure variables are set for "All deploys"
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

## Next Steps After Netlify

- ✅ Step 4 Complete
- ⏭️ Test the site
- ⏭️ Create admin user
- ⏭️ Test LLOps dashboard at `/llops`

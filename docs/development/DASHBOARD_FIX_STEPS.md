# 📋 Step-by-Step: Disable Next.js in Netlify Dashboard

## Step 1: Go to Build & Deploy Settings

1. Open: https://app.netlify.com
2. Select your site: **ledger-leadership**
3. Click: **Site settings** (gear icon or from dropdown)
4. Click: **Build & deploy** (in left sidebar)
5. Click: **Build settings**

## Step 2: Check Current Settings

Look for these fields:

### Build command
- **Current:** Might say `npm run build` or be empty
- **Should be:** `echo 'Static HTML site - no build needed'`
- **Action:** Click "Edit settings" and update it

### Publish directory
- **Current:** Might say `.next` or be empty
- **Should be:** `.` (just a dot, meaning root directory)
- **Action:** Click "Edit settings" and set to `.`

### Framework detection
- **Current:** Might say "Auto-detect" or "Next.js"
- **Should be:** "None" or "Static HTML" (if available)
- **Action:** Change to "None" if you see this option

## Step 3: Save and Deploy

1. Click **"Save"** or **"Update settings"**
2. Go to **Deploys** tab
3. Click **"Trigger deploy"** → **"Deploy site"**
4. Watch the deploy log - it should NOT mention Next.js

## Step 4: Verify Success

In the deploy log, you should see:
- ✅ Build command: `echo 'Static HTML site - no build needed'`
- ✅ Publish directory: `/opt/build/repo` (not `.next`)
- ❌ NO "Using Next.js Runtime" message
- ❌ NO "Deploy directory '.next' does not exist" error

## Alternative: Environment Variables Override

If the above doesn't work, add these in:
**Site settings** → **Build & deploy** → **Environment variables**:

- **Key:** `NETLIFY_NEXT_PLUGIN_SKIP`
- **Value:** `true`
- **Scope:** All scopes

Then trigger a new deploy.

## Still Not Working?

If Netlify still detects Next.js:
1. Check if there's a "Framework" dropdown in Build settings
2. Try creating a new Netlify site (fresh start)
3. Contact Netlify support with your site URL

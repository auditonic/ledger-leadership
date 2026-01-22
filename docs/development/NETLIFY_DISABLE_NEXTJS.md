# 🚨 How to Disable Next.js Auto-Detection in Netlify

## The Problem

Netlify is **automatically detecting** Next.js and trying to build your site as a Next.js app, even though you're deploying static HTML. According to [Netlify's documentation](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/), Netlify automatically configures Next.js projects when it detects Next.js files.

## Where to Look in Netlify Dashboard

### Option 1: Build & Deploy Settings
1. Go to: **Site settings** → **Build & deploy** → **Build settings**
2. Look for:
   - **Framework detection** - May be set to "Auto-detect" or "Next.js"
   - **Build command** - Should be `echo 'Static HTML site - no build needed'`
   - **Publish directory** - Should be `.` (not `.next`)
3. If you see "Next.js" anywhere, change it to "None" or "Static HTML"

### Option 2: Environment Variables
1. Go to: **Site settings** → **Build & deploy** → **Environment variables**
2. Look for any Next.js-related variables:
   - `NEXT_PUBLIC_*` variables
   - `NETLIFY_NEXT_*` variables
3. You can add: `NETLIFY_NEXT_PLUGIN_SKIP = "true"` (already in netlify.toml)

### Option 3: Plugins (May Not Be Visible)
The plugin might not show up in the Plugins section if it's auto-detected. Check:
1. **Site settings** → **Plugins**
2. Look for `@netlify/plugin-nextjs` or "Next.js Runtime"
3. If you see it, click "Remove" or "Uninstall"

### Option 4: Site Configuration File
1. Go to: **Site settings** → **Build & deploy** → **Build settings**
2. Scroll to "Configuration file"
3. Make sure it's using `netlify.toml` from your repo
4. You can also add a `netlify.toml` override in the UI (not recommended)

## Solution: Force Static Site Mode

### Method 1: Override in Build Settings
1. Go to: **Site settings** → **Build & deploy** → **Build settings**
2. Click "Edit settings"
3. Set:
   - **Build command:** `echo 'Static HTML site - no build needed'`
   - **Publish directory:** `.` (dot, meaning root)
   - **Framework:** Select "None" or "Static HTML" (if available)
4. Click "Save"

### Method 2: Add Explicit Override in netlify.toml
We've already done this, but verify it's being read.

### Method 3: Create a .netlify/state.json (if needed)
This file can override auto-detection, but it's advanced.

## Verification Steps

After making changes:
1. **Trigger a new deploy:**
   - Go to **Deploys** tab
   - Click "Trigger deploy" → "Deploy site"
2. **Check the deploy log:**
   - Should NOT see "Using Next.js Runtime"
   - Should NOT see "Deploy directory '.next' does not exist"
   - Should see "Static HTML site - no build needed"
3. **Verify the build:**
   - Build stage should complete quickly
   - Deploy stage should succeed

## If It Still Fails

If Netlify still tries to use Next.js after all these steps:

1. **Contact Netlify Support:**
   - They can disable framework auto-detection at the account level
   - Reference: Your site is static HTML, not Next.js

2. **Alternative: Create a New Site**
   - Create a fresh Netlify site
   - Connect the same GitHub repo
   - Configure it as static HTML from the start
   - This ensures no Next.js detection

3. **Use Netlify CLI to Deploy:**
   ```bash
   netlify deploy --prod --dir=.
   ```
   This bypasses auto-detection.

## Current Status

✅ All Next.js files disabled in repository
✅ netlify.toml configured for static HTML
✅ Environment variables set to skip Next.js
⚠️ Netlify dashboard may still have auto-detection enabled

**Next Step:** Check Build & Deploy settings in Netlify dashboard.

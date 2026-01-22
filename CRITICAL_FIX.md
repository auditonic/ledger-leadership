# 🚨 CRITICAL FIX: Netlify is Overriding Publish Directory

## The Problem

Netlify's Next.js plugin is **running AFTER** your `netlify.toml` configuration and overriding the publish directory from `.` to `.next`, even though:
- ✅ Your `netlify.toml` says `publish = "."`
- ✅ Your build command is `echo 'Static HTML site - no build needed'`
- ✅ All Next.js files are disabled

**The plugin is auto-detected and runs regardless of `netlify.toml`.**

## The Solution: Override in Netlify UI

You **MUST** override the publish directory in the Netlify dashboard UI. The UI settings take precedence over `netlify.toml`.

### Step-by-Step Fix:

1. **Go to Netlify Dashboard:**
   - https://app.netlify.com
   - Select your site: **ledger-leadership**

2. **Navigate to Build Settings:**
   - **Site settings** → **Build & deploy** → **Build settings**

3. **Click "Edit settings" or "Override settings"**

4. **Set these EXACT values:**
   - **Build command:** `echo 'Static HTML site - no build needed'`
   - **Publish directory:** `.` (just a dot, or type `./` or leave empty - all mean root)
   - **Framework:** If there's a dropdown, select **"None"** or **"Static HTML"**

5. **IMPORTANT:** Look for any field that says:
   - "Publish directory" or "Output directory"
   - Make sure it's set to `.` or empty (NOT `.next`)

6. **Save the settings**

7. **Trigger a new deploy:**
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Deploy site"**

## Why This Happens

According to Netlify's documentation, the Next.js plugin:
- Auto-detects when it finds Next.js files (even if disabled)
- Runs **after** `netlify.toml` is processed
- Overrides the publish directory to `.next`
- Cannot be disabled via `netlify.toml` alone if auto-detected

## Verification

After making the UI changes, check the deploy log. You should see:
- ✅ `publish: /opt/build/repo` (not `.next`)
- ✅ Build completes successfully
- ✅ Site deploys as static HTML

## If It Still Fails

If Netlify still tries to use `.next` after UI override:

1. **Check for cached settings:**
   - Clear browser cache
   - Log out and back into Netlify
   - Check if settings actually saved

2. **Create a new Netlify site:**
   - Fresh site = no Next.js detection
   - Connect same GitHub repo
   - Configure as static HTML from start

3. **Contact Netlify Support:**
   - They can disable framework auto-detection at account level
   - Reference: Site should be static HTML, not Next.js

## Current Status

- ✅ All Next.js files disabled in repo
- ✅ `netlify.toml` configured correctly
- ⚠️ **REQUIRED:** Override publish directory in Netlify UI
- ⚠️ **REQUIRED:** Set Framework to "None" in UI (if available)

**The UI override is the ONLY way to prevent the plugin from overriding your settings.**

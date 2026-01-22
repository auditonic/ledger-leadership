# 🚨 CRITICAL: Disable Next.js Plugin in Netlify Dashboard

## The Problem

Netlify is detecting Next.js and trying to build your site as a Next.js app, but you're deploying static HTML. The plugin is enabled **in the Netlify dashboard**, which overrides local configuration.

## The Solution (REQUIRED MANUAL STEP)

You **must** disable the Next.js plugin in the Netlify dashboard:

### Step-by-Step Instructions:

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Select your site: `ledger-leadership`

2. **Navigate to Plugins**
   - Go to: **Site settings** → **Plugins** (in the left sidebar)
   - OR: **Site settings** → **Build & deploy** → **Plugins**

3. **Find and Remove Next.js Plugin**
   - Look for: `@netlify/plugin-nextjs`
   - Click **"Remove"** or **"Uninstall"**
   - Confirm the removal

4. **Alternative: Disable via Build Settings**
   - Go to: **Site settings** → **Build & deploy** → **Build settings**
   - Look for "Plugins" section
   - Find `@netlify/plugin-nextjs` and disable it

5. **Trigger a New Deploy**
   - After removing the plugin, either:
     - Push a new commit to GitHub (auto-deploy)
     - OR: Go to **Deploys** → Click **"Trigger deploy"** → **"Deploy site"**

## Why This Is Necessary

The error message shows:
```
Plugin "@netlify/plugin-nextjs" failed
...from Netlify app
```

The phrase **"from Netlify app"** means it's enabled in the dashboard, not from your repository. This overrides:
- `netlify.toml` configuration
- `package.json` (even if disabled)
- Any local file changes

## After Disabling

Once you disable the plugin in the dashboard, Netlify will:
- ✅ Deploy as a static HTML site
- ✅ Use your `netlify.toml` configuration
- ✅ Serve your HTML files directly
- ✅ Run Netlify Functions normally

## Verification

After disabling, check the deploy log. You should see:
- ✅ No "Using Next.js Runtime" message
- ✅ Build completes successfully
- ✅ Site deploys as static HTML

---

**This is the ONLY way to fix the current deployment issue.**

# 🚀 Deploy Static Site - Quick Guide

## ✅ What's Ready

- ✅ 10 polished HTML pages in root
- ✅ styles.css in root
- ✅ 10 Netlify Functions ready
- ✅ netlify.toml configured for static site
- ✅ All responsive (mobile, tablet, desktop)

## 🎯 One-Time Setup in Netlify Dashboard

**You need to disable Next.js auto-detection ONE TIME:**

### Steps:

1. **Go to Netlify Dashboard:**
   - https://app.netlify.com
   - Select your site: **ledger-leadership**

2. **Navigate to Build Settings:**
   - **Site settings** → **Build & deploy** → **Build settings**

3. **Click "Edit settings" or "Override settings"**

4. **Set these values:**
   - **Build command:** `echo 'Static HTML site - no build needed'`
   - **Publish directory:** `.` (just a dot, meaning root)
   - **Framework:** If there's a dropdown, select **"None"** or leave empty

5. **Save the settings**

6. **Trigger a new deploy:**
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Deploy site"**

## ✅ After This One-Time Setup

Netlify will:
- ✅ Serve your HTML files directly
- ✅ Run Netlify Functions normally
- ✅ Deploy instantly (no build step)
- ✅ Work on all devices (mobile, tablet, desktop)

## 📋 What Gets Deployed

- `index.html` → Home page
- `about.html` → About page
- `contact.html` → Contact page
- `contribute.html` → Contribute page
- `edges.html` → The Five Edges
- `field-notes.html` → Field Notes
- `for-podcasters.html` → For Podcasters
- `practice.html` → Practice
- `styles.css` → All styling
- `netlify/functions/` → All 10 functions

## 🎉 That's It!

After the one-time UI override, deployments will be:
- ⚡ Instant (no build time)
- ✅ Simple (just HTML files)
- ✅ Reliable (fewer moving parts)

---

**Next:** Add LLOps Control Center later as a separate route or app.

# 🎯 Netlify Dashboard - Step-by-Step Guide

## Current Status (from your dashboard)

- ✅ Site: **ledgerleadership.com**
- ✅ Project: **loquacious-selkie-34276a**
- ✅ Site is live and receiving requests
- ✅ Manual deploys enabled

## Step-by-Step: Configure for Static HTML

### Step 1: Navigate to Build Settings

From the **Project overview** page you're on:

1. **Look at the left sidebar**
2. **Click on "Project configuration"** (gear icon, below "Project overview")
3. **In the submenu, click "Build & deploy"**
4. **Click "Build settings"**

### Step 2: Override Build Settings

Once in Build settings:

1. **Look for "Build settings" section**
2. **Click "Edit settings"** or **"Override settings"** button
3. **You'll see fields for:**
   - Build command
   - Publish directory
   - Framework (if available)

### Step 3: Set the Values

**Build command:**
```
echo 'Static HTML site - no build needed'
```

**Publish directory:**
```
.
```
(Just a dot, meaning root directory)

**Framework:**
- If there's a dropdown, select **"None"** or leave empty
- If it says "Auto-detect" or "Next.js", change it to "None"

### Step 4: Save

1. **Click "Save"** or **"Update settings"**
2. **You should see a confirmation**

### Step 5: Trigger Deploy

1. **Go back to "Deploys"** (in left sidebar)
2. **Click "Trigger deploy"** button (top right)
3. **Select "Deploy site"**
4. **Watch the deploy log** - it should complete quickly!

## What to Expect

**After the override:**
- ✅ Build will complete in seconds (no build step)
- ✅ Site will deploy from root directory
- ✅ All HTML pages will be accessible
- ✅ Netlify Functions will work normally

## If You Can't Find "Build settings"

**Alternative path:**
1. Click **"Project configuration"** (gear icon)
2. Look for **"Build & deploy"** in the left sidebar
3. Click it
4. Look for **"Build settings"** or **"Continuous deployment"**
5. Click **"Edit settings"**

## Visual Guide

**Left Sidebar Navigation:**
```
Project overview          ← You are here
Project configuration     ← Click this
  └─ Build & deploy      ← Then this
      └─ Build settings  ← Then this
```

**Or:**
```
Project configuration     ← Click this
  └─ Build & deploy      ← Then this
      └─ Build settings  ← Then this
```

## Troubleshooting

**If you see "Next.js" anywhere:**
- Change it to "None" or remove it
- The key is setting publish directory to `.` (dot)

**If there's no "Edit settings" button:**
- Look for "Override" or "Change" button
- Or click on the current values to edit them

---

**Once you've done this one-time setup, all future deployments will work automatically!** 🎉

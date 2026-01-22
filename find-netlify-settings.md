# Finding Settings in Netlify Dashboard

## Where to Add Environment Variables

### Step 1: Get to Site Settings

**From the Deploys page you're on:**

1. Look at the **top navigation** (under "Projects / ledgerleadership.com")
2. Click **"Project configuration"** (in that list)
3. OR look for **"Site settings"** in the left sidebar
4. OR click the **gear icon** (⚙️) if you see it

**Alternative path:**
- Click on your site name at the top
- Look for **"Site settings"** or **"Settings"** in the menu

### Step 2: Find Environment Variables

Once in Site settings:

1. Look for **"Environment variables"** in the left menu
2. OR scroll down to find **"Build & deploy"** section
3. Click **"Environment variables"**
4. You'll see a list (might be empty)
5. Click **"Add variable"** button

### Step 3: Add Each Variable

For each of the 4 variables:
1. Click **"Add variable"**
2. Enter the **Key** (e.g., `SUPABASE_URL`)
3. Enter the **Value** (copy from netlify-env-vars.txt)
4. Select **Scope**: "All deploys"
5. Click **"Save"**

## Where to Trigger a New Deploy

### From Deploys Page:

1. You're already on the **"Deploys"** page
2. Look for a button that says:
   - **"Trigger deploy"** (top right)
   - **"Deploy site"** 
   - **"Publish deploy"**
3. Click it
4. Select **"Clear cache and deploy site"**

### Alternative:

1. Go to **"Project overview"** (top navigation)
2. Look for **"Trigger deploy"** button
3. Or use the drag-and-drop area at bottom

## Visual Guide

**Top Navigation Bar (what you see):**
```
Project overview | Project configuration | Deploys | Logs & metrics | ...
```

**Click "Project configuration"** → Then look for:
- Environment variables
- Build settings
- Deploy settings

**OR in Left Sidebar:**
Look for gear icon (⚙️) or "Settings" → Environment variables

## Quick Checklist

- [ ] Found "Project configuration" or "Site settings"
- [ ] Found "Environment variables" section
- [ ] Added all 4 variables
- [ ] Went back to "Deploys" tab
- [ ] Clicked "Trigger deploy"
- [ ] Selected "Clear cache and deploy site"

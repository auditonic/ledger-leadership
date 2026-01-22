# Create Fresh Netlify Site - Step by Step

## Step 1: Go to Projects Page

1. In Netlify, look at the **left sidebar**
2. Click **"Projects"** (should be at the top)
3. This shows all your sites

## Step 2: Create New Site

1. Look at the **top right** of the page
2. You'll see a **teal/green button** that says **"Add new project"** or **"Add new site"**
3. Click that button

## Step 3: Import from GitHub

1. You'll see options like:
   - "Import an existing project"
   - "Deploy manually"
   - "Start from a template"
   
2. Click **"Import an existing project"**

## Step 4: Connect to GitHub

1. You'll see options to connect:
   - "Deploy with GitHub"
   - "Deploy with GitLab"
   - etc.
   
2. Click **"Deploy with GitHub"**

3. If asked to authorize:
   - Click "Authorize Netlify"
   - You may need to enter your GitHub password

## Step 5: Select Your Repository

1. You'll see a list of your GitHub repositories
2. Look for: **"ledger-leadership"** (or "auditonic/ledger-leadership")
3. Click on it to select it

## Step 6: Configure Build Settings

Netlify should auto-detect, but verify:

- **Branch to deploy:** `main` (should be selected)
- **Build command:** `npm run build` (should be auto-filled)
- **Publish directory:** `.next` (should be auto-filled)

If these are correct:
- Click **"Deploy site"** button

## Step 7: Wait for First Deploy

1. You'll see a progress screen
2. Wait 2-3 minutes for it to build
3. It will show "Building..." then "Published"

## Step 8: Note Your New Site Name

1. Once deployed, you'll see your site URL
2. It will be something like: `amazing-cupcake-12345.netlify.app`
3. Write this down or remember it

## Step 9: Add Environment Variables

1. Click on your **new site** (the one you just created)
2. Look for **"Site settings"** or click the **gear icon** (⚙️)
3. Click **"Environment variables"** in the left menu
4. Add the 4 variables (see netlify-env-vars.txt)

## Step 10: Redeploy

1. Go to **"Deploys"** or **"Builds"** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Wait for it to finish

## That's It!

Your new site will be live with all the new code!

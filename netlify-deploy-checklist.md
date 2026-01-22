# Netlify Deployment Checklist

## ✅ Pre-Deployment (Already Done)
- [x] GitHub repository created
- [x] Code pushed to GitHub
- [x] Supabase project created
- [x] Database migration run
- [x] Environment variables prepared

## 📋 Manual Steps (You Need to Do)

### Step 1: Create Site in Netlify
- [ ] Go to https://app.netlify.com
- [ ] Click "Add new project" (top right)
- [ ] Click "Import an existing project"
- [ ] Click "Deploy with GitHub"
- [ ] Authorize Netlify (if needed)
- [ ] Select repository: `ledger-leadership`
- [ ] Click "Next"

### Step 2: Configure Build
- [ ] Verify build command: `npm run build`
- [ ] Verify publish directory: `.next`
- [ ] Click "Deploy site"

### Step 3: Add Environment Variables
- [ ] Go to Site settings → Environment variables
- [ ] Add `SUPABASE_URL`
- [ ] Add `SUPABASE_ANON_KEY`
- [ ] Add `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Add `LLOPS_AUTH_DISABLED` = `false`

### Step 4: Redeploy
- [ ] Go to Deploys tab
- [ ] Click "Trigger deploy" → "Clear cache and deploy site"

### Step 5: Verify
- [ ] Check site URL works
- [ ] Test functions endpoint
- [ ] Test LLOps dashboard

## 🎯 After Each Step

Check off the boxes above and let me know:
- "Step 1 done" → I'll help with Step 2
- "Step 2 done" → I'll help with Step 3
- etc.

Or if you get stuck, tell me where and I'll help!

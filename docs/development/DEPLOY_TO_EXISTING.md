# 🚀 Deploy to Existing Infrastructure — ledgerleadership.com

**Status:** ✅ Ready for deployment  
**Target:** Existing GitHub + Netlify + Supabase setup

---

## 📋 Pre-Deployment Checklist

### Verify Existing Setup
- [ ] GitHub repository exists and is accessible
- [ ] Netlify site is connected to GitHub
- [ ] Supabase project is configured
- [ ] Environment variables are set in Netlify
- [ ] You have access to push to the repo

---

## 🎯 Deployment Options

### Option 1: Replace All Content (Recommended for Fresh Start)

**Use this if:** You want to completely replace the existing site with the new polished version.

```bash
# 1. Clone your existing repository
cd ~/Desktop  # or wherever you want to work
git clone https://github.com/yourusername/ledgerleadership.com.git
cd ledgerleadership.com

# 2. Backup existing content (optional but recommended)
git checkout -b backup-before-update
git push origin backup-before-update

# 3. Switch back to main
git checkout main

# 4. Copy all files from production-package
cp -r "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package/"* .

# 5. Review changes
git status

# 6. Commit and push
git add .
git commit -m "Deploy polished production site - all pages updated"
git push origin main

# 7. Netlify will auto-deploy
```

### Option 2: Merge Selectively (If You Have Custom Content)

**Use this if:** You have existing content you want to preserve.

```bash
# 1. Clone your existing repository
cd ~/Desktop
git clone https://github.com/yourusername/ledgerleadership.com.git
cd ledgerleadership.com

# 2. Create a new branch for the update
git checkout -b production-update

# 3. Copy specific files you want to update
# Example: Just the HTML pages
cp "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package/"*.html .

# 4. Copy styles.css
cp "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package/styles.css" .

# 5. Copy Netlify functions (if you want to update them)
cp -r "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package/netlify" .

# 6. Review and commit
git add .
git commit -m "Update site with polished pages and new functions"
git push origin production-update

# 7. Create pull request or merge to main
```

---

## 🔧 Post-Deployment Steps

### 1. Verify Netlify Deployment
- [ ] Go to Netlify Dashboard
- [ ] Check latest deployment status
- [ ] Verify build succeeded
- [ ] Check function logs for errors

### 2. Update Database Schema (If Needed)
- [ ] Go to Supabase Dashboard → SQL Editor
- [ ] Review `supabase_schema_complete.sql`
- [ ] Run any new migrations (if schema changed)
- [ ] Verify tables exist: `profiles`, `field_notes`, `contact_submissions`

### 3. Test the Site
- [ ] Visit ledgerleadership.com
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test field note submission
- [ ] Verify CSS renders correctly
- [ ] Check mobile responsiveness

### 4. Verify Functions
- [ ] Check Netlify function logs
- [ ] Test `list-field-notes` endpoint
- [ ] Test `submit-field-note` endpoint
- [ ] Test `contact-submit` endpoint
- [ ] Verify data appears in Supabase

---

## ⚠️ Important Notes

### Environment Variables
Your existing Netlify site should already have:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

**Verify these are still set** after deployment.

### Database Compatibility
The new schema (`supabase_schema_complete.sql`) includes:
- `profiles` table (for auth roles)
- `contact_submissions` table (new)

**If these don't exist**, run the schema migration. If they do exist, the new functions will work with your existing tables.

### Function Compatibility
All new functions are backward compatible with existing Supabase setup. They use the same:
- Environment variable names
- Supabase API patterns
- Table structures

---

## 🔍 Troubleshooting

### Functions Not Working
- Check Netlify function logs
- Verify environment variables are set
- Check Supabase connection

### Pages Not Loading
- Check Netlify build logs
- Verify `netlify.toml` is correct
- Check file paths are relative

### Database Errors
- Verify tables exist in Supabase
- Check RLS policies are correct
- Verify service role key has access

---

## 📊 What Gets Deployed

### Files Being Deployed
- ✅ 8 HTML pages (all polished)
- ✅ styles.css (design system)
- ✅ netlify.toml (configuration)
- ✅ 8 Netlify functions
- ✅ .gitignore (excludes secrets)

### What Stays the Same
- ✅ Environment variables (already set)
- ✅ Netlify site configuration
- ✅ GitHub repository
- ✅ Supabase project
- ✅ Domain (ledgerleadership.com)

---

## 🎉 After Deployment

1. **Monitor for 24 hours:**
   - Check Netlify logs
   - Monitor Supabase usage
   - Watch for errors

2. **Test thoroughly:**
   - All pages load
   - Forms submit
   - Functions respond
   - Mobile works

3. **Update LLOps Control Center:**
   - Deploy separately (Next.js app)
   - Connect to same Supabase
   - Use same environment variables

---

**✅ Ready to deploy to your existing infrastructure!**

# 🚀 Deploy to Existing ledgerleadership.com Infrastructure

**You already have:** GitHub + Netlify + Supabase configured  
**You need:** Push the polished production package to your existing repo

---

## ⚡ Quick Start (Easiest Method)

### Run the Deployment Script

```bash
cd "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package"
./QUICK_DEPLOY.sh
```

The script will:
1. Ask for your GitHub repo location
2. Let you choose: replace all or merge selectively
3. Copy all files
4. Commit and push to GitHub
5. Netlify will auto-deploy

---

## 📝 Manual Deployment

### Step 1: Navigate to Your Repo

```bash
cd /path/to/your/ledgerleadership-repo
```

### Step 2: Copy Production Package Files

```bash
# Copy everything from production package
cp -r "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package/"* .

# Or copy selectively:
# cp production-package/*.html .
# cp production-package/styles.css .
# cp production-package/netlify.toml .
# cp -r production-package/netlify .
```

### Step 3: Review Changes

```bash
git status
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Deploy polished production site - all pages updated"
git push origin main
```

### Step 5: Netlify Auto-Deploys

- Netlify will detect the push
- Auto-deploy will start
- Check Netlify dashboard for status

---

## ✅ What Gets Deployed

### New/Updated Files
- ✅ `index.html` — Updated with "Two books. One gap" content
- ✅ `about.html` — Polished version
- ✅ `edges.html` — Polished version
- ✅ `practice.html` — Polished version
- ✅ `field-notes.html` — Polished version
- ✅ `contribute.html` — Polished version
- ✅ `contact.html` — Polished version (with form)
- ✅ `for-podcasters.html` — Polished version
- ✅ `styles.css` — Unified design system
- ✅ `netlify.toml` — Updated configuration
- ✅ `netlify/functions/*.js` — All 8 functions

### What Stays the Same
- ✅ Your existing environment variables
- ✅ Your Supabase project
- ✅ Your Netlify site settings
- ✅ Your domain (ledgerleadership.com)

---

## 🔧 Post-Deployment Checklist

### Immediate (5 minutes)
- [ ] Visit ledgerleadership.com
- [ ] Verify home page loads
- [ ] Check navigation works
- [ ] Verify CSS renders

### Testing (15 minutes)
- [ ] Test contact form submission
- [ ] Test field note submission
- [ ] Check Netlify function logs
- [ ] Verify data appears in Supabase

### Database (if needed)
- [ ] Check if `profiles` table exists
- [ ] Check if `contact_submissions` table exists
- [ ] Run `supabase_schema_complete.sql` if tables missing

---

## 🎯 Expected Results

After deployment:
- ✅ Site loads at ledgerleadership.com
- ✅ All pages use unified design system
- ✅ Contact form submits successfully
- ✅ Field note form submits successfully
- ✅ Netlify functions respond correctly
- ✅ Data stores in Supabase

---

## 🆘 Troubleshooting

### Site Not Updating
- Check Netlify deployment status
- Verify GitHub push succeeded
- Check Netlify build logs

### Functions Not Working
- Verify environment variables in Netlify
- Check Supabase URL and key are correct
- Review Netlify function logs

### Database Errors
- Verify tables exist in Supabase
- Check RLS policies
- Verify service role key has access

---

**✅ Ready to deploy! Use QUICK_DEPLOY.sh or follow manual steps above.**

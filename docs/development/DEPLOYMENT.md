# 🚀 Deployment Guide — Ledger Leadership Production Site

## Quick Start

### 1. Git Setup

```bash
cd production-package
git init
git add .
git commit -m "Initial production deployment"
```

### 2. Push to GitHub

```bash
git remote add origin https://github.com/yourusername/ledger-leadership.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Add environment variables (see below)

## 🔐 Environment Variables

Set these in **Netlify Dashboard → Site Settings → Environment Variables**:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**⚠️ Never commit these to Git!** They're already in `.gitignore`.

## 📋 Pre-Deployment Checklist

- [ ] All HTML pages render correctly
- [ ] `styles.css` is in root directory
- [ ] Netlify functions are in `netlify/functions/`
- [ ] `netlify.toml` is configured
- [ ] Environment variables are set in Netlify
- [ ] Supabase database schema is migrated
- [ ] Domain is connected (optional)

## 🧪 Testing

After deployment:

1. **Test Home Page:**
   - Visit your Netlify URL
   - Verify navigation works
   - Check all links

2. **Test Field Notes:**
   - Visit `/field-notes.html`
   - Verify notes load from Supabase
   - Test filter functionality

3. **Test Submission:**
   - Visit `/contribute.html`
   - Submit a test field note
   - Verify it appears in Supabase

4. **Test Functions:**
   - Check Netlify function logs
   - Verify no errors in console

## 🔧 Troubleshooting

### Functions Not Working
- Check environment variables are set correctly
- Verify Supabase URL format (no trailing slash)
- Check Netlify function logs in dashboard

### Pages Not Loading
- Ensure `netlify.toml` is in root
- Check `publish = "."` is correct
- Verify file paths are relative (not absolute)

### CSS Not Rendering
- Ensure `styles.css` is in same directory as HTML
- Check browser console for 404 errors
- Verify font imports are loading

## 📊 Post-Deployment

1. **Monitor:**
   - Check Netlify function logs
   - Monitor Supabase usage
   - Watch for errors

2. **Optimize:**
   - Enable Netlify CDN caching
   - Set up form handling (if needed)
   - Configure custom domain

3. **Secure:**
   - Verify security headers are active
   - Test HTTPS enforcement
   - Review CSP policy

---

**Ready to deploy!** 🎉

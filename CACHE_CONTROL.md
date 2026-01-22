# 🔄 Cache Control & Deployment Updates

## How Netlify Handles Caching

Netlify automatically invalidates its CDN cache when you deploy. However, browsers may still cache content. Here's how to ensure fresh content:

## ✅ Automatic Cache Invalidation

**Netlify CDN:**
- Automatically invalidates on every deploy
- HTML files are set to `must-revalidate` (check for updates)
- CSS/JS files are cached but revalidated

## 🔧 Manual Cache Clearing

### For You (Developer):

1. **Hard Refresh in Browser:**
   - **Mac:** `Cmd + Shift + R` or `Cmd + Option + R`
   - **Windows/Linux:** `Ctrl + Shift + R` or `Ctrl + F5`

2. **Clear Browser Cache:**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: Settings → Privacy → Clear Data
   - Safari: Develop → Empty Caches

3. **Netlify Deploy Hook:**
   - Netlify automatically clears CDN cache on deploy
   - You can trigger a manual redeploy in Netlify dashboard

### For Users:

Users can hard refresh their browser:
- **Mac:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + Shift + R`

## 📋 Current Cache Settings

**HTML Files:**
- `Cache-Control: public, max-age=0, must-revalidate`
- Always checks for updates (changes show immediately)

**CSS/JS Files:**
- `Cache-Control: public, max-age=31536000, must-revalidate`
- Cached for performance but revalidates on deploy

**Images:**
- `Cache-Control: public, max-age=31536000, immutable`
- Long cache for performance

## 🚀 Force Cache Clear (Advanced)

If you need to force clear Netlify's cache:

1. **Trigger a new deploy:**
   ```bash
   git commit --allow-empty -m "Force cache clear"
   git push origin main
   ```

2. **Netlify Dashboard:**
   - Go to Site settings → Build & deploy
   - Click "Trigger deploy" → "Clear cache and deploy site"

3. **Add Cache-Busting Query String:**
   - Add `?v=2` to CSS links (not recommended for production)
   - Better to rely on Netlify's automatic invalidation

## 💡 Best Practices

✅ **Do:**
- Let Netlify handle CDN cache invalidation automatically
- Use hard refresh during development
- Deploy frequently (each deploy clears cache)

❌ **Don't:**
- Manually clear CDN cache unless necessary
- Use query strings for cache busting (Netlify handles this)
- Worry about CDN cache (it's automatic)

## 🔍 Verify Cache Headers

Check your cache headers:
```bash
curl -I https://your-site.netlify.app/index.html
```

Look for `Cache-Control` header in the response.

# Deployment Guide

Complete guide for deploying Ledger Leadership to production.

## Prerequisites

- All services set up (Supabase, Netlify, GitHub)
- Environment variables configured
- Database migrations run
- Admin user created

## Deployment Steps

### 1. Final Pre-Deployment Checks

```bash
# Run type checking
npm run type-check

# Run linter
npm run lint

# Test build locally
npm run build

# Test Netlify Functions locally
npm run netlify:dev
```

### 2. Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Netlify Auto-Deploy

If connected to GitHub, Netlify will automatically:
- Detect the push
- Run the build command
- Deploy to production

### 4. Verify Deployment

1. **Check Netlify Dashboard**
   - Go to Deploys tab
   - Verify build succeeded
   - Check function logs

2. **Test Public Site**
   - Visit your Netlify URL
   - Test field note submission
   - Verify published notes display

3. **Test LLOps Dashboard**
   - Sign in with admin account
   - Visit `/llops`
   - Verify all functions work
   - Check health status

### 5. Set Up Custom Domain (Optional)

1. Netlify Dashboard → Domain settings
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS (automatic)

## Environment Variables Checklist

Verify all are set in Netlify:

**Required:**
- ✅ `SUPABASE_URL`
- ✅ `SUPABASE_ANON_KEY`
- ✅ `SUPABASE_SERVICE_ROLE_KEY`

**Optional:**
- `GITHUB_TOKEN`
- `GITHUB_REPO`
- `GMAIL_CLIENT_ID`
- `GMAIL_CLIENT_SECRET`
- `GMAIL_REFRESH_TOKEN`
- `LLOPS_AUTH_DISABLED` (should be `false` in production)

## Post-Deployment

### 1. Create Admin User

```sql
-- In Supabase SQL Editor
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-admin@email.com';
```

### 2. Test All Functions

- Health check: `/.netlify/functions/llops-health`
- Metrics: `/.netlify/functions/llops-metrics`
- Submissions: `/.netlify/functions/llops-submissions?status=all`
- Public list: `/.netlify/functions/list-field-notes`

### 3. Monitor

- Check Netlify function logs
- Monitor Supabase dashboard
- Set up alerts (optional)

## Rollback

If something goes wrong:

1. **Netlify Dashboard**
   - Go to Deploys
   - Find previous successful deploy
   - Click "Publish deploy"

2. **Or Revert Git**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Continuous Deployment

With GitHub Actions (see `.github/workflows/deploy-netlify.yml`):

- Automatic deployment on push to `main`
- Build and type checking
- Deploy to Netlify production

## Troubleshooting

### Build Fails

- Check build logs in Netlify
- Verify all dependencies in `package.json`
- Check Node version matches (18+)

### Functions Not Working

- Check function logs
- Verify environment variables
- Test locally with `netlify dev`

### Database Errors

- Verify migrations ran
- Check RLS policies
- Verify service role key

### Auth Issues

- Check Supabase Auth settings
- Verify JWT secret
- Check user roles in profiles table

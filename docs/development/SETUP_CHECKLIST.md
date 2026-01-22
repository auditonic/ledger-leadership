# Setup Checklist

Follow this checklist to get everything connected and working.

## ✅ Phase 1: Project Structure

- [x] Project directory created: `ledger-leadership/`
- [x] All Netlify Functions created
- [x] Supabase migrations ready
- [x] Component files in place
- [x] Configuration files created

## 📋 Phase 2: Git & GitHub

- [ ] Navigate to project directory
- [ ] Run `./scripts/setup-git.sh`
- [ ] Create GitHub repository
- [ ] Add remote: `git remote add origin YOUR_REPO_URL`
- [ ] Push: `git push -u origin main`
- [ ] Verify repository on GitHub

## 🗄️ Phase 3: Supabase

- [ ] Create Supabase project
- [ ] Copy project URL → `SUPABASE_URL`
- [ ] Copy anon key → `SUPABASE_ANON_KEY`
- [ ] Copy service role key → `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Run migration: `supabase/migrations/001_initial_schema.sql`
- [ ] Enable Email Auth
- [ ] Create admin user account
- [ ] Update profile role to 'admin':

```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## 🚀 Phase 4: Netlify

- [ ] Create Netlify account (if needed)
- [ ] Connect GitHub repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `.next` (or `dist`)
- [ ] Add environment variables:
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_ANON_KEY`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `LLOPS_AUTH_DISABLED=false`
- [ ] Trigger first deployment
- [ ] Verify deployment succeeded

## 💻 Phase 5: Local Development

- [ ] Run `npm install`
- [ ] Create `.env.local` with Supabase credentials
- [ ] Test: `npm run dev`
- [ ] Test functions: `npm run netlify:dev`
- [ ] Verify site loads at `http://localhost:3000`

## 🔗 Phase 6: Service Integrations

### GitHub (Optional)
- [ ] Create Personal Access Token
- [ ] Add to Netlify: `GITHUB_TOKEN`
- [ ] Add to Netlify: `GITHUB_REPO=your-org/ledger-leadership`
- [ ] Test health check shows GitHub status

### Gmail API (Optional - for LLOps)
- [ ] Google Cloud Console → Create project
- [ ] Enable Gmail API
- [ ] Create OAuth 2.0 credentials
- [ ] Get refresh token
- [ ] Add to Netlify:
  - [ ] `GMAIL_CLIENT_ID`
  - [ ] `GMAIL_CLIENT_SECRET`
  - [ ] `GMAIL_REFRESH_TOKEN`

### Claude API (Optional)
- [ ] Get API key from Anthropic
- [ ] Add to Netlify: `CLAUDE_API_KEY`

### Studio D2 (Optional)
- [ ] Get API key from Studio D2
- [ ] Add to Netlify: `STUDIO_D2_API_KEY`

## ✅ Phase 7: Verification

### Public Site
- [ ] Visit Netlify URL
- [ ] Verify pages load
- [ ] Test field note submission form
- [ ] Verify submission works

### LLOps Dashboard
- [ ] Visit `/llops` route
- [ ] Sign in with admin account
- [ ] Verify health checks show status
- [ ] Verify metrics load
- [ ] Test submission review workflow
- [ ] Test status updates

### Netlify Functions
- [ ] Check function logs in Netlify
- [ ] Test each endpoint:
  - [ ] `/.netlify/functions/llops-health`
  - [ ] `/.netlify/functions/llops-metrics`
  - [ ] `/.netlify/functions/llops-submissions?status=all`
  - [ ] `/.netlify/functions/list-field-notes`
  - [ ] `/.netlify/functions/submit-field-note` (POST)

### Database
- [ ] Verify `field_notes` table exists
- [ ] Verify `profiles` table exists
- [ ] Test RLS policies
- [ ] Verify admin user has correct role

## 🔒 Phase 8: Security

- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Verify no secrets in code
- [ ] Test auth gate works
- [ ] Verify non-admin users can't access LLOps
- [ ] Check CORS settings
- [ ] Review RLS policies

## 📝 Phase 9: Documentation

- [ ] Review `README.md`
- [ ] Review `SETUP.md`
- [ ] Review `INTEGRATIONS.md`
- [ ] Review `ENV_VARIABLES.md`
- [ ] Document any custom configurations

## 🎉 Phase 10: Go Live

- [ ] All tests passing
- [ ] All integrations working
- [ ] Admin user created
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up (optional)
- [ ] Backup strategy in place

## 🆘 If Something Fails

1. Check function logs in Netlify
2. Check Supabase dashboard for errors
3. Verify environment variables
4. Test locally with `netlify dev`
5. Review documentation in `docs/`

## Next Steps After Setup

- [ ] Set up GitHub Actions (auto-deploy)
- [ ] Configure custom domain
- [ ] Set up monitoring/alerts
- [ ] Create additional admin users
- [ ] Review and optimize performance
- [ ] Set up backups

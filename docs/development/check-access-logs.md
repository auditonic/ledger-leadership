# How to Check System Access Logs

## Supabase - Authentication Logs

### Check User Sign-ups and Logins

1. **In Supabase Dashboard:**
   - Go to **Authentication** → **Users**
   - See all registered users
   - Check "Last Sign In" column

2. **Check Auth Logs:**
   - Go to **Logs** in left sidebar
   - Filter by "Auth" or "Authentication"
   - See login attempts, sign-ups, password resets

3. **Check via SQL:**
   ```sql
   -- See all users
   SELECT id, email, created_at, last_sign_in_at 
   FROM auth.users 
   ORDER BY created_at DESC;
   
   -- See profiles with roles
   SELECT p.email, p.role, p.created_at, u.last_sign_in_at
   FROM public.profiles p
   JOIN auth.users u ON p.id = u.id
   ORDER BY u.last_sign_in_at DESC;
   ```

## Supabase - API Access Logs

1. **Go to Logs:**
   - Left sidebar → **Logs**
   - Filter by "API" or "REST"
   - See all API requests to your database

2. **Check Recent Activity:**
   - Shows: timestamp, endpoint, method, status code
   - Can filter by date range

## Netlify - Function Logs

### Check Netlify Function Access

1. **In Netlify Dashboard:**
   - Go to your site
   - Click **Functions** tab
   - See function invocations and logs

2. **Check Deploy Logs:**
   - Go to **Deploys** tab
   - Click on a deploy
   - See build logs and any errors

3. **Real-time Logs:**
   - Go to **Functions** → Click a function
   - See real-time invocations
   - Check for errors or unauthorized access

## Netlify - Site Analytics (if enabled)

1. **Go to Site Settings:**
   - **Analytics** section
   - See page views, visitors
   - Requires Netlify Analytics (paid feature)

## GitHub - Repository Access

### Check Repository Activity

1. **In GitHub:**
   - Go to your repository
   - Click **Insights** tab
   - See:
     - Traffic (clones, views)
     - Contributors
     - Commits

2. **Check Collaborators:**
   - Settings → **Collaborators**
   - See who has access

3. **Check Audit Log (Organization):**
   - If using GitHub Org
   - Settings → **Audit log**
   - See all actions by users

## Database Access Monitoring

### Check Database Queries

1. **Supabase Dashboard:**
   - **Database** → **Logs**
   - See all database queries
   - Filter by table, user, time

2. **Check via SQL:**
   ```sql
   -- See recent field note submissions
   SELECT id, created_at, attribution, publish_status
   FROM public.field_notes
   ORDER BY created_at DESC
   LIMIT 10;
   
   -- Count submissions by status
   SELECT publish_status, COUNT(*) 
   FROM public.field_notes
   GROUP BY publish_status;
   ```

## Security Monitoring

### Check for Suspicious Activity

1. **Supabase:**
   - **Logs** → Filter for errors
   - Look for 401 (unauthorized) or 403 (forbidden) errors
   - Check for unusual patterns

2. **Netlify:**
   - **Functions** → Check for failed invocations
   - Look for 401/403 responses
   - Check rate limiting

3. **GitHub:**
   - **Settings** → **Security** → **Security log**
   - See security events

## Quick Access Check Script

I can create a script to check recent activity across all services.

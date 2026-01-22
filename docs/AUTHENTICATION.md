# Authentication & Security Guide

## Overview

The Ledger Leadership site uses **Supabase Authentication** with role-based access control (RBAC) to secure the LLOps Control Center and API endpoints.

---

## Authentication Flow

### 1. User Login
- Users visit `/login` to sign in with email/password
- Supabase handles authentication and returns a JWT token
- Token is stored in browser session (via Supabase client)

### 2. Route Protection
- The `/llops` route is protected by `ProtectedRoute` component
- Requires `reviewer` or `admin` role
- Unauthenticated users are redirected to `/login`
- Users without sufficient permissions see `/unauthorized`

### 3. API Calls
- All API calls to Netlify Functions include the JWT token in the `Authorization` header
- Functions verify the token and check user role before processing requests

---

## User Roles

### Role Hierarchy
1. **user** (default) - Basic access
2. **reviewer** - Can access LLOps Control Center, review submissions
3. **admin** - Full access, can manage users and settings

### Role Assignment
- New users are automatically assigned `user` role
- Admins can update roles in Supabase `profiles` table
- Roles are checked on both client and server side

---

## Security Features

### 1. Route Protection
```typescript
// src/app/llops/page.tsx
<ProtectedRoute requiredRole="reviewer">
  <LLOpsControlCenter />
</ProtectedRoute>
```

### 2. API Authentication
All Netlify Functions verify authentication:
```javascript
// netlify/functions/_shared/auth.js
const authResult = await verifyAuth(event, 'reviewer');
if (!authResult.ok) {
  return { statusCode: 401, ... };
}
```

### 3. Security Headers
Configured in `netlify.toml`:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security`
- `Content-Security-Policy`

### 4. Rate Limiting
- Simple in-memory rate limiting for Netlify Functions
- 100 requests per minute per IP/user
- For production, consider Redis-based rate limiting

---

## Setting Up Authentication

### 1. Supabase Setup
1. Enable Email Auth in Supabase Dashboard
2. Configure email templates (optional)
3. Set up email provider (SMTP or Supabase default)

### 2. Create Admin User
```sql
-- In Supabase SQL Editor
-- First, sign up a user via the app, then update their role:
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'your-admin@example.com';
```

### 3. Environment Variables
Add to Netlify:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Testing Authentication

### 1. Test Login
1. Visit `/login`
2. Sign in with test credentials
3. Should redirect to `/llops`

### 2. Test Unauthorized Access
1. Sign in as regular user (role: `user`)
2. Try to access `/llops`
3. Should redirect to `/unauthorized`

### 3. Test API Calls
- Open browser DevTools → Network tab
- Check that API calls include `Authorization: Bearer <token>` header
- Verify functions return 401 for invalid/missing tokens

---

## Troubleshooting

### "Profile not found" error
- User was created but profile wasn't auto-created
- Run: `INSERT INTO profiles (id, email, role) VALUES ('user-id', 'email', 'user');`

### "Insufficient permissions" error
- User role is too low
- Update role in Supabase: `UPDATE profiles SET role = 'reviewer' WHERE id = 'user-id';`

### Token not being sent
- Check browser console for errors
- Verify Supabase client is initialized correctly
- Check that `getAuthToken()` is being called

---

## Best Practices

1. **Never expose service role key** - Only use in server-side functions
2. **Always verify tokens** - Don't trust client-side role checks alone
3. **Use HTTPS** - Required for secure token transmission
4. **Rotate keys regularly** - Update Supabase keys periodically
5. **Monitor auth logs** - Check Supabase Auth logs for suspicious activity

---

## Next Steps

- [ ] Set up email provider for password reset
- [ ] Add 2FA (two-factor authentication)
- [ ] Implement session timeout
- [ ] Add audit logging for admin actions
- [ ] Set up Redis for production rate limiting

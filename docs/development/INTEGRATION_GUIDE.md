# 🔌 Complete Integration Guide — Ledger Leadership

**Status:** ✅ All Functions Created  
**Last Updated:** January 22, 2025

---

## 📋 Overview

This guide covers the complete integration of:
- ✅ LLOps Control Center
- ✅ Database connections (Supabase)
- ✅ Contact form submission
- ✅ Field note submission
- ✅ User authentication
- ✅ Admin/reviewer role management

---

## 🗄️ Database Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your **Project URL** and **Service Role Key**

### 2. Run Database Schema

1. Go to **SQL Editor** in Supabase dashboard
2. Copy contents of `supabase_schema_complete.sql`
3. Run the SQL script
4. Verify tables created:
   - `profiles` (for user roles)
   - `field_notes` (for submissions)
   - `contact_submissions` (for contact form)

### 3. Create First Admin User

1. Go to **Authentication** → **Users** in Supabase
2. Click **Add User** → **Create new user**
3. Enter admin email and password
4. Go to **SQL Editor** and run:
   ```sql
   INSERT INTO public.profiles (id, email, role)
   SELECT id, email, 'admin'
   FROM auth.users
   WHERE email = 'your-admin@email.com';
   ```

---

## 🔐 Environment Variables

Set these in **Netlify Dashboard → Site Settings → Environment Variables**:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**⚠️ Never commit these to Git!**

---

## 📡 Netlify Functions

### Public Functions (No Auth Required)

#### `list-field-notes.js`
- **Endpoint:** `/.netlify/functions/list-field-notes`
- **Method:** GET
- **Purpose:** Returns published field notes for public display
- **Response:** `{ ok: true, notes: [...] }`

#### `submit-field-note.js`
- **Endpoint:** `/.netlify/functions/submit-field-note`
- **Method:** POST
- **Purpose:** Submits new field note from contribute form
- **Body:** Field note JSON
- **Response:** `{ ok: true, inserted: "id" }`

#### `contact-submit.js`
- **Endpoint:** `/.netlify/functions/contact-submit`
- **Method:** POST
- **Purpose:** Handles contact form submissions
- **Body:** `{ name, email, subject?, message, source? }`
- **Response:** `{ ok: true, inserted: "id", message: "..." }`

### Admin Functions (Auth Required)

#### `llops-health.js`
- **Endpoint:** `/.netlify/functions/llops-health`
- **Method:** GET
- **Auth:** Required (Bearer token)
- **Purpose:** Health check for all integrations
- **Response:** `{ ok: true, checks: {...}, updated_at: "..." }`

#### `llops-metrics.js`
- **Endpoint:** `/.netlify/functions/llops-metrics`
- **Method:** GET
- **Auth:** Required
- **Purpose:** Operational metrics (uptime, submissions, queue)
- **Response:** `{ uptime_24h, submissions_7d, review_queue, published_total, sparkline: [...] }`

#### `llops-submissions.js`
- **Endpoint:** `/.netlify/functions/llops-submissions?status=submitted|reviewing|published|rejected|all`
- **Method:** GET
- **Auth:** Required (admin/reviewer role)
- **Purpose:** List field note submissions
- **Response:** `{ ok: true, submissions: [...] }`

#### `llops-update-status.js`
- **Endpoint:** `/.netlify/functions/llops-update-status`
- **Method:** POST
- **Auth:** Required (admin/reviewer role)
- **Purpose:** Update submission status and public fields
- **Body:** `{ id, publish_status?, public_role?, public_context? }`
- **Response:** `{ ok: true, updated: {...} }`

#### `llops-auth-session.js`
- **Endpoint:** `/.netlify/functions/llops-auth-session`
- **Method:** GET
- **Auth:** Required (Bearer token)
- **Purpose:** Verify JWT and return user role
- **Response:** `{ ok: true, authed: true, user: { id, email, role } }`

---

## 🔑 Authentication Setup

### Frontend (LLOps Control Center)

The LLOps Control Center component (`LLOps_Control_Center_FINAL.tsx`) expects:

1. **Supabase Auth Client** initialized
2. **JWT Token** stored after login
3. **Token passed** in Authorization header to all admin functions

### Example Auth Flow

```typescript
// 1. Login with Supabase Auth
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 2. Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'password'
});

// 3. Get session token
const { data: { session } } = await supabase.auth.getSession();
const token = session?.access_token;

// 4. Use token in API calls
const response = await fetch('/.netlify/functions/llops-submissions', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Role-Based Access

- **`user`** — Default role, no admin access
- **`reviewer`** — Can view and update submissions
- **`admin`** — Full access to all functions

---

## 🎨 Frontend Integration

### Contact Form

The contact form is already wired in `contact.html`:
- Form submits to `/.netlify/functions/contact-submit`
- Shows success/error messages
- Validates required fields

### Field Note Submission

The contribute form (`contribute.html`) is already wired:
- Form submits to `/.netlify/functions/submit-field-note`
- Handles all field note fields
- Shows success message

### LLOps Control Center

1. **Deploy Component:**
   - Place `LLOps_Control_Center_FINAL.tsx` in your Next.js/React app
   - Route: `src/app/llops/page.tsx` or equivalent

2. **Install Dependencies:**
   ```bash
   npm install @supabase/supabase-js
   npm install framer-motion recharts
   npm install lucide-react
   # Plus shadcn/ui components
   ```

3. **Configure Supabase Client:**
   ```typescript
   // lib/supabase.ts
   import { createClient } from '@supabase/supabase-js';
   
   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );
   ```

4. **Update Component:**
   - Replace mock auth with real Supabase Auth
   - Wire up all API calls to Netlify functions
   - Pass JWT tokens in Authorization headers

---

## 🧪 Testing Checklist

### Database
- [ ] Tables created (`profiles`, `field_notes`, `contact_submissions`)
- [ ] Admin user created with `admin` role
- [ ] RLS policies active

### Public Functions
- [ ] `list-field-notes` returns published notes
- [ ] `submit-field-note` creates new submission
- [ ] `contact-submit` stores contact form data

### Admin Functions
- [ ] `llops-health` checks all integrations
- [ ] `llops-metrics` returns operational data
- [ ] `llops-submissions` lists submissions (with auth)
- [ ] `llops-update-status` updates submission (with auth)
- [ ] `llops-auth-session` verifies JWT and role

### Frontend
- [ ] Contact form submits successfully
- [ ] Field note form submits successfully
- [ ] LLOps Control Center loads with auth
- [ ] Admin can view submissions
- [ ] Admin can update submission status

---

## 🚨 Troubleshooting

### Functions Return 401
- **Issue:** Missing or invalid JWT token
- **Fix:** Ensure Supabase Auth is configured and token is passed

### Functions Return 403
- **Issue:** User doesn't have admin/reviewer role
- **Fix:** Update user role in `profiles` table

### Database Queries Fail
- **Issue:** Wrong Supabase URL or service role key
- **Fix:** Verify environment variables in Netlify

### RLS Blocking Queries
- **Issue:** Row Level Security blocking service role
- **Fix:** Service role should bypass RLS by default. Check policies.

---

## 📚 Next Steps

1. **Deploy to Netlify** (see DEPLOYMENT.md)
2. **Set environment variables**
3. **Run database schema**
4. **Create admin user**
5. **Test all functions**
6. **Deploy LLOps Control Center**
7. **Configure authentication**

---

## 📧 Support

- **Email:** connect@ledgerleadership.com
- **Documentation:** See README.md and DEPLOYMENT.md

---

**✅ All systems wired and ready!**

# Netlify Environment Variables - Copy & Paste Format

## How to Add in Netlify

1. Go to your site in Netlify
2. **Site settings** → **Environment variables**
3. Click **"Add variable"**
4. Copy each variable below (one at a time)

---

## Variable 1: SUPABASE_URL

**Key:**
```
SUPABASE_URL
```

**Value:**
```
https://homsaurlketpzzjtsyxn.supabase.co
```

**Scope:** All deploys

---

## Variable 2: SUPABASE_ANON_KEY

**Key:**
```
SUPABASE_ANON_KEY
```

**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTAzNTQsImV4cCI6MjA4NDYyNjM1NH0.FkkQZIFwR45I2Tz3XcbaChyxCxtnitlwnGwcNRazDI4
```

**Scope:** All deploys

---

## Variable 3: SUPABASE_SERVICE_ROLE_KEY

**Key:**
```
SUPABASE_SERVICE_ROLE_KEY
```

**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo
```

**Scope:** All deploys

⚠️ **Important:** This is a secret key - never expose to client-side!

---

## Variable 4: LLOPS_AUTH_DISABLED

**Key:**
```
LLOPS_AUTH_DISABLED
```

**Value:**
```
false
```

**Scope:** All deploys

---

## After Adding All Variables

1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Wait for deployment to complete

---

## Quick Copy (All at Once)

If Netlify supports bulk import, you can use this format:

```
SUPABASE_URL=https://homsaurlketpzzjtsyxn.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTAzNTQsImV4cCI6MjA4NDYyNjM1NH0.FkkQZIFwR45I2Tz3XcbaChyxCxtnitlwnGwcNRazDI4
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo
LLOPS_AUTH_DISABLED=false
```

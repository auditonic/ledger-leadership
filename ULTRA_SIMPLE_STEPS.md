# Ultra Simple Steps - Just Follow These

## Part 1: Create the Site (5 clicks)

1. **Go to:** https://app.netlify.com
2. **Click:** "Add new project" (big teal button, top right)
3. **Click:** "Import an existing project"
4. **Click:** "Deploy with GitHub"
5. **Click:** "ledger-leadership" (in the list)
6. **Click:** "Deploy site" (bottom of page)

**Wait 2-3 minutes for it to build**

## Part 2: Add Environment Variables (After build completes)

1. **Click on your new site** (the one that just deployed)
2. **Click:** "Site settings" (or gear icon ⚙️)
3. **Click:** "Environment variables" (left menu)
4. **Click:** "Add variable" (4 times, one for each):

   **Variable 1:**
   - Key: `SUPABASE_URL`
   - Value: `https://homsaurlketpzzjtsyxn.supabase.co`
   - Scope: All deploys
   - Click "Save"

   **Variable 2:**
   - Key: `SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTAzNTQsImV4cCI6MjA4NDYyNjM1NH0.FkkQZIFwR45I2Tz3XcbaChyxCxtnitlwnGwcNRazDI4`
   - Scope: All deploys
   - Click "Save"

   **Variable 3:**
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo`
   - Scope: All deploys
   - Click "Save"

   **Variable 4:**
   - Key: `LLOPS_AUTH_DISABLED`
   - Value: `false`
   - Scope: All deploys
   - Click "Save"

## Part 3: Redeploy (1 click)

1. **Click:** "Deploys" tab (or "Builds")
2. **Click:** "Trigger deploy" → "Clear cache and deploy site"
3. **Wait** for it to finish

## Done! 🎉

Your site is now live with all the new code!

Tell me when you've completed Part 1 and I'll help with Part 2.

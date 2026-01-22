# Ledger Leadership - Setup Guide

Complete setup instructions for connecting all services and deploying the site.

## Prerequisites

- Node.js 18+ and npm 9+
- Git
- Supabase account
- Netlify account
- GitHub account
- (Optional) Gmail API credentials for LLOps

## Step 1: Initialize Git Repository

```bash
cd ledger-leadership
git init
git add .
git commit -m "Initial commit: Ledger Leadership project structure"
```

## Step 2: Create GitHub Repository

1. Go to GitHub and create a new repository: `ledger-leadership`
2. Add the remote:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ledger-leadership.git
git branch -M main
git push -u origin main
```

## Step 3: Set Up Supabase

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and API keys

2. **Run Database Migration**
   - Go to SQL Editor in Supabase dashboard
   - Copy contents of `supabase/migrations/001_initial_schema.sql`
   - Run the migration

3. **Set Up Auth**
   - Enable Email Auth in Authentication settings
   - Configure email templates if desired
   - Set up magic link authentication

4. **Create Admin User**
   - Sign up via the auth UI or create manually
   - Update the profile role to 'admin':

```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-admin@email.com';
```

## Step 4: Set Up Netlify

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Select the repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next` (if using Next.js) or `dist` (if using Vite)

3. **Set Environment Variables**
   Go to Site settings → Environment variables and add:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
GITHUB_TOKEN=your-github-token (optional, for integrations)
GITHUB_REPO=your-org/ledger-leadership (optional)
GMAIL_CLIENT_ID=your-gmail-client-id (optional, for LLOps)
GMAIL_CLIENT_SECRET=your-gmail-client-secret (optional)
GMAIL_REFRESH_TOKEN=your-gmail-refresh-token (optional)
LLOPS_AUTH_DISABLED=false (set to true for local dev only)
```

4. **Deploy**
   - Netlify will auto-deploy on push to main
   - Or trigger manually from the dashboard

## Step 5: Set Up Local Development

1. **Install Dependencies**

```bash
npm install
```

2. **Create `.env.local`**

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

3. **Run Development Server**

```bash
npm run dev
```

4. **Test Netlify Functions Locally**

```bash
npm run netlify:dev
```

## Step 6: Set Up LLOps Control Center

1. **Copy Component**

Copy `LLOpsControlCenter.tsx` to your React/Next.js app:

```bash
# If using Next.js app directory
cp LLOps_Control_Center_UI/LLOpsControlCenter.tsx src/components/
```

2. **Create Route**

Create a route for the admin dashboard:

```typescript
// src/app/llops/page.tsx (Next.js App Router)
import LLOpsControlCenter from "@/components/LLOpsControlCenter";

export default function LLOpsPage() {
  return <LLOpsControlCenter />;
}
```

3. **Set Up Auth**

The component expects Supabase Auth. Make sure:
- Users can sign in via magic link
- Profiles table has role column
- Netlify Functions verify JWT tokens

## Step 7: Connect Additional Services (Optional)

### GitHub Integration

1. Create a GitHub Personal Access Token
2. Add to Netlify environment variables as `GITHUB_TOKEN`
3. Set `GITHUB_REPO` to your repository

### Gmail API (for LLOps)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a project
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Set up OAuth flow to get refresh token
6. Add credentials to Netlify environment variables

### Claude API (Optional)

1. Get API key from Anthropic
2. Add to environment variables as `CLAUDE_API_KEY`

### Studio D2 (Optional)

1. Get API key from Studio D2
2. Add to environment variables as `STUDIO_D2_API_KEY`

## Step 8: Verify Setup

1. **Test Public Site**
   - Visit your Netlify URL
   - Verify pages load correctly
   - Test field note submission

2. **Test LLOps Dashboard**
   - Sign in with admin account
   - Visit `/llops`
   - Verify health checks work
   - Test submission review workflow

3. **Test Netlify Functions**
   - Check function logs in Netlify dashboard
   - Test each endpoint manually or via the dashboard

## Troubleshooting

### Functions Not Working

- Check environment variables are set correctly
- Verify Supabase credentials
- Check function logs in Netlify dashboard

### Auth Not Working

- Verify Supabase Auth is enabled
- Check JWT secret matches
- Verify profiles table exists and has data

### Database Errors

- Run migrations again
- Check RLS policies
- Verify service role key has correct permissions

## Next Steps

- Set up GitHub Actions for CI/CD (see `.github/workflows/`)
- Configure custom domain
- Set up monitoring and alerts
- Review security settings

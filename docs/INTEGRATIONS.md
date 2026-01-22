# Service Integrations Guide

Complete guide for connecting all external services to Ledger Leadership.

## Supabase

### Setup

1. **Create Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Wait for database to provision

2. **Get Credentials**
   - Project Settings → API
   - Copy:
     - Project URL (`SUPABASE_URL`)
     - `anon` key (`SUPABASE_ANON_KEY`)
     - `service_role` key (`SUPABASE_SERVICE_ROLE_KEY`) - **Keep secret!**

3. **Run Migrations**
   - SQL Editor → New Query
   - Paste `supabase/migrations/001_initial_schema.sql`
   - Run

4. **Enable Auth**
   - Authentication → Providers
   - Enable Email provider
   - Configure email templates

### Environment Variables

```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc... (server-side only!)
```

## Netlify

### Setup

1. **Connect Repository**
   - Netlify Dashboard → Add new site
   - Import from GitHub
   - Select repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next` (Next.js) or `dist` (Vite)

3. **Set Environment Variables**
   - Site settings → Environment variables
   - Add all variables from `.env.example`

4. **Deploy**
   - Auto-deploys on push to main
   - Or trigger manually

### Netlify Functions

All functions are in `netlify/functions/`:
- `llops-health.js` - System health checks
- `llops-metrics.js` - Dashboard metrics
- `llops-submissions.js` - List submissions
- `llops-update-status.js` - Update publish status
- `llops-auth-session.js` - Verify auth session
- `llops-gmail-search.js` - Search Gmail
- `llops-gmail-read.js` - Read Gmail message
- `list-field-notes.js` - Public field notes list
- `submit-field-note.js` - Public submission endpoint

## GitHub

### Setup

1. **Create Personal Access Token**
   - GitHub Settings → Developer settings → Personal access tokens
   - Generate token with `repo` scope
   - Copy token

2. **Add to Netlify**
   - Environment variable: `GITHUB_TOKEN`
   - Also set: `GITHUB_REPO=your-org/ledger-leadership`

### Uses

- Health checks (repo status)
- (Future) Automated deployments
- (Future) Issue tracking integration

## Gmail API (Optional - for LLOps)

### Setup

1. **Google Cloud Console**
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Create new project or select existing
   - Enable Gmail API

2. **Create OAuth Credentials**
   - APIs & Services → Credentials
   - Create OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized redirect URIs: Your callback URL

3. **Get Refresh Token**
   - Use OAuth 2.0 Playground or implement flow
   - Exchange authorization code for refresh token
   - Save refresh token securely

4. **Environment Variables**

```
GMAIL_CLIENT_ID=xxxxx.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=xxxxx
GMAIL_REFRESH_TOKEN=xxxxx
```

### Implementation Notes

The Gmail functions (`llops-gmail-search.js`, `llops-gmail-read.js`) are stubbed. To implement:

1. Install `googleapis` package
2. Implement OAuth token refresh
3. Use Gmail API client to search/read messages
4. Format responses for the UI

## Claude API (Optional)

### Setup

1. **Get API Key**
   - Go to [console.anthropic.com](https://console.anthropic.com)
   - Create API key
   - Copy key

2. **Environment Variable**

```
CLAUDE_API_KEY=sk-ant-xxxxx
```

### Uses

- (Future) Content processing
- (Future) Field note analysis
- (Future) Automated summaries

## Studio D2 (Optional)

### Setup

1. **Get API Key**
   - Sign up at Studio D2
   - Get API key from dashboard

2. **Environment Variable**

```
STUDIO_D2_API_KEY=xxxxx
```

### Uses

- (Future) Diagram generation
- (Future) Visual system maps

## Cursor/Copilot Integration

### Cursor Settings

1. **Project Settings**
   - Create `.cursorrules` file (optional)
   - Configure Cursor to use project context

2. **Git Integration**
   - Cursor can read from Git
   - Use for context in AI suggestions

### GitHub Copilot

1. **Enable in Repository**
   - Repository Settings → Copilot
   - Enable for repository

2. **Use in Development**
   - Copilot will suggest code based on project context
   - Works with TypeScript/React files

## Testing Integrations

### Test Supabase

```bash
# Test connection
curl https://your-project.supabase.co/rest/v1/ \
  -H "apikey: YOUR_ANON_KEY"
```

### Test Netlify Functions

```bash
# Local testing
npm run netlify:dev

# Test health endpoint
curl http://localhost:8888/.netlify/functions/llops-health
```

### Test GitHub

```bash
# Test API access
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/YOUR_ORG/ledger-leadership
```

## Security Notes

1. **Never commit secrets**
   - Use `.env` files (gitignored)
   - Use Netlify environment variables for production

2. **Service Role Keys**
   - Only use server-side (Netlify Functions)
   - Never expose to client

3. **JWT Tokens**
   - Verify on every request
   - Check user roles
   - Use Supabase Auth helpers

4. **RLS Policies**
   - Enable Row Level Security
   - Test policies thoroughly
   - Service role bypasses RLS (by design)

## Troubleshooting

### Supabase Connection Issues

- Verify URL format (no trailing slash)
- Check API keys are correct
- Verify RLS policies allow access

### Netlify Function Errors

- Check function logs in Netlify dashboard
- Verify environment variables are set
- Test locally with `netlify dev`

### Auth Issues

- Verify JWT secret matches
- Check user exists in `auth.users`
- Verify profile has correct role

### GitHub API Issues

- Verify token has correct scopes
- Check rate limits
- Verify repository name format

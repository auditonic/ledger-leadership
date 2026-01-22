# Environment Variables Reference

Complete list of all environment variables needed for Ledger Leadership.

## Required Variables

### Supabase (Required)

```bash
SUPABASE_URL=https://xxxxx.supabase.co
# Your Supabase project URL

SUPABASE_ANON_KEY=eyJhbGc...
# Public anon key (safe for client-side)

SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
# Service role key (SERVER-SIDE ONLY - never expose to client!)
```

**Where to get:**
- Supabase Dashboard → Project Settings → API

### Netlify (Auto-configured)

```bash
NETLIFY_SITE_ID=xxxxx
# Your Netlify site ID (auto-set in Netlify)

NETLIFY_AUTH_TOKEN=xxxxx
# For GitHub Actions deployment (optional)
```

## Optional Variables

### GitHub Integration

```bash
GITHUB_TOKEN=ghp_xxxxx
# Personal Access Token with 'repo' scope

GITHUB_REPO=your-org/ledger-leadership
# Repository name (format: owner/repo)
```

**Uses:**
- Health checks
- Repository status
- (Future) Automated workflows

### Gmail API (for LLOps)

```bash
GMAIL_CLIENT_ID=xxxxx.apps.googleusercontent.com
# OAuth 2.0 Client ID

GMAIL_CLIENT_SECRET=xxxxx
# OAuth 2.0 Client Secret

GMAIL_REFRESH_TOKEN=xxxxx
# OAuth 2.0 Refresh Token
```

**Setup:**
1. Google Cloud Console
2. Enable Gmail API
3. Create OAuth credentials
4. Get refresh token via OAuth flow

### Development Only

```bash
LLOPS_AUTH_DISABLED=true
# Set to true for local development (bypasses auth)
# MUST be false in production!
```

### Optional Services

```bash
CLAUDE_API_KEY=sk-ant-xxxxx
# Claude API key (for future content processing)

STUDIO_D2_API_KEY=xxxxx
# Studio D2 API key (for future diagram generation)

ANALYTICS_ID=xxxxx
# Analytics service ID (optional)
```

## Setting Variables

### Local Development

Create `.env.local`:

```bash
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
LLOPS_AUTH_DISABLED=true
```

### Netlify Production

1. Netlify Dashboard → Site settings
2. Environment variables
3. Add each variable
4. Set scope (All deploys, or specific branch)

### GitHub Actions

Add as repository secrets:
- Settings → Secrets and variables → Actions
- Add each secret
- Reference in workflow as `${{ secrets.VARIABLE_NAME }}`

## Security Notes

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Service role keys** - Only use server-side (Netlify Functions)
3. **Anon keys** - Safe for client-side, but still protect
4. **Tokens** - Rotate regularly
5. **Production** - Always use Netlify environment variables, not local files

## Verification

Test that variables are set:

```bash
# Local
echo $SUPABASE_URL

# Netlify Functions (in function code)
console.log(process.env.SUPABASE_URL)
```

## Troubleshooting

**Variable not found?**
- Check spelling (case-sensitive)
- Verify it's set in the right place
- Restart dev server after adding to `.env.local`
- Redeploy Netlify after adding variables

**Wrong value?**
- Double-check from source (Supabase dashboard, etc.)
- Verify no extra spaces or quotes
- Check if variable is being overridden

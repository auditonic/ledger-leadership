# Ledger Leadership - Project Structure

## Directory Layout

```
ledger-leadership/
├── .git/                          # Git repository
├── .github/                       # GitHub Actions workflows
│   └── workflows/
│       ├── deploy-netlify.yml
│       └── sync-env.yml
├── src/
│   ├── app/                       # Next.js app directory (or React app)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── llops/
│   │       └── page.tsx           # LLOps Control Center route
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   └── LLOpsControlCenter.tsx # Main admin component
│   └── lib/
│       └── supabase.ts            # Supabase client
├── public/                        # Static assets
├── netlify/
│   └── functions/                 # Netlify Functions
│       ├── llops-health.js
│       ├── llops-metrics.js
│       ├── llops-submissions.js
│       ├── llops-update-status.js
│       ├── llops-gmail-search.js
│       ├── llops-gmail-read.js
│       ├── llops-auth-session.js
│       ├── list-field-notes.js
│       └── submit-field-note.js
├── supabase/
│   ├── migrations/
│   │   └── 001_initial_schema.sql
│   └── seed.sql
├── docs/                          # Documentation
│   ├── SETUP.md
│   ├── INTEGRATIONS.md
│   └── DEPLOYMENT.md
├── .env.example                   # Environment variable template
├── .gitignore
├── netlify.toml
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js                 # If using Next.js
└── README.md
```

## Key Files

### Configuration
- `netlify.toml` - Netlify deployment config
- `package.json` - Dependencies and scripts
- `.env.example` - Environment variable template
- `.gitignore` - Git ignore rules

### Application
- `src/components/LLOpsControlCenter.tsx` - Admin dashboard
- `src/app/llops/page.tsx` - Route to admin dashboard
- `src/lib/supabase.ts` - Supabase client setup

### Serverless Functions
- All Netlify Functions in `netlify/functions/`

### Database
- Supabase migrations in `supabase/migrations/`

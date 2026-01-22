# 📦 Deployment Structure

## Files That GET Deployed ✅

These files are in the root and will be deployed to production:

### Core Site Files
- `index.html` - Home page
- `about.html` - About page
- `contact.html` - Contact page
- `contribute.html` - Contribute page
- `edges.html` - The Five Edges
- `field-notes.html` - Field Notes
- `for-podcasters.html` - For Podcasters
- `practice.html` - Practice
- `styles.css` - All styling

### Configuration
- `netlify.toml` - Netlify configuration
- `.netlifyignore` - Files to exclude from deployment

### Backend
- `netlify/functions/` - All Netlify Functions (10 functions)

### Database
- `supabase_schema_complete.sql` - Database schema (reference)

---

## Files That DON'T Get Deployed ❌

These files are kept in the repo but excluded from deployment:

### Documentation (in `docs/development/`)
- All `.md` files (guides, setup docs, etc.)
- `backups/` - Backup zip files
- Conversion scripts (`convert-*.js`)

### Development Files
- `src.disabled/` - Disabled Next.js source
- `*.disabled` - Disabled configuration files
- `.next/` - Next.js build output (if exists)
- `out/` - Static export output (if exists)
- `node_modules/` - Dependencies

### Version Control
- `.git/` - Git repository
- `.github/` - GitHub workflows

---

## How It Works

**Netlify uses `.netlifyignore`** to exclude files from deployment.

**What gets deployed:**
- Only files in root (HTML, CSS, config)
- `netlify/functions/` directory
- Files NOT listed in `.netlifyignore`

**What doesn't get deployed:**
- Everything in `docs/`
- Backup files
- Development scripts
- Documentation files

---

## File Organization

```
ledger-leadership/
├── index.html              ✅ Deployed
├── about.html              ✅ Deployed
├── styles.css              ✅ Deployed
├── netlify.toml            ✅ Deployed
├── netlify/
│   └── functions/          ✅ Deployed
├── docs/
│   └── development/        ❌ NOT deployed
│       ├── *.md
│       ├── backups/
│       └── convert-*.js
└── .netlifyignore         ✅ Used by Netlify
```

---

## Benefits

✅ **Cleaner deployments** - Only production files
✅ **Faster builds** - Less to process
✅ **Better organization** - Clear separation
✅ **Smaller deploy size** - Excludes unnecessary files


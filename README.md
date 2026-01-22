# Ledger Leadership — Production Site

**Status:** ✅ Production Ready  
**Last Updated:** January 22, 2025

## 📦 What's Included

This package contains the complete production-ready Ledger Leadership site:

- **8 Polished HTML Pages** — All using unified design system
- **Netlify Functions** — Backend API for field notes
- **Design System CSS** — Unified styling across all pages
- **Netlify Configuration** — Security headers, pretty URLs, function routing

## 🚀 Deployment to Netlify

### Option 1: Git Integration (Recommended)

1. **Initialize Git Repository:**
   ```bash
   cd production-package
   git init
   git add .
   git commit -m "Initial production deployment"
   ```

2. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/ledger-leadership.git
   git push -u origin main
   ```

3. **Deploy to Netlify:**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 3: Drag & Drop

1. Zip the `production-package` folder
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the zip file

## 🔧 Environment Variables

Set these in Netlify Dashboard → Site Settings → Environment Variables:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Important:** Never commit these to Git. They're already in `.gitignore`.

## 📁 File Structure

```
production-package/
├── index.html              # Home page
├── about.html              # About page
├── edges.html              # The Five Edges
├── practice.html           # Practice guide
├── field-notes.html        # Field notes listing
├── contribute.html         # Submission form
├── contact.html            # Contact page
├── for-podcasters.html    # Podcasters page
├── styles.css             # Design system CSS
├── netlify.toml           # Netlify configuration
├── netlify/
│   └── functions/
│       ├── list-field-notes.js    # GET published notes
│       └── submit-field-note.js   # POST new submission
└── README.md              # This file
```

## 🔐 Security

- **Security Headers:** Configured in `netlify.toml`
- **CSP:** Content Security Policy enabled
- **HTTPS:** Enforced via HSTS header
- **Functions:** Server-side only (secrets never exposed)

## 📊 Netlify Functions

### `list-field-notes`
- **Method:** GET
- **Purpose:** Returns published field notes
- **Response:** `{ ok: true, notes: [...] }`

### `submit-field-note`
- **Method:** POST
- **Purpose:** Submits new field note
- **Body:** Field note JSON
- **Response:** `{ ok: true, inserted: "id" }`

## 🎨 Design System

All pages use the unified design system defined in `styles.css`:
- Consistent navigation
- Unified color palette
- Responsive layout
- Accessible markup

## 📝 Next Steps

1. **Set up Supabase:**
   - Create project at [supabase.com](https://supabase.com)
   - Run the schema migration (see `supabase_schema.sql` in parent directory)
   - Get your URL and service role key

2. **Configure Netlify:**
   - Add environment variables
   - Connect domain (optional)
   - Enable form handling (if needed)

3. **Test Deployment:**
   - Visit your Netlify URL
   - Test field note submission
   - Verify functions are working

## 🐛 Troubleshooting

**Functions not working?**
- Check environment variables are set
- Verify Supabase URL and key are correct
- Check Netlify function logs in dashboard

**Pages not loading?**
- Ensure `netlify.toml` is in root
- Check `publish = "."` is correct
- Verify file paths are relative

**CSS not rendering?**
- Ensure `styles.css` is in same directory as HTML files
- Check browser console for 404 errors
- Verify font imports are loading

## 📧 Contact

For issues or questions:
- Email: connect@ledgerleadership.com
- Site: ledgerleadership.com

---

**Ready for Production** ✅

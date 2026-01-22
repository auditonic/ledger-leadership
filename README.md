# Ledger Leadership

Operational command center and public site for LedgerLeadership.com.

## 🎯 Overview

This repository contains:
- **Public Site**: HTML pages for LedgerLeadership.com
- **LLOps Control Center**: Admin dashboard for managing field notes and operations
- **Netlify Functions**: Serverless backend for submissions and admin operations
- **Supabase Integration**: Database and authentication

## 📁 Project Structure

```
ledger-leadership/
├── src/                    # Application source code
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   └── lib/               # Utilities and clients
├── netlify/
│   └── functions/         # Netlify serverless functions
├── supabase/
│   └── migrations/        # Database migrations
├── docs/                  # Documentation
└── public/                # Static assets
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for details.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Supabase account
- Netlify account
- GitHub account

### Installation

1. **Clone Repository**

```bash
git clone https://github.com/YOUR_USERNAME/ledger-leadership.git
cd ledger-leadership
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

4. **Set Up Supabase**

- Create a Supabase project
- Run migration: `supabase/migrations/001_initial_schema.sql`
- Enable Email Auth

5. **Run Development Server**

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📚 Documentation

- **[SETUP.md](./docs/SETUP.md)** - Complete setup instructions
- **[INTEGRATIONS.md](./docs/INTEGRATIONS.md)** - Service integration guides
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Directory structure

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run type-check   # TypeScript type checking
npm run netlify:dev  # Test Netlify Functions locally
```

### Netlify Functions

Functions are in `netlify/functions/`:

**Public Endpoints:**
- `list-field-notes` - Get published field notes
- `submit-field-note` - Submit new field note

**LLOps Endpoints (Admin Only):**
- `llops-health` - System health checks
- `llops-metrics` - Dashboard metrics
- `llops-submissions` - List submissions
- `llops-update-status` - Update publish status
- `llops-auth-session` - Verify auth session
- `llops-gmail-search` - Search Gmail (optional)
- `llops-gmail-read` - Read Gmail message (optional)

### Testing Functions Locally

```bash
npm run netlify:dev
```

Functions will be available at:
- `http://localhost:8888/.netlify/functions/function-name`

## 🔐 Authentication

### Public Site
- No authentication required
- Anyone can submit field notes
- Anyone can view published notes

### LLOps Dashboard
- Requires Supabase Auth
- Users must have `admin` or `reviewer` role
- Access at `/llops` route

### Setting Up Admin User

1. Sign up via Supabase Auth UI
2. Update profile role:

```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## 🗄️ Database

### Schema

- `field_notes` - Submitted field notes
- `profiles` - User profiles with roles

See `supabase/migrations/001_initial_schema.sql` for full schema.

### Migrations

Run migrations in Supabase SQL Editor:
1. Copy migration file content
2. Paste into SQL Editor
3. Run

## 🌐 Deployment

### Netlify

1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push to `main`

### Environment Variables

Set in Netlify Dashboard → Site settings → Environment variables:

**Required:**
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

**Optional:**
- `GITHUB_TOKEN` - For GitHub integrations
- `GMAIL_CLIENT_ID` - For Gmail API
- `GMAIL_CLIENT_SECRET` - For Gmail API
- `GMAIL_REFRESH_TOKEN` - For Gmail API
- `LLOPS_AUTH_DISABLED` - Set to `true` for local dev only

## 🔗 Service Integrations

- **Supabase**: Database and authentication
- **Netlify**: Hosting and serverless functions
- **GitHub**: Version control and CI/CD
- **Gmail API**: (Optional) Email integration for LLOps
- **Claude API**: (Optional) Content processing
- **Studio D2**: (Optional) Diagram generation

See [INTEGRATIONS.md](./docs/INTEGRATIONS.md) for detailed setup.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (or React + Vite)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Hosting**: Netlify
- **Functions**: Netlify Functions
- **TypeScript**: Full type safety

## 📝 Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request

## 🔒 Security

- All secrets in environment variables
- Service role keys never exposed to client
- Row Level Security (RLS) enabled
- JWT verification on all admin endpoints
- CORS configured appropriately

## 📄 License

[Your License Here]

## 🆘 Support

For issues or questions:
- Check [SETUP.md](./docs/SETUP.md) for setup issues
- Check [INTEGRATIONS.md](./docs/INTEGRATIONS.md) for integration issues
- Review Netlify function logs
- Check Supabase dashboard for database issues

## 🗺️ Roadmap

- [ ] Complete Gmail API integration
- [ ] Add Claude API for content processing
- [ ] Implement Studio D2 diagram generation
- [ ] Add automated testing
- [ ] Set up monitoring and alerts
- [ ] Add analytics integration

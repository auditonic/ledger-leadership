#!/bin/bash

# Setup Git Repository for Ledger Leadership
# Run this script to initialize Git and connect to GitHub

set -e

echo "🚀 Setting up Git repository for Ledger Leadership..."

# Check if already a git repo
if [ -d ".git" ]; then
    echo "⚠️  Git repository already exists. Skipping initialization."
else
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Ledger Leadership project structure

- Complete project structure
- All Netlify Functions
- Supabase migrations
- LLOps Control Center component
- Documentation and setup guides"

echo ""
echo "✅ Git repository initialized!"
echo ""
echo "Next steps:"
echo "1. Create a GitHub repository: https://github.com/new"
echo "2. Add the remote:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/ledger-leadership.git"
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "Or if you already have a remote:"
echo "   git remote add origin YOUR_REPO_URL"
echo "   git push -u origin main"

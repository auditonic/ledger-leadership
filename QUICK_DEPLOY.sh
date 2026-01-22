#!/bin/bash

# Quick Deploy Script for Existing Infrastructure
# Deploys production-package to existing GitHub + Netlify + Supabase setup

set -e

echo "🚀 Ledger Leadership — Quick Deploy to Existing Infrastructure"
echo "=============================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get production package path
PROD_PACKAGE="/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership/production-package"

# Check if production package exists
if [ ! -d "$PROD_PACKAGE" ]; then
    echo -e "${RED}✗${NC} Production package not found at:"
    echo "   $PROD_PACKAGE"
    exit 1
fi

echo -e "${GREEN}✓${NC} Production package found"
echo ""

# Ask for GitHub repo path
echo "📦 Where is your existing GitHub repository?"
echo "   (e.g., ~/Desktop/ledgerleadership.com or full path)"
read -p "Repository path: " REPO_PATH

if [ ! -d "$REPO_PATH" ]; then
    echo -e "${YELLOW}⚠${NC} Directory not found. Cloning from GitHub..."
    echo ""
    read -p "GitHub repository URL (e.g., https://github.com/user/repo.git): " GITHUB_URL
    REPO_PATH="./ledgerleadership-repo"
    git clone "$GITHUB_URL" "$REPO_PATH"
    cd "$REPO_PATH"
else
    cd "$REPO_PATH"
fi

# Verify it's a git repo
if [ ! -d ".git" ]; then
    echo -e "${RED}✗${NC} Not a git repository. Exiting."
    exit 1
fi

echo -e "${GREEN}✓${NC} Found git repository"
echo ""

# Show current status
echo "📊 Current repository status:"
git status --short
echo ""

# Ask for deployment method
echo "Choose deployment method:"
echo "  1) Replace all content (recommended)"
echo "  2) Merge selectively (keep existing files)"
read -p "Choice [1-2]: " DEPLOY_METHOD

if [ "$DEPLOY_METHOD" == "1" ]; then
    echo ""
    echo -e "${YELLOW}⚠${NC} This will replace all files in the repository."
    read -p "Continue? [y/N]: " CONFIRM
    if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
        echo "Cancelled."
        exit 0
    fi
    
    # Backup current branch
    echo ""
    echo "Creating backup branch..."
    git checkout -b backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
    git checkout main 2>/dev/null || git checkout master 2>/dev/null || true
    
    # Copy all files
    echo "Copying production package files..."
    cp -r "$PROD_PACKAGE"/* .
    cp -r "$PROD_PACKAGE"/.gitignore . 2>/dev/null || true
    
elif [ "$DEPLOY_METHOD" == "2" ]; then
    echo ""
    echo "Creating update branch..."
    git checkout -b production-update-$(date +%Y%m%d) 2>/dev/null || true
    
    # Copy specific files
    echo "Copying HTML pages..."
    cp "$PROD_PACKAGE"/*.html .
    
    echo "Copying CSS..."
    cp "$PROD_PACKAGE"/styles.css .
    
    echo "Copying Netlify configuration..."
    cp "$PROD_PACKAGE"/netlify.toml .
    
    echo "Copying Netlify functions..."
    cp -r "$PROD_PACKAGE"/netlify .
    
else
    echo -e "${RED}✗${NC} Invalid choice. Exiting."
    exit 1
fi

# Show what changed
echo ""
echo "📋 Files changed:"
git status --short
echo ""

# Ask to commit
read -p "Commit and push these changes? [y/N]: " PUSH_CONFIRM

if [ "$PUSH_CONFIRM" == "y" ] || [ "$PUSH_CONFIRM" == "Y" ]; then
    echo ""
    echo "Committing changes..."
    git add .
    git commit -m "Deploy polished production site - $(date +%Y-%m-%d)"
    
    echo ""
    echo "Pushing to GitHub..."
    CURRENT_BRANCH=$(git branch --show-current)
    git push origin "$CURRENT_BRANCH"
    
    echo ""
    echo -e "${GREEN}✅ Deployment initiated!${NC}"
    echo ""
    echo "📊 Next steps:"
    echo "   1. Check Netlify dashboard for deployment status"
    echo "   2. Verify site loads at ledgerleadership.com"
    echo "   3. Test contact form and field note submission"
    echo "   4. Check Netlify function logs"
    echo ""
    
    if [ "$DEPLOY_METHOD" == "2" ]; then
        echo -e "${YELLOW}⚠${NC} You're on a branch. Merge to main/master when ready:"
        echo "   git checkout main"
        echo "   git merge $CURRENT_BRANCH"
        echo "   git push origin main"
    fi
else
    echo ""
    echo "Changes staged but not committed."
    echo "Review with: git status"
    echo "Commit manually when ready."
fi

echo ""
echo "🎉 Done!"

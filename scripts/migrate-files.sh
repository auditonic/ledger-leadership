#!/bin/bash

# Migration Script: Move files from scattered locations to consolidated structure
# This script helps migrate existing files into the new structure

set -e

PROJECT_ROOT="/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership"
SOURCE_SITE="/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/Ledger_Leadership_Connected_Site"

echo "📦 Migrating files to consolidated structure..."

# Create directories if they don't exist
mkdir -p "$PROJECT_ROOT/public"
mkdir -p "$PROJECT_ROOT/src/app"

# Copy HTML files from connected site
if [ -d "$SOURCE_SITE" ]; then
    echo "📄 Copying HTML files..."
    cp "$SOURCE_SITE"/*.html "$PROJECT_ROOT/public/" 2>/dev/null || true
    
    echo "✅ HTML files copied"
else
    echo "⚠️  Source site directory not found, skipping HTML files"
fi

# The Netlify functions are already created in the new structure
# The LLOps component is already copied

echo ""
echo "✅ Migration complete!"
echo ""
echo "Files are now in:"
echo "  - HTML pages: public/"
echo "  - Netlify Functions: netlify/functions/"
echo "  - Components: src/components/"
echo "  - Migrations: supabase/migrations/"

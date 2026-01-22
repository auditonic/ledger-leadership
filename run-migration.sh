#!/bin/bash
# Helper script to display migration SQL for easy copying

echo "📋 Ledger Leadership Database Migration"
echo "========================================"
echo ""
echo "Copy the SQL below and paste into Supabase SQL Editor:"
echo ""
echo "---"
cat supabase/migrations/001_initial_schema.sql
echo ""
echo "---"
echo ""
echo "Steps:"
echo "1. Go to Supabase → SQL Editor → New query"
echo "2. Paste the SQL above"
echo "3. Click 'Run'"
echo "4. Should see 'Success. No rows returned'"

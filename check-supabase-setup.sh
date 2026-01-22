#!/bin/bash
# Quick script to check what's already set up in Supabase

echo "🔍 Checking Supabase Setup Status..."
echo ""

SUPABASE_URL="https://homsaurlketpzzjtsyxn.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo"

echo "Testing connection to: $SUPABASE_URL"
echo ""

# Check field_notes table
echo -n "Checking field_notes table... "
FIELD_NOTES=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "apikey: $SERVICE_KEY" \
  -H "Authorization: Bearer $SERVICE_KEY" \
  "$SUPABASE_URL/rest/v1/field_notes?select=count&limit=1")

if [ "$FIELD_NOTES" = "200" ] || [ "$FIELD_NOTES" = "406" ]; then
  echo "✅ EXISTS"
else
  echo "❌ NOT FOUND (HTTP $FIELD_NOTES)"
fi

# Check profiles table
echo -n "Checking profiles table... "
PROFILES=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "apikey: $SERVICE_KEY" \
  -H "Authorization: Bearer $SERVICE_KEY" \
  "$SUPABASE_URL/rest/v1/profiles?select=count&limit=1")

if [ "$PROFILES" = "200" ] || [ "$PROFILES" = "406" ]; then
  echo "✅ EXISTS"
else
  echo "❌ NOT FOUND (HTTP $PROFILES)"
fi

# Check basic connection
echo -n "Testing basic connection... "
HEALTH=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "apikey: $SERVICE_KEY" \
  -H "Authorization: Bearer $SERVICE_KEY" \
  "$SUPABASE_URL/rest/v1/")

if [ "$HEALTH" = "200" ]; then
  echo "✅ WORKING"
else
  echo "❌ FAILED (HTTP $HEALTH)"
fi

echo ""
echo "📋 Summary:"
if [ "$FIELD_NOTES" = "200" ] || [ "$FIELD_NOTES" = "406" ]; then
  if [ "$PROFILES" = "200" ] || [ "$PROFILES" = "406" ]; then
    echo "✅ Migration appears to be COMPLETE - both tables exist!"
    echo "   You can skip running the migration."
  else
    echo "⚠️  Partial setup - field_notes exists but profiles doesn't"
    echo "   You should run the migration."
  fi
else
  echo "❌ Migration NOT RUN - tables don't exist yet"
  echo "   You need to run the migration in SQL Editor."
fi

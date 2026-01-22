#!/bin/bash
# Quick script to check recent system activity

echo "🔍 Checking Recent System Activity"
echo "===================================="
echo ""

SUPABASE_URL="https://homsaurlketpzzjtsyxn.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo"

echo "📊 Supabase - Recent Field Notes:"
curl -s -H "apikey: $SERVICE_KEY" \
     -H "Authorization: Bearer $SERVICE_KEY" \
     "$SUPABASE_URL/rest/v1/field_notes?select=id,created_at,attribution,publish_status&order=created_at.desc&limit=5" \
     | python3 -m json.tool 2>/dev/null || echo "No data or error"

echo ""
echo "👥 Supabase - User Profiles:"
curl -s -H "apikey: $SERVICE_KEY" \
     -H "Authorization: Bearer $SERVICE_KEY" \
     "$SUPABASE_URL/rest/v1/profiles?select=email,role,created_at&order=created_at.desc&limit=5" \
     | python3 -m json.tool 2>/dev/null || echo "No data or error"

echo ""
echo "📝 Note: For detailed logs, check:"
echo "   - Supabase Dashboard → Logs"
echo "   - Netlify Dashboard → Functions → Logs"
echo "   - GitHub → Insights → Traffic"

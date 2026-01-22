// Quick test to check Supabase connection and existing tables
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://homsaurlketpzzjtsyxn.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXNhdXJsa2V0cHp6anRzeXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA1MDM1NCwiZXhwIjoyMDg0NjI2MzU0fQ.7s5Jlm3Nirb2CHSyHwukVhRVMrnejpL9Qvmdt6rOupo';

async function checkSupabase() {
  console.log('🔍 Checking Supabase setup...\n');
  console.log('URL:', SUPABASE_URL);
  
  try {
    // Check if field_notes table exists
    const fieldNotesCheck = await fetch(`${SUPABASE_URL}/rest/v1/field_notes?select=count&limit=1`, {
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
      }
    });
    
    if (fieldNotesCheck.ok) {
      console.log('✅ field_notes table EXISTS');
    } else if (fieldNotesCheck.status === 404 || fieldNotesCheck.status === 406) {
      console.log('❌ field_notes table DOES NOT EXIST');
    } else {
      console.log('⚠️  Could not check field_notes:', fieldNotesCheck.status, await fieldNotesCheck.text());
    }
    
    // Check if profiles table exists
    const profilesCheck = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=count&limit=1`, {
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
      }
    });
    
    if (profilesCheck.ok) {
      console.log('✅ profiles table EXISTS');
    } else if (profilesCheck.status === 404 || profilesCheck.status === 406) {
      console.log('❌ profiles table DOES NOT EXIST');
    } else {
      console.log('⚠️  Could not check profiles:', profilesCheck.status, await profilesCheck.text());
    }
    
    // Test basic connection
    const healthCheck = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
      }
    });
    
    if (healthCheck.ok) {
      console.log('✅ Supabase connection working');
    } else {
      console.log('❌ Connection issue:', healthCheck.status);
    }
    
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

checkSupabase();

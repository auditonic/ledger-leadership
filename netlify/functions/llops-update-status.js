/**
 * LLOps Update Status Function
 * Updates publish_status and public fields for a field note
 */

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Verify auth
  const authResult = await verifyAuth(event);
  if (!authResult.ok) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { id, publish_status, public_role, public_context } = body;

    if (!id || !publish_status) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields: id, publish_status" }),
      };
    }

    // Validate publish_status
    const validStatuses = ["submitted", "reviewing", "published", "rejected"];
    if (!validStatuses.includes(publish_status)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid publish_status" }),
      };
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Build update object
    const update = {
      publish_status,
      ...(public_role !== undefined && { public_role: public_role || null }),
      ...(public_context !== undefined && { public_context: public_context || null }),
    };

    const { data, error } = await supabase
      .from("field_notes")
      .update(update)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        submission: data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

async function verifyAuth(event) {
  if (process.env.LLOPS_AUTH_DISABLED === "true") {
    return { ok: true };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return { ok: false };
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) return { ok: false };

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!profile || !["admin", "reviewer"].includes(profile.role)) {
      return { ok: false };
    }

    return { ok: true, user };
  } catch {
    return { ok: false };
  }
}

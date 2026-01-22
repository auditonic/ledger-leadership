/**
 * Contact Form Submission
 * Handles contact form submissions and stores in Supabase
 * Optionally sends email notification
 */

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  // Parse request body
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const { name, email, subject, message, source } = payload;

  // Validation
  if (!name || !email || !message) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields: name, email, message" }) };
  }

  // Email validation (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid email format" }) };
  }

  // Store in Supabase
  const row = {
    name: name.trim(),
    email: email.trim(),
    subject: subject ? subject.trim() : null,
    message: message.trim(),
    source: source || "contact",
    status: "new",
  };

  const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/contact_submissions`;

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=representation",
      },
      body: JSON.stringify(row),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Database insert failed", details: text }) };
    }

    const data = await resp.json();

    // Optional: Send email notification (if configured)
    // You can add email sending logic here using SendGrid, Resend, etc.
    // For now, we just store it in the database

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        inserted: data?.[0]?.id || null,
        message: "Thank you for your message. We'll get back to you soon.",
      }),
    };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error", details: e.message }) };
  }
}

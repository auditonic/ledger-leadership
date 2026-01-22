/**
 * Simple Rate Limiting for Netlify Functions
 * Uses in-memory store (resets on function cold start)
 * For production, consider using Redis or Netlify Edge Functions
 */

const rateLimitStore = new Map();

export function rateLimit(identifier, maxRequests = 100, windowMs = 60000) {
  const now = Date.now();
  const key = identifier;

  // Clean up old entries
  if (rateLimitStore.size > 10000) {
    const cutoff = now - windowMs;
    for (const [k, v] of rateLimitStore.entries()) {
      if (v.timestamp < cutoff) {
        rateLimitStore.delete(k);
      }
    }
  }

  const record = rateLimitStore.get(key);

  if (!record || record.timestamp < now - windowMs) {
    // New window
    rateLimitStore.set(key, {
      count: 1,
      timestamp: now,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: record.timestamp + windowMs,
    };
  }

  record.count++;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
  };
}

export function getRateLimitIdentifier(event) {
  // Use IP address or user ID if authenticated
  const ip = event.headers['x-forwarded-for']?.split(',')[0] || 
             event.headers['x-nf-client-connection-ip'] || 
             'unknown';
  
  // If authenticated, use user ID for more accurate limiting
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (authHeader?.startsWith('Bearer ')) {
    // Could extract user ID from token, but for simplicity use IP
    return `ip:${ip}`;
  }

  return `ip:${ip}`;
}

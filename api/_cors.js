/**
 * Shared CORS & Security middleware for all API routes.
 *
 * - Restricts origins to an allowlist (env ALLOWED_ORIGINS or defaults).
 * - Limits allowed HTTP methods per route.
 * - Adds security headers.
 * - Provides helper to mask internal errors.
 */

const DEFAULT_ORIGINS = [
  'https://ameni-aouiti.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
];

/**
 * Parse the ALLOWED_ORIGINS env var (comma-separated) or fall back to defaults.
 */
function getAllowedOrigins() {
  const envOrigins = process.env.ALLOWED_ORIGINS;
  if (envOrigins) {
    return envOrigins.split(',').map((o) => o.trim()).filter(Boolean);
  }
  return DEFAULT_ORIGINS;
}

/**
 * Apply CORS headers to a response.
 * Returns false if the origin is not allowed (caller should return 403).
 */
export function applyCors(req, res, { allowedMethods = ['GET', 'OPTIONS'] } = {}) {
  const origin = req.headers.origin || '';
  const allowed = getAllowedOrigins();

  // Check origin against allowlist
  if (origin && allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  } else if (!origin) {
    // Server-to-server or same-origin (no Origin header) — allow
  } else {
    // Origin present but not allowed
    res.setHeader('Access-Control-Allow-Origin', '');
    return false;
  }

  res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(', '));
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  return true;
}

/**
 * Sanitize a string: trim, strip HTML tags, enforce max length.
 */
export function sanitize(str, maxLength = 1000) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/<[^>]*>/g, '')   // strip HTML tags
    .replace(/[<>]/g, '')       // strip stray angle brackets
    .slice(0, maxLength);
}

/**
 * Validate email format.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  // RFC 5322 simplified — good enough for contact forms
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return re.test(email) && email.length <= 254;
}

/**
 * Return a safe error response — never leak internal details.
 */
export function safeError(res, statusCode = 500, publicMessage = 'Internal server error') {
  return res.status(statusCode).json({ error: publicMessage });
}

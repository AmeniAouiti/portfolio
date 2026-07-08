import supabase from './_supabase.js';
import { applyCors, sanitize, isValidEmail, safeError } from './_cors.js';

export default async function handler(req, res) {
  // --- CORS ---
  const corsOk = applyCors(req, res, { allowedMethods: ['POST', 'OPTIONS'] });
  if (!corsOk) return safeError(res, 403, 'Origin not allowed');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // --- Method check ---
  if (req.method !== 'POST') {
    return safeError(res, 405, 'Method not allowed');
  }

  try {
    const body = req.body || {};

    // --- Input validation ---
    const name = sanitize(body.name, 100);
    const email = sanitize(body.email, 254);
    const message = sanitize(body.message, 2000);

    if (!name || !email || !message) {
      return safeError(res, 400, 'All fields (name, email, message) are required');
    }

    if (name.length < 2) {
      return safeError(res, 400, 'Name must be at least 2 characters');
    }

    if (!isValidEmail(email)) {
      return safeError(res, 400, 'Please provide a valid email address');
    }

    if (message.length < 10) {
      return safeError(res, 400, 'Message must be at least 10 characters');
    }

    // --- Honeypot check (if frontend sends a hidden field) ---
    if (body.website || body.url || body.honeypot) {
      // Silently reject bots — return 201 to not reveal detection
      return res.status(201).json({ success: true });
    }

    // --- Insert into Supabase ---
    const { data, error } = await supabase
      .from('contacts')
      .insert({
        name,
        email,
        message,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('[contact] Supabase insert error:', error.message);
      return safeError(res, 500, 'Failed to save message. Please try again.');
    }

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return safeError(res, 500, 'Something went wrong. Please try again later.');
  }
}

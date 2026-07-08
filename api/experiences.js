import supabase from './_supabase.js';
import { applyCors, safeError } from './_cors.js';

export default async function handler(req, res) {
  // --- CORS ---
  const corsOk = applyCors(req, res, { allowedMethods: ['GET', 'OPTIONS'] });
  if (!corsOk) return safeError(res, 403, 'Origin not allowed');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // --- Method check ---
  if (req.method !== 'GET') {
    return safeError(res, 405, 'Method not allowed');
  }

  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('id, company, role, period, description, technologies, location')
      .order('id', { ascending: true });

    if (error) {
      console.error('[experiences] Supabase query error:', error.message);
      return safeError(res, 500, 'Failed to load experiences');
    }

    // Cache public data for 5 minutes
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json(data || []);
  } catch (err) {
    console.error('[experiences] Unexpected error:', err);
    return safeError(res, 500, 'Something went wrong');
  }
}

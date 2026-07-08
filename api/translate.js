import { applyCors, safeError } from './_cors.js';

const LANG_MAP = { en: 'en', fr: 'fr', de: 'de' };

export default async function handler(req, res) {
  const corsOk = applyCors(req, res, { allowedMethods: ['POST', 'OPTIONS'] });
  if (!corsOk) return safeError(res, 403, 'Origin not allowed');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return safeError(res, 405, 'Method not allowed');

  try {
    const { text, source = 'en', target = 'fr' } = req.body || {};

    if (!text || typeof text !== 'string') {
      return safeError(res, 400, 'Text is required');
    }
    if (text.length > 500) {
      return safeError(res, 400, 'Text too long (max 500 characters)');
    }

    const src = LANG_MAP[source] || 'en';
    const tgt = LANG_MAP[target] || 'fr';

    if (src === tgt) {
      return res.status(200).json({ translated: text });
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${src}|${tgt}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data?.responseData?.translatedText) {
      console.error('[translate] API error:', data);
      return safeError(res, 502, 'Translation service unavailable');
    }

    return res.status(200).json({ translated: data.responseData.translatedText });
  } catch (err) {
    console.error('[translate] Unexpected error:', err);
    return safeError(res, 500, 'Translation failed');
  }
}

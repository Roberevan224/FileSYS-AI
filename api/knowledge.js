export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({error:'POST required'});
  const topic = String(req.body?.topic || '').trim().slice(0,200);
  if (!topic) return res.status(400).json({error:'topic required'});
  // Provider-neutral hook. Add a web/AI provider later using Vercel environment variables.
  res.status(200).json({ok:true,topic,status:'provider_not_configured',message:'Knowledge endpoint is ready. Add a server-side provider key in Vercel environment variables when you choose a provider.'});
}

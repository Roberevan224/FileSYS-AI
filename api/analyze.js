export default function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({error:'POST required'});
  const files = Array.isArray(req.body?.files) ? req.body.files.slice(0, 500) : [];
  const byType = {};
  for (const f of files) byType[f.type || 'unknown'] = (byType[f.type || 'unknown'] || 0) + 1;
  res.status(200).json({ok:true,total:files.length,types:byType});
}

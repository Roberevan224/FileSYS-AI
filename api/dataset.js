export default function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({error:'POST required'});
  const files = Array.isArray(req.body?.files) ? req.body.files.slice(0, 500) : [];
  const records = files.filter(f => f?.safety?.status !== 'flagged').map((f,i) => ({
    id:`file_${String(i+1).padStart(6,'0')}`,
    source_name:f.name,
    relative_path:f.path,
    source_type:f.type || 'unknown',
    size:f.size || 0,
    text:f.text || null,
    safety:{status:'clear'}
  }));
  res.status(200).json({ok:true,version:'1.0',records:records.length,data:records});
}

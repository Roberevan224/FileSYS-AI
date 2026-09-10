export default function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({error:'POST required'});
  const files = Array.isArray(req.body?.files) ? req.body.files.slice(0, 500) : [];
  const suggestions = files.map(f => {
    const ext = (f.name?.split('.').pop() || '').toLowerCase();
    const folder = ['jpg','jpeg','png','gif','webp','heic'].includes(ext) ? 'Pictures'
      : ['mp4','mov','mkv','webm','avi'].includes(ext) ? 'Videos'
      : ['mp3','wav','m4a','flac','ogg'].includes(ext) ? 'Music'
      : ['pdf','doc','docx','txt','md','rtf'].includes(ext) ? 'Documents'
      : ['js','ts','py','html','css','json','rs','java','cpp'].includes(ext) ? 'Projects'
      : 'Other';
    return { path:f.path, suggested_folder:folder, reason:`Detected .${ext || 'unknown'} file type` };
  });
  res.status(200).json({ok:true,count:suggestions.length,suggestions});
}

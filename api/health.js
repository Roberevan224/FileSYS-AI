export default function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  res.status(200).json({
    status: 'online',
    service: 'FileSYS AI backend',
    version: '0.1.0',
    time: new Date().toISOString()
  });
}

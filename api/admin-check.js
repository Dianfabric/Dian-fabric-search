export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { pw } = req.body;
  const correct = process.env.ADMIN_PASSWORD;
  if (!correct) return res.status(500).json({ ok: false, error: 'ADMIN_PASSWORD not set' });
  res.json({ ok: pw === correct });
}

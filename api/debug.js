export default function handler(req, res) {
  res.json({
    method: req.method,
    bodyType: typeof req.body,
    body: req.body,
    query: req.query,
    contentType: req.headers['content-type']
  });
}

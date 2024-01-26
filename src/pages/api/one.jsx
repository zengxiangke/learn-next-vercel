export default function handler(req, res) {
  res.status(200).json({ message: 'hello from serverless function: one' });
}

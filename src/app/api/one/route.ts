export function GET() {
  return Response.json({ msg: 'hello from api one', env: process.env });
}

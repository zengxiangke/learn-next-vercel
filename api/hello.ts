export function GET(req: Request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);

}
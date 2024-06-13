import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.post('/auth/login', async (c) => {
  const { username, password } = await c.req.json();

  const payload = {
    name: username,
    exp: Math.floor(Date.now() / 1000) + 60 * 60
  };

  if (username === 'ADMIN' && password === '12345678') {
    const token = await sign(payload, process.env.NEXT_PUBLIC_SECRET_KEY as string);
    return c.json({ token });
  } else {
    return c.json({ error: 'Credenciais inválidas' }, 401);
  }
});

export const POST = handle(app);

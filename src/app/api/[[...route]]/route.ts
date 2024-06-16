import { env } from '@/constants/env.mjs';
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
    const token = await sign(payload, env.NEXT_PUBLIC_SECRET_KEY as string);
    return c.json({ token });
  }

  return c.json({ error: 'Credenciais inválidas' }, 401);
});

app.get('/get-all', async (c) => {
  return c.json({
    salesToday: {
      salesAmount: {
        amount: 1000,
        percentMoreYesterday: 8
      },
      totalNumberContracts: {
        amount: 300,
        percentMoreYesterday: 5
      },
      deployed: {
        amount: 5,
        percentMoreYesterday: 1.2
      },
      newContracts: {
        amount: 8,
        percentMoreYesterday: 0.5
      }
    },
    platformData: [
      { name: 'Jan', 'TD Consultoria': 320, 'RIKO Plataforma': 250, 'Blue Serviços': 260 },
      { name: 'Feb', 'TD Consultoria': 350, 'RIKO Plataforma': 220, 'Blue Serviços': 380 },
      { name: 'Mar', 'TD Consultoria': 280, 'RIKO Plataforma': 190, 'Blue Serviços': 240 },
      { name: 'Apr', 'TD Consultoria': 240, 'RIKO Plataforma': 220, 'Blue Serviços': 180 },
      { name: 'May', 'TD Consultoria': 290, 'RIKO Plataforma': 270, 'Blue Serviços': 220 },
      { name: 'Jun', 'TD Consultoria': 330, 'RIKO Plataforma': 320, 'Blue Serviços': 380 },
      { name: 'Jul', 'TD Consultoria': 300, 'RIKO Plataforma': 330, 'Blue Serviços': 270 },
      { name: 'Aug', 'TD Consultoria': 250, 'RIKO Plataforma': 300, 'Blue Serviços': 250 },
      { name: 'Sep', 'TD Consultoria': 230, 'RIKO Plataforma': 270, 'Blue Serviços': 290 },
      { name: 'Oct', 'TD Consultoria': 260, 'RIKO Plataforma': 250, 'Blue Serviços': 310 },
      { name: 'Nov', 'TD Consultoria': 280, 'RIKO Plataforma': 240, 'Blue Serviços': 270 },
      { name: 'Dec', 'TD Consultoria': 250, 'RIKO Plataforma': 230, 'Blue Serviços': 260 }
    ],
    totalIncome: [
      { name: 'Segunda', Aguardando: 14000, Implantadas: 13000 },
      { name: 'Terça', Aguardando: 17500, Implantadas: 12000 },
      { name: 'Quarta', Aguardando: 6000, Implantadas: 22500 },
      { name: 'Quinta', Aguardando: 16000, Implantadas: 6500 },
      { name: 'Sexta', Aguardando: 13000, Implantadas: 12000 },
      { name: 'Sábado', Aguardando: 16500, Implantadas: 13500 },
      { name: 'Domingo', Aguardando: 21000, Implantadas: 11000 }
    ],
    lives: [
      {
        lastMonth: 2000,
        thisMonth: 4300
      },
      {
        lastMonth: 2800,
        thisMonth: 3800
      },
      {
        lastMonth: 1500,
        thisMonth: 4000
      },
      {
        lastMonth: 1600,
        thisMonth: 3000
      },
      {
        lastMonth: 1900,
        thisMonth: 4000
      },
      {
        lastMonth: 1800,
        thisMonth: 2700
      },
      {
        lastMonth: 3000,
        thisMonth: 5000
      }
    ],
    reality: [
      { name: 'Jan', contratosFinalizados: 10000, Aguardando: 7000 },
      { name: 'Fev', contratosFinalizados: 9000, Aguardando: 6000 },
      { name: 'Mar', contratosFinalizados: 11000, Aguardando: 5000 },
      { name: 'Abr', contratosFinalizados: 8300, Aguardando: 7000 },
      { name: 'Mai', contratosFinalizados: 15000, Aguardando: 8823 },
      { name: 'Jun', contratosFinalizados: 15000, Aguardando: 8823 },
      { name: 'Jul', contratosFinalizados: 15000, Aguardando: 8823 }
    ],
    topProducts: [
      {
        id: 0o1,
        productName: 'BLUE START ENF SC',
        leverage: 80,
        percent: 45
      },
      {
        id: 0o2,
        productName: 'BLUE START ENF CO',
        leverage: 60,
        percent: 29
      },
      {
        id: 0o3,
        productName: 'BLUE START APT CO',
        leverage: 55,
        percent: 18
      },
      {
        id: 0o4,
        productName: 'BLUE START APT SC',
        leverage: 30,
        percent: 25
      }
    ],
    serviceLevel: [
      {
        expectation: 4000,
        reality: 2400
      },
      {
        expectation: 3000,
        reality: 1398
      },
      {
        expectation: 2000,
        reality: 9800
      },
      {
        expectation: 2780,
        reality: 3908
      },
      {
        expectation: 1890,
        reality: 4800
      },
      {
        expectation: 2390,
        reality: 3800
      },
      {
        expectation: 3490,
        reality: 4300
      }
    ]
  });
});

export const GET = handle(app);
export const POST = handle(app);

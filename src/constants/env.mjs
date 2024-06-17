import { z } from 'zod';

import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_SECRET_KEY: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY
  }
});

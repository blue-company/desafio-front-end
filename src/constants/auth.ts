import type { CookieSerializeOptions } from 'cookie';

export const authToken = '@blue-company/auth-token';

export const authCookieOptions = {
  sameSite: 'strict'
} satisfies CookieSerializeOptions;

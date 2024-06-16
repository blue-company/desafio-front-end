import { env } from '@/constants/env.mjs';
import { getAuthToken } from '@/utils/getAuthToken';
import ky from 'ky';

function setTokenBeforeRequest(req: Request) {
  const isMissingToken =
    req.url &&
    req.url !== `${env.NEXT_PUBLIC_BASE_URL}auth/login` &&
    req.url !== `${env.NEXT_PUBLIC_BASE_URL}auth/validation` &&
    !req.headers.get('Authorization');

  if (isMissingToken) req.headers.set('Authorization', `Bearer ${getAuthToken()}`);
}

export const api = ky
  .create({
    prefixUrl: env.NEXT_PUBLIC_BASE_URL
  })
  .extend({
    hooks: {
      beforeRequest: [
        (req) => {
          setTokenBeforeRequest(req);
        }
      ]
    }
  });

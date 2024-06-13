import { getAuthToken } from '@/utils/getAuthToken';
import ky from 'ky';

function setTokenBeforeRequest(req: Request) {
  const isMissingToken =
    req.url &&
    req.url !== `${process.env.NEXT_PUBLIC_BASE_URL}auth/login` &&
    req.url !== `${process.env.NEXT_PUBLIC_BASE_URL}auth/validation` &&
    !req.headers.get('Authorization');

  if (isMissingToken) req.headers.set('Authorization', `Bearer ${getAuthToken()}`);
}

export const api = ky
  .create({
    prefixUrl: process.env.NEXT_PUBLIC_BASE_URL
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

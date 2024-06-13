import { parseCookies } from 'nookies';

import { authToken } from '@/constants/auth';

export function getAuthToken() {
  const token = parseCookies();
  const accessToken = token[authToken];

  return accessToken;
}

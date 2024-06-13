import { redirect } from 'next/navigation';
import { parseCookies } from 'nookies';

import { authToken } from '@/constants/auth';

export function getAuthToken() {
  const token = parseCookies();
  const accessToken = token[authToken];

  if (!accessToken) {
    return redirect('/login');
  }

  return accessToken;
}

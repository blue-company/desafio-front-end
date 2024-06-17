import { api } from '@/lib/ky';
import { loginParams, loginResponse } from './types';

export const authService = {
  async login(data: loginParams) {
    const response = api.post('api/auth/login', {
      json: data,
      cache: 'no-store'
    });

    return await response.json<loginResponse>();
  }
};

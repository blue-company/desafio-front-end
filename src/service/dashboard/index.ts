import { api } from '@/lib/ky';
import { GetAllDashboardResponse } from './type';

export const dashboardService = {
  async getAll() {
    const response = api.get('api/get-all');

    return response.json<GetAllDashboardResponse>();
  }
};

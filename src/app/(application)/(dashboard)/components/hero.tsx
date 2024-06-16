'use client';
import { dashboardService } from '@/service/dashboard';
import { useQuery } from '@tanstack/react-query';
import { FirstSection } from './firstSection';
import { SecondSection } from './secondSection';
import { ThirdSection } from './thirdSection';

export function Hero() {
  const { data } = useQuery({
    queryKey: ['getAllDashboard'],
    queryFn: async () => {
      return await dashboardService.getAll();
    }
  });

  if (!data) {
    return;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col 2xl:flex-row gap-8">
        <FirstSection data={data} />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-8">
        <SecondSection data={data} />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-8">
        <ThirdSection data={data} />
      </div>
    </div>
  );
}

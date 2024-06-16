import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Dashboard'
};

const Hero = dynamic(() => import('./components/hero').then((mod) => mod.Hero), {
  ssr: false
});

export default function DashboardPage() {
  return (
    <div className="p-4">
      <Hero />
    </div>
  );
}

import { Metadata } from 'next';
import { Hero } from './components/hero';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardPage() {
  return (
    <div className="p-4">
      <Hero />
    </div>
  );
}

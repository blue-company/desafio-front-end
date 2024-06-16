import { Metadata } from 'next';
import { Suspense } from 'react';
import { Hero } from './components/hero';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardPage() {
  return (
    <div className="p-4">
      <Suspense fallback={'Carregando'}>
        <Hero />
      </Suspense>
    </div>
  );
}

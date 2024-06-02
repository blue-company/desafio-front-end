'use client';

import DashboardLayout from 'src/layouts/dashboard';

import { DashboardView } from 'src/sections/dashboard/view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <DashboardLayout>
      <DashboardView />
    </DashboardLayout>
  );
}

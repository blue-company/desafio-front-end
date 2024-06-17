import { Metadata } from 'next';
import { DataTable } from './components/dataTable';

export const metadata: Metadata = {
  title: 'Leaderboard'
};

export default function LeaderboardPage() {
  return (
    <main className="p-4">
      <DataTable />
    </main>
  );
}

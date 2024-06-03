import { Card, CardProps, CardHeader } from '@mui/material';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  series: {
    name: string;
    data: number[];
  }[];
}

export default function LifesChart({ title, subheader, series }: Props) {
  const chartOptions = useChart({
    xaxis: {
      type: 'datetime',
      categories: [
        '2023-09-01',
        '2023-09-05',
        '2023-09-10',
        '2023-09-15',
        '2023-09-20',
        '2023-09-25',
        '2023-09-30',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy',
      },
    },
  });

  return (
    <Card sx={{ p: 1, height: '100%' }}>
      <CardHeader title={title} subheader={subheader} />
      <Chart
        dir="ltr"
        type="area"
        series={series}
        options={chartOptions}
        width="100%"
        height={320}
      />
    </Card>
  );
}

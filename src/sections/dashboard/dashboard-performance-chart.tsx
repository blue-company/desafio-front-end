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

export default function PerformanceChart({ title, subheader, series }: Props) {
  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value} mil`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return (
    <Card sx={{ p: 1, height: '100%' }}>
      <CardHeader title={title} subheader={subheader} />
      <Chart
        dir="ltr"
        type="bar"
        series={series}
        options={chartOptions}
        width="100%"
        height={320}
      />
    </Card>
  );
}

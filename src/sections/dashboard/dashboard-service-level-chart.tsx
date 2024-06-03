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

export default function ServiceLevelChart({ title, subheader, series }: Props) {
  const chartOptions = useChart({
    chart: {
      stacked: true,
      zoom: {
        enabled: true,
      },
    },
    legend: {
      itemMargin: {
        vertical: 8,
      },
      position: 'right',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
      ],
    },
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

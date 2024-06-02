import { Box, Card, Stack, useTheme, CardProps, CardHeader, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';
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

export default function RealityChart({ title, subheader, series }: Props) {
  const theme = useTheme();
  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value}`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  const calculateSum = (data: number[]) => data.reduce((sum, value) => sum + value, 0);

  const getColorByName = (name: string) => {
    switch (name) {
      case 'Aguardando':
        return {
          icon: 'solar:ticket-linear',
          bgColor: theme.palette.warning.lighter,
          iconColor: theme.palette.warning.main,
        };
      case 'Contratos finalizados':
        return {
          icon: 'solar:bag-4-linear',
          bgColor: theme.palette.success.lighter,
          iconColor: theme.palette.success.main,
        };
      default:
        return {
          icon: 'solar:info-circle-linear',
          bgColor: theme.palette.info.lighter,
          iconColor: theme.palette.info.main,
        };
    }
  };

  const sums = series.map((item) => {
    const colors = getColorByName(item.name);
    return {
      name: item.name,
      sum: calculateSum(item.data),
      ...colors,
    };
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
        height={240}
      />
      {/* <InfoRow
        bgColor={theme.palette.success.lighter}
        iconColor={theme.palette.success.main}
        title="Contratos finalizados"
        caption="Global"
        value={8000}
      /> */}
      {sums.map((item) => (
        <InfoRow
          key={item.name}
          bgColor={item.bgColor}
          iconColor={item.iconColor}
          icon={item.icon}
          title={item.name}
          caption="Total"
          value={item.sum}
        />
      ))}
    </Card>
  );
}

interface InfoRowProps {
  bgColor: string;
  iconColor: string;
  icon: string;
  title: string;
  caption: string;
  value: number;
}

function InfoRow({ bgColor, iconColor, icon, title, caption, value }: InfoRowProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" px={2}>
      <Stack direction="row" gap={2}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            width: 'fit-content',
            height: 'fit-content',
            bgcolor: bgColor,
          }}
        >
          <Iconify icon={icon} color={iconColor} />
        </Box>
        <Stack width={150}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="caption">{caption}</Typography>
        </Stack>
      </Stack>
      <Typography variant="h6" fontWeight={200} color="success.main">
        {value}
      </Typography>
    </Stack>
  );
}

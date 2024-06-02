'use client';

import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  _lifesChart,
  _realityChart,
  _serviceLevel,
  _platformChart,
  _performanceChart,
} from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import DashboardSells from '../dashboard-sells';
import LifesChart from '../dashboard-lifes-chart';
import RealityChart from '../dashboard-reality-chart';
import PlatformsChatInfo from '../dashboard-platforms-chart';
import PerformanceChart from '../dashboard-performance-chart';
import ServiceLevelChart from '../dashboard-service-level-chart';
import TopProductsDataGrid from '../dashboard-top-products-data-grid';

// ----------------------------------------------------------------------

export default function DashboardView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Dashboard </Typography>

      <Grid
        container
        justifyContent="center"
        spacing={1}
        sx={{
          my: 5,
        }}
      >
        <Grid item xs={12} md={6}>
          <DashboardSells />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlatformsChatInfo title="Plataformas" chart={_platformChart} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceChart title="Rendimento total" series={_performanceChart} />
        </Grid>
        <Grid item xs={12} md={3}>
          <LifesChart title="Vidas" series={_lifesChart} />
        </Grid>
        <Grid item xs={12} md={5}>
          <RealityChart title="Realidade" series={_realityChart} />
        </Grid>
        <Grid item xs={12} md={5}>
          <TopProductsDataGrid title="Top produtos" />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceLevelChart title="Nível de serviço" series={_serviceLevel} />
        </Grid>
      </Grid>
    </Container>
  );
}

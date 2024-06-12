"use client";
import GenericCard from "@/components/genericCard";
import { Grid } from "@mui/material";
import PlataformChart from "@/components/charts/plataformChart";
import PerformanceChart from "@/components/charts/performanceChart";
import LifesCharts from "@/components/charts/lifesCharts";
import RealChart from "@/components/charts/realCharts";
import MapChart from "@/components/charts/mapChart";
import ServicesChart from "@/components/charts/servicesChart";
import SalesCard from '@/components/salesCard'
const Dashboard = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        gap: 6,
        justifyContent: "center",
        margin: "5rem 0",
        padding: "1rem",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", gap: 5, justifyContent: "center" }}
      >
        <Grid item xl={6}>
          <SalesCard />
        </Grid>
        <Grid item xl={4}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<PlataformChart />}
          />
        </Grid>
      </Grid>

      {/* <Grid
        container
        className="flex"
        sx={{ gap: 3, justifyContent: "center" }}
      >
        <Grid item xl={4}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<PerformanceChart />}
          />
        </Grid>

        <Grid item xl={3}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<LifesCharts />}
          />
        </Grid>

        <Grid item xl={3}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<RealChart />}
          />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ display: "flex", gap: 3, justifyContent: "center" }}
      >
        <Grid xl={4}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<LifesCharts />}
          />
        </Grid>

        <Grid xl={3}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<MapChart />}
          />
        </Grid>

        <Grid xl={3}>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<MapChart />}
          />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;

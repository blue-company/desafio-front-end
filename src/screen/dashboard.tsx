"use client";
import GenericCard from "@/components/genericCard";
import { Grid } from "@mui/material";
import PlataformChart from "@/components/charts/plataformChart";
import PerformanceChart from "@/components/charts/performanceChart";
import LifesCharts from "@/components/charts/lifesCharts";
import RealChart from "@/components/charts/realCharts";
import MapChart from "@/components/charts/mapChart";
import ServicesChart from "@/components/charts/servicesChart";
const Dashboard = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        gap: 6,
        justifyContent: "center",
        margin: "5rem 0",
      }}
    >
      <Grid container>
        <GenericCard
          title="teste"
          height="auto"
          width="100%"
          chart={<PlataformChart />}
        />
      </Grid>
      {/* 
      <Grid container>
        <GenericCard
          title="teste"
          height="auto"
          width="100%"
          chart={<PerformanceChart />}
        />
      </Grid>

      <Grid container>
        <GenericCard
          title="teste"
          height="auto"
          width="100%"
          chart={<RealChart />}
        />
      </Grid>

      <Grid container>
        <GenericCard
          title="teste"
          height="auto"
          width="100%"
          chart={<MapChart />}
        />

        <Grid container>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<LifesCharts />}
          />
        </Grid>

        <Grid container>
          <GenericCard
            title="teste"
            height="auto"
            width="100%"
            chart={<ServicesChart />}
          />
        </Grid> */}
    </Grid>
  );
};

export default Dashboard;

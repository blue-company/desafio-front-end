"use client";
import GenericCard from "@/components/genericCard";
import { Grid } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

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

      
      {/* <Grid container xl={6}>
        <GenericCard
          title="teste"
          height="auto"
          width="100%"
          chart={
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={300}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          }
        />
      </Grid> */}

      {/* <Grid container xl={3}>
        <GenericCard
          title="teste"
          height="auto"
          width="100%"
          chart={
            <LineChart
              width={500}
              height={300}
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
              rightAxis="rightAxisId"
            />
          }
        />
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;

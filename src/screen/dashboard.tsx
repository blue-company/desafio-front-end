"use client";
import React, { Suspense, useEffect } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import GenericCard from "@/components/genericCard";
import SalesCard from "@/components/salesCard";
const PlataformChart = dynamic(
  () => import("@/components/charts/plataformChart"),
  {
    ssr: false,
  }
);

const RealChart = dynamic(() => import("@/components/charts/realCharts"), {
  ssr: false,
});

const PerformanceChart = dynamic(
  () => import("@/components/charts/performanceChart"),
  {
    ssr: false,
  }
);

const LifesCharts = dynamic(() => import("@/components/charts/lifesCharts"), {
  ssr: false,
});

const ServicesChart = dynamic(
  () => import("@/components/charts/servicesChart"),
  {
    ssr: false,
  }
);

const MapChart = dynamic(() => import("@/components/charts/mapChart"), {
  ssr: false,
});

const TopProductsChart = dynamic(
  () => import("@/components/charts/topProducstChart"),
  {
    ssr: false,
  }
);

import styles from "./DashBoard.module.css";
import dynamic from "next/dynamic";

const Dashboard = () => {
  useEffect(() => {});
  return (
    <Grid
      container
      sx={{
        display: "flex",
        gap: 6,
        justifyContent: "center",
        margin: "4rem 0",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", gap: 9 }}
      >
        <Grid item xl={7} lg={10} md={10} sm={7} xs={10}>
          <SalesCard />
        </Grid>
        <Grid item xl={4} lg={10} md={10} sm={10} xs={10}>
          <GenericCard
            title="Plataformas"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <PlataformChart />
              </Suspense>
            }
          />
        </Grid>
      </Grid>

      <Grid
        container
        className="flex"
        sx={{
          gap: { xl: 5, lg: 1, md: 4, sm: 5, xs: 5 },
          justifyContent: "center",
        }}
      >
        <Grid item xl={5} lg={5} md={10} sm={10} xs={10}>
          <GenericCard
            title="Rendimento total"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <PerformanceChart />
              </Suspense>
            }
          />
        </Grid>

        <Grid item xl={3} lg={5} md={10} sm={10} xs={10}>
          <GenericCard
            title="Vidas"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <LifesCharts />
              </Suspense>
            }
          />
        </Grid>

        <Grid item xl={3} lg={5} md={10} sm={10} xs={10}>
          <GenericCard
            title="Realidade"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <RealChart />
              </Suspense>
            }
          />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          gap: { xl: 5, lg: 1, md: 4, sm: 5, xs: 5 },
          justifyContent: "center",
        }}
      >
        <Grid item xl={5} lg={5} md={10} sm={10} xs={10}>
          <GenericCard
            title="Top produtos"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <TopProductsChart />
              </Suspense>
            }
          />
        </Grid>

        <Grid item xl={3} lg={5} md={10} sm={10} xs={10}>
          <GenericCard title="Mapeamento de vendas (UF)" chart={<MapChart />} />
        </Grid>

        <Grid item xl={3} lg={5} md={10} sm={10} xs={10}>
          <GenericCard
            title="Nível de serviço"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <ServicesChart />
              </Suspense>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

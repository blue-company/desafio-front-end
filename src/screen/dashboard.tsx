"use client";
import React, { Suspense, lazy } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import GenericCard from "@/components/genericCard";
import SalesCard from "@/components/salesCard";
import styles from "./DashBoard.module.css";

const PlataformChart = lazy(() => import("@/components/charts/plataformChart"));
const PerformanceChart = lazy(
  () => import("@/components/charts/performanceChart")
);
const LifesCharts = lazy(() => import("@/components/charts/lifesCharts"));
const RealChart = lazy(() => import("@/components/charts/realCharts"));
const MapChart = lazy(() => import("@/components/charts/mapChart"));
const ServicesChart = lazy(() => import("@/components/charts/servicesChart"));

const Dashboard = () => {
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
        sx={{ display: "flex", gap: 5, justifyContent: "center" }}
      >
        <Grid item xl={6}>
          <SalesCard />
        </Grid>
        <Grid item xl={4}>
          <GenericCard
            title="Plataformas"
            height="auto"
            width="100%"
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
        sx={{ gap: 3, justifyContent: "center" }}
      >
        <Grid item xl={4}>
          <GenericCard
            title="Rendimento total"
            height="auto"
            width="100%"
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

        <Grid item xl={3}>
          <GenericCard
            title="Vidas"
            height="auto"
            width="100%"
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

        <Grid item xl={3}>
          <GenericCard
            title="Realidade"
            height="auto"
            width="100%"
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
        sx={{ display: "flex", gap: 3, justifyContent: "center" }}
      >
        <Grid xl={4}>
          <GenericCard
            title="Mapeamento de vendas por uf"
            height="auto"
            width="100%"
            chart={
              <Suspense
                fallback={
                  <Box className={styles.loadingBox}>
                    <CircularProgress className="mb-5" />
                  </Box>
                }
              >
                <MapChart />
              </Suspense>
            }
          />
        </Grid>

        <Grid xl={3}>
          <GenericCard
            title="nível de serviço"
            height="auto"
            width="50%"
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

        <Grid item xl={3}>
          <GenericCard
            title="Realidade"
            height="auto"
            width="100%"
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
    </Grid>
  );
};

export default Dashboard;

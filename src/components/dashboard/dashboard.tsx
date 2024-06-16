"use client"
import { Box, Grid, Typography } from "@mui/material"
import { Sales } from "../Sales/sales"
import { Platforms } from "../platforms/platforms"
import { Income } from "../income/icome"
import { Lifes } from "../lifes/lifes"
import { Reality } from "../reality/reality"
import { TopProducts } from "../products/products"
import { SalesMap } from "../salesMap/map"
import { ServiceLevel } from "../serviceLevel/serviceLevel"





export function Dashboard() {
    return (
        <Box sx={{ height: "calc(100vh - 100px)", overflow: "auto" }}>
            <Typography variant="h3" color="text.primary" fontWeight={700}
                sx={{
                    height: { lg: "200px" },
                    backgroundColor: {
                        xs: "background.default",
                        lg: "transparent"
                    },
                    marginTop: {
                        xs: "0",
                        xl: "-110px"
                    },
                    marginBottom: {
                        xs: "-30px",
                    },
                    padding: {
                        xs: "1rem",
                        lg: "2rem",

                    },
                    textAlign: {
                        xs: "center",
                        lg: "left"
                    },
                    position: {
                        lg: "absolute"
                    },

                }}>Dashboard</Typography>
            <Grid container spacing={2} sx={{
                height: {
                    lg: "calc(100% - 200px)",
                    xs: "100%"
                },
                bgcolor: "background.default",
                paddingX: {
                    xs: "1rem",
                    lg: "2rem",
                    md: "5rem",
                },
                paddingBottom: {
                    xs: "1rem",
                    lg: "2rem"
                },
                paddingTop: "20px"
            }} >
                <Grid item xs={12} md={12} lg={6} xl={7} sx={{ height: { xl: "360px", sm: "580px" }, paddingTop: "1rem" }}>
                    <Sales />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={5} sx={{ height: { xl: "380px", sm: "588px", xs: "360px" }, paddingTop: "1rem" }}>
                    <Platforms />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={5} sx={{ height: { xl: "380px", sm: "588px", xs: "360px" }, paddingTop: "1rem" }}>
                    <Income />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={4} sx={{ height: { xl: "380px", sm: "588px", xs: "360px" }, paddingTop: "1rem" }}>
                    <Lifes />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={3} sx={{ height: { xl: "380px", sm: "588px", xs: "360px" }, paddingTop: "1rem" }}>
                    <Reality />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={5} sx={{ height: { xl: "412px", sm: "620px", xs: "360px" }, paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <TopProducts />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={4} sx={{ height: { xl: "412px", sm: "588px", xs: "360px" }, paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <SalesMap />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={3} sx={{ height: { xl: "412px", sm: "588px", xs: "360px" }, paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <ServiceLevel />
                </Grid>
            </Grid>
        </Box>
    )
}

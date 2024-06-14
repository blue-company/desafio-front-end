import React from "react";
import { Grid, Paper, Button, Typography, Box } from "@mui/material";
import { CiExport } from "react-icons/ci";
import chart from "@/assets/icons/chart.png";
import tag from "@/assets/icons/tag.png";
import profileIcon from "@/assets/icons/profileIcon.png";
import contracts from "@/assets/icons/contracts.png";
import CardsSeller from "./cards";

const SalesCard = () => {
  return (
    <Grid container justifyContent="center">
      <Paper
        sx={{ borderRadius: 7, padding: 3, width: " 100%", height: "auto" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <Box>
            <Typography variant="h4" sx={{ fontFamily: "Poppins", mb: 1 }}>
              Vendas Hoje
            </Typography>
            <Typography variant="body1">Resumo de vendas</Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              height: 30,
              border: "1px solid #424141a2",
              color: "#292929",
            }}
          >
            <CiExport className="text-gray-800 mr-1" />
            Exportar
          </Button>
        </Box>
        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          flexWrap="nowrap"
        >
          <Grid item>
            <CardsSeller
              color="#FFE2E5"
              img={chart}
              value="R$ 1.000"
              text="Total de vendas"
              porcentage="8% a mais que ontem"
            />
          </Grid>
          <Grid item>
            <CardsSeller
              color="#FFF4DE"
              img={contracts}
              value="300"
              text="Total de contratos"
              porcentage="5% a mais que ontem"
            />
          </Grid>
          <Grid item>
            <CardsSeller
              color="#DCFCE7"
              img={tag}
              value="5"
              text="Implantados"
              porcentage="1.2% a mais que ontem"
            />
          </Grid>
          <Grid item>
            <CardsSeller
              color="#F3E8FF"
              img={profileIcon}
              value="8"
              text="Novos contratos"
              porcentage="0.5% a mais que ontem"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SalesCard;

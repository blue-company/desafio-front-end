import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CiExport } from "react-icons/ci";
import chart from "@/assets/icons/chart.png";
import tag from "@/assets/icons/tag.png";
import profileIcon from "@/assets/icons/profileIcon.png";
import contracts from "@/assets/icons/contracts.png";
import React from "react";
import CardsSeller from "./cards";

function SalesCard() {
  return (
    <Grid>
      <Paper sx={{ borderRadius: 7, padding: 3, width: "100%", height: '420px' }}>
        <Grid className="flex justify-between py-2 px-3 items-center">
          <Typography variant="h4" className="pt-6 pl-6 pb-2 text-3xl">
            Vendas Hoje <br />{" "}
            <Typography variant="body1">Resumo de vendas</Typography>
          </Typography>
          <Button
            variant="outlined"
            className="h-10 border-[#424141a2] text-[#292929]"
          >
            <CiExport className="text-gray-800 mr-1" />
            Exportar
          </Button>
        </Grid>

        <Grid className="flex gap-4 justify-around">
          <CardsSeller
            color="#FFE2E5"
            img={chart}
            value="R$ 1.000"
            text="Total de vendas"
            porcentage="8% a mais que ontem"
          />

          <CardsSeller
            color="#FFF4DE"
            img={contracts}
            value="300"
            text="Total de contratos"
            porcentage="5% a mais que ontem"
          />

          <CardsSeller
            color="#DCFCE7"
            img={tag}
            value="5"
            text="Implantados"
            porcentage="1.2% a mais que ontem"
          />

          <CardsSeller
            color="#F3E8FF"
            img={profileIcon}
            value="8"
            text="Novos contratos"
            porcentage="0.5% a mais que ontem"
          />
        </Grid>
      </Paper>
    </Grid>
  );
}

export default SalesCard;

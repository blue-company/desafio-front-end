import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CardsSellerI {
  img: any;
  value: string | number;
  text: string;
  porcentage: string | number;
  color: string;
}

function CardsSeller({ img, value, text, porcentage, color }: CardsSellerI) {
  return (
    <Paper
      sx={{
        background: color,
        padding: 2,
        alignItems: "center",
        borderRadius: 6
      }}
    >
      <Image width={50} src={img} alt="" />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: 2,
        }}
      >
        <Typography variant="h4">{value}</Typography>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="body2">{porcentage}</Typography>
      </Grid>
    </Paper>
  );
}

export default CardsSeller;

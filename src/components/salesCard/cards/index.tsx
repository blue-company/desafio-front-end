import { Grid, Paper, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CardsSellerI {
  img: any;
  value: string | number;
  text: string;
  porcentage: string | number;
  color: string;
}

const CardsSeller: React.FC<CardsSellerI> = ({ img, value, text, porcentage, color }) => {
  return (
    <Paper
      sx={{
        backgroundColor: color,
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" height={50} width={50} mb={2}>
        <Image width={70} height={60} src={img} alt="" />
      </Box>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h4" align="center" sx={{ fontFamily: "Poppins" }}>
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" sx={{ fontFamily: "Poppins" }}>
            {text}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center" sx={{ fontFamily: "Poppins" }}>
            {porcentage}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardsSeller;

import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface GenericCardI {
  title: string;
  chart: any;
  width: string;
  height: string;
}

const GenericCard = ({ title, chart }: GenericCardI) => {
  return (
    <Grid container>
      <Paper className="w-[100%]" sx={{ borderRadius: 7, width: " 100%" }}>
        <Typography
          variant="h5"
          className="pt-6 pl-6 pb-2 "
          fontFamily="Poppins"
        >
          {title}
        </Typography>
        <Grid>{chart}</Grid>
      </Paper>
    </Grid>
  );
};

export default GenericCard;

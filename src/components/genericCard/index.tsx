import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface GenericCardI {
  title: string;
  chart: any;
}

const GenericCard = ({ title, chart }: GenericCardI) => {
  return (
    <Grid container>
      <Paper sx={{ borderRadius: 7, width: " 100%", height: "auto" }}>
        <Typography
          variant="h5"
          className="pt-6 pl-6 pb-2 font-[Poppins] font-semibold"
        >
          {title}
        </Typography>
        <Grid className=" h-[300px]">{chart}</Grid>
      </Paper>
    </Grid>
  );
};

export default GenericCard;

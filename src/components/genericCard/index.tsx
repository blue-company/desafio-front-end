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
      <Paper className="rounded-2xl w-[100%]" >
        <Typography className="pt-6 pl-6 pb-2 text-3xl">{title}</Typography>
        <Grid>{chart}</Grid>
      </Paper>
    </Grid>
  );
};

export default GenericCard;

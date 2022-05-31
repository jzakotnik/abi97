import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "../components/Typography";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Zitate({ quote }: any) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 4 }}
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4">Zitat des Tages</Typography>
      </Grid>
      <Grid item>
        <Paper elevation={0} sx={{ marginLeft: 20, marginRight: 20 }}>
          <Typography variant="h5">{quote}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Zitate;

import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function GroupPhoto() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 4 }}
      spacing={2}
    >
      <Typography variant="h4">Und hier der beste Jahrgang 1997...</Typography>
      <Box
        component="img"
        sx={{
          width: "80%",
        }}
        alt="Abi 97 image"
        src="/abi.jpg"
      />
    </Grid>
  );
}

export default GroupPhoto;

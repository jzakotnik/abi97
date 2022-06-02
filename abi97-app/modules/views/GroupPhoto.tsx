import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Image from "next/image";
import abiPic from "../../public/abi.jpg";

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
      sx={{ marginTop: 4, paddingLeft: 5, paddingRight: 5 }}
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4">Der beste Jahrgang 1997...</Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Image src={abiPic} alt="Abi Gruppenphoto" />
      </Grid>
    </Grid>
  );
}

export default GroupPhoto;

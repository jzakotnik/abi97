import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import PinnwandCard from "./PinnwandCard";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Pinnwand({ posts }: any) {
  console.log("Posts to the frontend ", posts);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 4 }}
      spacing={2}
    >
      {posts.map((p) => {
        return <PinnwandCard post={p} />;
      })}
    </Grid>
  );
}

export default Pinnwand;

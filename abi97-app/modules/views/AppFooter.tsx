import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

function Copyright() {
  return (
    <React.Fragment>
      <Typography>Made with ❤️ by Jure</Typography>
      <Typography>Schickt uns eine eMail:</Typography>
      <Link color="inherit" href="mailto:abi97@derjure.de">
        Orga Team eMail
      </Link>{" "}
      <Typography>Impressum auf</Typography>
      <Link color="inherit" href="https://github.com/jzakotnik">
        Github
      </Link>{" "}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

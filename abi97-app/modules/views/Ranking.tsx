import React, { useState } from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ButtonGroup } from "@mui/material";
import Button from "../components/Button";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

import ranking from "../../pages/api/ranking.json";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Ranking() {
  const [selectedRank, setSelectedRank] = useState(1);
  const [winner, setWinner] = useState({
    winner1: "Noch niemand",
    winner2: "Noch niemand",
  });

  const handleChange = (e) => {
    console.log("Changed dropdown to id", e.target.value);
    const winner = ranking.ranks.filter((i) => i.id == e.target.value);

    const winners = { winner1: winner[0].winner1, winner2: winner[0].winner2 };
    console.log("and the winner is..", winners);
    setWinner(winners);
  };

  const generateItems = () => {
    return ranking.ranks.map((r) => {
      return (
        <MenuItem key={r.id} value={r.id}>
          {r.question}
        </MenuItem>
      );
    });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 4, paddingLeft: 3, paddingRight: 3 }}
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4">
          Erinnert ihr euch noch an das Ranking?
        </Typography>
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Frage</InputLabel>
          <Select
            labelId="rankquestion"
            id="rankquestion"
            label="Frage"
            onChange={handleChange}
          >
            {generateItems()}
          </Select>
        </FormControl>
        <TextField
          id="filled-read-only-input"
          label="Platz 1"
          value={winner.winner1}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Platz 2"
          value={winner.winner2}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default Ranking;

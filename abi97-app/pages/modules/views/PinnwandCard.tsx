import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const getIcon = (willParticipate: boolean) => {
  return willParticipate ? <CheckCircleIcon /> : <DoNotDisturbAltIcon />;
};

export default function PinnwandCard({ post }: any) {
  //console.log("Post to the frontend ", post);
  return (
    <Grid item>
      <Card sx={{ width: 300 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="will Participate">
              {getIcon(post.willParticipate)}
            </Avatar>
          }
          title={post.sender}
          subheader={
            "Ich bin " + (post.willParticipate ? "dabei" : "nicht dabei")
          }
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

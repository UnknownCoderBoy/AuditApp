import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{ maxWidth: 300 }}
      sm={{ maxWidth: 300 }}
      md={{ maxWidth: 300 }}
      lg={{ maxWidth: 300 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://image.similarpng.com/very-thumbnail/2020/08/symbol-design-of-abstract-people-in-a-bulb-vector-PNG.png"
          alt="green iguana"
        />
        <CardContent>
          <center>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </center>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

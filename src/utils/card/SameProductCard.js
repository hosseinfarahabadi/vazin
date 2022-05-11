import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SameProductCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: "0px",
        borderRadius: "25px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "-15px 15px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          150،000 تومان
        </Typography>
      </CardContent>
    </Card>
  );
}

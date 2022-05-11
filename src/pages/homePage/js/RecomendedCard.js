import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/RecomendedCard.css";

export default function RecomCard(props) {
  return (
    <CardActionArea sx={{ display: "block" }} raised={true}>
      <Link to={props.url}>
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
            <Typography
              className="recom-card-tex"
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              150،000 تومان
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="error"
              size="small"
              className="recommend-btn"
              href={props.links}
            >
              افزودن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Link>
    </CardActionArea>
  );
}

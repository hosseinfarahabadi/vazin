import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { padding } from "@mui/system";

export default function ProductCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 420,

        marginTop: "0px",
        padding: "15px",
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: "-15px 15px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={props.image}
        alt="green iguana"
      />
      <CardContent
        sx={{ paddingBottom: "0px !important", padding: "2px 5px !important" }}
      >
        <p className="prod-card-text typography-bold">{props.title}</p>
        <div className="tb-dt-prod-card-wrapper">
          <div className="prod-card-content">
            <p
              className="prod-card-price typography-bold"
              style={{ margin: "0px" }}
            >
              150،000{" "}
              <span
                className="prod-card-amount typography-light"
                style={{ margin: "10px 0px" }}
              >
                تومان
              </span>
            </p>
          </div>
          <a href={props.links} className="prod-card-btn-wrap">
            <button className="prod-item-card-btn">+</button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

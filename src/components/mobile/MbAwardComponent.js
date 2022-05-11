import { Grid } from "@mui/material";
import React from "react";

export default function MbAwardComponent() {
  return (
    <div>
      <Grid container className="award-container">
        <Grid item xs={6} className="award-content-right">
          <img src="/image/file.png" alt="" className="award-img"></img>
          <div className="line-award"></div>
          <p className="award-text typography-medium">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </Grid>
        <Grid item xs={6} className="award-content">
          <img src="/image/file.png" alt="" className="award-img"></img>
          <div className="line-award"></div>
          <p className="award-text typography-medium">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

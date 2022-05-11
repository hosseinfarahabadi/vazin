import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import TabMenu from "../../components/TabMenu";

export default function BuyCard() {
  return (
    <>
      <Paper className="proItem-buyCard-wraper">
        <p className="proItem-buyCard-title typography-bold">فروش به صورت:</p>
        <TabMenu />
      </Paper>
    </>
  );
}

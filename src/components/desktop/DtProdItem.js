import { Grid } from "@mui/material";
import React from "react";
import BuyCard from "../../utils/card/BuyCard";
import ProductItemSwiper from "../../utils/swiper/ProductItemSwiper";

export default function DtProdItem() {
  return (
    <Grid
      container
      alignItems="start"
      justifyContent="space-between"
      spacing={2}
    >
      <Grid item xs={5} height={590}>
        <ProductItemSwiper />
      </Grid>
      <Grid item xs={3}>
        <p className="proItem-item-title typography-heavy">استرچ صنعتی</p>
        <div className="prodItem-line"></div>
        <ul style={{ padding: "0px", paddingRight: "1rem" }}>
          <li>
            <p className="proItem-item-text typography-regular">
              تولید شده با استفاده از مواد اولیه درجه یک
            </p>
          </li>
          <li>
            <p className="proItem-item-text typography-regular">
              قیمت مناسب و مقرون به صرفه
            </p>
          </li>
          <li>
            <p className="proItem-item-text typography-regular">
              دارای مجوز و تاییدیه وزارت بهداشت
            </p>
          </li>
        </ul>
      </Grid>
      <Grid item xs={4}>
        <BuyCard />
      </Grid>
    </Grid>
  );
}

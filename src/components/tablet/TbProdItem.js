import { Grid } from "@mui/material";
import React from "react";
import BuyCard from "../../utils/card/BuyCard";
import ProductItemSwiper from "../../utils/swiper/ProductItemSwiper";

export default function TbProdItem() {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={6}>
        <ProductItemSwiper />
      </Grid>
      <Grid item xs={5}>
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
        <BuyCard />
      </Grid>
    </Grid>
  );
}

import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../css/productCat.css";

export default function ProductCat() {
  return (
    <div>
      <Grid container justifyContent="center" mt={3}>
        <div className="btn-home-right typography-regular">
          <Link to="/productPage/ProductItem">
            {/* <p className="btn-home-text">شیرینک</p> */}
            شیرینک
          </Link>
        </div>
        <div className="btn-home typography-regular">
          <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
        </div>
        <div className="btn-home typography-regular">
          <Link to="/productPage/ProductItem">پاکت بسته بندی</Link>
        </div>
        <div className="btn-home typography-regular">
          <Link to="/productPage/ProductItem">نایلون حبابدار</Link>
        </div>
        <div className="btn-home-left typography-regular">
          <Link to="/productPage/ProductItem">نایلون</Link>
        </div>
      </Grid>
      <Grid container justifyContent="center">
        <div className="btn-home-right-bottom typography-regular">
          <Link to="/productPage/ProductItem">شیرینک</Link>
        </div>
        <div className="btn-home typography-regular">
          <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
        </div>
        <div className="btn-home typography-regular">
          <Link to="/productPage/ProductItem">پاکت بسته بندی</Link>
        </div>
        <div className="btn-home typography-regular">
          <Link to="/productPage/ProductItem">نایلون حبابدار</Link>
        </div>
        <div className="btn-home-left-bottom typography-regular">
          <Link to="/productPage/ProductItem">نایلون</Link>
        </div>
      </Grid>
    </div>
  );
}

import React, { useState } from "react";
import "../../utils/style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderProdDesktop from "../../utils/header/HeaderProdDesktop";
import DeviceProdHeader from "../../utils/header/DeviceProdHeader";

export default function ProductHeader() {
  const matches = useMediaQuery("(min-width:1124px)");

  return (
    <div>
      <div>
        {matches ? <HeaderProdDesktop /> : <DeviceProdHeader />}
        {/* <div className="push-header"></div> */}
      </div>
    </div>
  );
}

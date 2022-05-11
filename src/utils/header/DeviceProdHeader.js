import React from "react";
import { useMediaQuery } from "@mui/material";
import TabletHeader from "./HeaderProdTablet";
import MbProdHeader from "./MbProdHeader";

export default function DeviceHeader() {
  const matches = useMediaQuery("(max-width:500px)");
  return <div>{matches ? <MbProdHeader /> : <TabletHeader />}</div>;
}

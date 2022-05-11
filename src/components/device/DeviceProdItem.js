import React from "react";
import { useMediaQuery } from "@mui/material";
import MbProdItem from "../mobile/MbProdItem";
import TbProdItem from "../tablet/TbProdItem";

export default function DeviceProdItem() {
  const matches = useMediaQuery("(max-width:500px)");
  return <div>{matches ? <MbProdItem /> : <TbProdItem />}</div>;
}

import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import TbSameProduct from "../tablet/TbSameProduct";
import DtSameProduct from "../desktop/DtSameProduct";
// import { Link } from "react-router-dom";

export default function SameProduct() {
  const matches = useMediaQuery("(max-width:1125px)");

  return <div>{matches ? <TbSameProduct /> : <DtSameProduct />}</div>;
}

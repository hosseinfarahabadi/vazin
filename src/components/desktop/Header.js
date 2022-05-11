import React from "react";
import "../../utils/style.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import DesktopHeader from "../../utils/header/DesktopHeader";
import DeviceHeader from "../../utils/header/DeviceHeader";
// import { Link } from "react-router-dom";

export default function Header() {
  const matches = useMediaQuery("(max-width:1125px)");

  return <div>{matches ? <DeviceHeader /> : <DesktopHeader />}</div>;
}

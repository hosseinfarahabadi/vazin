import React from "react";

import TbHeader from "./TbHeader";
import MbHeader from "./MbHeader";
import { useMediaQuery } from "@mui/material";

export default function DeviceHeader() {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div>
      {matches ? <MbHeader /> : <TbHeader />}
      <div className="push-header"></div>
    </div>
  );
}

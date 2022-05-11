import React from "react";
import ProductFooter from "../../components/desktop/ProductFooter";
import Header from "../../components/desktop/Header";
import { Container, useMediaQuery } from "@mui/material";
import SameProductSwiper from "../../utils/swiper/SameProductSwiper";
import SameProduct from "../../components/desktop/SameProduct";
import DtProdItem from "../../components/desktop/DtProdItem";
import ToTopComponent from "../../components/ToTopComponent";
import DeviceProdItem from "../../components/device/DeviceProdItem";
import MbFooter from "../../components/mobile/MbFooter";
import MbSameProduct from "../../components/mobile/MbSameProduct";

export default function Product() {
  const matches = useMediaQuery("(max-width:1125px)");
  const matchesMob = useMediaQuery("(max-width:500px)");
  return (
    <div>
      <ToTopComponent />

      <Header />
      <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
        <div className="prodItem-navigation">
          <p>وزین پلاست /</p>
          <p>محصولات /</p>
          <p>ظروف یکبار مصرف </p>
        </div>
        {matches ? <DeviceProdItem /> : <DtProdItem />}

        <div>
          <p className="prodItem-same-text typography-regular">کالاهای مشابه</p>
        </div>
        <SameProductSwiper />
      </Container>
      {matchesMob ? <MbSameProduct /> : <SameProduct />}
      {matchesMob ? <MbFooter /> : <ProductFooter />}
    </div>
  );
}

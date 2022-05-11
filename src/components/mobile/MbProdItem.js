import React from "react";
import BuyCard from "../../utils/card/BuyCard";
import ProductItemSwiper from "../../utils/swiper/ProductItemSwiper";

export default function MbProdItem() {
  return (
    <div className="mb-product-item">
      <ProductItemSwiper />

      <BuyCard />
    </div>
  );
}

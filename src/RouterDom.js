import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/homePage/js/HomePage";
import Media from "./pages/media/js/MediaPage";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/aboutus/AboutUs";
import NotFound from "./pages/not found/NotFound";
import ProductItem from "./pages/product item/ProductItem";
import ProductPage from "./pages/product page/ProductPage";
import UserAccount from "./pages/user account/UserAccount";
import ManagerPage from "./pages/manager/js/ManagerPage";

export default function RouterDom() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="productPage" element={<ProductPage />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="productPage/ProductItem" element={<ProductItem />} />
          <Route path="UserAccount" element={<UserAccount />} />
          <Route path="manager" element={<ManagerPage />} />
          <Route path="media" element={<Media />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}

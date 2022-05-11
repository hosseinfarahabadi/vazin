import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function MbFooter() {
  const [productSrc, setProductSrc] = useState(
    "./image/mobile/footer/Category.svg"
  );
  const [homeSrc, setHomeSrc] = useState("./image/mobile/footer/Home.svg");
  const [userSrc, setUserSrc] = useState("./image/mobile/footer/Profile.svg");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHomeSrc("./image/mobile/footer/solid/Home.svg");
    }
    if (location.pathname === "/productPage") {
      setProductSrc("./image/mobile/footer/solid/Category.svg");
    }
    if (location.pathname === "/UserAccount") {
      setUserSrc("./image/mobile/footer/solid/Profile.svg");
    }
  }, [location.pathname]);
  const productHandle = () => {
    setProductSrc("./image/mobile/footer/solid/Category.svg");
    setHomeSrc("./image/mobile/footer/Home.svg");
    setUserSrc("./image/mobile/footer/Profile.svg");
  };
  const homeHandle = () => {
    setProductSrc("./image/mobile/footer/Category.svg");
    setHomeSrc("./image/mobile/footer/solid/Home.svg");
    setUserSrc("./image/mobile/footer/Profile.svg");
  };
  const userHandle = () => {
    setProductSrc("./image/mobile/footer/Category.svg");
    setHomeSrc("./image/mobile/footer/Home.svg");
    setUserSrc("./image/mobile/footer/solid/Profile.svg");
  };
  return (
    <Container maxWidth="lx" className="mb-footer-container">
      <Grid container className="mb-footer-wrapper">
        <Grid item className="mb-footer-gr">
          <Link onClick={productHandle} to="/productPage">
            <img src={productSrc} alt="app" />
            <p className="mb-footer-text typography-heavy">محصولات</p>
          </Link>
        </Grid>
        <Grid item className="mb-footer-gr">
          <Link onClick={homeHandle} to="/">
            <img src={homeSrc} alt="home" />
            <p className="mb-footer-text typography-heavy">صفحه اصلی</p>
          </Link>
        </Grid>
        <Grid item className="mb-footer-gr">
          <Link onClick={userHandle} to="/UserAccount">
            <img src={userSrc} alt="user" />
            <p className="mb-footer-text typography-heavy">حساب کاربری</p>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

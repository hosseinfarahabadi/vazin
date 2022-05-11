import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container typography-light" id="footer">
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          sx={{ color: "white" }}
        >
          <Grid
            item
            xs={3}
            className="footer-map-box-wrapper"
            sx={{
              width: {
                xs: "0%", // theme.breakpoints.up('xs')
                sm: "0%", // theme.breakpoints.up('xs')
                md: "15%", // theme.breakpoints.up('xs')
                lg: "30%", // theme.breakpoints.up('lg')
              },
            }}
          >
            <img src="./image/footer/MapBox.png" className="footer-map-box" />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              width: {
                xs: "15%", // theme.breakpoints.up('xs')
                lg: "25%", // theme.breakpoints.up('lg')
              },
              marginRight: {
                xs: "70px !important",
                xs: "10px !important",
              },
            }}
            className="footer-contact"
          >
            <p className="footer-address-1" style={{ fontSize: "24px" }}>
              راه های ارتباطی
            </p>
            <div className="footer-content-icon">
              <LocationOnOutlinedIcon
                sx={{ paddingTop: "17px", paddingLeft: "5px" }}
              />
              <p className="typography-light">آدس دفتر مرکزی</p>
            </div>
            <p className="footer-contact-text typography-light">
              تهران، میدان هروی، خیابان وفامنش، ساختمان ایران زمین(پلاک 12)،
              واحد 504
            </p>
            <div className="footer-content-icon">
              <CallOutlinedIcon
                sx={{ paddingTop: "17px", paddingLeft: "5px" }}
              />
              <p className="typography-light">شماره های تماس</p>
            </div>
            <p className="footer-contact-text footer-phone typography-light">
              021-22969431 || 021-22969430{" "}
            </p>
            <p className="footer-contact-text footer-phone typography-light">
              021-09353437473 || 09334441128
            </p>
            <div className="footer-icon-wraper">
              <a>
                <img
                  src="./image/footer/instagram.png"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
              <a>
                <img
                  src="./image/footer/youtube.png"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
              <a>
                <img
                  src="./image/footer/linkedin.png"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
              <a>
                <img
                  src="./image/footer/twitter.png"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
              <a>
                <img
                  src="./image/footer/facebook.png"
                  style={{ paddingLeft: "20px" }}
                />
              </a>
            </div>
          </Grid>
          {/* <Grid item xs={1} alignItems="center">
            <div className="footer-line"></div>
          </Grid> */}
          <Grid item xs={1.5}>
            <p className="footer-content-head ">دسترسی سریع</p>
            <Link to="/aboutus" underline="none" color="inherit">
              <p className="footer-contact-text typography-light">
                درباره وزین پلاست
              </p>
            </Link>
            <Link to="/productPage" underline="none" color="inherit">
              <p className="footer-contact-text typography-light">
                تولیدات وزین پلاست
              </p>
            </Link>
            <Link to="#" underline="none" color="inherit">
              <p className="footer-contact-text typography-light">
                مقالات وبسایت
              </p>
            </Link>
            <Link to="#" underline="none" color="inherit">
              <p className="footer-contact-text typography-light">
                سوالات متداول
              </p>
            </Link>
            <Link to="/aboutus" underline="none" color="inherit">
              <p className="footer-contact-text typography-light">
                ارتباط با ما
              </p>
            </Link>
          </Grid>
          <Grid container item xs={2}>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src="./image/footer/enamad.png"
                alt="Enamad"
                className="footer-enamad"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src="./image/footer/Namad.png"
                alt="Enamad"
                className="footer-enamad"
              />
            </Grid>
          </Grid>
        </Grid>
        <div className="footer-line-horiz"></div>
        <div className="copy-wright">
          <p>
            تمام حقوق این سایت برای مجموعه وزین پلاست محفوظ است. طراحی شده توسط
            شرکت مهندسی نرم افزاری ناتیکس
          </p>
        </div>
      </Container>
    </div>
  );
}

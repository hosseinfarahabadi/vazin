import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Header from "../../../components/desktop/Header";
// Import Swiper styles
// import "../../../utils/style.css";
import "../css/homePage.css";
import Paper from "@mui/material/Paper";
import RecomSwiper from "./RecommendedSwiper";
import HeroSwiper from "../../../utils/swiper/HeroSwiper";
import CustomeSwiper from "./CustomerSwiper";
import CorporateSwiper from "../../../utils/swiper/CorporateSwiper";
import Footer from "../../../components/desktop/Footer";
import ToTopComponent from "../../../components/ToTopComponent";
import MbFooter from "../../../components/mobile/MbFooter";
import ProductCat from "./ProductCat";
import ProductCatSwiper from "./ProductCatSwiper";
function HomePage() {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <div>
      <ToTopComponent />
      <Header />
      <HeroSwiper />
      <Container maxWidth="xl">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            className="paper-wraper"
            justifyContent="center"
          >
            <Grid item xs={6} sm={3} className="paper-btn-wrapper top">
              <Paper
                className="paper-btn"
                sx={{
                  borderTopRightRadius: "30px !important",
                  borderBottomRightRadius: "30px !important",
                }}
              >
                <img src="/image/Gift 1.svg" alt="gift" className="gift-img" />
                <Typography className="hero-text">تنوع در محصول</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} className="paper-btn-wrapper left top ">
              <Paper className="paper-btn left-top">
                <img
                  src="/image/Award 3.svg"
                  alt="award"
                  className="gift-img"
                />
                <Typography className="hero-text">تضمین کیفیت</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} className="paper-btn-wrapper  ">
              <Paper className="paper-btn right-bot">
                <img src="/image/Card 1.svg" alt="card" className="gift-img" />
                <Typography className="hero-text">قیمت رقابتی</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} className="paper-btn-wrapper left">
              <Paper
                className="paper-btn"
                sx={{
                  borderTopLeftRadius: "30px !important",
                  borderBottomLeftRadius: "30px !important",
                }}
              >
                <img src="/image/Buy 2.svg" alt="buy" className="gift-img" />
                <Typography className="hero-text">
                  فروش به صورت بازرگانی
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <p className="typography-bold">محصولات پیشنهادی</p>
          <p className="typography-regular">تمامی محصولات</p>
        </Grid>
        <div className="line"></div>
      </Container>
      <RecomSwiper />
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          <p className="typography-bold">دسته بندی محصولات</p>
        </Grid>
        <div className="line"></div>
        {matches ? <ProductCatSwiper /> : <ProductCat />}
        {/* {matches ? <MbAwardComponent /> : <AwardCmponent />} */}
        <p className="customer-comment typography-bold"> نظرات مشتریان ما</p>
        {matches ? null : <CustomeSwiper />}
      </Container>
      <p className="customer-swiper typography-medium"> مشتریان ما</p>
      <CorporateSwiper />
      {matches ? <MbFooter /> : <Footer />}
    </div>
  );
}

export default HomePage;

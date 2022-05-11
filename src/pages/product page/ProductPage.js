import { Container, Grid, Paper, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/desktop/Footer";
import MbFooter from "../../components/mobile/MbFooter";
import ProductHeader from "../../components/desktop/ProductHeader";
import ToTopComponent from "../../components/ToTopComponent";
import ProductCard from "../../utils/card/ProductCard";
import MbProductCard from "../../utils/card/MbProductCard";
import data from "../../utils/data";

export default function ProductPage() {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <div>
      <ToTopComponent />

      <ProductHeader />
      <Container maxWidth="xl">
        <Grid
          container
          className="prod-filter-container"
          justifyContent="space-between"
        >
          <Grid item xs={6}>
            <Paper className="prod-filter-paper">
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <p className="prod-filter-text typography-light title">
                    ترتیب یر اساس :{" "}
                  </p>
                </Grid>
                <Grid item>
                  <p className="prod-filter-text typography-medium text">
                    محبوب ترین
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container justifyContent="center">
            {data.map((item) => {
              return (
                <Grid
                  p={1}
                  className="prod-item-card-wrapper"
                  item
                  xs={12}
                  sm={6}
                  mmd={4}
                  md={3}
                  lg={2}
                  key={item.key}
                >
                  <Link to="/productPage/ProductItem">
                    {matches ? (
                      <MbProductCard image={item.image} title={item.title} />
                    ) : (
                      <ProductCard image={item.image} title={item.title} />
                    )}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
      {matches ? <MbFooter /> : <Footer />}
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Grid } from "@mui/material";

export default function TabMenu() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addToBuyList = () => {
    console.log("click");
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              className="proItem-buyCard-tabmenu-title"
              label="تکی"
              value="1"
            />
            <Tab
              className="proItem-buyCard-tabmenu-title"
              label="عمده"
              value="2"
            />
            <Tab
              className="proItem-buyCard-tabmenu-title"
              label="بازرگانی"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <p className=" proItem-buyCard-price-titletypography-medium">
            رنگ: <span className="proItem-buyCard-color-title">سفید</span>
          </p>
          <Grid container justifyContent="flex-end" mt={2} spacing={1}>
            <Grid item xs={4}>
              <div className="proItem-buyCard-color-color color1"></div>
            </Grid>
            <Grid item xs={4}>
              <div className="proItem-buyCard-color-color color2"></div>
            </Grid>
            <Grid item xs={4}>
              <div className="proItem-buyCard-color-color color3"></div>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" mt={6} spacing={1}>
            <Grid item xs={6}>
              <div className="proItem-buyCard-price-title typography-bold">
                قیمت:
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="proItem-buyCard-price typography-heavy">
                5000{" "}
                <span
                  className="typography-medium"
                  style={{ fontSize: "18px" }}
                >
                  تومان
                </span>
              </div>
            </Grid>
          </Grid>
          <div className="proItem-buyCard-btn-wrapper">
            <Button
              variant="contained"
              color="error"
              size="larg"
              className="proItem-buyCard-btn"
              href="#"
              onClick={addToBuyList}
            >
              افزودن به سبد خرید
            </Button>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <p className="typography-medium">
            رنگ: <span className="proItem-buyCard-color-title">سفید</span>
          </p>
          <Grid container justifyContent="flex-end" mt={2} spacing={1}>
            <Grid item xs={4}>
              <div className="proItem-buyCard-color-color color1"></div>
            </Grid>
            <Grid item xs={4}>
              <div className="proItem-buyCard-color-color color2"></div>
            </Grid>
            <Grid item xs={4}>
              <div className="proItem-buyCard-color-color color3"></div>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-start" mt={6} spacing={1}>
            <Grid item xs={3}>
              <div className="typography-bold">وزن:</div>
            </Grid>
            <Grid item xs={3}>
              <div className="proItem-buyCard-wholesale-price">
                <input type="text" placeholder="1000" />
                <span
                  className="typography-medium"
                  style={{ fontSize: "14px" }}
                >
                  کیلوگرم
                </span>
              </div>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-start" mt={0} spacing={1}>
            <Grid item xs={3}>
              <div className="typography-bold">تعداد:</div>
            </Grid>
            <Grid item xs={3}>
              <div className="proItem-buyCard-wholesale-price">
                <input type="text" placeholder="1000" />
                <span
                  className="typography-medium"
                  style={{ fontSize: "14px" }}
                >
                  عدد
                </span>
              </div>
            </Grid>
          </Grid>
          <div className="proItem-buyCard-btn-wrapper">
            <Button
              variant="contained"
              color="error"
              size="larg"
              className="proItem-buyCard-btn"
              href="#"
            >
              افزودن به سبد خرید
            </Button>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <Grid container justifyContent="flex-start" mt={6} spacing={1}>
            <Grid item xs={12}>
              <div className="typography-bold">شماره تماس:</div>
            </Grid>
            <Grid item xs={12}>
              <div className="proItem-buyCard-busness-price">
                <input type="text" placeholder="+98 912 345 6789" />
              </div>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-start" mt={0} spacing={1}>
            <Grid item xs={12}>
              <div className="proItem-buyCard-busness-text  typography-regular  ">
                جهت خرید به صورت بازرگانی سفارش خود را ثبت کرده، همکاران ما در
                کوتاهترین زمان با شما تماس خواهند گرفت.
              </div>
            </Grid>
          </Grid>
          <div className="proItem-buyCard-btn-wrapper">
            <Button
              variant="contained"
              color="error"
              size="larg"
              className="proItem-buyCard-btn"
              href="#"
            >
              افزودن به سبد خرید
            </Button>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

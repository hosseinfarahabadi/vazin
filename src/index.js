import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import RouterDom from "./RouterDom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/index";
import "swiper/css/bundle";
import "./utils/style.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "YekanBakhBold",
    b: { fontFamily: "Roboto" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 501,
      mmd: 700,
      md: 900,
      lg: 1250,
      xl: 1300,
      xxl: 4096,
    },
  },
});

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterDom />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useEffect, useRef, useState } from "react";
import { AppBar, Grid, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "../Style";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
export default function MbHeader() {
  const [styles, setStyles] = useState("drawer-wrapper");
  const [stylesModal, setStylesModal] = useState("drawe-modal-wrapper");
  const wrapperRef = useRef(null);
  const classes = useStyles();
  const openDrawer = () => {
    setStyles("drawer-wrapper-active");
    setStylesModal("modal-wrapper-active");
  };
  const closeDrawer = () => {
    setStyles("drawer-wrapper");
    setStylesModal("modal-wrapper");
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setStyles("drawer-wrapper");
          setStylesModal("modal-wrapper");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className={styles} ref={wrapperRef}>
        <div className="drawer-menu-flex">
          <a class=" drawer-lang-icon" onClick={closeDrawer}>
            &times;
          </a>
          <div className="drawer-lang-wrapper">
            <p className="drawer-lang-text typography-regular">En</p>
            <p className="drawer-lang-text typography-regular">Fa</p>
            <p className="drawer-lang-text typography-regular">Ar</p>
          </div>
        </div>
        <div className="drawer-menu-image">
          <img src="../image/logo.png" />
        </div>
        <div className="drawer-menu">
          <Link className="drawer-menu-item top typography-bold" to="/">
            صفحه اصلی
          </Link>
          <Link className="drawer-menu-item typography-bold" to="/productPage">
            محصولات
          </Link>
          <Link className="drawer-menu-item typography-bold" to="/">
            دانلود کاتالوگ
          </Link>
          <Link className="drawer-menu-item typography-bold" to="/">
            پشتیبانی سایت
          </Link>
          <Link1
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="drawer-menu-item typography-bold"
          >
            ارتباط با ما
          </Link1>
          <Link className="drawer-menu-item typography-bold" to="/aboutus">
            درباره ما
          </Link>
        </div>
        <div className="drawer-icons-wrapper">
          <i class="drawer-icons-icon fa fa-instagram" aria-hidden="true"></i>
          <i
            class="drawer-icons-icon fa fa-linkedin-square"
            aria-hidden="true"
          ></i>
          <i
            class="drawer-icons-icon fa fa-twitter-square"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className={stylesModal}></div>

      <AppBar position="fixed" className={classes.navBarMob} elevation={0}>
        <Toolbar disableGutters className="mp">
          <Grid container className="test">
            <Grid item xs={0.5} className={classes.hambergerMenu}>
              <MenuIcon
                onClick={openDrawer}
                className="tablet-header-hambergermenu"
              />
            </Grid>
            <Grid item xs={10} className={classes.logoWrapMob}>
              <p className="logo-text-mob">vazin plast</p>
            </Grid>
            <Grid item xs={1} className={classes.bagIconWrap}>
              <div className="bag-wrapper-mob">
                <span className="span-bag-mob">0</span>
                <ShoppingBagOutlinedIcon />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

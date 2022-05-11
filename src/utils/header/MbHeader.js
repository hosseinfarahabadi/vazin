import React, { useEffect, useRef, useState } from "react";
import { AppBar, Grid, Toolbar, useMediaQuery } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyles from "../Style";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
export default function MbHeader() {
  const [styles, setStyles] = useState("mb-drawer-wrapper");
  const [stylesModal, setStylesModal] = useState("drawe-modal-wrapper");
  const [dispNon, setDispNon] = useState();
  const wrapperRef = useRef(null);
  const classes = useStyles();
  const openDrawer = () => {
    setStyles("mb-drawer-wrapper-active");
    setStylesModal("mb-modal-wrapper-active");
    setDispNon("mb-drawer-none");
  };
  const closeDrawer = () => {
    setStyles("mb-drawer-wrapper");
    setStylesModal("mb-modal-wrapper");
    setDispNon("mb-drawer-block");
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setStyles("mb-drawer-wrapper");
          setStylesModal("mb-modal-wrapper");
          setDispNon("mb-drawer-block");
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
        <div className="mb-drawer-menu-image">
          <img className="drawer-menu-img" src="../image/mobile/Logo.png" />
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="mb-drawer-menu-text typography-regular">VAZIN PLAST</p>
        </div>
        <div className="mb-drawer-lang-wrapper">
          <p className="mb-drawer-lang-text typography-regular">En</p>
          <p className="mb-drawer-lang-text typography-regular">Fa</p>
          <p className="mb-drawer-lang-text typography-regular">Ar</p>
        </div>
        <div className="mb-drawer-menu">
          <Link className="mb-drawer-menu-item top typography-bold" to="/">
            صفحه اصلی
          </Link>
          <Link
            className="mb-drawer-menu-item typography-bold"
            to="/productPage"
          >
            محصولات
          </Link>
          <Link className="mb-drawer-menu-item typography-bold" to="/">
            دانلود کاتالوگ
          </Link>
          <Link className="mb-drawer-menu-item typography-bold" to="/">
            پشتیبانی سایت
          </Link>
          <Link1
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="mb-drawer-menu-item typography-bold"
          >
            ارتباط با ما
          </Link1>
          <Link className="mb-drawer-menu-item typography-bold" to="/aboutus">
            درباره ما
          </Link>
        </div>
        <div className="mb-drawer-icons-wrapper">
          <div>
            <i
              class="mb-drawer-icons-icon fa fa-instagram"
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <i
              class="mb-drawer-icons-icon fa fa-linkedin-square"
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <i
              class="mb-drawer-icons-icon fa fa-twitter-square"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="mb-drawer-menu-flex">
          <a class=" drawer-lang-icon" onClick={closeDrawer}>
            &times;
          </a>
          <div className="drawer-bag-wrapper">
            <span className="drawer-bag">0</span>
            <ShoppingBagOutlinedIcon className="drawer-shoping" />
          </div>
        </div>
      </div>
      <div className={stylesModal}></div>
      <AppBar position="fixed" className="mb-navbar" elevation={0}>
        <Toolbar disableGutters className={dispNon + " " + "mp"}>
          <Grid container className="test">
            <Grid item xs={0.5} className={classes.hambergerMenu}>
              <MoreHorizIcon
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
                <ShoppingBagOutlinedIcon className="drawer-shopping" />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

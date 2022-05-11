import React, { useState } from "react";
import "../style.css";
import {
  AppBar,
  Typography,
  Grid,
  Container,
  Toolbar,
  InputBase,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import useStyles from "../Style";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

export default function DesktopHeader() {
  const classes = useStyles();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid  rgba(255, 255, 255, .5)",
    boxSizing: "border-box",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.0),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
      border: "1px solid  rgba(255, 255, 255, 1)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: 37,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down("lg")]: {
      height: 25,
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 1),
      height: 25,
      fontSize: 12,
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      marginRight: 45,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(0, 1, 1, 0),
        height: 25,
        fontSize: 12,
        marginRight: 30,
      },
    },
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="desktop-header-top" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="mp">
          <Grid container className="test">
            <Grid item xs={1} style={{ textAlign: "center" }}>
              <img src="/image/Logo.png" className="logo-img" />
            </Grid>
            <Grid item xs={4} className="test">
              <Grid item xs={3} className="mp">
                <Typography className="header-menu-text">
                  <Link to="/" underline="none" color="inherit">
                    صفحه اصلی
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3} className="mp">
                <Typography className="header-menu-text">
                  <Link to="/productPage" underline="none" color="inherit">
                    محصولات
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3} className="mp">
                <Typography className="header-menu-text">
                  <Link to="/aboutus" underline="none" color="inherit">
                    درباره ما
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3} className="mp">
                <Typography className="header-menu-text">
                  <Link1
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                  >
                    ارتباط با ما
                  </Link1>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={7}
              style={{ justifyContent: "flex-end" }}
              alignItems="center"
            >
              <Grid item xs={4} style={{ display: "flex" }} ml={4}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="جست و جو "
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              <Grid item xs={2} className={classes.langBtn}>
                <Button
                  className={classes.button}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="secondary"
                  variant="outlined"
                >
                  <KeyboardArrowDownIcon className="arrow-icon" />
                  <p
                    className="lang-btn-text typography-regular"
                    style={{ fontSize: "0.8vm " }}
                  >
                    Fa
                  </p>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>En</MenuItem>
                  <MenuItem onClick={handleClose}>Ar</MenuItem>
                </Menu>
              </Grid>
              <Grid item xs={2} mr={3} ml={3}>
                <Grid
                  item
                  container
                  justifyContent="center"
                  className={classes.loginText}
                  pr={1}
                  pl={1}
                  width={120}
                  sx={{
                    width: {
                      xs: 100, // theme.breakpoints.up('xs')
                      lg: 120, // theme.breakpoints.up('lg')
                    },
                  }}
                >
                  <LogoutIcon sx={{ fontSize: ".9vw", marginLeft: "4px" }} />
                  <p
                    className="login-btn-text typography-light"
                    sx={{ fontSize: ".9vw", paddingLeft: "4px" }}
                  >
                    ورود
                  </p>
                  <p
                    className="login-btn-text typography-light"
                    sx={{ fontSize: ".9vw" }}
                  >
                    |
                  </p>
                  <p
                    className="login-btn-text typography-light"
                    sx={{ fontSize: ".9vw", paddingRight: "4px" }}
                  >
                    ثبت نام
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <div className="bag-wrapper">
                  <span className="span-bag">0</span>
                  <ShoppingBagOutlinedIcon className={classes.shopBag} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Grid container className="product-header-btn-container">
          <Grid item xs={2}>
            <Button variant="contained" className="product-header-btn-right">
              <p className="product-header-text typography-medium">
                همه محصولات
              </p>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="product-header-btn">
              <p className="product-header-text typography-medium">
                ظرف یکبار مصرف
              </p>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="product-header-btn">
              <p className="product-header-text typography-medium">
                پاکت بسته بندی
              </p>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="product-header-btn">
              <p className="product-header-text typography-medium">شیرینک</p>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="product-header-btn">
              <p className="product-header-text typography-medium">استرچ</p>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="product-header-btn-left">
              <p className="product-header-text typography-medium">
                پلاستیک فروشگاه
              </p>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  body: {
    height: "100vh",
    background: "#EAEAEA",
  },
  navbar: {
    backgroundColor: "rgba(0, 0, 0, 0.2) !important",
    backdropFilter: "blur(70px)",
    padding: "2px 50px",
    height: "70px",
    // display: "none !important",
  },
  typography: {
    color: "#56f46ff !important",
    fontSize: "1.1vw !important",
    textAlign: "center",
  },
  button: {
    color: "#56f46ff !important",

    minWidth: "20px !important",
    border: "1px solid white !important",
    borderRadius: "7px !important",
    width: "40%",
    height: "36px",
    alignItems: "flex-start",
    padding: "5px 30px !important",
  },
  shopBag: {
    fontSize: "2vw !important",
    width: "34px",
    height: "30px",
  },
  menuItem: {
    flexGrow: 1,
  },
  loginText: {
    display: "flex",
    padding: "5px 10px",
    width: "100px",
    border: "1px solid white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "7px",
  },
  langBtn: {
    display: "flex",
    justifyContent: "center",
  },

  // mobile style
  navBarMob: {
    backgroundColor: "rgba(0, 0, 0, 0.2) !important",
    backdropFilter: "blur(70px)",
    padding: "0px 10px",
    height: "70px",
    zIndex: "3 !important",
    // display: "none !important",
  },
  hambergerMenu: {
    border: "1px solid white",
    borderRadius: "7px",
    textAlign: "center",
    paddingTop: "2px",
  },
  logoWrapMob: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  bagIconWrap: {
    display: "flex",
    justifyContent: "flex-end",
  },

  // Home page m style
  paperWraper: {
    position: "relative",
    top: "-30px",
    left: "0px",
    zIndex: "2",
  },
  paperBtn: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "80px",
    boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.1) !important",
  },
  heroText: {
    fontFamily: "Yekan Bakh",
    fontStyle: "normal",
    fontWeight: "bold !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#100C37",
  },

  // resposive media
}));

export default useStyles;

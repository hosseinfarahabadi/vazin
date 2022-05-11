import React from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import "../../utils/style.css";
import "./sideMenu.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function SideMenu() {
  const dispatch = useDispatch();
  function openModal() {
    dispatch({ type: "OPEN_MEDIA_MODAL" });
  }
  return (
    <div className="slide-menu-wrapper">
      {/* <Link to="/productPage" underline="none" color="inherit"> محصولات</Link> */}

      <Link to="/manager">
        <div className="slide-menu-btn">
          <ProductionQuantityLimitsIcon />
          <p className="typography-regular20-sans">محصولات</p>
        </div>
      </Link>

      <Link to="/media">
        <div className="slide-menu-btn">
          <PermMediaIcon />
          <p className="typography-regular20-sans"> رسانه ها</p>
        </div>
      </Link>
    </div>
  );
}

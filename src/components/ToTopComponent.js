import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function ToTopComponent() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div onClick={scrollToTop} className="to-top-button-wrapper">
      <i class="to-top-button-icon fa fa-long-arrow-up" aria-hidden="true"></i>

      {/* <i class="to-top-button-icon fa fa-arrow-up" aria-hidden="true"></i> */}
    </div>
  );
}

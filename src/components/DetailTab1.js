import React, { useEffect, useState } from "react";
import { Link as Link1 } from "react-scroll";

export default function DetailTab1(props) {
  //   const [customStyle, setCustomStyle] = useState(
  //     " prodItem-detaile-container "
  //   );
  //   const [divStyle, setDivStyle] = useState(null);
  //   const listenScrollEvent = (e) => {
  //     if (window.scrollY > 1300) {
  //       console.log("tets");
  //       setCustomStyle("prodItem-detaile-container-scrolled");
  //       setDivStyle("disp-none");
  //     } else {
  //       console.log("tets2");
  //       setCustomStyle("prodItem-detaile-container");
  //       setDivStyle(null);
  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", listenScrollEvent);

  //     return () => window.removeEventListener("scroll", listenScrollEvent);
  //   }, []);
  //   const dispStyle = {
  //     display: props.dispBlock,
  //   };
  return (
    <div
      className={props.position + " " + "prodItem-detaile-container-scrolled"}
      style={{ width: "100%" }}
    >
      <div className="prodItem-detaile-wrapper ">
        <button className="prodItem-detaile-text typography-bold">
          <Link1
            activeClass="prodItem-detaile-text-active"
            to="scroll-1"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            مشخصات
          </Link1>
        </button>
        <button className="prodItem-detaile-text typography-bold">
          <Link1
            activeClass="prodItem-detaile-text-active"
            to="scroll-2"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            اطلاعات تکمیلی
          </Link1>
        </button>
        <button className="prodItem-detaile-text typography-bold">
          <Link1
            activeClass="prodItem-detaile-text-active"
            to="scroll-3"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            نظرات کاربران
          </Link1>
        </button>
      </div>
      {/* <div
        style={{
          display: "none",
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(0, 0, 0, 0.3",
        }}
      ></div> */}
    </div>
  );
}

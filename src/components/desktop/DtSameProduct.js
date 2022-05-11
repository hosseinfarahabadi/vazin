import { Button, Container, Paper, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DetailTab1 from "../DetailTab1";

export default function DtSameProduct() {
  const [contentReturn, setContentReturn] = useState(0);
  const [dispNone, setDispNone] = useState();
  const [dispBlock, setDispBlock] = useState();
  const [position, setPosition] = useState();
  const matches = useMediaQuery("(max-width:1125px)");

  var listenScrollEvent = (e) => {
    if (window.scrollY > 1250) {
      setDispNone("block");
      setDispBlock("none");
      setPosition("fixed");
    } else {
      setDispNone("none");
      setDispBlock("block");
      setPosition(null);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <DetailTab1 position={position} />

      <Container maxWidth="xl">
        <div id="scroll-1">
          <p className="proItem-content-wrapper typography-bold border">
            مشخصات
          </p>
          <Paper elevation={7} sx={{ borderRadius: "30px" }}>
            <div className="prodItem-content-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="typography-medium content top">جنس</p>
                <p className="typography-medium content top">
                  بر پایه پلی استایرن (ps)
                </p>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.3",
                }}
              ></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="typography-medium content ">رنگ</p>
                <p className="typography-medium content ">سفید</p>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.3",
                }}
              ></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="typography-medium content ">ابعاد</p>
                <p className="typography-medium content ">5*15*22</p>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="typography-medium content bot ">وزن</p>
                <p className="typography-medium content bot ">10 گرم</p>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.3",
                  marginBottom: "30px",
                }}
              ></div>
            </div>
          </Paper>
        </div>
        <div id="scroll-2">
          <p className="proItem-content-wrapper typography-bold border">
            توضیحات تکمیلی
          </p>
          <Paper elevation={7} sx={{ borderRadius: "30px" }}>
            <div className="prodItem-info-container">
              <p className="prodItem-info-title typography-bold">
                ظرف فوم تک پرسی
              </p>
              <p className="prodItem-info-text typography-medium">
                سلفون جزو متریال هایی است که در بسته بندی کردن محصولات مختلف
                کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته بندی از
                آن استفاده می ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس
                سلفون ترس هستند که در سه نوع شفاف، متالایز و صدفی موجود می
                باشند. در ادامه این مطلب قصد داریم به معرفی و بررسی ویژگی های
                سلفون متالایز بپردازیم. سلفون جزو متریال هایی است که در بسته
                بندی کردن محصولات مختلف کاربردهای فراوانی دارد و مدت هاست که
                شرکت های مختلف بسته بندی از آن استفاده می ‌کنند. منظور از سلفون،
                فیلم های بسته بندی از جنس سلفون ترس هستند که در سه نوع شفاف،
                متالایز و صدفی موجود می باشند. در ادامه این مطلب قصد داریم به
                معرفی و بررسی ویژگی های سلفون متالایز بپردازیم. سلفون جزو متریال
                هایی است که در بسته بندی کردن محصولات مختلف کاربردهای فراوانی
                دارد و مدت هاست که شرکت های مختلف بسته بندی از آن استفاده می
                ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس سلفون ترس هستند
                که در سه نوع شفاف، متالایز و صدفی موجود می باشند. در ادامه این
                مطلب قصد داریم به معرفی و بررسی ویژگی های سلفون متالایز
                بپردازیم.
              </p>
              <p className="prodItem-info-title typography-bold">
                مزایای استفاده از ظروف یکبار مصرف فومی
              </p>
              <p className="prodItem-info-text typography-medium">
                سلفون جزو متریال هایی است که در بسته بندی کردن محصولات مختلف
                کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته بندی از
                آن استفاده می ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس
                سلفون ترس هستند که در سه نوع شفاف، متالایز و صدفی موجود می
                باشند. در ادامه این مطلب قصد داریم به معرفی و بررسی ویژگی های
                سلفون متالایز بپردازیم. سلفون جزو متریال هایی است که در بسته
                بندی کردن محصولات مختلف کاربردهای فراوانی دارد و مدت هاست که
                شرکت های مختلف بسته بندی از آن استفاده می ‌کنند. منظور از سلفون،
                فیلم های بسته بندی از جنس سلفون ترس هستند که در سه نوع شفاف،
                متالایز و صدفی موجود می باشند. در ادامه این مطلب قصد داریم به
                معرفی و بررسی ویژگی های سلفون متالایز بپردازیم. سلفون جزو متریال
                هایی است که در بسته بندی کردن محصولات مختلف کاربردهای فراوانی
                دارد و مدت هاست که شرکت های مختلف بسته بندی از آن استفاده می
                ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس سلفون ترس هستند
                که در سه نوع شفاف، متالایز و صدفی موجود می باشند. در ادامه این
                مطلب قصد داریم به معرفی و بررسی ویژگی های سلفون متالایز
                بپردازیم.
              </p>
              <p className="prodItem-info-title typography-bold">
                فروش عمده ظروف فوم تک نفره
              </p>
              <p className="prodItem-info-text typography-medium">
                سلفون جزو متریال هایی است که در بسته بندی کردن محصولات مختلف
                کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته بندی از
                آن استفاده می ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس
                سلفون ترس هستند که در سه نوع شفاف، متالایز و صدفی موجود می
                باشند. در ادامه این مطلب قصد داریم به معرفی و بررسی ویژگی های
                سلفون متالایز بپردازیم. سلفون جزو متریال هایی است که در بسته
                بندی کردن محصولات مختلف کاربردهای فراوانی دارد و مدت هاست که
                شرکت های مختلف بسته بندی از آن استفاده می ‌کنند.
              </p>
              <p className="prodItem-info-title typography-bold">
                سوالات متداول
              </p>
              <p className="prodItem-info-text typography-medium">
                سلفون جزو متریال هایی است که در بسته بندی کردن محصولات مختلف
                کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته بندی از
                آن استفاده می ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس
                سلفون ترس هستند که در سه نوع شفاف، متالایز و صدفی موجود می
                باشند. در ادامه این مطلب قصد داریم به معرفی و بررسی ویژگی های
                سلفون متالایز بپردازیم. سلفون جزو متریال هایی است که در بسته
                بندی کردن محصولات مختلف کاربردهای فراوانی دارد و مدت هاست که
                شرکت های مختلف بسته بندی از آن استفاده می ‌کنند.سلفون ترس هستند
                که در سه نوع شفاف، متالایز و صدفی موجود می باشند. در ادامه این
                مطلب قصد داریم به معرفی و بررسی ویژگی های سلفون متالایز
                بپردازیم. سلفون جزو متریال هایی است که در بسته بندی کردن محصولات
                مختلف کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته
                بندی از آن استفاده می ‌کنند.
              </p>
            </div>
          </Paper>
        </div>
        <div id="scroll-3">
          <p className="proItem-content-wrapper typography-bold border">
            مشخصات
          </p>
          <Paper
            elevation={7}
            sx={{ borderRadius: "30px", marginBottom: "50px" }}
          >
            <div className="prodItem-comment-container">
              <p className="typography-bold">محمدرضا محمدی</p>
              <span class="prodItem-comment-icon fa fa-star checked"></span>
              <span class="prodItem-comment-icon fa fa-star checked"></span>
              <span class="prodItem-comment-icon fa fa-star checked"></span>
              <span class="prodItem-comment-icon fa fa-star"></span>
              <span class="prodItem-comment-icon fa fa-star"></span>
              <p className="prodItem-comment-text typography-medium">
                سلفون جزو متریال هایی است که در بسته بندی کردن محصولات مختلف
                کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته بندی از
                آن استفاده می ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس
                سلفون ترس هستند که در سه نوع شفاف، متالایز و صدفی موجود می
                باشند. در ادامه این مطلب قصد داریم به معرفی و بررسی ویژگی های
                سلفون
              </p>

              <button className="prodItem-comment-button ">
                <span
                  className="fa fa-reply "
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {" "}
                </span>
                <span className="typography-bold "> پاسخ دهید...</span>
              </button>
            </div>
          </Paper>
          <Paper
            elevation={7}
            sx={{ borderRadius: "30px", marginBottom: "50px" }}
          >
            <div className="prodItem-comment-container">
              <p className="typography-bold">محمدرضا محمدی</p>
              <span class="prodItem-comment-icon fa fa-star checked"></span>
              <span class="prodItem-comment-icon fa fa-star checked"></span>
              <span class="prodItem-comment-icon fa fa-star checked"></span>
              <span class="prodItem-comment-icon fa fa-star"></span>
              <span class="prodItem-comment-icon fa fa-star"></span>
              <p className="prodItem-comment-text typography-medium">
                سلفون جزو متریال هایی است که در بسته بندی کردن محصولات مختلف
                کاربردهای فراوانی دارد و مدت هاست که شرکت های مختلف بسته بندی از
                آن استفاده می ‌کنند. منظور از سلفون، فیلم های بسته بندی از جنس
                سلفون ترس هستند که در سه نوع شفاف، متالایز و صدفی موجود می
                باشند. در ادامه این مطلب قصد داریم به معرفی و بررسی ویژگی های
                سلفون
              </p>

              <button className="prodItem-comment-button ">
                <span
                  className="fa fa-reply "
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {" "}
                </span>
                <span className="typography-bold "> پاسخ دهید...</span>
              </button>
            </div>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

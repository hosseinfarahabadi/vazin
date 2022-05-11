import * as React from "react";
import "../css/customerCard.css";
export default function RecomCard(props) {
  return (
    <>
      <div className="customer-avatar">
        <img src="/image/person.jpg" />
      </div>
      <div className="cutomer-container ">
        <p className=" customer-title typography-bold">حمید محمدی</p>
        <p className="customer-subtitle typography-light">
          مدیر عامل شرکت دیجی کالا
        </p>
        <p className="customer-text-detail typography-light ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
          استفاده قرار گیرد.
        </p>
      </div>
    </>
  );
}

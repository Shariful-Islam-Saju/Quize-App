import React from "react";
import img from "../../../assets/images/success.png";
import style from "./style.module.css";
const Summery = () => {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={style.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
};

export default Summery;

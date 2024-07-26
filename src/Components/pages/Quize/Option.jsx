import React from "react";
import style from "./style.module.css";

const Option = ({ id, text }) => {
  return (
    <label className={style.answer} htmlFor="option1">
      <input type="checkbox" id={id} />{text}
    </label>
  );
};

export default Option;

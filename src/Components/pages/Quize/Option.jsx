import React from "react";
import style from "./style.module.css";

const Option = ({ id, text, handleChange, isChecked }) => {
  return (
    <label className={style.answer} htmlFor="option1">
      <input
        onClick={(e) => {
          handleChange(e, id);
        }}
        value={isChecked}
        type="checkbox"
        id={id}
      />
      {text}
    </label>
  );
};

export default Option;

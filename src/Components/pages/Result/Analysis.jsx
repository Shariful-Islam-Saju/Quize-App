import React from "react";
import Answer from "../Quize/Answer";
import style from "./style.module.css";

const Analysis = () => {
  return (
    <div className={style.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>

      <div className={style.question}>
        <div className={style.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answer />
      </div>
    </div>
  );
};

export default Analysis;

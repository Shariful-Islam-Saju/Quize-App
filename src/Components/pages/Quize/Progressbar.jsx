import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Progressbar = ({ next, prev, progress, save }) => {
  return (
    <>
      <div className={styles.progressBar}>
        <div onClick={prev} className={styles.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip}>{progress}% Complete!</div>
          <div className={styles.rangeBody}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <button onClick={progress === 100 ? save : next} className={`${styles.button} ${styles.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </div>{" "}
    </>
  );
};

export default Progressbar;

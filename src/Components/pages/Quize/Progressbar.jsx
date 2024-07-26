import React from "react";
import styles from "./style.module.css";

const Progressbar = () => {
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip}>24% Complete!</div>
          <div className={styles.rangeBody}>
            <div className={styles.progress} style={{ width: "20%" }}></div>
          </div>
        </div>
        <a href="result.html">
          <button className={`${styles.button} ${styles.next}`}>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </button>
        </a>
      </div>{" "}
    </>
  );
};

export default Progressbar;

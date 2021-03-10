import React from "react";
import { BusBox } from "../BusBox/BusBox";
import styles from "./MainContainer.module.css";

export const MainContainer = () => {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <BusBox />
      </div>
    </div>
  );
};

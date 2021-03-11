import React from "react";
import styles from "./Right.module.css";
import { BusBox } from "../BusDetails/BusBox/BusBox";
import { SortingBar } from "../BusDetails/SortingBar/SortingBar";
const Right = () => {
  return (
    <div className={styles.Right}>
      <SortingBar />
      <BusBox />
      <BusBox />
      <BusBox />
      <BusBox />
      <BusBox />
      <BusBox />
    </div>
  );
};

export default Right;

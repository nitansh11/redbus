import React from "react";
import styles from "./Right.module.css";
import { BusBox } from "../BusDetails/BusBox/BusBox";
const Right = () => {
  return (
    <div className={styles.Right}>
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

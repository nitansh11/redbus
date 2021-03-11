import React from "react";
import styles from "./Right.module.css";
import { BusBox } from "../BusDetails/BusBox/BusBox";
import { SortingBar } from "../BusDetails/SortingBar/SortingBar";
import { useLocation } from "react-router-dom";
const Right = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");
  console.log("User query: ", departure, arrival, date);
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

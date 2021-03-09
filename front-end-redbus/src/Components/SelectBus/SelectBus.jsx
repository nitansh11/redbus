import React from "react";
import styles from "./SelectBus.module.css";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
const SelectBus = () => {
  return (
    <div className={styles.SelectBus}>
      <Header />
      <div className={styles.SelectBus_mainContent}>
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default SelectBus;

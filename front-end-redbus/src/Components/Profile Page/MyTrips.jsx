import React from "react";
import styles from "./MyTrips.module.css";
import SingleTrip from "./SingleTrip";
const MyTrips = () => {
  return (
    <div className={styles.MyTrips}>
      <SingleTrip />
      <SingleTrip />
      <SingleTrip />
      <SingleTrip />
    </div>
  );
};

export default MyTrips;

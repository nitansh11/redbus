import React from "react";
import styles from "./SortingBar.module.css";
import Divider from "@material-ui/core/Divider";
import SecurityIcon from "@material-ui/icons/Security";

const SortingBar = () => {
  var busesFound = 5;

  return (
    <>
      <div className={styles.securityContainer}>
        <SecurityIcon style={{ fontSize: "25px", paddingBottom: "10px" }} />
        <div> All bus ratings include safety as a major factor</div>
      </div>
      <Divider />
      <div className={styles.mainContainer}>
        <div className={styles.mainContainer1}>
          <div>{busesFound}&nbsp;Buses Found</div>
          <div>SORT BY :</div>
        </div>
        <div className={styles.mainContainer2}>Departure</div>
        <div className={styles.mainContainer3}>Duration</div>
        <div className={styles.mainContainer4}>Arrivals</div>
        <div className={styles.mainContainer5}>Ratings</div>
        <div className={styles.mainContainer6}>Fare</div>
        <div className={styles.mainContainer7}>Seats Available</div>
      </div>
    </>
  );
};

export { SortingBar };

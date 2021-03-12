import React from "react";
import styles from "./Safety.module.css";
import { v4 as uuidv4 } from "uuid";
const arr = [
  {
    heading: "Sanitized Bus ",
    descriptions:
      "All Safety+ buses are sanitized and disinfected before and after every trip.",
  },
  {
    heading: "Mandatory masks ",
    descriptions:
      "Proper masks are mandatory for all passengers and bus staff.",
  },
  {
    heading: "Thermal Screening ",
    descriptions:
      "All passengers will undergo thermal screening. Temperature checks for bus drivers and service staff are done before every trip.",
  },
];

const Safety = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgBox}>
        <img
          src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
          alt="shield"
        />
      </div>
      <div className={styles.writingConatiner}>
        <h2>Introducing Safety+</h2>
        <h3>Opt to Travel Safe with redBus</h3>
        <span
          style={{ color: "blue", display: "inline-block", marginLeft: "14px" }}
        >
          Know more
        </span>
        <p>
          Look for buses with &nbsp;{" "}
          <span className={styles.boldspan}> safety+ </span> &nbsp; tag while
          booking your journey
        </p>
        <div className={styles.lowerFlex}>
          {arr.map((item) => {
            return (
              <div key={uuidv4()} className={styles.lowerFlexItems}>
                <h3>{item.heading}</h3>
                <p>{item.descriptions}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Safety;

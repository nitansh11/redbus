import React from "react";
import styles from "./SortingBar.module.css";
import Divider from "@material-ui/core/Divider";
import SecurityIcon from "@material-ui/icons/Security";
import { useDispatch } from "react-redux";
import { updateFilterDetails } from "../../../Redux/FilterAndSort/action";

const SortingBar = () => {

  let dispatch = useDispatch();
  const handleSortProperty = (value) => {
    const payload = {
      key: "sortingProperty",
      value: value,
    };

    dispatch(updateFilterDetails(payload));
  };

  return (
    <>
      <div className={styles.securityContainer}>
        <SecurityIcon style={{ fontSize: "25px", paddingBottom: "10px" }} />
        <div> All bus ratings include safety as a major factor</div>
      </div>
      <Divider />
      <div className={styles.mainContainer}>
        <div className={styles.mainContainer1}>
          <div>BUSES LIST</div>
          <div>SORT BY :</div>
        </div>
        <div
          className={styles.mainContainer2}
          onClick={() => handleSortProperty("departure")}
        >
          Departure
        </div>
        <div
          className={styles.mainContainer3}
          onClick={() => handleSortProperty("duration")}
        >
          Duration
        </div>
        <div
          className={styles.mainContainer4}
          onClick={() => handleSortProperty("arrivals")}
        >
          Arrivals
        </div>
        <div
          className={styles.mainContainer5}
          onClick={() => handleSortProperty("ratings")}
        >
          Ratings
        </div>
        <div
          className={styles.mainContainer6}
        // onClick={() => handleSortProperty("fare")}
        >
          Fare
        </div>
        <div
          className={styles.mainContainer7}
        // onClick={() => handleSortProperty("seatsAvailable")}
        >
          Seats Available
        </div>
      </div>
    </>
  );
};

export { SortingBar };

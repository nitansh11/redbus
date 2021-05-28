import React from "react";
import { ViewSeats } from "../ViewSeats/ViewSeats";
import styles from "./BottomTabs.module.css";
import { useDispatch } from "react-redux";
import { updateBookingDetails } from "../../../Redux/BookBus/action";

export const BottomTabs = (props) => {
  const [tabsState, setTabsState] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleTabState = (value) => {
    var newState = [...tabsState];
    for (var i = 0; i < newState.length; i++) {
      if (i === value) {
        newState[i] = !newState[i];
      } else {
        newState[i] = false;
      }
    }
    setTabsState(newState);
  };

  let dispatch = useDispatch();
  const handleTabStateBus = (value) => {
    const payload = {
      key: "operatorName",
      value: props.operatorName,
    };

    dispatch(updateBookingDetails(payload));
    handleTabState(value);
  };

  return (
    <>
      <div className={styles.mainBar}>
        <div onClick={() => handleTabState(0)}>Amenities</div>
        <div>|</div>
        <div onClick={() => handleTabState(1)}>Boarding and Droping Points</div>
        <div>|</div>
        <div onClick={() => handleTabState(2)}>Reviews</div>
        <div>|</div>
        <div onClick={() => handleTabState(3)}>Booking Policies</div>
        <div>|</div>
        <div onClick={() => handleTabStateBus(4)}>VIEW SEATS</div>
      </div>
      {tabsState[0] && <div className={styles.displayArea}>Amenities</div>}
      {tabsState[1] && (
        <div className={styles.displayArea}>Boarding and Droping Points</div>
      )}
      {tabsState[2] && <div className={styles.displayArea}>Reviews</div>}
      {tabsState[3] && (
        <div className={styles.displayArea}>Booking Policies</div>
      )}
      {tabsState[4] && <ViewSeats {...props} />}
    </>
  );
};

import React from "react";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import styles from "./SmallSeat.module.css";
import Tooltip from "@material-ui/core/Tooltip";

const SmallSeat = () => {
  var seatnumber = "B1";

  var unavailableSeatColor = { color: "#EEEDED" };
  var availableSeatColor = { color: "black" };

  return (
    <div className={styles.mainContainer}>
      <Tooltip title={seatnumber} arrow>
        <AirlineSeatReclineExtraIcon />
      </Tooltip>
    </div>
  );
};

export { SmallSeat };

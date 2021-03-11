import React from "react";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import styles from "./SmallSeat.module.css";
import Tooltip from "@material-ui/core/Tooltip";

const SmallSeat = ({
  seatNo,
  alreadyBookedSeats,
  handleSelectedSeats,
  selectedSeats,
}) => {
  var color;

  if (selectedSeats.includes(seatNo)) {
    color = { color: "blue" };
  } else {
    color = { color: "black" };
  }

  if (alreadyBookedSeats.includes(seatNo)) {
    color = { color: "red" };
  }

  const handleSeatBooking = () => {
    if (!alreadyBookedSeats.includes(seatNo)) {
      handleSelectedSeats(seatNo);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Tooltip title={seatNo} arrow onClick={handleSeatBooking} style={color}>
        <AirlineSeatReclineExtraIcon />
      </Tooltip>
    </div>
  );
};

export { SmallSeat };

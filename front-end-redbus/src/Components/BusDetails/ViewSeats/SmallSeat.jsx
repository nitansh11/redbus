import React from "react";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import styles from "./SmallSeat.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector } from "react-redux";

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

  const customerName = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const handleSeatBooking = () => {
    console.log(customerName);
    if (customerName === null) {
      alert("Please Login, To Book Seats");
    } else if (!alreadyBookedSeats.includes(seatNo)) {
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

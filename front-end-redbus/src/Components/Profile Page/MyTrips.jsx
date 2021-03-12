import React from "react";
import styles from "./MyTrips.module.css";
import SingleTrip from "./SingleTrip";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const MyTrips = () => {
  const [allBookings, setAllBookings] = React.useState([]);

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  React.useEffect(async () => {
    if (currentCustomer) {
      let id = currentCustomer._id;
      console.log("current customer id: ", id);
      let res = await axios.get(`http://localhost:8000/v1/api/booking/${id}`);
      console.log("all bookings of this customer: ", res.data);
      setAllBookings(res.data);
    }
  }, [currentCustomer]);

  const renderTripBookings = () => {
    if (allBookings.length == 0) {
      return <h1>No Bookings Found!</h1>;
    }
    return allBookings.map((booking) => (
      <SingleTrip key={uuidv4()} booking={booking} />
    ));
  };
  return <div className={styles.MyTrips}>{renderTripBookings()}</div>;
};

export default MyTrips;

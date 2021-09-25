import React from "react";
import styles from "./MyTrips.module.css";
import SingleTrip from "./SingleTrip";
import axios from "axios";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const MyTrips = () => {
  const [allBookings, setAllBookings] = React.useState([]);

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  React.useEffect(() => {
    if (currentCustomer) {
      let id = currentCustomer._id;
      console.log("current customer id: ", id);
      fetchData(id);
    }
  }, [currentCustomer]);

  async function fetchData(id) {
    let res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/api/booking/${id}`
    );
    console.log("all bookings of this customer: ", res.data);
    setAllBookings(res.data);
  }

  const renderTripBookings = () => {
    if (allBookings.length === 0) {
      return <h1>No Bookings Found!</h1>;
    }
    return allBookings
      .reverse()
      .map((booking) => <SingleTrip key={uuidv4()} booking={booking} />);
  };
  return <div className={styles.MyTrips}>{renderTripBookings()}</div>;
};

export default MyTrips;

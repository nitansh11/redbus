import React from "react";
import styles from "./SingleTrip.module.css";

const SingleTrip = ({ booking }) => {
  console.log("Booking is : ", booking);
  return (
    <div className={styles.SingleTrip}>
      <div className={styles.SingleTrip__image}>
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg"
          alt="bus image"
        />
      </div>
      <div className={styles.SingleTrip__details}>
        <div className={styles.SingleTrip__busDetails}>
          <p>Operator Name: Operator1</p>
          <p>Bus Type: Seater</p>
          <p>Booking Date: 2021-03-12 </p>
          <p>Departure Location: Lucknow</p>
          <p>Departure Time: 16:00 hrs</p>
          <p>Departure Date: 2021-03-11</p>
          <p>Arrival Location: Gorkhpur</p>
          <p>Arrival Time: 9:00 hrs</p>
          <p>Arrival Date: 2021-03-12</p>
          <p>Total Fare: Rs.2000</p>
        </div>
        <div className={styles.SingleTrip__customerDetails}>
          <p>Contact Email: nitansh11@gmail.com</p>
          <p>Conatct Phone Number: </p>
          <div className={styles.SingleTrip__customerDetails__passenger}>
            <p>Name: Nitansh</p>
            <p>Gender: Male</p>
            <p>Age: 26</p>
          </div>
          <div className={styles.SingleTrip__customerDetails__passenger}>
            <p>Name: Nitansh</p>
            <p>Gender: Male</p>
            <p>Age: 26</p>
          </div>
          <div className={styles.SingleTrip__customerDetails__passenger}>
            <p>Name: Nitansh</p>
            <p>Gender: Male</p>
            <p>Age: 26</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;

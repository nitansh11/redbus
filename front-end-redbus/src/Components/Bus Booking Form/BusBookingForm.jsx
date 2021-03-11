import React from "react";
import Styles from "./BusBookingForm.module.css";
import { MdAccountCircle } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BusBookingForm = () => {
  const seatsArray = useSelector((state) => state.busDetailsReducer.seats);

  let history = useHistory();
  const handleProceedToPay = () => {
    history.push("/payment-page");
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h4 className={Styles.passenger_mainTitle}>Enter Passenger Details</h4>
      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          boxShadow: "0 0 4px 0 hsla(0, 0%, 64%, 0.5)",
        }}
      >
        {seatsArray.map((seatNo, index) => {
          return (
            <div className={Styles.ContentBlock}>
              <div className={Styles.passangerInfoTitle}>
                <MdAccountCircle style={{ fontSize: "25px", color: "teal" }} />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>
                  Passenger Information
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "180px",
                  alignItems: "center",
                }}
              >
                <span>Passanger {index + 1}</span>
                <div
                  style={{
                    height: "12px",
                    backgroundColor: "silver",
                    width: "2px",
                  }}
                ></div>
                <span>Seat {seatNo}</span>
              </div>
              <div className={Styles.form_label}>Name</div>
              <input
                className={Styles.form_input}
                placeholder="Name"
                type="text"
                name="name"
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={Styles.form_label}>Gender</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: "10px",
                    }}
                  >
                    <input
                      className={Styles.radioButton}
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                    <div className={Styles.form_radio_label}>Male</div>
                    <input
                      className={Styles.radioButton}
                      type="radio"
                      name="gender"
                      value="Female"
                    />
                    <div className={Styles.form_radio_label}>Female</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={Styles.form_label}>Age</div>
                  <input
                    className={Styles.form_input}
                    placeholder="Age"
                    type="text"
                    name="age"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={Styles.ContentBlock}>
        <div className={Styles.passangerInfoTitle}>
          <MdEmail style={{ fontSize: "25px", color: "#f1af43" }} />
          <span style={{ marginLeft: "10px", marginTop: "2px" }}>
            Contact Details
          </span>
        </div>
        <div className={Styles.passengerContactMsg}>
          Your ticket will be sent to these details
        </div>
        <div className={Styles.form_label}>Email</div>
        <input
          className={Styles.form_input}
          placeholder="Email"
          type="email"
          name="email"
        />
        <div className={Styles.form_label}>Phone</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            className={Styles.form_input}
            placeholder="+91"
            type="text"
            style={{ width: "50px", color: "#4f91d9" }}
          />
          <input
            className={Styles.form_input}
            placeholder="Phone"
            type="number"
            name="phone"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <input type="checkbox" />
          <div style={{ marginLeft: "10px" }}>
            I am booking tickets for business travel.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <input type="checkbox" />
          <FaWhatsapp
            style={{ color: "green", fontSize: "18px", marginLeft: "10px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            Send updates and booking details on my Whatsapp number.
          </div>
        </div>
        <div className={Styles.insure_title}>
          Insure your travel by adding Rs 15 per passenger. Powered by 𝙄𝘾𝙄𝘾𝙄
          𝙇𝙤𝙢𝙗𝙖𝙧𝙙 𝙂𝙄𝘾 𝙇𝙩𝙙
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <img
              src="https://s1.rdbuz.com/apps/images/india-acko-insurance/luggage.png"
              alt="insurance"
              class="i-img"
              width="25"
              height="25"
            />
            <div>Loss of baggage</div>
            <div>Upto Rs. 3000 insurance cover</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              marginLeft: "40px",
              alignItems: "center",
            }}
          >
            <img
              src="https://s1.rdbuz.com/apps/images/india-acko-insurance/accident.png"
              alt="insurance"
              class="i-img"
              width="25"
              height="25"
            />
            <div>Personal Accident</div>
            <div>Rs. 6,00,000 insurance cover</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <input type="checkbox" />
          <div style={{ marginLeft: "10px" }}>
            Yes , secure my trip with insuarnce , I have read and understood the
            Terms and conditions
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <input type="checkbox" />
          <div style={{ marginLeft: "10px" }}>
            No , I dont want any insurance
          </div>
        </div>
      </div>
      <div className={Styles.ContentBlock}>
        <div>
          By clicking on proceed, I agree that I have read and understood the
          TnCs and the Privacy Policy
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>Total amount :</div>
          <div>17000.00</div>
          <input
            className={Styles.proceed_to_button}
            type="submit"
            value="proceed to pay"
            onClick={handleProceedToPay}
          />
        </div>
      </div>
    </div>
  );
};

export default BusBookingForm;

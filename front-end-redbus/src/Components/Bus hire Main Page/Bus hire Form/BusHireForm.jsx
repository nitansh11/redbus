import React from "react";
import Styles from "./BusHireForm.module.css";
import { FaRegDotCircle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const BusHireForm = ({ handleClick }) => {
  return (
    <div>
      <div className={Styles.BusHireFormcontainer}>
        <div className={Styles.outstationHeading}>
          <FaLongArrowAltLeft onClick={handleClick} />
          <div style={{ marginLeft: "20px" }}>Outstation</div>
        </div>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: " #e6f2ff",
              padding: "20px",
            }}
          >
            <div className={Styles.pickUpDestnationDiv}>
              <div className={Styles.pickupDestiationHeading}>Pick up</div>
              <div className={Styles.pickUpDestnationEachDiv}>
                <FaRegDotCircle style={{ color: "red", fontSize: "20px" }} />
                <input
                  className={Styles.inputBox}
                  type="text"
                  placeholder="Enter your Pickup location"
                />
              </div>
              <div className={Styles.pickUpDestnationEachDiv}>
                <div className={Styles.dottedDiv}></div>
                <div className={Styles.pickupDestiationHeading}>
                  Destination
                </div>
              </div>
              <div className={Styles.pickUpDestnationEachDiv}>
                <HiLocationMarker
                  style={{ color: "green", fontSize: "20px" }}
                />
                <input
                  className={Styles.inputBox}
                  type="text"
                  placeholder="Enter your Destination "
                />
              </div>
            </div>
            <div className={Styles.pickUpDestnationDiv}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    width: "65%",
                  }}
                >
                  <div className={Styles.fromWhenHeading}>From When</div>
                  <input className={Styles.inputBox} type="date" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    width: "65%",
                  }}
                >
                  <div className={Styles.fromWhenHeading}>Till When</div>
                  <input className={Styles.inputBox} type="date" />
                </div>
              </div>
            </div>
            <div className={Styles.pickUpDestnationDiv}>
              <div className={Styles.fromWhenHeading}>Number of Passengers</div>
              <input
                className={Styles.inputBox}
                type="number"
                placeholder="Enter number of passangers"
              />
            </div>
            <Link to="/bus-hire-card">
              <input
                type="submit"
                className={Styles.proceedDiv}
                value="Proceed"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusHireForm;

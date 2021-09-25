import React from "react";
import Styles from "./TripTypeContainer.module.css";
import { useSelector } from "react-redux";

const TripTypeContainer = ({ handleClick }) => {
  const customerName = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const checkLogin = () => {
    if (customerName === null) {
      alert("Please Login, To Book Seats");
    } else {
      handleClick();
    }
  };

  const handleLocalAndAirport = () => {
    alert(
      "Currently we are only providing Outstation service, so please select Outstation"
    );
  };

  return (
    <div>
      <div className={Styles.tripTypecontainer}>
        <div className={Styles.hireVehicleHeading}>Hire a Vehicle</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: " #e6f2ff",
            padding: "20px",
          }}
        >
          <div
            style={{ color: "#3e3e52", fontWeight: "700", fontSize: "19px" }}
          >
            click on the journey type
          </div>
          <div className={Styles.journeyTypeDiv} onClick={checkLogin}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={Styles.journeyText}>Outstation</div>
              <div className={Styles.journeySubText}>Anywere outside</div>
              <div className={Styles.journeySubText}>your city</div>
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/images/asset_outstation.png"
                alt=""
                height="90px"
              />
            </div>
          </div>
          <div
            className={Styles.journeyTypeDiv}
            onClick={handleLocalAndAirport}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={Styles.journeyText}>Local</div>
              <div className={Styles.journeySubText}>Anywere within</div>
              <div className={Styles.journeySubText}>your city</div>
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/images/asset_local.png"
                alt=""
                height="90px"
              />
            </div>
          </div>
          <div
            className={Styles.journeyTypeDiv}
            onClick={handleLocalAndAirport}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={Styles.journeyText}>Airport</div>
              <div className={Styles.journeySubText}>Pickup and drop to</div>
              <div className={Styles.journeySubText}>Airport</div>
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/images/asset_airport.png"
                alt=""
                height="90px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripTypeContainer;

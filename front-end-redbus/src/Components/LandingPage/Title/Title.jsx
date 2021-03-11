import React from "react";
import styles from "./Title.module.css";
import ApartmentIcon from "@material-ui/icons/Apartment";
import TodayIcon from "@material-ui/icons/Today";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import { useHistory } from "react-router-dom";
const Title = () => {
  const history = useHistory();
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  return (
    <div className={styles.title}>
      <div className={styles.img}>
        <img
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-43-achi-77903-lyj3636-5-journey.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=98dd8fc2e2bcc39fc4d4b134dc38bb19"
          alt="bus"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.formDiv}>
          <span>
            <ApartmentIcon color="disabled" className={styles.icon} />
          </span>
          <input
            type="text"
            placeholder="Source"
            value={departure}
            onChange={(e) => {
              setDeparture(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            height: "25px",
            width: "25px",
            position: "absolute",
            left: "32%",
            top: "15%",
          }}
        >
          <SettingsEthernetIcon
            color="disabled"
            style={{ position: "absolute" }}
          />
        </div>
        <div className={styles.formDiv}>
          <p style={{ width: "10px" }}></p>
          <span>
            <ApartmentIcon color="disabled" className={styles.icon} />
          </span>
          <input
            type="text"
            placeholder="Destination"
            value={arrival}
            onChange={(e) => {
              setArrival(e.target.value);
            }}
          />
        </div>
        <div className={styles.formDiv}>
          <span>
            <TodayIcon color="disabled" fontSize="default" />
          </span>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              history.push(
                `/select-bus?departure=${departure}&arrival=${arrival}&date=${date}`
              );
            }}
          >
            Search Bus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;

import React from "react";
import styles from "./Left.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterDetails } from "../../Redux/FilterAndSort/action";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import RestoreIcon from "@material-ui/icons/Restore";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AirlineSeatLegroomExtraIcon from "@material-ui/icons/AirlineSeatLegroomExtra";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import WeekendIcon from "@material-ui/icons/Weekend";
import AirlineSeatIndividualSuite from "@material-ui/icons/AirlineSeatIndividualSuite";
import AvTimerIcon from "@material-ui/icons/AvTimer";

const initState = {
  liveTracking: false,
  reschedulable: false,
  departureTime: {
    before6am: false,
    "6amto12pm": false,
    "12pmto6pm": false,
    after6pm: false,
  },
  busType: {
    seater: false,
    sleeper: false,
    ac: false,
    nonac: false,
  },
  arrivalTime: {
    before6am: false,
    "6amto12pm": false,
    "12pmto6pm": false,
    after6pm: false,
  },
  boardingPoint: "",
  droppingPoint: "",
  operator: "",
  amenities: {
    wifi: false,
    waterBottle: false,
    blankets: false,
    chargingPoint: false,
    movie: false,
  },
};
const Left = () => {
  const [sideFilterValues, setSideFilterValues] = React.useState(initState);

  //Filter and sort reducer
  let dispatch = useDispatch();
  const filterBusType = useSelector(
    (state) => state.updateFilterDetailsReducer.busType
  );

  const filterDepartureTime = useSelector(
    (state) => state.updateFilterDetailsReducer.departureTime
  );

  const filterArrivalTime = useSelector(
    (state) => state.updateFilterDetailsReducer.arrivalTime
  );

  const filterLiveTracking = useSelector(
    (state) => state.updateFilterDetailsReducer.liveTracking
  );

  const filterReschedulable = useSelector(
    (state) => state.updateFilterDetailsReducer.reschedulable
  );

  // handling live tracking filter
  const handleLiveTrackingClick = () => {
    setSideFilterValues({
      ...sideFilterValues,
      liveTracking: !sideFilterValues.liveTracking,
    });

    const payload = {
      key: "liveTracking",
      value: !filterLiveTracking,
    };

    dispatch(updateFilterDetails(payload));
  };

  // handling reschedulable filter
  const handleReschedulableClick = () => {
    setSideFilterValues({
      ...sideFilterValues,
      reschedulable: !sideFilterValues.reschedulable,
    });

    const payload = {
      key: "reschedulable",
      value: !filterReschedulable,
    };

    dispatch(updateFilterDetails(payload));
  };

  // handle departure time filters
  const handleDepartureTimeChange = (e) => {
    const name = e.target.name;
    setSideFilterValues({
      ...sideFilterValues,
      departureTime: {
        ...sideFilterValues.departureTime,
        [name]: e.target.checked,
      },
    });
    const payload = {
      key: "departureTime",
      value: { ...filterDepartureTime, [name]: e.target.checked },
    };

    dispatch(updateFilterDetails(payload));
  };

  // handle arrival time filters
  const handleArrivalTimeChange = (e) => {
    const name = e.target.name;
    setSideFilterValues({
      ...sideFilterValues,
      arrivalTime: {
        ...sideFilterValues.arrivalTime,
        [name]: e.target.checked,
      },
    });

    const payload = {
      key: "arrivalTime",
      value: { ...filterArrivalTime, [name]: e.target.checked },
    };
    console.log(payload);
    dispatch(updateFilterDetails(payload));
  };

  // handle bus type filters
  const handleBusTypeChange = (e) => {
    const name = e.target.name;
    setSideFilterValues({
      ...sideFilterValues,
      busType: {
        ...sideFilterValues.busType,
        [name]: e.target.checked,
      },
    });

    const payload = {
      key: "busType",
      value: { ...filterBusType, [name]: e.target.checked },
    };

    dispatch(updateFilterDetails(payload));
  };

  return (
    <div className={styles.Left}>
      {/* 1. Basic Filters */}
      <div className={styles.Left_filters}>
        <p>FILTERS</p>
        <ul>
          <li onClick={handleLiveTrackingClick}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <GpsFixedIcon />
              &nbsp;&nbsp;
              <div>Live Tracking&nbsp;&nbsp;</div>
              {sideFilterValues.liveTracking && (
                <CheckCircleOutlineIcon style={{ color: "green" }} />
              )}
            </div>
          </li>
          <li onClick={handleReschedulableClick}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <RestoreIcon />
              &nbsp;&nbsp;
              <div>Reschedulable&nbsp;&nbsp;</div>
              {sideFilterValues.reschedulable && (
                <CheckCircleOutlineIcon style={{ color: "green" }} />
              )}
            </div>
          </li>
        </ul>
      </div>
      {/* 2. Departure Filters */}
      <div className={styles.Left_filters}>
        <p>DEPARTURE TIME</p>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="before6am"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["before6am"]}
            />
            &nbsp;&nbsp;
            <AvTimerIcon />
            &nbsp;&nbsp;
            <p>Before 6 am </p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="6amto12pm"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["6amto12pm"]}
            />
            &nbsp;&nbsp;
            <AvTimerIcon />
            &nbsp;&nbsp;
            <p>6 am to 12 pm </p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="12pmto6pm"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["12pmto6pm"]}
            />
            &nbsp;&nbsp;
            <AccessAlarmIcon />
            &nbsp;&nbsp;
            <p>12pm to 6 pm </p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "10px",
            }}
          >
            <input
              type="checkbox"
              name="after6pm"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["after6pm"]}
            />
            &nbsp;&nbsp;
            <AccessAlarmIcon />
            &nbsp;&nbsp;
            <p>After 6 pm </p>
          </li>
        </ul>
      </div>
      {/* 3. Bus Types Filters */}
      <div className={styles.Left_filters}>
        <p>BUS TYPES</p>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "10px",
            }}
          >
            <input
              type="checkbox"
              name="seater"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["seater"]}
            />
            &nbsp;&nbsp;
            <AirlineSeatLegroomExtraIcon />
            &nbsp;&nbsp;
            <p>SEATER </p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "10px",
            }}
          >
            <input
              type="checkbox"
              name="sleeper"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["sleeper"]}
            />
            &nbsp;&nbsp;
            <AirlineSeatIndividualSuite />
            &nbsp;&nbsp;
            <p>SLEEPER </p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "10px",
            }}
          >
            <input
              type="checkbox"
              name="ac"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["ac"]}
            />
            &nbsp;&nbsp;
            <WeekendIcon />
            &nbsp;&nbsp;
            <p>AC</p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "10px",
            }}
          >
            <input
              type="checkbox"
              name="nonac"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["nonac"]}
            />
            &nbsp;&nbsp;
            <DirectionsBusIcon />
            &nbsp;&nbsp;
            <p>NON - A/C</p>
          </li>
        </ul>
      </div>
      {/* 4. Arrival Time Filters */}

      <div className={styles.Left_filters}>
        <p>ARRIVAL TIME</p>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="before6am"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["before6am"]}
            />
            &nbsp;&nbsp;
            <AvTimerIcon />
            &nbsp;&nbsp;
            <p>Before 6 am</p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="6amto12pm"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["6amto12pm"]}
            />
            &nbsp;&nbsp;
            <AvTimerIcon />
            &nbsp;&nbsp;
            <p>6 am to 12 pm</p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="12pmto6pm"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["12pmto6pm"]}
            />
            &nbsp;&nbsp;
            <AccessAlarmIcon />
            &nbsp;&nbsp;
            <p>12pm to 6 pm </p>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <input
              type="checkbox"
              name="after6pm"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["after6pm"]}
            />
            &nbsp;&nbsp;
            <AccessAlarmIcon />
            &nbsp;&nbsp;
            <p>After 6 pm</p>
          </li>
        </ul>
      </div>

      {/* 8. Amenities */}
      <div className={styles.Left_filters}>
        <p>AMENITIES</p>
        <ul className={styles.Left_filters__amenities}>
          <li style={{ display: "flex", alignItems: "center" }}>
            <WifiIcon />
            &nbsp;&nbsp; WiFi
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <LocalDrinkIcon />
            &nbsp;&nbsp; Water Bottles
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <InsertDriveFileIcon />
            &nbsp;&nbsp; Blankets
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <SettingsInputHdmiIcon />
            &nbsp;&nbsp; Charging Point
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <LocalMoviesIcon />
            &nbsp;&nbsp; Movie
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;

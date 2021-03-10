import React from "react";
import styles from "./Left.module.css";
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
  // handling live tracking filter
  const handleLiveTrackingClick = () => {
    setSideFilterValues({
      ...sideFilterValues,
      liveTracking: !sideFilterValues.liveTracking,
    });
  };

  // handling reschedulable filter
  const handleReschedulableClick = () => {
    setSideFilterValues({
      ...sideFilterValues,
      reschedulable: !sideFilterValues.reschedulable,
    });
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
  };

  //hnadle amenities change
  const handleAmenitiesChange = (amenityname) => {
    setSideFilterValues({
      ...sideFilterValues,
      amenities: {
        ...sideFilterValues.amenities,
        [amenityname]: !sideFilterValues.amenities[amenityname],
      },
    });
  };

  console.log(sideFilterValues);
  return (
    <div className={styles.Left}>
      {/* 1. Basic Filters */}
      <div className={styles.Left_filters}>
        <p>FILTERS</p>
        <ul>
          <li onClick={handleLiveTrackingClick}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Live Tracking (32)
          </li>
          <li onClick={handleReschedulableClick}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Reschedulable (28)
          </li>
        </ul>
      </div>
      {/* 2. Departure Filters */}
      <div className={styles.Left_filters}>
        <p>DEPARTURE TIME</p>
        <ul>
          <li>
            <input
              type="checkbox"
              name="before6am"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["before6am"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="6amto12pm"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["6amto12pm"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>6 am to 12 pm (5)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="12pmto6pm"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["12pmto6pm"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>12pm to 6 pm (2)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="after6pm"
              onChange={handleDepartureTimeChange}
              checked={sideFilterValues.departureTime["after6pm"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>After 6 pm (3)</p>
          </li>
        </ul>
      </div>
      {/* 3. Bus Types Filters */}
      <div className={styles.Left_filters}>
        <p>BUS TYPES</p>
        <ul>
          <li>
            <input
              type="checkbox"
              name="seater"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["seater"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>SEATER (0)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="sleeper"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["sleeper"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>SLEEPER (0)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="ac"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["ac"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>AC (0)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="nonac"
              onChange={handleBusTypeChange}
              checked={sideFilterValues.busType["nonac"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>NONAC (0)</p>
          </li>
        </ul>
      </div>
      {/* 4. Arrival Time Filters */}

      <div className={styles.Left_filters}>
        <p>ARRIVAL TIME</p>
        <ul>
          <li>
            <input
              type="checkbox"
              name="before6am"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["before6am"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="6amto12pm"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["6amto12pm"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>6 am to 12 pm (5)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="12pmto6pm"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["12pmto6pm"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>12pm to 6 pm (6)</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="after6pm"
              onChange={handleArrivalTimeChange}
              checked={sideFilterValues.arrivalTime["after6pm"]}
            />
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>After 6 pm (7)</p>
          </li>
        </ul>
      </div>
      {/* 5. Boarding Point Filters */}
      <div className={styles.Left_filters}>
        <p>BOARDING POINT</p>
        <div className={styles.Left_filters__search}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            name="boardingPoint"
            value={sideFilterValues.boardingPoint}
            onChange={(e) => {
              setSideFilterValues({
                ...sideFilterValues,
                boardingPoint: e.target.value,
              });
            }}
          />
        </div>
      </div>

      {/* 6. Dropping Point Filters */}
      <div className={styles.Left_filters}>
        <p>DROPPING POINT</p>
        <div className={styles.Left_filters__search}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            name="droppingPoint"
            value={sideFilterValues.droppingPoint}
            onChange={(e) => {
              setSideFilterValues({
                ...sideFilterValues,
                droppingPoint: e.target.value,
              });
            }}
          />
        </div>
      </div>
      {/* 7. Operator */}
      <div className={styles.Left_filters}>
        <p>OPERATOR</p>
        <div className={styles.Left_filters__search}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            name="operator"
            value={sideFilterValues.operator}
            onChange={(e) => {
              setSideFilterValues({
                ...sideFilterValues,
                operator: e.target.value,
              });
            }}
          />
        </div>
      </div>
      {/* 8. Amenities */}
      <div className={styles.Left_filters}>
        <p>AMENITIES</p>
        <ul className={styles.Left_filters__amenities}>
          <li onClick={() => handleAmenitiesChange("wifi")}>WiFi (7)</li>
          <li onClick={() => handleAmenitiesChange("waterBottle")}>
            Water Bottle (4)
          </li>
          <li onClick={() => handleAmenitiesChange("blankets")}>
            Blankets (2)
          </li>
          <li onClick={() => handleAmenitiesChange("chargingPoint")}>
            Charging Point (13)
          </li>
          <li onClick={() => handleAmenitiesChange("movie")}>Movie (22)</li>
        </ul>
      </div>
    </div>
  );
};

export default Left;

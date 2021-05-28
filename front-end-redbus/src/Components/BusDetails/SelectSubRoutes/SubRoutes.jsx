import React from "react";
import styles from "./SubRoutes.module.css";
import { useDispatch } from "react-redux";
import { updateBookingDetails } from "../../../Redux/BookBus/action";
import { useLocation } from "react-router-dom";

const SubRoutes = ({
  handleBoardAndDrop,
  routeDetails,
  busArrivalTime,
  busDepartureTime,
}) => {
  const [pointActive, setPointActive] = React.useState(true);

  //get boarding and destination point
  const [boardPoint, setBoardPoint] = React.useState("");
  const [destPoint, setDestPoint] = React.useState("");

  var boardingStyle, droppingStyle;

  const activeStyle = {
    borderBottom: "3px solid red",
  };

  const inactiveStyle = {
    borderBottom: "0px",
  };

  if (pointActive === false) {
    droppingStyle = activeStyle;
    boardingStyle = inactiveStyle;
  } else {
    droppingStyle = inactiveStyle;
    boardingStyle = activeStyle;
  }

  const boardingSubpoints = routeDetails["departureLocation"]["subLocations"];
  const destinationSubpoints = routeDetails["arrivalLocation"]["subLocations"];

  const handleBoardChange = (e) => {
    setBoardPoint(e.target.value);
  };

  const handleDestChange = (e) => {
    setDestPoint(e.target.value);
  };

  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const date = query.get("date");

  let dispatch = useDispatch();
  const handleBoardAndDrop2 = () => {
    var newdate = date;

    const payload1 = {
      key: "departureDetails",
      value: {
        city: routeDetails["departureLocation"].name,
        location: boardPoint,
        time: Number(busDepartureTime),
        date: newdate,
      },
    };

    const payload2 = {
      key: "arrivalDetails",
      value: {
        city: routeDetails["arrivalLocation"].name,
        location: destPoint,
        time: busArrivalTime,
        date: newdate,
      },
    };

    dispatch(updateBookingDetails(payload1));
    dispatch(updateBookingDetails(payload2));

    handleBoardAndDrop();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer1}>
        <div onClick={() => setPointActive(!pointActive)} style={boardingStyle}>
          BOARDING POINT
        </div>
        <div onClick={() => setPointActive(!pointActive)} style={droppingStyle}>
          DROPPING POINT
        </div>
      </div>
      <div>
        {pointActive ? (
          <div
            className={styles.mainContainer2}
            key="boardingContainer"
            onChange={handleBoardChange}
          >
            {boardingSubpoints.map((item) => {
              return (
                <div className={styles.mainContainer21} key={item}>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#4a4a4a",
                      fontWeight: "700",
                    }}
                  >
                    <input
                      type="radio"
                      id={item}
                      name="board-address"
                      value={item}
                    />
                    &nbsp;&nbsp; 9:30
                  </div>
                  <div>
                    <span style={{ fontSize: "16px", color: "#3e3e52" }}>
                      {item}
                    </span>
                    <span style={{ fontSize: "14px", color: "#7e7e8c" }}>
                      {item}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={styles.mainContainer2}
            key="destinationContainer"
            onChange={handleDestChange}
          >
            {destinationSubpoints.map((item) => {
              return (
                <div className={styles.mainContainer21} key={item}>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#4a4a4a",
                      fontWeight: "700",
                    }}
                  >
                    <input
                      type="radio"
                      id={item}
                      name="dest-address"
                      value={item}
                    />
                    &nbsp;&nbsp; 9:30
                  </div>
                  <div>
                    <span style={{ fontSize: "16px", color: "#3e3e52" }}>
                      {item}
                    </span>
                    <span style={{ fontSize: "14px", color: "#7e7e8c" }}>
                      {item}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <button className={styles.continueButton} onClick={handleBoardAndDrop2}>
        Continue
      </button>
    </div>
  );
};

export { SubRoutes };

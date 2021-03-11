import React from "react";
import styles from "./SubRoutes.module.css";

const SubRoutes = ({ handleBoardAndDrop }) => {
  const [pointActive, setPointActive] = React.useState(false);

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

  const boardingSubpoints = [
    "Boarding Subpoint1",
    "Boarding Subpoint2",
    "Boarding Subpoint3",
    "Boarding Subpoint4",
    "Boarding Subpoint5",
    "Boarding Subpoint6",
  ];
  const destinationSubpoints = [
    "Destination Subpoint1",
    "Destination Subpoint2",
    "Destination Subpoint3",
    "Destination Subpoint4",
    "Destination Subpoint5",
    "Destination Subpoint6",
  ];

  const handleBoardChange = (e) => {
    setBoardPoint(e.target.value);
  };

  const handleDestChange = (e) => {
    setDestPoint(e.target.value);
  };

  console.log(boardPoint, destPoint);

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
      <button className={styles.continueButton} onClick={handleBoardAndDrop}>
        Continue
      </button>
    </div>
  );
};

export { SubRoutes };

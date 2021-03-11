import React from "react";
import styles from "./ViewSeats.module.css";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import { SmallSeat } from "./SmallSeat";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import Divider from "@material-ui/core/Divider";
import { FormDrawer } from "./FormDrawer";
import { SubRoutes } from "../SelectSubRoutes/SubRoutes";

const ViewSeats = () => {
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const alreadyBookedSeats = [1, 10, 13, 25, 35];

  const [boardAndDrop, setBoardAndDrop] = React.useState(false);

  const handleBoardAndDrop = () => {
    setBoardAndDrop(!boardAndDrop);
  };

  const handleSelectedSeats = (seatNo) => {
    if (selectedSeats.includes(seatNo)) {
      const arr = selectedSeats.filter((item) => item !== seatNo);
      setSelectedSeats(arr);
    } else {
      setSelectedSeats([...selectedSeats, seatNo]);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer1}>
        <div className={styles.mainContainer1Left}>
          <DonutSmallIcon />
        </div>
        <div className={styles.mainContainer1Right}>
          <div>
            {new Array(10).fill(0).map((item, index) => {
              return (
                <SmallSeat
                  key={index}
                  seatNo={index + 1}
                  alreadyBookedSeats={alreadyBookedSeats}
                  handleSelectedSeats={handleSelectedSeats}
                  selectedSeats={selectedSeats}
                />
              );
            })}
          </div>
          <div>
            {new Array(10).fill(0).map((item, index) => {
              return (
                <SmallSeat
                  key={index}
                  seatNo={10 + index + 1}
                  alreadyBookedSeats={alreadyBookedSeats}
                  handleSelectedSeats={handleSelectedSeats}
                  selectedSeats={selectedSeats}
                />
              );
            })}
          </div>
          <div></div>
          <div>
            {new Array(10).fill(0).map((item, index) => {
              return (
                <SmallSeat
                  key={index}
                  seatNo={20 + index + 1}
                  alreadyBookedSeats={alreadyBookedSeats}
                  handleSelectedSeats={handleSelectedSeats}
                  selectedSeats={selectedSeats}
                />
              );
            })}
          </div>
          <div>
            {new Array(10).fill(0).map((item, index) => {
              return (
                <SmallSeat
                  key={index}
                  seatNo={30 + index + 1}
                  alreadyBookedSeats={alreadyBookedSeats}
                  handleSelectedSeats={handleSelectedSeats}
                  selectedSeats={selectedSeats}
                />
              );
            })}
          </div>
        </div>
      </div>
      {selectedSeats.length === 0 && (
        <div className={styles.mainContainer2}>
          <div className={styles.mainContainer21}>
            <div style={{ fontWeight: "bold" }}>SEAT LEGEND</div>
            <div>
              <div>
                <CheckBoxOutlineBlankIcon
                  style={{
                    backgroundColor: "black",
                    borderRadius: "4px",
                    border: "0px",
                  }}
                />
                &nbsp;&nbsp;
                <span>Available</span>
              </div>
              <div>
                <CheckBoxOutlineBlankIcon
                  style={{
                    backgroundColor: "#EEEDED",
                    borderRadius: "4px",
                    border: "0px",
                  }}
                />
                &nbsp;&nbsp;
                <span>Unavailable</span>
              </div>
            </div>
          </div>
          <div className={styles.mainContainer22}>
            <div style={{ fontWeight: "bold" }}>REDDEAL</div>
            <div>
              <div>Get 8% Extra OFF</div>
              <div>Terms and Conditions::</div>
              <div>Minimum ticket fare : INR 100</div>
              <div>Maximum discount limit : INR 60</div>
            </div>
          </div>
        </div>
      )}
      {boardAndDrop && (
        <div className={styles.mainContainer3}>
          <div className={styles.mainContainer31}>
            <div>Boarding and Dropping</div>
            <div onClick={handleBoardAndDrop}>CHANGE</div>
          </div>
          <div className={styles.mainContainer32}>
            <div>
              <div>
                <span style={{ fontSize: "16px", color: "#3e3e52" }}>
                  <FiberManualRecordIcon style={{ fontSize: "12px" }} />
                  &nbsp;&nbsp; Naya More
                </span>
                <br />{" "}
                <span style={{ fontSize: "14px", color: "#7e7e8c" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Naya More
                </span>
              </div>
            </div>
            <div
              style={{ fontSize: "16px", color: "#4a4a4a", fontWeight: "700" }}
            >
              9:30
            </div>
          </div>
          <div className={styles.mainContainer33}>
            <div>
              <div>
                <span style={{ fontSize: "16px", color: "#3e3e52" }}>
                  <FiberManualRecordOutlinedIcon style={{ fontSize: "12px" }} />
                  &nbsp;&nbsp; Sarkari Bus Stand
                </span>
                <br></br>
                <span style={{ fontSize: "14px", color: "#7e7e8c" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sarkari Bus Stand
                </span>
              </div>
            </div>
            <div
              style={{ fontSize: "16px", color: "#4a4a4a", fontWeight: "700" }}
            >
              11:30
            </div>
          </div>
          <Divider />
          <div className={styles.mainContainer34}>
            <div>Seat No.</div>
            <div>B14, B15, B16</div>
          </div>
          <Divider />
          <div className={styles.mainContainer35}>Fare Details</div>
          <div className={styles.mainContainer36}>
            <div>
              <span style={{ fontSize: "14px", color: "#3e3e52" }}>Amount</span>
              <br></br>
              <span
                style={{ fontSize: "10px", color: "#838083", marginTop: "5px" }}
              >
                Taxes will be calculated during payment
              </span>
            </div>
            <div>INR 231.52</div>
          </div>
          <div className={styles.mainContainer37}>
            <FormDrawer />
          </div>
        </div>
      )}
      {!boardAndDrop && selectedSeats.length > 0 && (
        <SubRoutes handleBoardAndDrop={handleBoardAndDrop} />
      )}
    </div>
  );
};

export { ViewSeats };

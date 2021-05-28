import React from "react";
import styles from "./BusBox.module.css";
import StarsIcon from "@material-ui/icons/Stars";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import PowerIcon from "@material-ui/icons/Power";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import Tooltip from "@material-ui/core/Tooltip";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import RestoreIcon from "@material-ui/icons/Restore";
import { BottomTabs } from "../BottomTabs/BottomTabs";
import { useDispatch } from "react-redux";
import { updateBookingDetails } from "../../../Redux/BookBus/action";

const BusBox = ({
  _id,
  rating,
  operatorName,
  busType,
  departureTime,
  liveTracking,
  reschedulable,
  filledSeats,
  routeDetails,
}) => {
  // capturing duration in redux store
  let dispatch = useDispatch();
  React.useEffect(() => {
    const payload1 = {
      key: "duration",
      value: routeDetails["duration"],
    };

    dispatch(updateBookingDetails(payload1));
  }, [routeDetails,dispatch]);

  var avgRating = 0;
  var totalReviews = 0;
  rating.forEach((item, index) => {
    avgRating += (index + 1) * item;
    totalReviews += item;
  });

  avgRating = (avgRating / totalReviews).toFixed(1);

  var seatPrice = 0;
  var busTypeName = "";
  if (busType === 1) {
    seatPrice = 50 * Math.floor(routeDetails["duration"] / 2);
    busTypeName = "Seater";
  } else if (busType === 2) {
    seatPrice = 100 * Math.floor(routeDetails["duration"] / 2);
    busTypeName = "Sleeper";
  } else if (busType === 3) {
    seatPrice = 125 * Math.floor(routeDetails["duration"] / 2);
    busTypeName = "A/C Seater";
  } else {
    seatPrice = 75 * Math.floor(routeDetails["duration"] / 2);
    busTypeName = "Non - A/C";
  }

  var busDepartureTime = departureTime;
  var busArrivalTime =
    (Number(departureTime) + Number(routeDetails["duration"])) % 24;
  return (
    <div className={styles.busBox}>
      <div className={styles.busBoxSection1}>
        <div className={styles.busBoxSection11}>
          <div>{operatorName}</div>
          <div>{busTypeName}</div>
        </div>
        <div className={styles.busBoxSection12}>
          <div>{busDepartureTime}:00</div>
          <div>{routeDetails["departureLocation"]["name"]}</div>
        </div>
        <div className={styles.busBoxSection13}>
          <div>{routeDetails["duration"]}&nbsp;h</div>
        </div>
        <div className={styles.busBoxSection14}>
          <div>{busArrivalTime}:00</div>
          <div>{routeDetails["arrivalLocation"]["name"]}</div>
        </div>
        <div className={styles.busBoxSection15}>
          <div>
            <StarsIcon />
            <div>{avgRating}</div>
          </div>
          <div>
            <PeopleIcon />
            <div>{totalReviews}</div>
          </div>
        </div>
        <div className={styles.busBoxSection16}>
          <div>
            <div>INR</div>
            <div>{seatPrice}</div>
          </div>
          <div>
            <LocalOfferIcon />
            <div>redDeal applied</div>
          </div>
        </div>
        <div className={styles.busBoxSection17}>
          <div></div>
          <div>
            <div>{40 - filledSeats.length}</div>
            <div>Seats Available</div>
          </div>
          <div>
            <div>20</div>
            <div>Window</div>
          </div>
        </div>
      </div>
      <div className={styles.busBoxSection2}>
        <div className={styles.busBoxSection21}>
          <Tooltip title="Charging Point" arrow>
            <PowerIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
          <Tooltip title="Movie" arrow>
            <MovieFilterIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
          <Tooltip title="Reading Light" arrow>
            <WbIncandescentIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
          <Tooltip title="Track My Bus" arrow>
            <DirectionsBusIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
        </div>
        <div className={styles.busBoxSection22}>
          {liveTracking === 1 && (
            <div>
              <GpsFixedIcon
                style={{
                  fontWeight: "50",
                  fontSize: "20px",
                  marginRight: "6px",
                }}
              />
              <span>Live Tracking</span>
            </div>
          )}
          {reschedulable === 1 && (
            <div>
              <RestoreIcon
                style={{
                  fontWeight: "50",
                  fontSize: "20px",
                  marginRight: "6px",
                }}
              />
              <span>Reschedulable</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.busBoxSection3}>
        <BottomTabs
          filledSeats={filledSeats}
          seatPrice={seatPrice}
          routeDetails={routeDetails}
          busId={_id}
          busArrivalTime={busArrivalTime}
          busDepartureTime={busDepartureTime}
          operatorName={operatorName}
        />
      </div>
    </div>
  );
};

export { BusBox };

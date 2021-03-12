import React from "react";
import styles from "./BusServiceDetailsPage.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import BatteryCharging30Icon from "@material-ui/icons/BatteryCharging30";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusOnIdThunk } from "../../../Redux/busService/action";
import { Link } from "react-router-dom";
const BusServiceDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBus = useSelector((state) => state.busServiceReducer.currentBus);
  console.log(currentBus);
  const isLoading = useSelector((state) => state.busServiceReducer.isLoading);
  React.useEffect(() => {
    // setLoading(true);
    // axios
    //   .get(`http://localhost:8000/v1/api/busservice/${id}`)
    //   .then((res) => {
    //     setResult(res.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
    dispatch(getBusOnIdThunk(id));
  }, []);
  return isLoading ? (
    <div>...Loading...</div>
  ) : (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsLeftContainer}>
        <h3
          style={{
            marginTop: "0",
            paddingTop: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowBackIcon /> &nbsp; Back to Result
        </h3>
        <div>
          <img
            src={currentBus.img}
            alt=""
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div>
          <h2 className={styles.fontStylebus}>Trip Summary</h2>
          <p className={styles.para1}>
            The estimated route for this trip is{" "}
            <span style={{ color: "black", fontWeight: "700" }}>11001 </span>km
          </p>
        </div>
        <div>
          <h2 className={styles.fontStylebus}>Ameneties</h2>
          <p className={styles.para1}>
            <MusicNoteIcon /> &nbsp; Music System
          </p>
          <p className={styles.para1}>
            <BatteryCharging30Icon />
            &nbsp; charging point
          </p>
          <div>
            <h2 className={styles.fontStylebus}>Important Information</h2>
            <ul className={styles.busStyleList}>
              <li>
                Trip cost is calculated on a minimum distance of 1101 KM. Any
                usage beyond this will be billed at Rs. 17/KM
              </li>
              <li>
                Any Km usage above billed distance will have to be paid to the
                bus operator at the end of the trip.
              </li>
              <li>
                No refunds will be issued in case customer uses the vehicle
                provided for lesser than the 1101 KM or the trip time indicated
              </li>
              <li>
                Interstate taxes of Rs. 2400 is already included in your trip.
              </li>
              <li>
                Night bata charges of INR 300/Night are applicable in case
                driver drives between 22:30 and 4:30.
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.fontStylebus}>Exclusion</h2>
            <ul className={styles.busStyleList}>
              <li>Free Cancellation till 20 Mar 2021, 04:15 PM</li>
              <li>Smoking and consumption of alcohol not allowed</li>
              <li>A/C may be switched off in hilly areas</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.fontStylebus}>You will have access to</h2>
            <p className={styles.para1}>
              {" "}
              <ThumbUpAltIcon /> &nbsp; Drivers who are highly rated.{" "}
            </p>
            <p className={styles.para1}>
              {" "}
              <LocationOnIcon /> &nbsp; Drivers who are familiar with the route
              and nearby areas.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.detailsRightContainer}>
        <h2>{currentBus.vehicle}</h2>
        <div>
          <h2>Choose A Package</h2>
          <p>
            Its better to choose extra KMS for moving within your destination
            city for sightseeing, shopping etc...{" "}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              backgroundColor: "#F8F4F4",
            }}
            className={styles.redBoxkmparent}
          >
            <p className={styles.redBoxkm}>1101 kms</p>
            <p className={styles.redBoxkm}>Rs.{currentBus.total}</p>
            <span
              style={{
                display: "inline",
                fontSize: "14px",
                color: "#747070",
              }}
            >
              Extra km: ₹17/km | Extra hour: ₹170
            </span>
          </div>
          <div>
            <h4
              style={{
                backgroundColor: "#d84e55",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "whitesmoke",
                letterSpacing: "1px",
                fontSize: "18px",
                marginBottom: "0",
                cursor: "pointer",
              }}
            >
              <Link to={`/payments-hire`}> Book For Rs.4,913</Link>
            </h4>
            <span
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#747070",
              }}
            >
              Pay balance ₹ 18039.64 online by 19th Mar 2021 or to driver in
              cash.
            </span>
          </div>
          <div>
            <h4>Fare breakup</h4>
            <div className={styles.breakingPrices}>
              <li>
                <p className={styles.greyp}>Base Fair</p>
                <p className={styles.greyp}>Rs. 14,517</p>
              </li>
              <li>
                <p className={styles.greyp}>Driver Allowance</p>
                <p className={styles.greyp}>Rs. 900</p>
              </li>
              <li>
                <p className={styles.greyp}>GST @ 5%</p>
                <p className={styles.greyp}>Rs. 935.80</p>
              </li>
              <li>
                <p className={styles.greyp}>Interstate taxes</p>
                <p className={styles.greyp}>Rs 900</p>
              </li>
              <li>
                <p className={styles.greyp}>Interstate taxes</p>
                <p className={styles.greyp}>Rs. 857.30</p>
              </li>
              <li
                style={{
                  backgroundColor: "#F3E6E6",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "black",
                    fontWeight: "700",
                    paddingBottom: "10px",
                  }}
                >
                  Total Cost of your trip
                </p>
                <p
                  style={{
                    color: "green",
                    fontWeight: "700",
                    paddingBottom: "10px",
                  }}
                >
                  Rs.{currentBus.total}
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusServiceDetailsPage;

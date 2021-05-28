import React from "react";
import design from "./BusServiceCard.module.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { getBusData2 } from "../../../Redux/busService/action";
import { useLocation } from "react-router-dom";

const BusServiceCardPage = () => {
  const busList = useSelector((state) => state.busServiceReducer.busList);
  console.log(busList);
  const dispatch = useDispatch();

  //const history = useHistory();
  // const handleClick = (id) => {
  //   history.push(`/busPage/${id}`);
  // };
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const pickUp = query.get("pickUp");
  const drop = query.get("drop");
  const pickUpDate = query.get("pickUpDate");
  const dropDate = query.get("dropDate");
  const totalPassengers = query.get("totalPassengers");

  React.useEffect(() => {
    dispatch(getBusData2());
  }, [dispatch]);
  return (
    <div className={design.mainContainer}>
      <div className={design.leftContainer}>
        <h1 style={{ textTransform: "none", marginTop : "30px" , marginBottom : "20px"}}>
          We have {busList.length !== 0 ? busList.length : 0} quotations for you
        </h1>
        <div className={design.cardContainer}>
          {busList?.map((item) => {
            return (
              <div className={design.card}>
                <div className={design.imgBox}>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h2>{item.vehicle}</h2>
                  <p></p>
                  <h1
                    style={{
                      textAlign: "right",
                      margin: "20px 8px 20px 0px",
                      color: "#d84f57",
                      textTransform: "none",
                      lineHeight: "15px"
                    }}
                  >
                    <span style={{ fontSize: "14px", color: "grey" }}>
                      Starting Cost
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "16px", color: "#d84e55", fontWeight: "700" }}>Rs.{item.total}</span>
                  </h1>
                </div>
                <div className={design.footerCard}>
                  {/* <Link to={`/busdetails/:${item._id}`}>view details</Link> */}
                  <Button color="primary">
                    <Link style={{ textDecoration: "none", fontWeight: "700", color: "#1034d9" }}
                      to={`/bus-hire-details/${item._id}?pickUp=${pickUp}&drop=${drop}&pickUpDate=${pickUpDate}&dropDate=${dropDate}&totalPassengers=${totalPassengers}`}
                    >
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={design.rightContainer}>
        {/* <div className={design.blueContainer}>
          <img
            style={{ display: "inline-block", marginRight: "16px" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fmoney-icons%2F100%2F1-512.png&f=1&nofb=1"
            alt=""
            height="60px"
          />
          <p style={{ display: "inline-block" }}>
            Pay just 25% as advance to book
          </p>
        </div> */}
        {/* <div className={design.blueContainer}>
          <img
            style={{ display: "inline-block", marginRight: "16px" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4QKxNTpVlc7F3vqAPsb_NgHaHa%26pid%3DApi&f=1"
            alt=""
            height="60px"
          />
          <p style={{ display: "inline-block" }}>
            Free Cancellation till 20 Mar 2021, 04:15 PM
          </p>
        </div> */}
        <div className={design.safetyContainer}>
          <div className={design.BusimgBox}>
            <img
              src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
              alt=""
            />
          </div>
          <div className={design.orange}>
            <h4>Safety + </h4>
            <p>Your safety is our first priority</p>
          </div>
          <ul style={{ textAlign: "left" }}>
            <li>Hand sanitiser in all vehicles</li>
            <li>Masks worn by all staff</li>
            <li>Deep cleaning of vehicles</li>
            <li>No Blankets / Linen provided </li>
            <li>Regular staff body temprature checks</li>
          </ul>
        </div>
        <div
          style={{
            padding: "10px",
            backgroundColor: "#E5EBF8",
            marginTop: "20px",
          }}
        >
          <h3>Covid 19 travel guidelines</h3>
          <p>Check latest travel guidelines issued by State Governments</p>
          <hr />

        </div>
      </div>
    </div>
  );
};

export default BusServiceCardPage;

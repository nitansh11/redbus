import React from "react";
import styles from "./Right.module.css";
import { BusBox } from "../BusDetails/BusBox/BusBox";
import { SortingBar } from "../BusDetails/SortingBar/SortingBar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBusDetails } from "../../Redux/BookBus/action";

const Right = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");

  const isLoading = useSelector((state) => state.busDetailsReducer.isLoading);
  const isError = useSelector((state) => state.busDetailsReducer.isError);
  const isSuccess = useSelector((state) => state.busDetailsReducer.isSuccess);
  const routeDetails = useSelector(
    (state) => state.busDetailsReducer.routeDetails
  );
  const matchedBuses = useSelector(
    (state) => state.busDetailsReducer.matchedBuses
  );
  const busIdWithSeatsObj = useSelector(
    (state) => state.busDetailsReducer.busIdWithSeatsObj
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBusDetails(departure, arrival, date));
  }, []);

  console.log(
    isLoading,
    isError,
    isSuccess,
    routeDetails,
    matchedBuses,
    busIdWithSeatsObj
  );

  return (
    <div className={styles.Right}>
      <SortingBar />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}
      {isSuccess &&
        matchedBuses.map((item) => {
          return (
            <BusBox
              {...item}
              filledSeats={busIdWithSeatsObj[item._id.toString()]}
              routeDetails={routeDetails}
            />
          );
        })}
    </div>
  );
};

export default Right;

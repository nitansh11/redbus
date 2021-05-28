import React from "react";
import Services from "./Benefits/Services";
import BusTracker from "./BusTracker/BusTracker";
import Coupon from "./CouponSection/Coupon";
import Safety from "./SafetySection/Safety";
import styles from "./LandingPage.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../Redux/routes/action";
import Awards from "./Awards and Recognition/Awards";
import GlobalPresence from "./Global Presence/GlobalPresence";

const LandingPage = () => {
  const history = useHistory();
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filteredSources, setFilteredSources] = React.useState([]);
  const [filteredDestinations, setFilteredDestinations] = React.useState([]);
  const [
    displayDepartureDropdown,
    setDisplayDepartureDropdown,
  ] = React.useState(false);
  const [displayArrivalDropdown, setDisplayArrivalDropdown] = React.useState(
    false
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const routes = useSelector((state) => state.routesReducer.routes);
  console.log("Routes are:", routes);

  const onDepartureChange = (e) => {
    let value = e.target.value;
    setDeparture(value);

    if (routes) {
      let allSources = [];
      routes.forEach((route) => {
        allSources.push(route.departureLocation.name);
        allSources = [
          ...allSources,
          route.departureLocation.name,
          ...route.departureLocation.subLocations,
        ];
      });
      allSources = Array.from(new Set(allSources));
      let filteredSources = allSources.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );
      // console.log("Can search: ", routes.length, filteredSources);
      if (filteredSources.length > 0 && value) {
        console.log("hey true");
        setFilteredSources(filteredSources);
        setDisplayDepartureDropdown(true);
      } else {
        setDisplayDepartureDropdown(false);
      }
    }
  };
  const onArrivalChange = (e) => {
    let value = e.target.value;
    setArrival(value);
    if (routes) {
      let allDestinations = [];
      routes.forEach((route) => {
        allDestinations.push(route.arrivalLocation.name);
        allDestinations = [
          ...allDestinations,
          route.arrivalLocation.name,
          ...route.arrivalLocation.subLocations,
        ];
      });
      allDestinations = Array.from(new Set(allDestinations));
      let filteredDestinations = allDestinations.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredDestinations.length > 0 && value) {
        setFilteredDestinations(filteredDestinations);
        setDisplayArrivalDropdown(true);
      } else {
        setDisplayArrivalDropdown(false);
      }
    }
  };

  return (
    <div>
      <div className={styles.LandingPage__mainBanner}>
        <div className={styles.LandingPage__form}>
          <div className={styles.LandingPage__form__departure}>
            <div className={styles.LandingPage__form__departure__input}>
              <input
                type="text"
                placeholder="Source"
                value={departure}
                onChange={onDepartureChange}
              />
            </div>
            {displayDepartureDropdown ? (
              <div className={styles.LandingPage__form__departure__dropdown}>
                <ul>
                  {filteredSources.map((source) => (
                    <li
                      onClick={() => {
                        setDeparture(source);
                        setDisplayDepartureDropdown(false);
                      }}
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={styles.LandingPage__form__arrival}>
            <div className={styles.LandingPage__form__arrival__input}>
              <input
                type="text"
                placeholder="Destination"
                value={arrival}
                onChange={onArrivalChange}
              />
            </div>
            {displayArrivalDropdown ? (
              <div className={styles.LandingPage__form__arrival__dropdown}>
                <ul>
                  {filteredDestinations.map((destination) => (
                    <li
                      onClick={() => {
                        setArrival(destination);
                        setDisplayArrivalDropdown(false);
                      }}
                    >
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={styles.LandingPage__form__date}>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className={styles.LandingPage__form__button}>
            <button
              onClick={() => {
                let departureTemp = departure;
                let arrivalTemp = arrival;

                // Sublocation 1 (Lucknow)
                if (departureTemp.includes("(")) {
                  departureTemp = departureTemp.substring(
                    departureTemp.indexOf("(") + 1,
                    departureTemp.indexOf(")")
                  );
                }
                if (arrivalTemp.includes("(")) {
                  arrivalTemp = arrivalTemp.substring(
                    arrivalTemp.indexOf("(") + 1,
                    arrivalTemp.indexOf(")")
                  );
                }
                history.push(
                  `/select-bus?departure=${departureTemp}&arrival=${arrivalTemp}&date=${date}`
                );
              }}
            >
              Search Bus
            </button>
          </div>
        </div>
      </div>
      <Coupon />
      <Safety />
      <BusTracker />
      <Services />
      <Awards />
      {/* <Awards /> */}
      <GlobalPresence />
    </div>
  );
};

export default LandingPage;

import React from "react";
import BusHireForm from "./Bus hire Form/BusHireForm";
import Styles from "./BusHire.module.css";
import TripTypeContainer from "./Trip Type Container/TripTypeContainer";
import { FaCheckCircle } from "react-icons/fa";
import FAQ from "./FAQ Section/FAQ";
import BusHirePricing from "./Bus Hire Pricing/BusHirePricing";
import { BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const BusHire = () => {
  const [active, setActive] = React.useState("Type of trip");
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  console.log("BusHire: ", currentCustomer);
  const handleClick = () => {
    if (active === "Type of trip") {
      setActive("Bus Hire Form");
    } else {
      setActive("Type of trip");
    }
    if (active === "Bus Hire Form") {
      setActive("Type of trip");
    } else {
      setActive("Bus Hire Form");
    }
  };

  return (
    <div>
      <div className={Styles.baneer}>
        <div>
          <img
            className={Styles.imageBanner}
            src="https://www.redbus.in/bushire/static/webv2/home/group-3%20(4).svg"
            alt="banner"
            width="100%"
          />
          <div className={Styles.bannerElementDiv}>
            <div className={Styles.bannerBusHireText}>Bus Hire</div>
            <div className={Styles.bannerBusHireSubText}>
              Rent vehicles with a driver from the best operators
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/3%20(1).svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Styles.bookInEasyStepsdiv}>
          <div className={Styles.bookInEasySteps_heading}>
            Book in 3 easy steps
          </div>
          <div className={Styles.bookInEaschStep}>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/1%20(1).svg"
                alt="1"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <div className={Styles.bookInEaschStepText}>Choose the</div>
              <div
                className={Styles.bookInEaschStepText}
                style={{ fontWeight: "800" }}
              >
                Journey{" "}
              </div>
              <div
                className={Styles.bookInEaschStepText}
                style={{ fontWeight: "800" }}
              >
                Type
              </div>
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/Group.png"
                alt=""
                width="202px"
                height="144px"
              />
            </div>
          </div>
          <div className={Styles.bookInEaschStep}>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/2%20(2).svg"
                alt="1"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <div className={Styles.bookInEaschStepText}>Tell us</div>
              <div className={Styles.bookInEaschStepText}>about your </div>
              <div
                className={Styles.bookInEaschStepText}
                style={{ fontWeight: "800" }}
              >
                Travel Plans.
              </div>
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/2%20(5).svg"
                alt=""
                width="202px"
                height="144px"
              />
            </div>
          </div>
          <div className={Styles.bookInEaschStep}>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/3.svg"
                alt="1"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <div
                className={Styles.bookInEaschStepText}
                style={{ fontWeight: "800" }}
              >
                Pick the vehicle
              </div>
              <div className={Styles.bookInEaschStepText}>you like and </div>
              <div className={Styles.bookInEaschStepText}>go places.</div>
            </div>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/3%20(1).svg"
                alt=""
                width="202px"
                height="144px"
              />
            </div>
          </div>
        </div>
        <div className={Styles.withBusHireYouCanGet}>
          <div className={Styles.bookInEasySteps_heading}>
            With Bus Hire you get
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", width: " 50%" }}>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/great-price.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Great price and
                  </div>
                  <div className={Styles.BusHireEachFeatureText}>
                    Great value
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/safe-vehicles.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Safe and Hygenic
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Vehicles</div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/live-tracking.svg?v=1"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Live Track your
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Journey</div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/customer-support.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Best Customer
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Support</div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/verified-drivers.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Verified Drivers and
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Vehicles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* r-commute */}
        <div className={Styles.rcommutediv}>
          <div className={Styles.rcommuteText}>rCommute</div>
          <div className={Styles.rcommuteText_para}>
            If you are looking for employee commute <br />
            solution, click know more.
          </div>
          <div className={Styles.knowMoreText}>KNOW MORE</div>
        </div>
        {/* vehicle type */}
        <div className={Styles.VehicleYouCanGet}>
          <div className={Styles.bookInEasySteps_heading}>Vehicle Types</div>
          <div className={Styles.vehicleTypeImage}>
            <img
              src="https://www.redbus.in/bushire/static/webv2/home/group%20(10).svg"
              alt="Buses and Mini Buses"
            ></img>
            <div className={Styles.vehicleText}>
              <h3>Buses and Mini Buses</h3>
              <p>
                Ideal for more than <br />
                18 people
              </p>
            </div>
          </div>
          <div className={Styles.vehicleTypeImage}>
            <img
              src="https://www.redbus.in/bushire/static/webv2/home/group%20(11).svg"
              alt="Buses and Mini Buses"
            ></img>
            <div className={Styles.vehicleText}>
              <h3>Tempo and Travellers</h3>
              <p>
                Ideal for
                <br />
                10-16 people
              </p>
            </div>
          </div>
          <div className={Styles.vehicleTypeImage}>
            <img
              src="https://www.redbus.in/bushire/static/webv2/home/group%20(12).svg"
              alt="Buses and Mini Buses"
            ></img>
            <div className={Styles.vehicleText}>
              <h3>Sedans and SUVs</h3>
              <p>
                Ideal for <br />
                4-7 people
              </p>
            </div>
          </div>
        </div>
        {/* { why book with bus hire} */}
        <div className={Styles.whyBookWithBushire}>
          <div className={Styles.bookInEasySteps_heading}>
            Why book with Bus Hire
          </div>
          <div className={Styles.whyBookWithBushire_firstFeature}>
            <div className={Styles.whyBookWithBushire_insideFeature}>
              <div className={Styles.whyBookWithBushire_insideFeature_text}>
                <h3>Plan the perfect</h3>
                <h3>group trip.</h3>
                <p>Choose from</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "250px",
                  }}
                >
                  <h3>Outstation</h3>
                  <h3>Local</h3>
                  <h3>Airport</h3>
                </div>
              </div>

              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/group-89.svg"
                alt=""
              />
            </div>
          </div>
          <div className={Styles.whyBookWithBushire_secondFeature}>
            <div className={Styles.whyBookWithBushire_insideFeature}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div>
                  <img
                    src="https://www.redbus.in/bushire/static/mwebv2/home/logo-safety-plus.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <p style={{ fontSize: "14px", color: "#3e3e52" }}>
                    Introducing
                  </p>
                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "30px",
                      color: "#3e3e52",
                    }}
                  >
                    Safety+
                  </h3>
                </div>
              </div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/thermal.svg"
                alt=""
              />
            </div>
          </div>
          <div className={Styles.whyBookWithBushire_thirdFeature}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#3e3e52",
                  marginLeft: "10px",
                }}
              >
                Bus Hire Stats
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "350px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#1347a0",
                  }}
                >
                  60,000+
                </div>
                <div>Trips Done</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#1347a0",
                  }}
                >
                  4,000+
                </div>
                <div>Vehicles</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#1347a0",
                  }}
                >
                  500+
                </div>
                <div>Operators</div>
              </div>
            </div>
          </div>
        </div>
        {/* Bus hire operates in */}
        <div className={Styles.whyBookWithBushire}>
          <div className={Styles.bookInEasySteps_heading}>
            Bus Hire Operates in
          </div>
          <div>
            <img
              style={{ marginTop: "30px", height: "300px" }}
              src="https://www.redbus.in/bushire/static/mwebv2/home/city-list.svg"
              alt=""
            />
          </div>
        </div>
        {/* FAQs */}
        <FAQ />
        {/* Pricing */}
        <BusHirePricing />
        {/* hire us Whenever */}
        <div className={Styles.VehicleYouCanGet}>
          <div className={Styles.bookInEasySteps_heading}>Hire us whenever</div>
          <div className={Styles.hireuswhenever_paraSection}>
            The buses can be hired not only for tourism, but also for leisure
            activities like picnics, field trips, excursions, and formal
            requirements like corporate events, meetings, weddings, and more.
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            No matter whether you want to hire/rent a vehicle for a whole day or
            just a few hours, we will meet your needs. Bus for hire is now one
            click away. We also ensure extra comfort, luxurious and hassle-free
            experience, and of course, a punctual and expert service
          </div>
        </div>
        {/* hire and renting a bus with redbus */}
        <div className={Styles.VehicleYouCanGet}>
          <div className={Styles.bookInEasySteps_heading}>
            Hiring/Renting A Bus with redBus
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            redBus understands that comfort and enjoyment are important while
            travelling. Therefore, we have collaborated with some of the finest
            travel agencies in India to render a perfect trip to our customers.
            The passengers can opt for air conditioned or non-air conditioned
            buses. The buses also have push back and recliner seats making it
            possible for the elderly to travel. Buses are also equipped with LCD
            TV and DVD player for your entertainment. Buses may also come
            equipped with mini-refrigerators and ice boxes for refreshment.
            Facilities like comfy blankets, and charging ports are also
            available in buses.
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            You can also book a sleeper coach bus with redBus. For long-distance
            night travel, travelling in a sleeper bus is the best option.
            Sleeper bus booking is possible online with redBus Bus Hire.
          </div>
        </div>
        {/*booking online buses */}
        <div className={Styles.VehicleYouCanGet}>
          <div className={Styles.bookInEasySteps_heading}>
            Booking Buses Online with redBus
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            redBus has identified the public’s love of travel and has made the
            renting/hiring of buses and tempo travellers easy. We hold almost
            10,000 buses, covering almost 60,000 routes throughout India
            equipped with a 24 hour tracking device, all available for booking
            online.
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            You can rent, hire, or book buses online though our official website
            or by downloading our app on your mobile phones.
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            All you have to do is enter your reason for hiring, your starting
            point, and your place of destination. Following this, you are
            required to enter the type of vehicle you prefer with the number of
            travellers. No booking cost is levied at the time of payment.
          </div>
        </div>
        {/*things to know about bus hire*/}
        <div className={Styles.VehicleYouCanGet}>
          <div className={Styles.bookInEasySteps_heading}>
            Things to know about Bus Hire
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            redBus is amongst the list of renowned online bus booking websites.
            It has earned its place among the best due to its ability to cater
            to every customer’s specific travel needs while also providing them
            with nothing but the best travel experience. In doing so, they
            provide their customers with a plethora of bus booking options. It
            works with only the best operators and ensures that only the most
            experienced drivers drive buses. redBus makes booking an ordinary
            vehicle, such as a tempo traveller or minibus, for a group vacation
            much more comfortable and more accessible. redBus offers customers
            with air-conditioned as well as non-air-conditioned buses to choose
            from and book. It also provides sleeper buses that operate at night.
            redBus bus hire and redBus bus rental can be done either through the
            use of the official website or the easy to download redBus
            application.
          </div>
          <div className={Styles.hireuswhenever_paraSection}>
            redBus has been making sure to take care of all its customer’s
            health and also play a role in curbing the further spread of
            COVID-19. In a bid to do just this, redBus has come out with an
            initiative called Safety+ under which there are specific preventive
            guidelines all buses must adhere to. Some of these are as follows:
          </div>
          <ul className={Styles.list}>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              Passengers, as well as staff and employees, are strictly required
              to wear masks at all times
            </li>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              Suspension of the complimentary provision of cover-ups temporarily
              to prevent contact spread
            </li>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              Mandatory requirement of sanitisers and disinfectants
            </li>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              Deep and thorough sanitation of all vehicles
            </li>
          </ul>
        </div>
        {/* must keep in mind specific tips.  */}
        <div className={Styles.VehicleYouCanGet}>
          <div
            className={Styles.bookInEasySteps_heading}
            style={{ width: "40%" }}
          >
            While booking a bus online, one must keep in mind specific tips.
            These are listed as follows:
          </div>

          <ul className={Styles.list}>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              It is essential to make sure that the online bus booking service
              that you choose is reliable and trustworthy like redBus.
            </li>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              Look to see if the online bus booking service of your choice meets
              all your expectations and services all your specific travel needs.
              redBus, through the provision of the filters option, allows its
              passengers to curate a trip by following their travel needs.
            </li>
            <li>
              <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
              Make sure to carry a sanitiser and mask to all the locations you
              are visiting.
            </li>
          </ul>
        </div>
        {/* subFooter */}
        {/* <SubFooter/>
                Footer
                <BusHireFooter/> */}

        {/* tripTypeContainer */}
        {active === "Type of trip" && (
          <TripTypeContainer handleClick={handleClick} active={active} />
        )}
        {/* busHireForm */}
        {active === "Bus Hire Form" && (
          <BusHireForm handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default BusHire;
// https://www.redbus.in/bushire/static/webv2/home/group-4.svg

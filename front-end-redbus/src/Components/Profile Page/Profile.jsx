import React from "react";
import Styles from "./Profile.module.css";
import { VscAccount } from "react-icons/vsc";
import { FaWallet } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiPin } from "react-icons/bi";
import MyTrips from "./MyTrips";
import HiredBuses from "./HiredBuses";
import { useSelector } from "react-redux";
const Profile = () => {
  const [selectedItem, setSelectedItem] = React.useState("trips");
  const handleListItemClick = (selected) => {
    console.log("Selected: ", selected);
    setSelectedItem(selected);
  };
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  return (
    <div className={Styles.ProfilePannel}>
      <div className={Styles.leftPart}>
        <ul className={Styles.leftPannel}>
          <li className={Styles.leftPannel_eachListItem}>
            <VscAccount style={{ color: "grey", fontSize: "30px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                height: "80px",
                justifyContent: "space-evenly",
              }}
            >
              <div className={Styles.profileName}>
                {currentCustomer ? currentCustomer.name : "Dashboard"}
              </div>
              <div className={Styles.walletVerified}>Wallet Verified</div>
            </div>
          </li>

          <li
            className={Styles.leftPannel_eachListOption}
            onClick={() => handleListItemClick("trips")}
          >
            <BiPin style={{ color: "grey", fontSize: "30px" }} />
            <div className={Styles.leftPannel_eachListItem_text}>My Trips</div>
          </li>
          <div className={Styles.line}></div>
          <li
            className={Styles.leftPannel_eachListOption}
            onClick={() => handleListItemClick("hiredBuses")}
          >
            <BiPin style={{ color: "grey", fontSize: "30px" }} />
            <div className={Styles.leftPannel_eachListItem_text}>Hired Bus</div>
          </li>
          {/* <div className={Styles.line}></div>
          <li className={Styles.leftPannel_eachListOption}>
            <FaWallet style={{ color: "grey", fontSize: "30px" }} />
            <div className={Styles.leftPannel_eachListItem_text}>
              Wallet / Cards
            </div>
          </li> */}
          <div className={Styles.line}></div>
          <li
            className={Styles.leftPannel_eachListOption}
            onClick={() => handleListItemClick("profile")}
          >
            <AiOutlineSetting style={{ color: "grey", fontSize: "30px" }} />
            <div className={Styles.leftPannel_eachListItem_text}>
              My Profile
            </div>
          </li>
          <div className={Styles.line}></div>
          <li
            className={Styles.leftPannel_eachListOption}
            onClick={() => handleListItemClick("wallet")}
          >
            <FaWallet style={{ color: "grey", fontSize: "30px" }} />
            <div className={Styles.leftPannel_eachListItem_text}>Wallet</div>
          </li>
          <div className={Styles.line}></div>
        </ul>
      </div>
      <div className={Styles.seprator}></div>
      {selectedItem === "hiredBuses" ? <HiredBuses /> : null}
      {selectedItem === "trips" ? <MyTrips /> : null}
      {selectedItem === "wallet" ? "Wallet feature coming soon..." : null}
      {selectedItem === "profile" ? (
        <div className={Styles.rightPannel}>
          <span className={Styles.profileHeading}> My Profile</span>
          <div className={Styles.profilebox}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  height: "50px",
                  justifyContent: "space-evenly",
                }}
              >
                <div className={Styles.userDetailHeading}>Your name</div>
                <div className={Styles.userDetailInfo}>
                  {currentCustomer ? currentCustomer.name : "User"}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  height: "50px",
                  justifyContent: "space-evenly",
                }}
              >
                <div className={Styles.userDetailHeading}>Date of Birth</div>
                <div className={Styles.userDetailInfo}>1993-03-04</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  height: "50px",
                  justifyContent: "space-evenly",
                }}
              >
                <div className={Styles.userDetailHeading}>Gender</div>
                <div className={Styles.userDetailInfo}>
                  {currentCustomer ? currentCustomer.gender : "-"}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5%",
              }}
            >
              <div className={Styles.contactLine}></div>
              <div className={Styles.contactDetailsHeading}>
                Contact Details
              </div>
              <div className={Styles.contactLine}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  height: "50px",
                  justifyContent: "space-evenly",
                }}
              >
                <div className={Styles.userDetailHeading}>email</div>
                <div className={Styles.userDetailInfo}>
                  {currentCustomer ? currentCustomer.email : "-"}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  height: "50px",
                  justifyContent: "space-evenly",
                }}
              >
                <div className={Styles.userDetailHeading}>phone</div>
                <div className={Styles.userDetailInfo}>12345678</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;

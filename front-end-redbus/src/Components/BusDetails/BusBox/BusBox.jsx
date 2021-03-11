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

const BusBox = () => {
  return (
    <div className={styles.busBox}>
      <div className={styles.busBoxSection1}>
        <div className={styles.busBoxSection11}>
          <div>Zee Travels</div>
          <div>A/C Seater</div>
        </div>
        <div className={styles.busBoxSection12}>
          <div>07:20</div>
          <div>Naya More</div>
        </div>
        <div className={styles.busBoxSection13}>
          <div>02h 10m</div>
        </div>
        <div className={styles.busBoxSection14}>
          <div>09:30</div>
          <div>Sarkari Bus Stand</div>
        </div>
        <div className={styles.busBoxSection15}>
          <div>
            <StarsIcon />
            <div>4.3</div>
          </div>
          <div>
            <PeopleIcon />
            <div>100</div>
          </div>
        </div>
        <div className={styles.busBoxSection16}>
          <div>
            <div>INR</div>
            <div>231</div>
          </div>
          <div>
            <LocalOfferIcon />
            <div>redDeal applied</div>
          </div>
        </div>
        <div className={styles.busBoxSection17}>
          <div></div>
          <div>
            <div>20</div>
            <div>Seats Available</div>
          </div>
          <div>
            <div>10</div>
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
          <div>
            <GpsFixedIcon
              style={{ fontWeight: "50", fontSize: "20px", marginRight: "6px" }}
            />
            <span>Live Tracking</span>
          </div>
          <div>
            <RestoreIcon
              style={{ fontWeight: "50", fontSize: "20px", marginRight: "6px" }}
            />
            <span>Reschedulable</span>
          </div>
        </div>
      </div>
      <div className={styles.busBoxSection3}>
        <BottomTabs />
      </div>
    </div>
  );
};

export { BusBox };

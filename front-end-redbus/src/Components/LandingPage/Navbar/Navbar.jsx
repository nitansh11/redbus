import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.right}>
        <div>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2908q01vomqb2.cloudfront.net%2Fcb4e5208b4cd87268b208e49452ed6e89a68e0b8%2F2020%2F07%2F01%2Fredbus-logo.png&f=1&nofb=1"
            alt="red bus logo"
            height="60px"
          />
        </div>
        <div className={styles.navLink}>
          <Link to="/bus-tickets" className={styles.removeunderline}>
            <p className={styles.white}>Bus Tickets</p>
          </Link>
          <Link to="/rpool" className={styles.removeunderline}>
            <p className={styles.white}>rPool</p>
          </Link>
          <Link to="/bus-hire" className={styles.removeunderline}>
            <p className={styles.white}>BUS HIRE</p>
          </Link>
        </div>
      </div>
      <div className={styles.left}>
        <p className={styles.white}>Manage Booking</p>
        <p className={styles.white}>Help</p>
      </div>
    </div>
  );
};

export default Navbar;

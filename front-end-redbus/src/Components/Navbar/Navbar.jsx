import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img
        src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
        alt="logo"
      />
      <ul className={styles.Navbar__listOne}>
        <li>Bus Tickets</li>
        <li>
          rPool<sup>New</sup>
        </li>
        <li>BUS HIRE</li>
      </ul>
      <ul className={styles.Navbar__listTwo}>
        <li>Help</li>
        <li>Manage Booking</li>
        <li>BUS HIRE</li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./Navbar.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { RiArrowDropDownLine } from "react-icons/ri";
import {MdAccountCircle} from "react-icons/md";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.Navbar}>
      <div className = {styles.leftSide_header}>
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
      </div>
      
      <ul className={styles.Navbar__listTwo}>
        <div className = {styles.rightSide_header}>
        <li>Help</li>
        <li>Manage Booking</li>
        <li>
        <div>
          <RiArrowDropDownLine className = {styles.icons} onClick={handleClick}/>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Bus Ticket</MenuItem>
              <MenuItem onClick={handleClose}>Cancel</MenuItem>
              <MenuItem onClick={handleClose}>Reschedule</MenuItem>
              <MenuItem onClick={handleClose}>Show My Ticket</MenuItem>
              <MenuItem onClick={handleClose}>Email / SMS</MenuItem>
            </Menu>
        </div>
        </li>
        <li><MdAccountCircle className = {styles.icons} style = {{fontSize : "30px"}}/></li>
        <li>
        <div>
          <RiArrowDropDownLine className = {styles.icons} onClick={handleClick}/>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Trips</MenuItem>
              <MenuItem onClick={handleClose}>Wallet/Cards</MenuItem>
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>Wallet</MenuItem>
              <MenuItem onClick={handleClose}>SignOut</MenuItem>
              <MenuItem onClick={handleClose}>SignOut from all devices</MenuItem>
            </Menu>
        </div>
        </li>
        </div>
        
      </ul>
    </div>
  );
};

export default Navbar;

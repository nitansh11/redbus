import React from "react";
import styles from "./Navbar.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  logout,
  addCustomerMongo,
} from "../../Redux/auth/actions";
import ComingSoonModal from "../../Elements/ComingSoonModal";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  const setIsOpen = (bool) => {
    setIsModelOpen(bool);
  };
  console.log("Here: ", isLoggedIn, currentCustomer);
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className={styles.Navbar}>
      <ComingSoonModal isOpen={isModelOpen} setIsOpen={setIsModelOpen} />
      <div className={styles.leftSide_header}>
        <img
          src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
          alt="logo"
          onClick={() => {
            history.push("/");
          }}
        />
        <ul className={styles.Navbar__listOne}>
          <li>
            <Link to="/">BUS TICKETS</Link>
          </li>
          <li onClick={() => setIsOpen(true)}>
            rPool<sup>New</sup>
          </li>
          <li>
            <Link to="/bus-hire">BUS HIRE</Link>
          </li>
        </ul>
      </div>
      <ul className={styles.Navbar__listTwo}>
        <div className={styles.rightSide_header}>
          {/* <li onClick={() => setIsOpen(true)}>HELP</li> */}
          <li onClick={() => setIsOpen(true)}>MANAGE BOOKING</li>
          <li>
            <div>
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={() => setIsOpen(true)}
              >
                <MenuItem onClick={handleClose}>Bus Ticket</MenuItem>
                <MenuItem onClick={handleClose}>Cancel</MenuItem>
                <MenuItem onClick={handleClose}>Reschedule</MenuItem>
                <MenuItem onClick={handleClose}>Show My Ticket</MenuItem>
                <MenuItem onClick={handleClose}>Email / SMS</MenuItem>
              </Menu>
            </div>
          </li>
          <li>
            <MdAccountCircle
              className={styles.icons}
              style={{ fontSize: "30px" }}
            />
          </li>
          <li>
            <div>
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={handleClick2}
              />

              {isLoggedIn && currentCustomer ? (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    My Trips
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    Wallet/Cards
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <Link
                      to="/my-profile"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      My Profile
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    Wallet
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>SignOut</MenuItem>
                </Menu>
              ) : (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>
                    <GoogleLogin
                      // clientId="493530183469-naj3i844vuh8ru5usav057k5kuabc3iq.apps.googleusercontent.com"
                      clientId="446362734274-cq1j14nuk3ov3elpe64dbnosinakaoof.apps.googleusercontent.com"
                      onSuccess={(response) => {
                        console.log(
                          "---------------------------CALLED-------------------------------"
                        );
                        dispatch(loginSuccess(response));
                        dispatch(addCustomerMongo(response.profileObj));
                      }}
                      onFailure={(response) => {
                        dispatch(loginFailure(response));
                      }}
                      cookiePolicy={"single_host_origin"}
                    />
                  </MenuItem>
                </Menu>
              )}
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

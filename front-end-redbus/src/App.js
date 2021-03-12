import React from "react";
import BusBookingForm from "./Components/Bus Booking Form/BusBookingForm";
import BusHire from "./Components/Bus hire Main Page/BusHire";
import Navbar from "./Components/Navbar/Navbar";
import Payment from "./Components/Payment Page/Payment";
import Profile from "./Components/Profile Page/Profile";
import Routes from "./Routes/Routes";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />

      {/* <BusHire/> */}
    </div>
  );
};

export default App;

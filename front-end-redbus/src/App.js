import React from "react";
import BusBookingForm from "./Components/Bus Booking Form/BusBookingForm";
import BusHireFooter from "./Components/Bus hire Main Page/Bus Hire Footer Section/BusHireFooter";
import BusHire from "./Components/Bus hire Main Page/BusHire";
import SubFooter from "./Components/Bus hire Main Page/Sub Footer Section/SubFooter";
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
      <SubFooter/>
      <BusHireFooter/>
    </div>
  );
};

export default App;

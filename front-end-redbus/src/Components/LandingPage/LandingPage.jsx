import React from "react";
import Services from "./Benefits/Services";
import BusTracker from "./BusTracker/BusTracker";
import Coupon from "./CouponSection/Coupon";
import Navbar from "./Navbar/Navbar";
import Safety from "./SafetySection/Safety";
import Title from "./Title/Title";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Title />
      <Coupon />
      <Safety />
      <BusTracker />
      <Services />
    </div>
  );
};

export default LandingPage;

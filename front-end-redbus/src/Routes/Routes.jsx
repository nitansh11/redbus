import React from "react";
import { Switch, Route } from "react-router-dom";
import SelectBus from "../Components/SelectBus/SelectBus";
import Error from "../Components/Error/Error";
import Profile from "../Components/Profile Page/Profile";
import Payment from "../Components/Payment Page/Payment";
import BusBookingForm from "../Components/Bus Booking Form/BusBookingForm";
import LandingPage from "../Components/LandingPage/LandingPage";
import BusHire from "../Components/Bus hire Main Page/BusHire";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/select-bus" exact>
          <SelectBus />
        </Route>
        <Route path="/my-profile" exact>
          <Profile />
        </Route>
        <Route path="/payment-page" exact>
          <Payment />
        </Route>
        <Route path="/booking-form" exact>
          <BusBookingForm />
        </Route>
        <Route path="/bus-hire" exact>
          <BusHire />
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

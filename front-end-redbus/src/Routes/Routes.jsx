import React from "react";
import { Switch, Route } from "react-router-dom";
import Error from "../Components/Error/Error";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <h1>Homepage</h1>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingScreen from "./Components/LoadingScreen";
function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to="/welcome" />

        <Route
          exact
          path="/welcome"
          component={lazy(() => import("./Screens/Welcome"))}
        />
        <Route
          exact
          path="/patientinfo"
          component={lazy(() => import("./Screens/patientDetails"))}
        />

        <Route
          exact
          path="/about"
          component={lazy(() => import("./Screens/AboutPage/index"))}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;

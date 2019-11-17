import React from "react";
import homePage from "../pages/homePage";
import loginPage from "../pages/singInPage/Login";
import registerPage from "../pages/singUpPage/Register";

import { Switch, Route } from "react-router-dom";

function compoRoute() {
  return (
    <Switch>
      <Route exact path="/home" component={homePage} />
      <Route exact path="/login" component={loginPage} />
      <Route exact path="/register" component={registerPage} />
    </Switch>
  );
}

export default compoRoute;

import React from "react";
import AppHomePage from "../homePage";
import signIn from "../signInPage";
import signUp from "../signUpPage";
import { Switch, Route } from "react-router-dom";

// import CountriesAddImage from "../countries_add_image";
// import CountriesImageList from "../countries_image_list";
// import CountriesImagePage from "../countries_image";

function compoRoute() {
  return (
    <Switch>
      <Route exact path="/homePage" component={AppHomePage} />
      <Route exact path="/login" component={signIn} />
      <Route exact path="/signUp" component={signUp} />
      {/* <Route exact path="/moviesInfoPage/:imdbID" component={MovieInfoPage} />
      <Route exact path="/feedback" component={MovieFeedback} />
      <Route exact path="/comments" component={MovieComments} />
      <Route exact path="/favorites" component={MovieFavorites} />
      <Route exact path="/Countries_Image" component={CountriesAddImage} />
      <Route exact path="/countries" component={CountriesImageList} />
      <Route exact path="/countriesPage" component={CountriesImagePage} /> */}
    </Switch>
  );
}

export default compoRoute;

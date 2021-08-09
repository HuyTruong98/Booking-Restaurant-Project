import React, { useState } from "react";
import Pagelogin from "../../../pages/login/Pagelogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../../../components/trangchu/home/Home";
import About from "../header/About";
import RestaurantInfo from "./RestaurantInfo/RestaurantInfo";
import News from "../header/News";
import Reviews from "./Reviews/Samples";
import NotFound from "../../../pages/HomePage/404";
import { useSelector } from "react-redux";
import NavHomePage from "./../../../pages/HomePage/NavHomePage";
import PageDatTiec from "../../../pages/dattiec/pageDatTiec2";
import DetailSanh from "../../../components/dattiec/detailSanh";
import Profile from "./profile/Profile";

function Header() {
  const dataAccount = useSelector((state) => state.account);

  return (
    <>
      <NavHomePage />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/restaurantInfo" component={RestaurantInfo} />
        <Route path="/recruitment" component={News} />
        {
          dataAccount?.checkToken && dataAccount !== null && dataAccount !== undefined ?
            (
              <Route path="/profile" component={Profile} />
            ) : (
              404
            )
        }
        <Route path="/reviews" component={Reviews} />
        <Route
          exact
          path="/booking/:id"
          component={DetailSanh}
        />
        <Route
          exact
          path="/booking"
          component={PageDatTiec}
        />
        {
          dataAccount?.checkToken && dataAccount !== null && dataAccount !== undefined ?
            (
              <Redirect to="/" />
            ) : (
              <Route path="/login" component={Pagelogin} />
            )
        }


        <Route component={Home} />
      </Switch>
    </>
  );
}

export default Header;

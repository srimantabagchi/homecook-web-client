import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Basics from './containers/partners/Basics';
import About from './containers/partners/About';
import Location from './containers/partners/Location';
import Payment from './containers/partners/Payment';
import Foods from './containers/partners/Foods';
import Calendar from './containers/partners/Calendar';
import Notes from "./containers/Notes";
import ResetPassword from "./containers/ResetPassword";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/login/reset"
        exact
        component={ResetPassword}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/partner/basics"
        exact
        component={Basics}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/partner/about"
        exact
        component={About}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/partner/location"
        exact
        component={Location}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/partner/payment"
        exact
        component={Payment}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/partner/foods"
        exact
        component={Foods}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/partner/calendar"
        exact
        component={Calendar}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

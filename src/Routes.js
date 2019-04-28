import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Loadable from 'react-loadable'



const LoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};


const AsyncHome = Loadable({
  loader: () => import("./containers/Home"),
  loading: LoadingComponent
})
const AsyncLogin = Loadable({
  loader: () => import("./containers/Login"),
  loading: LoadingComponent
})
const AsyncNotes = Loadable({
  loader: () => import("./containers/Notes"),
  loading: LoadingComponent
})
const AsyncResetPassword = Loadable({
  loader: () => import("./containers/ResetPassword"),
  loading: LoadingComponent
})
const AsyncSettings = Loadable({
  loader: () => import("./containers/Settings"),
  loading: LoadingComponent
})
const AsyncChangeEmail = Loadable({
  loader: () => import("./containers/ChangeEmail"),
  loading: LoadingComponent
})
const AsyncChangePassword = Loadable({
  loader: () => import("./containers/ChangePassword"),
  loading: LoadingComponent
})
const AsyncSignup = Loadable({
  loader: () => import("./containers/Signup"),
  loading: LoadingComponent
})
const AsyncNewNote = Loadable({
  loader: () => import("./containers/NewNote"),
  loading: LoadingComponent
})
const AsyncNotFound = Loadable({
  loader: () => import("./containers/NotFound"),
  loading: LoadingComponent
})

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login/reset"
      exact
      component={AsyncResetPassword}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={AsyncSignup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={AsyncNewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings"
      exact
      component={AsyncSettings}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/password"
      exact
      component={AsyncChangePassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/email"
      exact
      component={AsyncChangeEmail}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
  ;


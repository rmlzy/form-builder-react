import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Generator from "./Generator";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Generator />
      </Route>
    </Switch>
  </Router>
);

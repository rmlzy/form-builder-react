import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GenCode from "./GenCode";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/gen-code">
        <GenCode />
      </Route>
    </Switch>
  </Router>
);

import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Design from "./pages/Design";
import UI from "./pages/UI";
import GenCode from "./pages/GenCode";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Design />
      </Route>
      <Route exact path="/gen-code">
        <GenCode />
      </Route>
      <Route path="/ui">
        <UI />
      </Route>
    </Switch>
  </Router>
);

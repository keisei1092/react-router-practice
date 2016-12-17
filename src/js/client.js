import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import First from "./pages/First";
import Second from "./pages/Second";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={First}></IndexRoute>
      <Route path="first" name="first" component={First}></Route>
      <Route path="second" name="second" component={Second}></Route>
    </Route>
  </Router>,
app);

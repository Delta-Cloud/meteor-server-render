import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import routes from "./common/routes";

export const App = () => (
  <BrowserRouter>
    <Switch>{routes}</Switch>
  </BrowserRouter>
);

import React from "react";
import { render } from "react-dom";
import { onPageLoad } from "meteor/server-render";
import { App } from "../imports/app";

onPageLoad(() => {
  render(<App />, document.getElementById("app"));
});

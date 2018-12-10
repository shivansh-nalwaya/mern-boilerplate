import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Counter from "./Counter";

ReactDOM.render(
  <App counter={new Counter()} />,
  document.getElementById("root")
);

serviceWorker.unregister();

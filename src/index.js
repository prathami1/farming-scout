import React from "react";
import ReactDOM from "react-dom";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import backend from "./backend";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BackendProvider backend={backend}>
    <WorkspaceProvider workspace="psk46untnn2vhzs5bokdav3bu2puf6s6">
      <div className="App">
        <App />
      </div>
    </WorkspaceProvider>
  </BackendProvider>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();

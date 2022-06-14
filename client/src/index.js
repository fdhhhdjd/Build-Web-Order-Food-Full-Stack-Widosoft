import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "./Contexts/GlobalState";
import axios from "axios";
axios.defaults.baseURL = "http://18.138.235.4:5000";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore as Store } from "redux";
import Reducers from "./reducers";
import { Provider } from "react-redux";

const store = Store(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for debugging the states in chrome devtools
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* provider provides out states of the store to the whole app */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

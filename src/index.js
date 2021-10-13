import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CommonReducer from "Store/Common/CommonReducer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import ThemeContextProvider from './lib/Context/Theme/ThemeContext';

export const CommonStore = createStore(CommonReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={CommonStore}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept()
}


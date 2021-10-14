import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ThemeContextProvider from './lib/Context/Theme/ThemeContext';
import { CommonStore } from './Store/Store';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={CommonStore}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

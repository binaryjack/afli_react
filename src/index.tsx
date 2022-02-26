import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { store } from './app/store';
import './index.css';
import ThemeContextProvider from './lib/context/theme/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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

// External dependencies
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";


// Local dependencies
import './index.css';
import App from './App';
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);


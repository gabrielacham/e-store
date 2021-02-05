import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { history } from './helpers';
import { store } from './helpers';
import App  from './App';


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

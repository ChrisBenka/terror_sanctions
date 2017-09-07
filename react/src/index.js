import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery/dist/jquery.min.js'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';  
import store from './store';
import App from './containers/App';

require('./styles/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

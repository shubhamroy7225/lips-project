import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store/store';
import axios from './config';
import authInterceptor from 'utility/interceptors/authInterceptor';
import tokenInterceptor from 'utility/interceptors/tokenInterceptor';
import errorHandler from 'utility/errorHandler/errorHandler';


axios.interceptors.request.use(authInterceptor, error => Promise.reject(error));
axios.interceptors.response.use(tokenInterceptor, error => errorHandler(error));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

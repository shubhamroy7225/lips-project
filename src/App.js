import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteChangeListener from './utility/RouteChangeListener';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { withRouter } from 'react-router'
import AppRouter from './router/router';
import { connect } from 'react-redux';
import { isMobile, isBrowser } from 'react-device-detect';


const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

const App = (props) => {
  useEffect(() => {
    if (isBrowser) {
      addBodyClass("lps_xl_view")
    } else {
      removeBodyClass("lps_xl_view")
    }
  })
  return (
    <>
      <RouteChangeListener />
      <ReactNotification />
      <AppRouter {...props} />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(App));


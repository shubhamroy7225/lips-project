import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteChangeListener from './utility/RouteChangeListener';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { withRouter } from 'react-router'
import AppRouter from './router/router';
import { connect } from 'react-redux';
import { Detector } from "react-detect-offline";
import { routes } from 'utility/constants/constants';
import * as actions from 'redux/actions';

const App = (props) => {

  const detectedNetworkChange = (isOnline) => {
    console.log(isOnline);
    if (isOnline) {
      props.history.push(routes.ROOT)
    } else {
      props.history.push(routes.NO_NETWORK)
    }
  }

  useEffect(() => {
    console.log("calling on launch api!");
    if (props.user) {
      actions.fetchUser();
    }
  }, []);

  return (
    <>
      <Detector
        onChange={(e) => { detectedNetworkChange(e) }}
        render={({ online }) => (<></>)}
      />
      <RouteChangeListener />
      <ReactNotification />
      <AppRouter {...props} />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isOnBoard: state.authReducer.isOnBoard
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(App));


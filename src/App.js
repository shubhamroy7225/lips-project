import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteChangeListener from './utility/RouteChangeListener';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { withRouter } from 'react-router'
import AppRouter from './router/router';
import { connect } from 'react-redux';

const App = (props) => {
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


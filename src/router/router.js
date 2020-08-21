import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { routes } from '../utility/constants/constants';
import Home from 'scenes/Feed/Home';

const Router = (props) => {
    let routeList = null;
    let user = props.user;
    if (user) {
        //when user is logged in
        routeList = (
            <Switch>
                <Route exact path={routes.ROOT} render={(props) => <Redirect to={routes.FEEDS} />} />
                <Route exact path={routes.FEEDS} component={Home} />
                <Route path='*' render={() => <Redirect to={routes.FEEDS} />} />
            </Switch>
        )
    } else {
        //when user is not logged in
        routeList = (
            <Switch>
                <Route exact path={routes.ROOT} component={Home} />
                <Route exact path={routes.LOGIN} component={() => <h1>Login</h1>} />
                <Route exact path={routes.REGISTER} component={() => <h1>Register</h1>} />
                <Route exact path={routes.FORGOT_PASSWORD} component={() => <h1>Forgot password</h1>} />
                <Route exact path={routes.FEEDS} component={Home} />
                <Route path='*' render={(props) => <Redirect to={routes.FEEDS} />} />
            </Switch>
        )
    }

    return (
        <Layout>
            {routeList}
        </Layout >
    )
};

export default Router;
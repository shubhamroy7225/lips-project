import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { routes } from '../utility/constants/constants';
import Home from 'scenes/Feed/Home';

import Login from "scenes/Auth/Login";

import ExploreFeed from 'scenes/Feed/ExploreFeed';
import Create from 'scenes/Feed/Create';
import Likes from 'scenes/Feed/Likes';
import Profile from 'scenes/Profile';

import SelectFavoriteTags from 'scenes/Landing/CustomizeFeeds/SelectFavoriteTags';
import SelectAvoidTags from 'scenes/Landing/CustomizeFeeds/SelectAvoidTags';
import Landing from 'scenes/Landing/InitialLanding';
import CustomizeFeeds from 'scenes/Landing/CustomizeFeeds';

const Router = (props) => {
    let routeList = null;
    let user = props.user;
    // if (user) {
    //     //when user is logged in
    //     routeList = (
    //         <Switch>
    //             <Route exact path={routes.ROOT} render={(props) => <Redirect to={routes.FEEDS} />} />
    //             <Route exact path={routes.FEEDS} component={Home} />
    //             <Route path='*' render={() => <Redirect to={routes.FEEDS} />} />
    //         </Switch>
    //     )
    // } else {
    //when user is not logged in
    routeList = (
        <Switch>
            <Route exact path={routes.ROOT} component={Home} />
            <Route exact path={routes.CREATE} component={Create} />
            <Route exact path={routes.EXPLORE} component={ExploreFeed} />
            <Route exact path={routes.LIKES} component={Likes} />
            <Route exact path={routes.PROFILE} component={Profile} />
            <Route exact path={routes.LOGIN}  component={Login} />
            <Route exact path={routes.REGISTER} component={() => <h1>Register</h1>} />
            <Route exact path={routes.FORGOT_PASSWORD} component={() => <h1>Forgot password</h1>} />
            <Route exact path={routes.ROOT} component={Home} />
            <Route exact path={routes.SELECT_FAVORITE_TAGS} component={SelectFavoriteTags} />
            <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
            <Route exact path={routes.LANDING} component={Landing} />
            <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
            <Route path='*' render={(props) => <Redirect to={routes.ROOT} />} />
        </Switch>
    )
    // }

    return (
        <Layout>
            {routeList}
        </Layout>
    )
};

export default Router;
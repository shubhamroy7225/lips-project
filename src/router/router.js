import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { routes } from '../utility/constants/constants';
import MainFeed from 'scenes/Feed/Home';

import Login from "scenes/Auth/Login";
import Register from "scenes/Auth/Register";
import TermsAndCondition from "scenes/OnBoarding/TermsAndCondition";
import CommunityGuidelines from "scenes/OnBoarding/CommunityGuidelines";
import AccountPrivacy from "scenes/OnBoarding/AccountPrivacy";

import ExploreFeed from 'scenes/Feed/ExploreFeed';
import Create from 'scenes/Feed/Create';
import Likes from 'scenes/Feed/Likes';
import Profile from 'scenes/Profile';

import SelectFavoriteTags from 'scenes/OnBoarding/CustomizeFeeds/SelectFavoriteTags';
import SelectAvoidTags from 'scenes/OnBoarding/CustomizeFeeds/SelectAvoidTags';
import Landing from 'scenes/OnBoarding/InitialLanding';
import CustomizeFeeds from 'scenes/OnBoarding/CustomizeFeeds';

import Setting from 'scenes/Setting';
import MyAccount from 'scenes/Setting/MyAccount';
import SwitchAccount from 'scenes/Setting/SwitchAccount';
import ManageData from 'scenes/Setting/ManageData';
import FeedSetting from 'scenes/Setting/FeedSetting';
import Notification from 'scenes/Setting/Notifications';
import PrivacyPolicy from 'scenes/Setting/PrivacyPolicy';

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
            <Route exact path={routes.ROOT} component={MainFeed} />
            <Route exact path={routes.CREATE} component={Create} />
            <Route exact path={routes.EXPLORE} component={ExploreFeed} />
            <Route exact path={routes.LIKES} component={Likes} />
            <Route exact path={routes.PROFILE} component={Profile} />
            <Route exact path={routes.LOGIN}  component={Login} />
            <Route exact path={routes.REGISTER} component={Register} />
            <Route exact path={routes.TERMS_AND_CONDITION} component={TermsAndCondition} />
            <Route exact path={routes.COMMUNITY_GUIDELINES} component={CommunityGuidelines} />
            <Route exact path={routes.ACCOUNT_PRIVACY} component={AccountPrivacy} />
            <Route exact path={routes.FORGOT_PASSWORD} component={() => <h1>Forgot password</h1>} />
            <Route exact path={routes.ROOT} component={MainFeed} />
            <Route exact path={routes.SELECT_FAVORITE_TAGS} component={SelectFavoriteTags} />
            <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
            <Route exact path={routes.LANDING} component={Landing} />
            <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
            
            <Route exact path={routes.SETTING} component={Setting} />
            <Route exact path={routes.MY_ACCOUNT} component={MyAccount} />
            <Route exact path={routes.SWITCH_ACCOUNT} component={SwitchAccount} />
            <Route exact path={routes.MANAGE_DATA} component={ManageData} />
            <Route exact path={routes.FEED_SETTING} component={FeedSetting} />
            <Route exact path={routes.NOTIFICATION} component={Notification} />
            <Route exact path={routes.PRIVACY_POLICY} component={PrivacyPolicy} />
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
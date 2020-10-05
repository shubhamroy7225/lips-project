import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { routes } from '../utility/constants/constants';
import MainFeed from 'scenes/Feed/Home';

import Login from "scenes/Auth/Login";
import Register from "scenes/Auth/Register";
import ForgotPassword from "scenes/Auth/ForgotPassword";
import ResetPassword from "scenes/Auth/ResetPassword";
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
import FeedSetting from 'scenes/Setting/FeedSetting/index';
import Notification from 'scenes/Setting/Notifications';
import PrivacyPolicy from 'scenes/Setting/PrivacyPolicy';
import SettingTermsAndCondition from 'scenes/Setting/TermsAndCondition';
import SettingCommunityGuidelines from 'scenes/Setting/CommunityGuidelines';

import NoNetwork from 'scenes/components/NoNetwork';

import ContactUser from 'scenes/ContactUser';
import PostApproval from 'scenes/Feed/PostApproval';
import NonRegisteredView from 'scenes/NonRegisteredView';

import FeedSettingModal from 'scenes/Setting/FeedSetting/FeedSettingModal';


const Router = (props) => {
    let routeList = null;
    let user = props.user;
    if (user) {
        routeList = (
            <Switch>
                <Route exact path={routes.ROOT} component={MainFeed} />
                <Route exact path={routes.CREATE} component={Create} />
                <Route exact path={routes.EXPLORE} component={ExploreFeed} />
                <Route exact path={routes.LIKES} component={Likes} />
                <Route exact path={routes.PROFILE} component={Profile} />
                <Route exact path={routes.OTHER_PROFILE} component={Profile} />
                <Route exact path={routes.ROOT} component={MainFeed} />
                {/* Approval for posting */}
                <Route exact path={routes.POST_APPROVAL} component={PostApproval} />

                <Route exact path={routes.SETTING} component={Setting} />
                <Route exact path={routes.MY_ACCOUNT} component={MyAccount} />
                <Route exact path={routes.SWITCH_ACCOUNT} component={SwitchAccount} />
                <Route exact path={routes.MANAGE_DATA} component={ManageData} />
                <Route exact path={routes.FEED_SETTING} component={FeedSetting} />
                <Route exact path={routes.NOTIFICATION} component={Notification} />
                <Route exact path={routes.PRIVACY_POLICY} component={PrivacyPolicy} />
                <Route exact path={routes.SETTING_TERMS_AND_CONDITIONS} component={SettingTermsAndCondition} />
                <Route exact path={routes.SETTING_COMMUNITY_GUIDELINES} component={SettingCommunityGuidelines} />
                <Route exact path={routes.NO_NETWORK} component={NoNetwork} />
                <Route exact path={routes.CONTACT_USER} component={ContactUser} />
                <Route exact path={routes.FEED_SETTING_MODAL} component={FeedSettingModal} />
                { !props.isOnBoard &&
                <>
                <Route exact path={routes.SELECT_FAVORITE_TAGS} component={SelectFavoriteTags} />
                <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
                <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
                <Route exact path={routes.TERMS_AND_CONDITION} component={TermsAndCondition} />
                <Route exact path={routes.COMMUNITY_GUIDELINES} component={CommunityGuidelines} />
                <Route exact path={routes.ACCOUNT_PRIVACY} component={AccountPrivacy} />
                </>
                }
                <Route path='*' render={(props) => <Redirect to={routes.ROOT} />} />
            </Switch>
        )
    } else {
        routeList = (
            <Switch>
                <Route exact path={routes.ROOT} component={Landing} />
                <Route exact path={routes.MAIN_FEED} component={MainFeed} />
                <Route exact path={routes.EXPLORE} component={ExploreFeed} />
                <Route exact path={routes.LIKES} component={Likes} />
                <Route exact path={routes.LOGIN} component={Login} />
                <Route exact path={routes.REGISTER} component={Register} />
                <Route exact path={routes.TERMS_AND_CONDITION} component={TermsAndCondition} />
                <Route exact path={routes.COMMUNITY_GUIDELINES} component={CommunityGuidelines} />
                <Route exact path={routes.ACCOUNT_PRIVACY} component={AccountPrivacy} />
                <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
                <Route exact path={routes.RESET_PASSWORD} component={ResetPassword} />
                <Route exact path={routes.SELECT_FAVORITE_TAGS} component={SelectFavoriteTags} />
                <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
                {/* <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} /> */} */}
                <Route exact path={routes.LOGIN_TO_PROCEED} component={NonRegisteredView} />
                <Route exact path={routes.NO_NETWORK} component={NoNetwork} />
                <Route path='*' render={(props) => <Redirect to={routes.ROOT} />} />
            </Switch>
        )
    }

    // }

    return (
        <Layout>
            {routeList}
        </Layout>
    )
};

export default Router;
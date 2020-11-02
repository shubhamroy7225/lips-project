import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SuspenseLoader from "scenes/shared/loader/SuspenseLoader";
import Layout from '../hoc/Layout/Layout';
import { routes } from '../utility/constants/constants';

import NoNetwork from 'scenes/components/NoNetwork';
// public routes
import Login from "scenes/Auth/Login";
import Register from "scenes/Auth/Register";
import ForgotPassword from "scenes/Auth/ForgotPassword";
import ResetPassword from "scenes/Auth/ResetPassword";
// default landing page
import Landing from 'scenes/OnBoarding/InitialLanding';
//onboarding flow routes
const TermsAndCondition = lazy(() => import("scenes/OnBoarding/TermsAndCondition"));
const CommunityGuidelines = lazy(() => import("scenes/OnBoarding/CommunityGuidelines"));
const AccountPrivacy = lazy(() => import('scenes/OnBoarding/AccountPrivacy'));
const CustomizeFeeds = lazy(() => import('scenes/OnBoarding/CustomizeFeeds'));
const SelectFavoriteTags = lazy(() => import('scenes/OnBoarding/CustomizeFeeds/SelectFavoriteTags'));
const SelectAvoidTags = lazy(() => import('scenes/OnBoarding/CustomizeFeeds/SelectAvoidTags'));
//after login path
const MainFeed = lazy(() => import('scenes/Feed/Home'));
const ExploreFeed = lazy(() => import('scenes/Feed/ExploreFeed'));
const Create  = lazy(() => import('scenes/Feed/Create'));
const Likes = lazy(() => import('scenes/Feed/Likes'));
const Profile = lazy(() => import('scenes/Profile'));
const ContactUser = lazy(() => import('scenes/ContactUser'));
const PostApproval = lazy(() => import('scenes/Feed/PostApproval'));
const NonRegisteredView = lazy(() => import('scenes/NonRegisteredView'));
const FeedDetail = lazy(() => import('scenes/Feed/FeedDetail'));
//setting routes
const Setting = lazy(() => import('scenes/Setting'));
const FeedSettingModal = lazy(() => import('scenes/Setting/FeedSetting/FeedSettingModal'));
const SettingCommunityGuidelines = lazy(() => import('scenes/Setting/CommunityGuidelines'));
const MyAccount = lazy(() => import('scenes/Setting/MyAccount'));
const ChangePassword = lazy(() => import('scenes/Setting/MyAccount/components/ChangePassword'));
const SwitchAccount = lazy(() => import('scenes/Setting/SwitchAccount'));
const ManageData = lazy(() => import('scenes/Setting/ManageData'));
const FeedSetting = lazy(() => import('scenes/Setting/FeedSetting/index'));
const Notification = lazy(() => import('scenes/Setting/Notifications'));
const PrivacyPolicy = lazy(() => import('scenes/Setting/PrivacyPolicy'));
const SettingTermsAndCondition = lazy(() => import('scenes/Setting/TermsAndCondition'));

const Router = (props) => {
    let routeList = null;
    let user = props.user;
    if (!props.isOnBoard && user){
        routeList = (  <Switch>
            <Suspense fallback={<SuspenseLoader suspense={true}></SuspenseLoader>}>
                <Route exact path={routes.SELECT_FAVORITE_TAGS} component={SelectFavoriteTags} />
                <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
                <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
                <Route exact path={routes.TERMS_AND_CONDITION} component={TermsAndCondition} />
                <Route exact path={routes.COMMUNITY_GUIDELINES} component={CommunityGuidelines} />
                <Route exact path={routes.ACCOUNT_PRIVACY} component={AccountPrivacy} />
                <Route path='*' render={(props) => <Redirect to={routes[props.isOnBoard ? "ROOT" : "COMMUNITY_GUIDELINES"]} />} />
            </Suspense>
        </Switch>)
    }
    else if (user) {
        routeList = (
            <Switch>
                <Suspense fallback={<SuspenseLoader suspense={true}></SuspenseLoader>}>
                    <Route exact path={routes.ROOT} component={MainFeed} />
                    <Route exact path={routes.CREATE} component={Create} />
                    <Route exact path={routes.EXPLORE} component={ExploreFeed} />
                    <Route exact path={routes.LIKES} component={Likes} />
                    <Route exact path={routes.PROFILE} component={Profile} />
                    <Route exact path={routes.OTHER_PROFILE} component={Profile} />
                    <Route exact path={routes.ROOT} component={MainFeed} />
                    {/* Approval for posting */}
                    <Route exact path={routes.POST_APPROVAL} component={PostApproval} />
                    <Route exact path={routes.POST_DETAIL} component={FeedDetail} />
                    <Route exact path={routes.SETTING} component={Setting} />
                    <Route exact path={routes.MY_ACCOUNT} component={MyAccount} />
                    <Route exact path={routes.CHANGE_PASSWORD} component={ChangePassword} />
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
                    <Route path='*' render={(props) => <Redirect to={routes.ROOT} />} />
                </Suspense>
            </Switch>
        )
    } else {
        routeList = (
            <Switch>
                <Suspense fallback={<SuspenseLoader suspense={true}></SuspenseLoader>}>
                    <Route exact path={routes.ROOT} component={Landing} />
                    <Route exact path={routes.MAIN_FEED} component={MainFeed} />
                    <Route exact path={routes.LOGIN} component={Login} />
                    <Route exact path={routes.REGISTER} component={Register} />
                    <Route exact path={routes.TERMS_AND_CONDITION} component={TermsAndCondition} />
                    <Route exact path={routes.COMMUNITY_GUIDELINES} component={CommunityGuidelines} />
                    <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
                    <Route exact path={routes.RESET_PASSWORD} component={ResetPassword} />
                    <Route exact path={routes.SELECT_FAVORITE_TAGS} component={SelectFavoriteTags} />
                    <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
                    <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
                    <Route exact path={routes.LOGIN_TO_PROCEED} component={NonRegisteredView} />
                    <Route exact path={routes.NO_NETWORK} component={NoNetwork} />
                    <Route exact path={routes.POST_DETAIL} component={FeedDetail} />
                    <Route path='*' render={(props) => <Redirect to={routes.ROOT} />} />
                </Suspense>
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
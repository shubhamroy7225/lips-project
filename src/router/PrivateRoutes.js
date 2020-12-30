import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../utility/constants/constants";

import MainFeed from "scenes/Feed/Home";
import NoNetwork from "scenes/components/NoNetwork";
import ExploreFeed from "scenes/Feed/ExploreFeed";
import Create from "scenes/Feed/Create";
import Likes from "scenes/Feed/Likes";
import Profile from "scenes/Profile";
import Setting from "scenes/Setting";
import MyAccount from "scenes/Setting/MyAccount";
import ChangePassword from "scenes/Setting/MyAccount/components/ChangePassword";
import SwitchAccount from "scenes/Setting/SwitchAccount";
import ManageData from "scenes/Setting/ManageData";
import FeedSetting from "scenes/Setting/FeedSetting/index";
import Notification from "scenes/Setting/Notifications";
import PrivacyPolicy from "scenes/Setting/PrivacyPolicy";
import SettingTermsAndCondition from "scenes/Setting/TermsAndCondition";
import SettingCommunityGuidelines from "scenes/Setting/CommunityGuidelines";
import Faq from "scenes/Setting/Faq";

import ContactUser from "scenes/ContactUser";
import PostApproval from "scenes/Feed/PostApproval";
import AccessCode from "scenes/Feed/PostApproval/components/AccessCodeForm";
import AccessCodeCompleted from "scenes/Feed/PostApproval/components/AccessCodeCompleted";

import FeedSettingModal from "scenes/Setting/FeedSetting/FeedSettingModal";
import FeedDetail from "scenes/Feed/FeedDetail";

export default () => (
  <Switch>
    <Route exact path={routes.ROOT} component={MainFeed} />
    <Route exact path={routes.CREATE} component={Create} />
    <Route exact path={routes.EXPLORE} component={ExploreFeed} />
    <Route exact path={routes.LIKES} component={Likes} />
    <Route exact path={routes.PROFILE} component={Profile} />
    <Route exact path={routes.OTHER_PROFILE} component={Profile} />
    {/* Approval for posting */}
    <Route exact path={routes.POST_APPROVAL} component={PostApproval} />
    <Route exact path={routes.ACCESS_CODE_COMPLETED} component={AccessCodeCompleted} />
    <Route exact path={routes.ACCESS_CODE} component={AccessCode} />
    <Route exact path={routes.POST_DETAIL} component={FeedDetail} />
    <Route exact path={routes.SETTING} component={Setting} />
    <Route exact path={routes.MY_ACCOUNT} component={MyAccount} />
    <Route exact path={routes.CHANGE_PASSWORD} component={ChangePassword} />
    <Route exact path={routes.SWITCH_ACCOUNT} component={SwitchAccount} />
    <Route exact path={routes.MANAGE_DATA} component={ManageData} />
    <Route exact path={routes.FEED_SETTING} component={FeedSetting} />
    <Route exact path={routes.NOTIFICATION} component={Notification} />
    <Route exact path={routes.PRIVACY_POLICY} component={PrivacyPolicy} />
    <Route
      exact
      path={routes.SETTING_TERMS_AND_CONDITIONS}
      component={SettingTermsAndCondition}
    />
    <Route
      exact
      path={routes.SETTING_COMMUNITY_GUIDELINES}
      component={SettingCommunityGuidelines}
    />
    <Route exact path={routes.NO_NETWORK} component={NoNetwork} />
    <Route exact path={routes.CONTACT_USER} component={ContactUser} />
    <Route
      exact
      path={routes.FEED_SETTING_MODAL}
      component={FeedSettingModal}
    />
    <Route exact path={routes.SETTING_FAQ} component={Faq} />
    <Route path="*" render={() => <Redirect to={routes.ROOT} />} />
  </Switch>
);

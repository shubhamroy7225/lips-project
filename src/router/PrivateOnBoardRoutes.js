import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../utility/constants/constants";

import TermsAndCondition from "scenes/OnBoarding/TermsAndCondition";
import CommunityGuidelines from "scenes/OnBoarding/CommunityGuidelines";
import AccountPrivacy from "scenes/OnBoarding/AccountPrivacy";

import SelectFavoriteTags from "scenes/OnBoarding/CustomizeFeeds/SelectFavoriteTags";
import SelectAvoidTags from "scenes/OnBoarding/CustomizeFeeds/SelectAvoidTags";
import CustomizeFeeds from "scenes/OnBoarding/CustomizeFeeds";

export default () => (
  <Switch>
    <Route
      exact
      path={routes.SELECT_FAVORITE_TAGS}
      component={SelectFavoriteTags}
    />
    <Route exact path={routes.SELECT_AVOID_TAGS} component={SelectAvoidTags} />
    <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
    <Route
      exact
      path={routes.TERMS_AND_CONDITION}
      component={TermsAndCondition}
    />
    <Route
      exact
      path={routes.COMMUNITY_GUIDELINES}
      component={CommunityGuidelines}
    />
    <Route exact path={routes.ACCOUNT_PRIVACY} component={AccountPrivacy} />
    <Route
      path="*"
      render={(props) => (
        <Redirect
          to={routes[props.isOnBoard ? "ROOT" : "COMMUNITY_GUIDELINES"]}
        />
      )}
    />
  </Switch>
);

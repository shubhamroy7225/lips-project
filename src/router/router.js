import React, { lazy, Suspense } from "react";
import SuspenseLoader from "scenes/shared/loader/SuspenseLoader";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "../hoc/Layout/Layout";
import { routes } from "../utility/constants/constants";
import MainFeed from "scenes/Feed/Home";
import Login from "scenes/Auth/Login";
import Register from "scenes/Auth/Register";
import ForgotPassword from "scenes/Auth/ForgotPassword";
import ResetPassword from "scenes/Auth/ResetPassword";
import TermsAndCondition from "scenes/OnBoarding/TermsAndCondition";
import CommunityGuidelines from "scenes/OnBoarding/CommunityGuidelines";
import SelectFavoriteTags from "scenes/OnBoarding/CustomizeFeeds/SelectFavoriteTags";
import SelectAvoidTags from "scenes/OnBoarding/CustomizeFeeds/SelectAvoidTags";
import Landing from "scenes/OnBoarding/InitialLanding";
import CustomizeFeeds from "scenes/OnBoarding/CustomizeFeeds";
import NoNetwork from "scenes/components/NoNetwork";
import NonRegisteredView from "scenes/NonRegisteredView";
import FeedDetail from "scenes/Feed/FeedDetail";
import Profile from "scenes/Profile";

const PrivateRoute = lazy(() => import("./PrivateRoutes"));
const PrivateRouteOnBoard = lazy(() => import("./PrivateOnBoardRoutes"));

const Router = (props) => {
  let routeList = null;
  let user = props.user;
  debugger
  if (!props.isOnBoard && user) {
    routeList = (
      <Suspense fallback={<SuspenseLoader suspense={true}></SuspenseLoader>}>
        <PrivateRouteOnBoard {...props} />
      </Suspense>
    );
  } else if (user) {
    routeList = (
      <Suspense fallback={<SuspenseLoader suspense={true}></SuspenseLoader>}>
        <PrivateRoute {...props} />
      </Suspense>
    );
  } else {
    routeList = (
      <Switch>
        <Route exact path={routes.ROOT} component={Landing} />
        <Route exact path={routes.MAIN_FEED} component={MainFeed} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.REGISTER} component={Register} />

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
        <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={routes.RESET_PASSWORD} component={ResetPassword} />
        <Route
          exact
          path={routes.SELECT_FAVORITE_TAGS}
          component={SelectFavoriteTags}
        />
        <Route
          exact
          path={routes.SELECT_AVOID_TAGS}
          component={SelectAvoidTags}
        />
        <Route exact path={routes.CUSTOMIZE_FEEDS} component={CustomizeFeeds} />
        <Route
          exact
          path={routes.LOGIN_TO_PROCEED}
          component={NonRegisteredView}
        />
        <Route exact path={routes.OTHER_PROFILE} component={Profile} />
        <Route exact path={routes.NO_NETWORK} component={NoNetwork} />
        <Route exact path={routes.POST_DETAIL} component={FeedDetail} />
        <Route path="*" render={() => <Redirect to={routes.ROOT} />} />
      </Switch>
    );
  }

  // }

  return <Layout>{routeList}</Layout>;
};

export default Router;

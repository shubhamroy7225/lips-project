import React, { Component, useState, useEffect, useCallback } from 'react';
import { isMobile } from "react-device-detect";
import { withRouter, Link, useHistory } from "react-router-dom";
import Aux from '../Oux/Oux';
import { connect, useSelector } from 'react-redux';
import Loader from "scenes/shared/loader";
import ConfirmDialog from "scenes/shared/common-dialog";
import AddToHome from "scenes/components/AddToHome";
import { markAsRead, getAllNotification, getUnreadCount } from 'redux/actions/notification/action';
import { acceptRequest, rejectRequest } from 'redux/actions/notification/action';
import * as liked_post from "assets/images/icons/liked_post.png";
import "assets/sass/style.scss";
import { routes, NO_HEADER_ROUTES, NOTIFICATION_TYPES } from 'utility/constants/constants';
import moment from "moment";
import { capitalizeFirstLetter } from 'utility/utility';

const Header = ({ notificationCount, notifications, count, ...props }) => {
    const history = useHistory();
    const [modalShown, setModalShown] = useState(false);
    const [marked, setMarked] = useState(false);

    if (modalShown) {
        history.listen(() => {
            setModalShown(false)
        })
    }

    const modalToggle = () => {
        setModalShown(!modalShown);
        if (!marked && notifications.length) {
            setMarked(true);
            markAsRead(notifications[0].id);
        }
    };
    useEffect(() => {
        if (window.$) {
            window.$('.tab-list a').on('click', function (e) {
                window.$(this).parents('li').addClass('active').siblings().removeClass('active');
                var active_tab = window.$(this).attr('href');
                window.$(active_tab).addClass('active').siblings().removeClass('active');
            });
        }
    });
    //hide notification dropdown on scroll haeder
    const handleNotificationModel = useCallback(() => {
        if (modalShown && window.$("body").hasClass("scroll-down")) setModalShown(false);
    }, [modalShown, setModalShown]);

    useEffect(() => {
        if (modalShown) document.addEventListener("scroll", () => handleNotificationModel());
        return () => document.addEventListener("scroll", () => handleNotificationModel())
    }, [modalShown, handleNotificationModel]);

    if (props.history.location.pathname === routes.CREATE) {
        return (
            <div className="post_page_header">
                <nav className="theme_tabs">
                    <ul className="tab-list">
                        <li className={history.location.hash !== "#textTab" ? "active" : ""} ><a href="#imageTab">IMAGE</a></li>
                        <li className={history.location.hash === "#textTab" ? "active" : ""} ><a href="#textTab">TEXT</a></li>
                    </ul>
                </nav>
            </div>
        )
    } else if ((props.history.location.pathname === "/" && props.user) || !Object.values(NO_HEADER_ROUTES).includes(props.history.location.pathname)) {
        //default when user is not logged in
        let pathName = props.history.location.pathname;
        let headerClassName = "main_header";
        let navClassName = "theme_navigation"

        if (props.history.location.pathname === routes.ROOT) {
            headerClassName = "main_header page-header"
        }
        let logoContent = (
            <Link className="logo" to={props.user ? '/' : routes.MAIN_FEED}>
                <img src={require("assets/images/thumbnails/new_logo.svg")} alt="BitCot Logo" className="header__logo" />
            </Link>
        );
        if (pathName.includes(routes.PROFILE)) {
            if (pathName !== routes.PROFILE && props.user) { //if logged out and accessing other's profile no need of back button - need back button only if user is logged in - that indicates user is navigating
                //other profile - then show back button 
                navClassName = "theme_navigation theme_navigationCenterLogo"
                logoContent = (
                    <>
                        <a onClick={() => { props.history.goBack() }} className="lps_arrow_left">
                            <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                        </a>
                        <Link className="logo" to={props.user ? '/' : routes.MAIN_FEED}>
                            <img src={require("assets/images/thumbnails/new_logo.svg")} alt="Lips Logo" className="header__logo" />
                        </Link>
                    </>
                );
            }
        }
        return (
            <header className={headerClassName}>
                <nav className={navClassName}>
                    {logoContent}
                    {props.user && <ul className="lp_nav">
                        <li className="nav-item">
                            <ul className="profile_dropdown avatar_dropdown">
                                <li className={`lps_dropdown ${modalShown ? "open" : ""}`}>
                                    <span className="dropdown-toggle nav-link user_menu_dropdown not_line cursor-pointer" role="button" onClick={modalToggle}>
                                        <span className="avatar_circle">
                                            <img src={require("assets/images/icons/icn_heart.png")} alt="heart Icon" />
                                        </span>
                                        {parseInt(notificationCount) ? <span className="count_badge">{notificationCount}</span> : ""}
                                    </span>
                                    <ul className={`notification-dropdown lps_dropdown-menu lps_dropdown-menu-right lps_list_group lps_chatBox_list heightAuto ${modalShown ? "animated fadeInDown" : ""}`}>
                                        <NotificationSliderComponent modalShown={modalShown} modalToggle={modalToggle} /> </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link not_line">
                                <span className="avatar_circle">
                                    <img src={require("assets/images/icons/icn_settings.png")} alt="Settings Icon" />
                                </span>
                            </Link>
                        </li>
                    </ul>}
                </nav>
            </header >
        );
    } else return ""
}


const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <h1>footer</h1>
            </div>
        </footer>
    );
}

class Layout extends Component {

    render() {
        return (
            <Aux>
                <div className="limiter">
                    <div className="container-login100">
                        {isMobile && <AddToHome />}
                        <Header {...this.props} />
                        <Loader />
                        <ConfirmDialog />
                        <div className="clearfix"></div>
                        {this.props.children}
                        <div className="clearfix"></div>
                        {/* <Footer {...this.props} /> */}
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
        token: state.authReducer.token,
        isOnBoard: state.authReducer.isOnBoard,
        notificationCount: state.notificationReducer.notificationCount,
        notifications: state.notificationReducer.notifications,
        count: state.notificationReducer.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));


const NotificationSliderComponent = ({ modalShown, modalToggle }) => {
    const { notifications, count } = useSelector(state => state.notificationReducer);
    const [loaded, setLoad] = useState(false);
    const [params, setParams] = useState({
        page: 1, limit: 10, order_by: "desc"
    });
    useEffect(() => {
        //if (!loaded && !notifications.length) {
        //    setLoad(true)
        getAllNotification({ ...params });
        getUnreadCount();

        //}
    }, [loaded]);

    const getCreateAt = (notification) => {
        let time = moment(notification.created_at);
        if (moment().diff(time, "hours") < 12) {
            let date = moment(notification.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ")
            var fromNow = date.fromNow();
            return `${fromNow} , at ${time.format("hh:mm A")}`;
        } else {
            let date = moment(notification.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ")
            return `${date.format("MM-DD-YYYY")} , at ${time.format("hh:mm A")}`;
        }
    }

    const loadMore = () => {
        let tempParams = { ...params };
        tempParams.page += 1;
        setParams(tempParams);
        getAllNotification({ ...tempParams })
    };

    const NotificationContent = (notification) => {
        if (notification.type === NOTIFICATION_TYPES.liked_post) {
            return notification.content.replace("liked", `<img src=` + require("assets/images/icons/liked_post.svg") + ` class="inline_img" alt="liked"/>`);
        } else if (notification.type === NOTIFICATION_TYPES.shared_your_post) {
            return notification.content.replace("shared", `<img src=` + require("assets/images/icons/icn_repeat.svg") + ` class="inline_img" alt="liked"/>`);
        } else {
            return notification.content
        }
    };

    const handleRequest = (responeType, notification) => {
        if (responeType === "accept") acceptRequest(notification.follow.id);
        else rejectRequest(notification.follow.id);
    }
    const handleLink = (notification) => {
        if (notification.type === NOTIFICATION_TYPES.shared_your_post || notification.type === NOTIFICATION_TYPES.liked_post) {
            return `/post/${notification.post.id}`
        } else {
            return `/profile/${notification.user.user_name}`
        }
    }
    return (
        <>
            {
                !notifications.length ? <li className="list-group-item"><span className="durations text-align-center">There are no notifications!</span></li> :
                    notifications.map((notification, index) =>
                        <li key={`noti_${index}`} className="list-group-item">
                            <div className="lps_media">
                                <figure className="lps_fig lps_fig_circle">
                                    <img src={notification.user && notification.user.photo_urls.medium ? notification.user.photo_urls.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                                </figure>
                                <div className="lps_media_body">
                                    {notification.user ?
                                        <Link to={() => handleLink(notification)}>
                                            <h5 onClick={modalToggle} dangerouslySetInnerHTML={{ __html: capitalizeFirstLetter(NotificationContent(notification)) }}></h5>
                                        </Link>
                                        : <h5 onClick={modalToggle} dangerouslySetInnerHTML={{ __html: capitalizeFirstLetter(NotificationContent(notification)) }}></h5>}
                                    {
                                        (notification.type === NOTIFICATION_TYPES.requested_follow && notification.follow.status === "requested") ? <div className="btn_group">
                                            <button onClick={e => handleRequest("accept", notification)} role="button" className="theme_btn theme_outline_primary accept active">accept</button>
                                            <button onClick={e => handleRequest("deny", notification)} role="button" className="theme_btn theme_outline_primary deny">deny</button>
                                        </div> : ""
                                    }

                                    <span className="durations">{getCreateAt(notification)}</span>
                                </div>
                            </div>
                        </li>
                    )
            }
            {notifications.length < count ? <li className="text-align-center text-primary list-group-item"><button className=" btn-transparent" onClick={loadMore}>load more...</button></li> : ""}
        </>
    )
}
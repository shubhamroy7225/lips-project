import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Aux from '../Oux/Oux';
import { withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Loader from "scenes/shared/loader";
import { markAsRead, getAllNotification, getUnreadCount } from 'redux/actions/notification/action';
import { acceptRequest, rejectRequest } from 'redux/actions/notification/action';
import * as liked_post from "assets/images/icons/liked_post.png";
import "assets/sass/style.scss";
import { routes, SETTINGS_PATH, PRIVATE_PATH, NOTIFICATION_TYPES } from 'utility/constants/constants';
import moment from "moment";

const Header = ({notificationCount, notifications, count,  ...props}) => {
    const [modalShown, setModalShown] = useState(false);
    const [marked, setMarked] = useState(false);
    const modalToggle = () => {
        setModalShown(!modalShown);
        if (!marked && notifications.length && notifications[count - 1]) {
            setMarked(true);
            markAsRead(notifications[count-1].id);
        }
    }
    console.log(props);
    useEffect(() => {
        if (window.$) {
            window.$('.tab-list a').on('click', function (e) {
                window.$(this).parents('li').addClass('active').siblings().removeClass('active');
                var active_tab = window.$(this).attr('href');
                window.$(active_tab).addClass('active').siblings().removeClass('active');
            })
        }
    })

    if (props.history.location.pathname === routes.CREATE) {
        return (
            <div className="post_page_header">
                <nav className="theme_tabs">
                    <ul className="tab-list">
                        <li className="active"><a href="#imageTab">IMAGE</a></li>
                        <li><a href="#textTab">TEXT</a></li>
                    </ul>
                </nav>
            </div>
        )
    } else if (Object.values(PRIVATE_PATH).includes(props.history.location.pathname) ||
        (props.history.location.pathname === routes.ROOT &&
            (props.user || props.history.location.pathname === routes.MAIN_FEED))
        || props.history.location.pathname.includes(routes.PROFILE)) {
        //default when user is not logged in
        let headerClassName = "main_header";
        if (props.history.location.pathname === routes.ROOT) {
            headerClassName = "main_header page-header"
        }
        return (
            <header className={headerClassName}>
                <nav className="theme_navigation">
                    <Link className="logo" to="/">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="BitCot Logo" className="header__logo" />
                    </Link>
                    <ul className="lp_nav">
                        <li className="nav-item">
                            <ul className="profile_dropdown avatar_dropdown">
                                <li className={`lps_dropdown ${modalShown ? "open" : ""}`}>
                                    <a href="#" className="dropdown-toggle nav-link user_menu_dropdown not_line" role="button" onClick={modalToggle}>
                                        <span className="avatar_circle">
                                            <img src={require("assets/images/icons/icn_heart.png")} alt="heart Icon" />
                                        </span>
                                        {parseInt(notificationCount) ? <span class="count_badge">{notificationCount}</span> : ""}
                                    </a>
                                    <ul className={`notification-dropdown lps_dropdown-menu lps_dropdown-menu-right lps_list_group lps_chatBox_list heightAuto ${modalShown ? "animated fadeInDown" : ""}`}>
                                        <NotificationSliderComponent modalShown={modalShown} modalToggle={modalToggle} /> </ul>
                                </li>
                            </ul>
                        </li>
                        {props.user && <li className="nav-item">
                            <Link to="/settings" className="nav-link not_line">
                                <span className="avatar_circle">
                                    <img src={require("assets/images/icons/icn_settings.png")} alt="Settings Icon" />
                                </span>
                            </Link>
                        </li>}
                    </ul>
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
                        <Header {...this.props} />
                        <Loader />
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


const NotificationSliderComponent = ({modalShown, modalToggle}) => {
    const {notifications, count} = useSelector(state => state.notificationReducer);
    const [loaded, setLoad] = useState(false);
    const [params, setParams] = useState({
        page: 1, limit: 10
    });
    useEffect(() => {
        if (!loaded && !notifications.length) {
            setLoad(true)
            getAllNotification({...params});
            getUnreadCount();

        }
    }, [loaded]);

    const getCreateAt = (notification) => {        
        let time = moment(notification.created_at);
        if (moment().diff(time, "hours") < 12) { 
            let date = moment(notification.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ")
            var fromNow = date.fromNow();
            return   `${fromNow} , at ${time.format("hh:mm A")}`;
        }else{
            let date = moment(notification.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ")
            return   `${date.format("MM-DD-YYYY")} , at ${time.format("hh:mm A")}`;
        }
    }
    
    const loadMore = () => {
        let tempParams = {...params};
        tempParams.page +=1;
        setParams(tempParams);
        getAllNotification({...tempParams})
    };

    const NotificationContent= (notification) => {
        if (notification.type === NOTIFICATION_TYPES.liked_post) {
             return notification.content.replace("liked", `<img src=`+liked_post+` class="inline_img" alt="liked"/>`);
        } else if (notification.type === NOTIFICATION_TYPES.shared_your_post) {
            return notification.content.replace("shared", `<img src=`+require("assets/images/icons/icn_repeat.svg")+` class="inline_img" alt="liked"/>`);
        }  else {
            return notification.content
        }
    };

    const handleRequest = (responeType, notification) => {
        if (responeType === "accept") acceptRequest(notification.follow.id);
        else rejectRequest(notification.follow.id);    
    };
    return (
        <>
        {
            !notifications.length ?  <li className="list-group-item"><span className="durations text-align-center">There are no notifications!</span></li> :
            notifications.map((notification, index) =>
                    <li key={`noti_${index}`} className="list-group-item">
                        <div className="lps_media">
                            <figure className="lps_fig lps_fig_circle">
                                <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                            </figure>
                            <div className="lps_media_body">
                                <h5 onClick={modalToggle} dangerouslySetInnerHTML={{__html: NotificationContent(notification)}}></h5>
                                {
                                    (notification.type === NOTIFICATION_TYPES.requested_follow && notification.follow.status === "requested" ) ? <div className="btn_group">
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
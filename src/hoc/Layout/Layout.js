import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Aux from '../Oux/Oux';
import { withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Loader from "scenes/shared/loader";
import { getAllNotification } from 'redux/actions/notification/action';

import "assets/sass/style.scss";
import { routes, SETTINGS_PATH, PRIVATE_PATH } from 'utility/constants/constants';

const Header = (props) => {
    const [modalShown, setModalShown] = useState(false);
    const modalToggle = () => {
        setModalShown(!modalShown);
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
                                    </a>
                                    <ul className={`notification-dropdown lps_dropdown-menu lps_dropdown-menu-right lps_list_group lps_chatBox_list ${modalShown ? "animated fadeInDown" : ""}`}>
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
        isOnBoard: state.authReducer.isOnBoard
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
        if (!loaded) {
            setLoad(true)
            getAllNotification({...params})
        }
    }, [loaded]);
    const loadMore = () => {
        let tempParams = {...params};
        tempParams.page +=1;
        setParams(tempParams);
        getAllNotification({...tempParams})
    }
    return (
        <>
        {
            notifications.map((notification, index) =>
                    <li key={`noti_${index}`} className="list-group-item">
                        <div className="lps_media">
                            <figure className="lps_fig lps_fig_circle">
                                <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                            </figure>
                            <div className="lps_media_body">
                                <h5 onClick={modalToggle}>{notification.content}</h5>
                                <span className="durations">1 minute ago</span>
                            </div>
                        </div>
                    </li>
            )
        }
        {notifications.length < count ? <li className="text-align-center text-primary list-group-item"><button className=" btn-transparent" onClick={loadMore}>load more...</button></li> : ""}
        {/* <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <h5>username wants to follow you</h5>
                        <div className="btn_group">
                            <a href="#" role="button" className="theme_btn theme_outline_primary accept active">accept</a>
                            <a href="#" role="button" className="theme_btn theme_outline_primary deny">deny</a>
                        </div>
                        <span className="durations">1 minute ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <h5 className="lps_inline_img_wrp">username added your <span
                            className="ft_Weight_600 ml_5">post</span> <img src={require("assets/images/icons/icn_folder.png")}
                                className="inline_img" /></h5>
                        <div className="btn_group">
                            <a href="#" role="button"
                                className="theme_btn theme_outline_primary text_sendry min_w_170">Remove</a>
                        </div>
                        <span className="durations">1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <h5 className="lps_inline_img_wrp">username <img src={require("assets/images/icons/icn_repeat.png")}
                            className="inline_img" /> your <span className="ft_Weight_600 ml_5">post</span></h5>
                        <span className="durations">1 week ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <h5 className="lps_inline_img_wrp">username <img src={require("assets/images/icons/icn_mouth.png")}
                            className="inline_img" /> your <span className="ft_Weight_600 ml_5"> post</span></h5>
                        <span className="durations">1 week ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle lps_fig_circle_xs">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <h5>You've been approved <br /> <small>You can now post</small></h5>
                        <span className="durations">1 month ago</span>
                    </div>
                </div>
            </li> */}
        </>
    )
}
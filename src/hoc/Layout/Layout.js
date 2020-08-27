import React, { Component, useState } from 'react';
import Aux from '../Oux/Oux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import "assets/sass/style.scss";

const Header = (props) => {
    console.log(props);

    //default when user is not logged in
    let headerTabsContent = (
        <>
            <a className="logo" href="#">
                <img src={require("assets/images/thumbnails/logo.png")} alt="BitCot Logo" className="header__logo" />
            </a>
            <ul className="lp_nav">
                <li className="nav-item">
                    <ul className="profile_dropdown avatar_dropdown">
                        <li className="lps_dropdown">
                            <a href="#" className="dropdown-toggle nav-link user_menu_dropdown not_line" role="button">
                                <span className="avatar_circle">
                                    <img src={require("assets/images/icons/icn_heart.png")} alt="heart Icon" />
                                </span>
                            </a>
                            <NotificationSliderComponent />
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="settings.html" className="nav-link not_line">
                        <span className="avatar_circle">
                            <img src={require("assets/images/icons/icn_settings.png")} alt="Settings Icon" />
                        </span>
                    </a>
                </li>
            </ul>
        </>
    );

    return (
        <header className="main_header">
            <nav className="theme_navigation">
                {headerTabsContent}
            </nav>
        </header >
    );
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
                        {(this.props.isOnBoard || this.props.token) && <Header {...this.props} />}

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


const NotificationSliderComponent = () => {
    return (
        <ul className="lps_dropdown-menu lps_dropdown-menu-right lps_list_group lps_chatBox_list">
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow added you to their --- list</p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow wants to follow you
                                                                    <a href="#" className="link_underline link_white">accept</a>
                            <a href="#" className="link_underline link_white">deny</a>
                        </p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow added you <a href="#" className="link_underline link_white">post</a> <a href="#"
                            className="link_underline link_white">i don't want it there</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow your <a href="#" className="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow your <a href="#" className="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow your <a href="#" className="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <p>Jon Snow your <a href="#" className="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
        </ul>
    )
}
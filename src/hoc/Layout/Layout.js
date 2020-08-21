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
            <a class="logo" href="#">
                <img src="/images/thumbnails/logo.png" alt="BitCot Logo" class="header__logo" />
            </a>
            <ul class="lp_nav">
                <li class="nav-item">
                    <ul class="profile_dropdown avatar_dropdown">
                        <li class="lps_dropdown">
                            <a href="#" class="dropdown-toggle nav-link user_menu_dropdown not_line" role="button">
                                <span class="avatar_circle">
                                    <img src="/images/icons/icn_heart.png" alt="heart Icon" />
                                </span>
                            </a>
                            <NotificationSliderComponent />
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="settings.html" class="nav-link not_line">
                        <span class="avatar_circle">
                            <img src="/images/icons/icn_settings.png" alt="Settings Icon" />
                        </span>
                    </a>
                </li>
            </ul>
        </>
    );

    return (
        <header class="main_header">
            <nav class="theme_navigation">
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
                <div class="limiter">
                    <div class="container-login100">
                        <Header {...this.props} />

                        <div className="clearfix"></div>
                        {this.props.children}
                        <div className="clearfix"></div>
                        <Footer {...this.props} />
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));


const NotificationSliderComponent = () => {
    return (
        <ul class="lps_dropdown-menu lps_dropdown-menu-right lps_list_group lps_chatBox_list">
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow added you to their --- list</p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow wants to follow you
                                                                    <a href="#" class="link_underline link_white">accept</a>
                            <a href="#" class="link_underline link_white">deny</a>
                        </p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow added you <a href="#" class="link_underline link_white">post</a> <a href="#"
                            class="link_underline link_white">i don't want it there</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow your <a href="#" class="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow your <a href="#" class="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow your <a href="#" class="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <p>Jon Snow your <a href="#" class="link_underline link_white">post</a></p>
                        <span>1 day ago</span>
                    </div>
                </div>
            </li>
        </ul>
    )
}
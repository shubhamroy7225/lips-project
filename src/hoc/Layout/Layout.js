import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Aux from '../Oux/Oux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import "assets/sass/style.scss";
import { routes, SETTINGS_PATH, PRIVATE_PATH } from 'utility/constants/constants';

   
const Header = (props) => {
   const [modalShown, setModalShown] = useState(false);
   const modalToggle = () => {
    setModalShown(modalShown ? false : true);
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
            <header class="main_header post_page_header">
                <nav class="theme_tabs">
                    <ul class="tab-list">
                        <li class="active"><a href="#imageTab">IMAGE</a></li>
                        <li><a href="#textTab">TEXT</a></li>
                    </ul>
                </nav>
            </header>
        )
    } else if (Object.values(PRIVATE_PATH).includes(props.history.location.pathname) || props.history.location.pathname === "/") {
        //default when user is not logged in
        return (
            <header className="main_header">
                <nav className="theme_navigation">
                    <Link className="logo" to="/">
                        <img src={require("assets/images/thumbnails/logo.png")} alt="BitCot Logo" className="header__logo" />
                    </Link>
                    <ul className="lp_nav">
                        <li className="nav-item">
                            <ul className="profile_dropdown avatar_dropdown">
                                <li className="lps_dropdown" onClick={modalToggle}>
                                    <a href="#"  className="dropdown-toggle nav-link user_menu_dropdown not_line" role="button">
                                        <span className="avatar_circle">
                                            <img src={require("assets/images/icons/icn_heart.png")} alt="heart Icon" />
                                        </span>
                                    </a>
                                    <ul class={`lps_dropdown-menu lps_dropdown-menu-right lps_list_group lps_chatBox_list ${modalShown ? "animated fadeInDown" : ""}`}>
                                    <NotificationSliderComponent modalShown={modalShown}  /> </ul>
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


const NotificationSliderComponent = (modalShown) => {
  
    return (
       <>
                    <li class="list-group-item">
                      <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                          <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                          <h5>username wants to follow you</h5>
                          <div class="btn_group">
                            <a href="#" role="button" class="theme_btn theme_outline_primary accept active">accept</a>
                            <a href="#" role="button" class="theme_btn theme_outline_primary deny">deny</a>
                          </div>
                          <span class="durations">1 minute ago</span>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                          <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                          <h5 class="lps_inline_img_wrp">username added your <span
                              class="ft_Weight_600 ml_5">post</span> <img src={require("assets/images/icons/icn_folder.png")}
                              class="inline_img"/></h5>
                          <div class="btn_group">
                            <a href="#" role="button"
                              class="theme_btn theme_outline_primary text_sendry min_w_170">Remove</a>
                          </div>
                          <span class="durations">1 day ago</span>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                          <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                          <h5 class="lps_inline_img_wrp">username <img src={require("assets/images/icons/icn_repeat.png")}
                              class="inline_img"/> your <span class="ft_Weight_600 ml_5">post</span></h5>
                          <span class="durations">1 week ago</span>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                          <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                          <h5 class="lps_inline_img_wrp">username <img src={require("assets/images/icons/icn_mouth.png")}
                              class="inline_img"/> your <span class="ft_Weight_600 ml_5"> post</span></h5>
                          <span class="durations">1 week ago</span>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle lps_fig_circle_xs">
                          <img src={require("assets/images/thumbnails/logo.svg")} alt="User"/>
                        </figure>
                        <div class="lps_media_body">
                          <h5>You've been approved <br/> <small>You can now post</small></h5>
                          <span class="durations">1 month ago</span>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                          <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                          <h5>Message from Lips</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur a dipiscing elit sed do eiusmod tempor incidi</p>
                          <span class="durations">1 minute ago</span>
                        </div>
                      </div>
                    </li>
               </>  
    )
}
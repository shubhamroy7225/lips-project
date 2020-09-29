import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { ApprovalStatus } from 'utility/constants/constants';

const MenuOptionSlider = (props) => {
    const hideMenuOptionSlider = props.hideMenuOptionSlider ? props.hideMenuOptionSlider : false;

    useEffect(() => {
        rightWidgetClickHandler()
    }, [hideMenuOptionSlider])

    const toggle = () => {
        if (window.$) {
            window.$(".collapsible").toggle("slide", { direction: "right" }, 500);
            window.$(".footer-menu-list").addClass("active");
        }
    }

    const rightWidgetClickHandler = () => {
        if (window.$) {
            if (window.$(".footer-menu-list").hasClass('active')) {
                window.$(".collapsible").toggle("slide", { direction: "right" }, 500);
                window.$(".footer-menu-list").removeClass("active");
            }
        }
    }

    let createPostRoute = routes.CREATE
    let likedPostRoute = routes.LIKES
    let explorePostRoute = routes.EXPLORE
    let profileRoute = routes.PROFILE

    if (props.user) {
        //if user 
        if (props.user.approval_status !== ApprovalStatus.accepted) {
            createPostRoute = routes.POST_APPROVAL;
        }
    } else {
        createPostRoute = likedPostRoute = explorePostRoute = profileRoute = routes.LOGIN_TO_PROCEED;
    }

    let menuItems = (
        <ul className="ul_list custom_ul">
            <li className="listed_item">
                <Link to={{
                    pathname: createPostRoute, state: {
                        type: routes.CREATE
                    }
                }} className="collapse_links add_link_wrp">
                    <img src={require("assets/images/icons/white_plus.svg")} className="ci_image" alt="plus" />
                </Link>
            </li>
            <li className="listed_item">
                <Link to={{
                    pathname: explorePostRoute, state: {
                        type: routes.EXPLORE
                    }
                }} className="collapse_links search_link_wrp">
                    <img src={require("assets/images/icons/white_search.svg")} className="ci_image" alt="search" />
                </Link>
            </li>
            <li className="listed_item">
                <Link to={{
                    pathname: likedPostRoute, state: {
                        type: routes.LIKES
                    }
                }} className="collapse_links lip_link_wrp">
                    <img src={require("assets/images/icons/white_kiss.svg")} className="ci_image" alt="mouth" />
                </Link>
            </li>
            <li className="listed_item">
                <Link to={{
                    pathname: profileRoute, state: {
                        type: routes.PROFILE
                    }
                }} className="collapse_links profile_link_wrp">
                    <img src={require("assets/images/icons/user_white.svg")} className="ci_image" alt="user" />
                </Link>
            </li>
            {isMobile && <li className="listed_item">
                <a href="javascript: void(0);" className="right_widget" onClick={rightWidgetClickHandler}>
                    <i className="fa fa-angle-right wr_icon" aria-hidden="true"></i>
                </a>
            </li>}
        </ul>
    )
    if (isMobile) {
        return (
            <div className="footer-menu-list" >
                <div className="horizantal_coll" onClick={() => toggle()}>
                    <i class="fa fa-angle-top wr_icon_top" aria-hidden="true"></i>
                    {/* <i className="fa fa-angle-right wr_icon" aria-hidden="true"></i> */}
                </div>
                <div className="collapsible">
                    {menuItems}
                </div>
            </div>
        )
    } else {
        return (
            <div className="footer-menu-list" onClick={() => toggle()}>
                {menuItems}
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, null)(MenuOptionSlider);

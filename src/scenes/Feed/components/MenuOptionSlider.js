import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
const MenuOptionSlider = (props) => {

    const toggle = () => {
        window.$(".collapsible").toggle("slide", { direction: "right" }, 500);
    }

    const postFeed = () => {
        console.log(props.isFeedApproved);
        if (props.isFeedApproved) {

        } else {

        }
    }

    let createPostRoute = routes.CREATE
    let likedPostRoute = routes.LIKES
    let explorePostRoute = routes.EXPLORE
    let profileRoute = routes.PROFILE

    if (props.user) {
        if (!props.user.account_approved) {
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
                }} className="collapse_links">
                    <img src={require("assets/images/icons/white_plus.svg")} className="ci_image" alt="plus" />
                </Link>
            </li>
            <li className="listed_item">
                <Link to={{
                    pathname: explorePostRoute, state: {
                        type: routes.EXPLORE
                    }
                }} className="collapse_links">
                    <img src={require("assets/images/icons/white_search.svg")} className="ci_image" alt="search" />
                </Link>
            </li>
            <li className="listed_item">
                <Link to={{
                    pathname: likedPostRoute, state: {
                        type: routes.LIKES
                    }
                }} className="collapse_links">
                    <img src={require("assets/images/icons/white_kiss.svg")} className="ci_image" alt="mouth" />
                </Link>
            </li>
            <li className="listed_item">
                <Link to={{
                    pathname: profileRoute, state: {
                        type: routes.PROFILE
                    }
                }} className="collapse_links">
                    <img src={require("assets/images/icons/user_white.svg")} className="ci_image" alt="user" />
                </Link>
            </li>
            {isMobile && <li className="listed_item">
                <a href="javascript: void(0);" className="right_widget">
                    <i className="fa fa-angle-right wr_icon" aria-hidden="true"></i>
                </a>
            </li>}
        </ul>
    )
    if (isMobile) {
        return (
            <div className="footer-menu-list" onClick={() => toggle()}>
                <div className="horizantal_coll" >
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
    isFeedApproved: state.authReducer.isFeedApproved,
    user: state.authReducer.user
});

export default connect(mapStateToProps, null)(MenuOptionSlider);

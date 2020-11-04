import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { followUser, unfollowUser } from "api/userAPI";
import { FollowStatus, routes } from 'utility/constants/constants';
import $ from 'jquery';
import { toggleFollowers } from "redux/actions/auth";
import Linkify from 'react-linkify';


const ProfileHeader = ({ setEdit, user, isUserProfile = true, isLoggedIn }) => {
    let history = useHistory();
    const [isFollowerHeaderHidden, setIsFollowerHeaderHidden] = useState(true)
    const profilePhoto = user.photo_urls && user.photo_urls.medium ? user.photo_urls.medium : require("assets/images/icons/user_outline.png");
    const headerImage = user.header_images && user.header_images.medium ? user.header_images.medium : null;
    const { follow_status, followers_count, following_count, privacy_settings, user_name } = user
    const [followStatus, setFollowStatus] = useState(follow_status);
    const [followRequest, setFollowRequest] = useState(false);
    const isPublic = privacy_settings === "public";
    // updating follow status on didupdate props - on did update props initial value on usestate doesn't work
    useEffect(() => {
        setFollowStatus(follow_status)
        if (followStatus !== FollowStatus.Requested) {
            setFollowRequest(false)
        }
    }, [follow_status, user])

    useEffect(() => {
        $('.close_follow').on("click", function () {
            $('.followers_wrp').addClass('close');
            $('.followers_wrp').removeClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });

        $('.followers_trigger').on("click", function () {
            setFollowRequest(false);
            $('.followers_wrp').removeClass('close');
            $('.followers_wrp').addClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });
    }, [])

    const openFollowers = () => {
        if (isLoggedIn) {
            toggleFollowers({ enable: true });
        } else {
            history.push(routes.LOGIN)
        }
    }

    const openFollowing = () => {
        if (isLoggedIn) {
            toggleFollowers({ enable: false });
        } else {
            history.push(routes.LOGIN)
        }
    }

    const toggleFollowRequest = () => {
        if (followStatus === FollowStatus.NotRequested || FollowStatus.Denied === followStatus) {
            followUser(user.id);
            setFollowStatus(FollowStatus.Requested);
            setFollowRequest(true);
            setTimeout(() => {
                setFollowRequest(false)
            }, 2000);
        } else {
            unfollowUser(user.id);
            setFollowStatus(FollowStatus.NotRequested);
        }
    }

    let allowRequest = followStatus === FollowStatus.NotRequested || FollowStatus.Denied === followStatus
    return (
        <div className="lps_list">
            {/* cover image */}
            {headerImage && <div className="bg_gray_feed">
                <figure className="lps_fig feed_fig310">
                    <img src={headerImage} alt="thumbnail1" />
                </figure>
            </div>}

            <div className="lps_inner_wrp lps_inner_wrp_media">
                <div className="lps_media lps_pos_rltv lps_f_center">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={profilePhoto} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <div className="user_wrp_mail pull-left">
                            <span className="text_primary">{user.user_name}</span>
                        </div>
                        {isUserProfile ?
                            <figure className="lps_fig lps_fig_cont lps_fig_circle lps_float_right">
                                <Link to="/profile" onClick={e => setEdit(true)}><img src={require("assets/images/icons/icn_paint_active.svg")} alt="User" /></Link>
                            </figure>
                            :
                            <>
                                { //only if user is logged show the option to send follow request
                                    isLoggedIn && <figure className="lps_fig lps_fig_circle lps_float_right">
                                        <a onClick={toggleFollowRequest} className={!allowRequest ? "icn_hover_chng active" : "icn_hover_chng"} id="heart_notify">
                                            <img src={require("assets/images/icons/icn_outline_follow.svg")} className="icn_dfltD" alt="User" />
                                            <img src={require("assets/images/icons/icn_fill_follow.svg")} className="icn_hvrA" alt="User" />
                                        </a>
                                    </figure>
                                }
                                <div className="hover_bkgr_fricc heart_notify_box notify_box_hide_3S" style={{ display: followRequest ? "block" : "none" }} id="trigger_heart_popup">
                                    <div className="popup_cont lps_pos_rltv">
                                        <div className="popup_body">
                                            {isPublic ? `You have started following ${user_name}` : "Follow request sent"}
                                        </div>
                                        <span className="bottm_shape"></span>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <p className="mt_15 mb_5">
                    <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key} className="link_underline text_secondary">{decoratedText}</a>
                    )}>{user.bio}</Linkify>
                    {/* <a href="#" className="link_underline text_secondary">www.website.com </a> lorem ipsum
                  <a href="#" className="link_underline text_secondary"> www.anotherwebsite.com</a>lorem ipsum dolor */}
                </p>
                {
                    user.show_followers || user.show_following ?
                        <a className="dots_link" id="trigger_followers_block" onClick={() => { setIsFollowerHeaderHidden(!isFollowerHeaderHidden) }}><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                        : ""}
                <div
                    className="followers_block followers_block_none"
                    style={{ display: isFollowerHeaderHidden ? "none" : "block" }}
                    id="followers_block">
                    {user.show_followers && <a className="followers_trigger" onClick={openFollowers}> {followers_count} <br /> Followers</a>}
                    {user.show_following && <a className="followers_trigger" onClick={openFollowing}> {following_count} <br />Following</a>}
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;
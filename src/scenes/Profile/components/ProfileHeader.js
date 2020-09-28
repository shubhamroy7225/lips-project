import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "api/userAPI";


const ProfileHeader = ({ setEdit, user, isUserProfile = true }) => {
    const [isFollowerHeaderHidden, setIsFollowerHeaderHidden] = useState(true)

    const profilePhoto = user.photo_urls && user.photo_urls.medium ? user.photo_urls.medium : require("assets/images/icons/user_outline.png");
    const headerImage = user.header_images && user.header_images.medium ? user.header_images.medium : null;
    const { followers_count, following_count } = user

    const [followRequestSet, setFollowRequestSet] = useState(false);

    const toggleFollowRequest = () => {
        if (followRequestSet) {
            unfollowUser(user.id);
        } else {
            followUser(user.id);
        }
        setFollowRequestSet(!followRequestSet);
    }

    return (
        <div class="lps_list">
            {/* cover image */}
            {!isUserProfile && headerImage && <div class="bg_gray_feed">
                <figure class="lps_fig feed_fig310">
                    <img src={headerImage} alt="thumbnail1" />
                </figure>
            </div>}

            <div class="lps_inner_wrp lps_inner_wrp_media">
                <div class="lps_media lps_pos_rltv lps_f_end">
                    <figure class="lps_fig lps_fig_circle">
                        <img src={profilePhoto} alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <div class="lps_media_body">
                            <div class="user_wrp_mail">
                                <span class="text_primary">{user.user_name}</span>
                            </div>
                            {isUserProfile ?
                                <figure class="lps_fig lps_fig_cont lps_fig_circle lps_float_right">
                                    <Link to="/profile" onClick={e => setEdit(true)}><img src={require("assets/images/icons/icn_paint_active.svg")} alt="User" /></Link>
                                </figure>
                                :
                                <>
                                    <figure class="lps_fig lps_fig_circle lps_float_right">
                                        <a onClick={toggleFollowRequest} class={followRequestSet ? "icn_hover_chng active" : "icn_hover_chng"} id="heart_notify">
                                            <img src={require("assets/images/icons/icn_outline_follow.svg")} class="icn_dfltD" alt="User" />
                                            <img src={require("assets/images/icons/icn_fill_follow.svg")} class="icn_hvrA" alt="User" />
                                        </a>
                                    </figure>
                                    <div class="hover_bkgr_fricc heart_notify_box notify_box_hide_3S" style={{ display: followRequestSet ? "block" : "none" }} id="trigger_heart_popup">
                                        <div class="popup_cont lps_pos_rltv">
                                            <div class="popup_body">
                                                Follow request sent
                                            </div>
                                            <span class="bottm_shape"></span>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                    </div>
                </div>
                <p class="mt_15 mb_5">
                    {user.bio}
                    {/* <a href="#" class="link_underline text_secondary">www.website.com </a> lorem ipsum
                  <a href="#" class="link_underline text_secondary"> www.anotherwebsite.com</a>lorem ipsum dolor */}
                </p>
                <a class="dots_link" id="trigger_followers_block" onClick={() => { setIsFollowerHeaderHidden(!isFollowerHeaderHidden) }}><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                <div
                    class="followers_block followers_block_none"
                    style={{ display: isFollowerHeaderHidden ? "none" : "block" }}
                    id="followers_block">
                    <a class="followers_trigger"> {followers_count} <br /> Followers</a>
                    <a class="followers_trigger"> {following_count} <br />Following</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;
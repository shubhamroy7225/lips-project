import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MenuOptionSlider from 'scenes/Feed/components/MenuOptionSlider';
import $ from 'jquery';
import { isMobile } from 'react-device-detect';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import FollowerItem from './components/FollowerItem';
import NonRegisteredView from 'scenes/NonRegisteredView';

const ProfileHeader = ({ isUserProfile = true }) => {
    const [isFollowerHeaderHidden, setIsFollowerHeaderHidden] = useState(true)
    const [following, setFollowing] = useState(false)
    return (
        <div class="lps_list">
            {/* cover image */}
            {!isUserProfile && <div class="lps_inner_wrp bg_gray_feed">
                <div class="lps_slider">
                    <figure class="lps_fig">
                        <img src={require("assets/images/icons/landscape-image.png")} alt="thumbnail1" />
                    </figure>
                </div>
            </div>}

            <div class="lps_inner_wrp lps_inner_wrp_media">
                <div class="lps_media lps_pos_rltv lps_f_end">
                    <figure class="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user_outline.png")} alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <div class="lps_media_body">
                            <div class="user_wrp_mail">
                                <span class="text_primary">Jon Snow </span>
                                {!isUserProfile && <a class="link_target_mail">
                                    <img src={require("assets/images/icons/icn_message.svg")} alt="Mail" />
                                </a>}
                            </div>
                            {isUserProfile ?
                                <figure class="lps_fig lps_fig_cont lps_fig_circle lps_float_right">
                                    <a href="my_user_profile_customize.html"><img src={require("assets/images/icons/icn_paint_active.svg")} alt="User" /></a>
                                </figure>
                                :
                                <>
                                    <figure class="lps_fig lps_fig_circle lps_float_right">
                                        <a onClick={() => { setFollowing(!following) }} href="javascript:void(0);" class={following ? "icn_hover_chng active" : "icn_hover_chng"} id="heart_notify">
                                            <img src={require("assets/images/icons/icn_outline_follow.svg")} class="icn_dfltD" alt="User" />
                                            <img src={require("assets/images/icons/icn_fill_follow.svg")} class="icn_hvrA" alt="User" />
                                        </a>
                                    </figure>
                                    <div class="hover_bkgr_fricc heart_notify_box"
                                        id="trigger_heart_popup" style={{ display: following ? "block" : "none" }}>
                                        <div class="popup_cont lps_pos_rltv">
                                            <div class="popup_body">
                                                Get notified every time the post
                                            </div>
                                            <span class="bottm_shape"></span>
                                        </div>
                                        <a href="javascript:void(0);" class="heart_notify_right">
                                            <img src={require("assets/images/icons/icn_heart_outline.png")} alt="User" />
                                        </a>
                                    </div>
                                </>
                            }
                        </div>

                    </div>
                </div>
                <p class="mt_15 mb_5">
                    bio lorem ipsum dolor sit amet, consectetur adipiscing el nam
                    vel congue nisi
                  <a href="#" class="link_underline text_secondary">www.website.com </a> lorem ipsum
                  <a href="#" class="link_underline text_secondary"> www.anotherwebsite.com</a>lorem ipsum dolor
                </p>
                <a class="dots_link" id="trigger_followers_block" onClick={() => { setIsFollowerHeaderHidden(!isFollowerHeaderHidden) }}><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                <div
                    class="followers_block followers_block_none"
                    style={{ display: isFollowerHeaderHidden ? "none" : "block" }}
                    id="followers_block">
                    <a class="followers_trigger"> 000 <br /> Followers</a>
                    <a class="followers_trigger"> 000 <br />Following</a>
                </div>
            </div>
        </div>
    )
}

const Profile = (props) => {
    useEffect(() => {
        $('.close_follow').on("click", function () {
            $('.followers_wrp').addClass('close');
            $('.followers_wrp').removeClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });

        $('.followers_trigger').on("click", function () {
            $('.followers_wrp').removeClass('close');
            $('.followers_wrp').addClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });
    }, [])

    if (props.user) {
        return (
            <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
                <div class="lps_container bg_grayCCC">
                    <ProfileHeader isUserProfile={props.isUserProfile} />
                    {/* <!-- Lips Tab --> */}
                    <section class="lips_tab tabs_grid_view_sec">
                        <ul class="tabs_block_cst">
                            <li class="tab-link current" data-tab="tab-1">
                                <figure class="lps_fig lps_fig_sm">
                                    <img src={require("assets/images/icons/icn_image_sm_white.svg")} alt="Picture" />
                                </figure>
                            </li>
                        </ul>

                        <div id="tab-1" class="tab-content_cst current">
                            <div class="main_feed_cont">
                                <div class="list_view">
                                    <ImageFeed />
                                    <ImageFeed />
                                    <TextFeed />
                                    <ImageFeed />
                                    <ImageFeed />
                                    <ImageFeed />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Menu bottom here --> */}
                    <MenuOptionSlider />
                    {/* <!-- // Menu bottom here --> */}

                    {/* <!-- followers content --> */}
                    <div class="bg_grayCCC lps_h_100 followers_wrp close">
                        <div class="lps_inner_wrp lps_inner_content lps_h_100 bg_grayCCC followers_wrp_inner">
                            <div class="lps_title_wrp text_center lps_pos_rltv">
                                <a class="lps_arrow_left close_follow" href="#">
                                    <img src={require("assets/images/icons/icn_close.png")} alt="Icon Arrow" class="lps_header_img" />
                                </a>
                                <div class="lps_txtFollow_center">
                                    <span class="lps_sm_folow">Followers</span>
                                </div>
                            </div>
                            <div class="follow_overflow">
                                <FollowerItem />
                                <FollowerItem />
                                <FollowerItem />
                                <FollowerItem />
                                <FollowerItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <NonRegisteredView />
    }


}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(Profile);


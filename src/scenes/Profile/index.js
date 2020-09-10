import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import MenuOptionSlider from 'scenes/Feed/components/MenuOptionSlider';
import $ from 'jquery';
import { isMobile } from 'react-device-detect';

const FollowerItem = (props) => {
    return (
        <div class="lps_media lps_f_vm lps_follow_media">
            <figure class="lps_fig lps_fig_circle">
                <img src={require("assets/images/icons/user.jpg")} alt="User" />
            </figure>
            <div class="lps_media_body">
                <div class="lps_media_body">
                    <div class="lps_flx_vm_jsbtwn">
                        <span class="lps_sm_folow">follower</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const UserImageFeed = (props) => {
    return (
        <div class="product_card">
            <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
        </div>
    );
}

const Profile = () => {
    useEffect(() => {
        $('.close_follow').on("click", function () {
            $('.followers_wrp').addClass('close');
            $('.followers_wrp').removeClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });

        $('.followers_trigger').on("click", function () {
            $('.followers_wrp').removeClass('close');
            $('.followers_wrp').toggleClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });
    }, [])

    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div class="lps_container bg_grayCCC">
                <div class="lps_list">
                    <div class="lps_inner_wrp lps_inner_wrp_media">
                        <div class="lps_media lps_pos_rltv lps_f_end">
                            <figure class="lps_fig lps_fig_circle">
                                <img src={require("assets/images/icons/user_outline.png")} alt="User" />
                            </figure>
                            <div class="lps_media_body">
                                <div class="lps_media_body">
                                    <div class="user_wrp_mail">
                                        <span class="text_primary">Jon Snow </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="mt_15 mb_5"> sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        <a href="#" class="dots_link"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                        <div class="followers_block">
                            <a href="#" class="followers_trigger">000 <br /> Followers </a>
                            <a href="#" class="followers_trigger">000 <br /> Following </a>
                        </div>
                    </div>
                </div>
                {/* <!-- Lips Tab --> */}
                <section class="lips_tab tabs_grid_view_sec">
                    <ul class="tabs_block_cst">
                        <li class="tab-link" data-tab="tab-1">
                            <figure class="lps_fig lps_fig_sm">
                                <img src={require("assets/images/icons/icn_picture.png")} alt="Picture" />
                            </figure>
                        </li>
                    </ul>

                    <div id="tab-1" class="tab-content_cst current pt_0">
                        <div class="lps_product_grid">
                            <UserImageFeed />
                            <UserImageFeed />
                            <UserImageFeed />
                            <UserImageFeed />
                            <UserImageFeed />
                        </div>
                    </div>
                </section>

                {/* <!-- Menu bottom here --> */}
                <MenuOptionSlider />
                {/* <!-- // Menu bottom here --> */}

                {/* <!-- followers content --> */}
                <div class="bg_grayCCC lps_h_100 followers_wrp">
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
    )
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Profile));


import React from 'react';
import FeedWidget from './node_modules/container/MainFeed/FeedWidget';


const RestrictedFeed = () => {
    return (
        <div className="lps_list lps_post_blr">
            <div className="lps_flx_vm_jc lps_bg_txt_white on_boarding_wrp lps_post_blr_drop">
                <div className="lps_form_wrp on_boarding_wrp_spwn">
                    <article className="lps_art lps_art_white text_center">
                        <p>This post includes</p>
                    </article>
                    <ul className="lps_btn_grps lps_ul lps_hash_ul">
                        <li>
                            <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                        </li>
                    </ul>
                    <div className="pos_wrp onboarding_btm text_center">
                        <a href="main_feed_browse_choose_tags_1.html" className="theme_btn theme_outline_light btn_block theme_btn_rds25 text_uppercase">View IT anyway</a>
                        <p className="btm_links mt_25 text_white">Review your <a href="#" className="link_underline link_white">Feed Settings</a></p>
                    </div>
                </div>
            </div>
            <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                <div className="lps_media">
                    <figure className="lps_fig lps_fig_circle">
                        <img src={require("assets/images/icons/user.jpg")} alt="User" />
                    </figure>
                    <div className="lps_media_body">
                        <div className="lps_media_body">
                            <p className="more"><span className="text_primary">Jon snow </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid<span className="moreellipses">...&nbsp;</span><span className="morecontent"><span>unt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>&nbsp;&nbsp;<a href="" className="morelink">more</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestrictedFeed
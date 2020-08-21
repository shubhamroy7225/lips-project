import React from 'react';
import FeedWidget from 'scenes/Feed/components/FeedWidget';


const RestrictedFeed = () => {
    return (
        <div class="lps_list lps_post_blr">
            <div class="lps_flx_vm_jc lps_bg_txt_white on_boarding_wrp lps_post_blr_drop">
                <div class="lps_form_wrp on_boarding_wrp_spwn">
                    <article class="lps_art lps_art_white text_center">
                        <p>This post includes</p>
                    </article>
                    <ul class="lps_btn_grps lps_ul lps_hash_ul">
                        <li>
                            <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                        </li>
                    </ul>
                    <div class="pos_wrp onboarding_btm text_center">
                        <a href="main_feed_browse_choose_tags_1.html" class="theme_btn theme_outline_light btn_block theme_btn_rds25 text_uppercase">View IT anyway</a>
                        <p class="btm_links mt_25 text_white">Review your <a href="#" class="link_underline link_white">Feed Settings</a></p>
                    </div>
                </div>
            </div>
            <div class="lps_inner_wrp lps_inner_wrp_media pd_b0">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src="/images/icons/user.jpg" alt="User" />
                    </figure>
                    <div class="lps_media_body">
                        <div class="lps_media_body">
                            <p class="more"><span class="text_primary">Jon snow </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>unt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>&nbsp;&nbsp;<a href="" class="morelink">more</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestrictedFeed
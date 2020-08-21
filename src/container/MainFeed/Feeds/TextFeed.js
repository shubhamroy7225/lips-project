import React from 'react';
import FeedWidget from './node_modules/container/MainFeed/FeedWidget';


const TextFeed = () => {
    return (
        <div class="lps_list">
            <div class="lps_sm_shape lps_sm_shape1"></div>
            <div class="lps_inner_wrp lps_pink_border lps_mt_50">
                <div class="lps_inner_cont lps_pos_rltv">
                    <article class="lps_art">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip.

                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam </p>
                        <a href="main_feed_full_text.html" class="lps_link" title="more">more</a>
                    </article>
                    <FeedWidget />
                </div>
            </div>
            <div class="lps_inner_wrp lps_inner_wrp_media pd_b0">
                <div class="lps_media">
                    <figure class="lps_fig lps_fig_circle">
                        <img src={require("assets/images/images/icons/user.jpg")} alt="User" />
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

export default TextFeed
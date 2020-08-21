import React from 'react';
import FeedWidget from './node_modules/container/MainFeed/FeedWidget';


const ImageFeed = () => {
    return (
        <div class="lps_list">
            <div class="lps_sm_shape"></div>
            <div class="post_img_block lps_pink_bg lps_widgets_wrp">
                <figure class="feed_galary">
                    <img src="/images/icons/landscape-image.png" alt="Add Image" />
                </figure>
                <FeedWidget />
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

export default ImageFeed
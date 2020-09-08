import React, { useState } from 'react';
import FeedWidget from 'scenes/Feed/components/FeedWidget';
import { MobileView, BrowserView, isMobile } from 'react-device-detect';
import RepostModal from './FeedModal/RepostModal';
import TaggedModal from './FeedModal/TaggedModal';
import ReportModal from './FeedModal/ReportModal';


const ImageFeed = () => {
    const [showWidget, setShowWidget] = useState(false)
    if (isMobile) {
        return (
            <div className="lps_list">
                <div className="lps_sm_shape"></div>
                <div class="post_img_block lps_widgets_wrp bg_gray_feed">
                    <a href="javascript:void(0);" onClick={() => setShowWidget(!showWidget)} id="trigger_main_feed">
                        <figure class="feed_galary">
                            <img src={require("assets/images/icons/image_icon.svg")} alt="Add Image" />
                        </figure>
                    </a>
                    <FeedWidget showWidget={showWidget} />
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p class="mb_5">
                                    <span class="text_primary ft_Weight_600">username </span> adipiscing elit, sed do eiusmod tempor incididunt elit
                                </p>
                                <a href="main_feed_full_post_description.html" class="lps_link more_zindex ft_Weight_600">more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div class="lps_list lps_dsk_list">
                <div class="lps_inner_wrp_media">
                    <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                            <img src={require("assets/images/icons/user.jpg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p><span class="text_primary">Jon snow </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post_img_block lps_pink_bg lps_widgets_wrp">
                    <div class="lps_sm_shape"></div>
                    <figure class="feed_galary lps_flx_vm_jc lps_f_vm">
                        <img src={require("assets/images/icons/landscape-image.png")} alt="Add Image" />
                    </figure>
                    <RepostModal />
                    <TaggedModal />
                    <ReportModal />
                </div>
                <FeedWidget />
            </div>
        );
    }

}

export default ImageFeed
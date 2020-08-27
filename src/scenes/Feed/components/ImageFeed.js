import React from 'react';
import FeedWidget from 'scenes/Feed/components/FeedWidget';
import { MobileView, BrowserView, isMobile } from 'react-device-detect';
import RepostModal from './FeedModal/RepostModal';
import TaggedModal from './FeedModal/TaggedModal';
import ReportModal from './FeedModal/ReportModal';


const ImageFeed = () => {
    if (isMobile) {
        return (
            <div className="lps_list">
                <div className="lps_sm_shape"></div>
                <div className="post_img_block lps_pink_bg lps_widgets_wrp">
                    <figure className="feed_galary">
                        <img src={require("assets/images/icons/landscape-image.png")} alt="Add Image" />
                    </figure>
                    <FeedWidget />
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
            </div>)
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
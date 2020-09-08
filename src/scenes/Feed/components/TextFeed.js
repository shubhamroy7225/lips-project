import React, { useState } from 'react';
import FeedWidget from 'scenes/Feed/components/FeedWidget';
import { isMobile } from 'react-device-detect';


const TextFeed = () => {
    const [showWidget, setShowWidget] = useState(false)

    if (isMobile) {
        return (
            <div className="lps_list">
                <div className="lps_sm_shape lps_sm_shape1"></div>
                <div class="lps_inner_wrp bg_gray_feed lps_mt_50" onClick={() => setShowWidget(!showWidget)}>
                    <div className="lps_inner_cont lps_pos_rltv">
                        <article className="lps_art">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
    
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
    
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
    
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam </p>
                            <a href="main_feed_full_text.html" class="lps_link ft_Weight_600" title="more">more</a>
                        </article>
                        <FeedWidget showWidget={showWidget} />
                    </div>
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div className="lps_media_body">
                            <div className="lps_media_body">
                            <p><span class="text_primary ft_Weight_600">username </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
                    <p><span class="text_primary">Jon snow </span></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lps_inner_wrp lps_pink_border lps_widgets_wrp lps_mt_50">
              <div class="lps_sm_shape lps_sm_shape1"></div>
              <div class="lps_inner_cont lps_pos_rltv">
              <article className="lps_art">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
    
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
    
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip.
    
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam </p>
                            <a href="main_feed_full_text.html" className="lps_link" title="more">more</a>
                        </article>
              </div>
            </div>
           <FeedWidget/>
          </div>
        );
    }
    
}

export default TextFeed
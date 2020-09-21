import React from 'react';
import { connect } from 'react-redux';

const AddTags = ({ show, dismiss }) => {
    let style = show ? { display: "block" } : { display: "none" };
    return (
        <div class="hover_bkgr_fricc full_Hvh" id="trigger_submit_tag_popup" style={style}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body post_poup lps_bg_secondary lps_text_white lps_bg_txt_white">
                        <div class="popupCloseButton" onClick={() => dismiss()}>
                            <img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <div class="lps_search">
                            <div class="inner_form">
                                <div class="input_field">
                                    <button class="btn_search" type="button">
                                        <img src={require("assets/images/icons/icn_search_white.svg")} alt="Search" />
                                    </button>
                                    <input class="input_modify" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="hash_tag_block mt_30">
                            <div class="hashtags">
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtags</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                            </div>
                            <div class="hashtags">
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                            </div>
                            <div class="hashtags">
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                            </div>
                            <div class="hashtags">
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="javascript:void(0);" class="theme_btn theme_outline_light">#Hashtag</a>
                            </div>
                            <div class="post_links post_links_undr">
                                <a href="#" class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170">add selected</a>
                                <a href="#" class="lps_link mt_15 btn_block" id="trigger_submit_tag">Can't find what you're looking for</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, null)(AddTags);

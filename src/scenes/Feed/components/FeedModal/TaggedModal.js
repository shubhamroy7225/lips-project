import React from 'react';


const TaggedModal = () => {
    return (
        <div className="hover_bkgr_fricc" id="trigger_hashtag_popup">
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont">
                    <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div class="popup_body">
                        <ul class="lps_btn_grps lps_ul lps_hash_ul">
                            <li>
                                <a href="#" class="theme_btn theme_light text_secondary">#Hashtag</a>
                                <a href="#" class="theme_btn theme_light text_secondary">#Hashtag</a>
                                <a href="#" class="theme_btn theme_light text_secondary">#Hashtag</a>
                            </li>
                            <li>
                                <a href="#" class="theme_btn theme_light text_secondary">#Hashtag</a>
                                <a href="#" class="theme_btn theme_light text_secondary">#Hashtag</a>
                                <a href="#" class="theme_btn theme_light text_secondary">#Hashtag</a>
                            </li>
                        </ul>
                        <a href="#" class="theme_btn theme_outline_primary text_white text_uppercase min_w_170 btnr_25">Wrong tags?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaggedModal
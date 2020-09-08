import React from 'react';


const TaggedModal = () => {
    return (
        <div class="hover_bkgr_fricc" id="trigger_hashtag_popup">
            <div class="modal-dialog-centered">
                <span class="helper"></span>
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} /></div>
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
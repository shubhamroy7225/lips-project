import React from 'react';


const TaggedModal = () => {
    return (
        <div class="hover_bkgr_fricc" id="trigger_hashtag_popup">
            <div class="modal-dialog-centered">
                <span class="helper"></span>
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton"><img src="/images/icons/icn_close_white.png" /></div>
                        <ul class="lps_btn_grps lps_ul lps_hash_ul">
                            <li>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                            </li>
                            <li>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                            </li>
                            <li class="lps_pos_rltv">
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" class="theme_btn theme_outline_light">#Hashtag</a>
                            </li>
                        </ul>
                        <a href="#" class="lps_liks_white">Tagged Improperly?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaggedModal
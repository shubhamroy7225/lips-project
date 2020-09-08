import React from 'react';


const SharedModal = () => {
    return (
        <div class="hover_bkgr_fricc" id="trigger_share_popup">
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div class="popup_body">
                        <ul class="lps_btn_grps lps_ul lps_hash_ul">
                            <li>
                                <a href="#" class="theme_btn theme_outline_light">www.website.com/hfejksalfpdaa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharedModal
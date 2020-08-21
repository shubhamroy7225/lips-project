import React from 'react';


const RepostModal = () => {
    return (
        <div class="hover_bkgr_fricc" id="trigger_popup">
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <ul class="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" class="text_white">Post reposted</a>
                            </li>
                        </ul>
                        <a href="#" class="link_underline link_white">undo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepostModal
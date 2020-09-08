import React from 'react';

const RemoveFeedModal = () => {
    return (
        <div class="hover_bkgr_fricc" id="trigger_delete_popup">
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div class="popup_body">
                        <ul class="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" class="text_white">Remove post from this collection?</a>
                            </li>
                        </ul>
                        <a href="#" class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RemoveFeedModal
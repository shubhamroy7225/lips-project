import React from 'react';


const RepostModal = () => {
    return (<>
        {/* <div className="hover_bkgr_fricc" id="trigger_popup">
            <div className="modal-dialog-centered">
                <div className="popup_cont">
                    <div className="popup_body">
                        <div className="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <ul className="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" className="text_white">Post reposted</a>
                            </li>
                        </ul>
                        <a href="#" className="link_underline link_white">undo</a>
                    </div>
                </div>
            </div>
        </div> */}
        <div class="hover_bkgr_fricc" id="trigger_popup">
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div class="popup_body">
                        <ul class="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" class="text_white">Repost to your account?</a>
                            </li>
                        </ul>
                        <a href="#" class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Repost</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default RepostModal
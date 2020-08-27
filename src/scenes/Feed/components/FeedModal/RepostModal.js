import React from 'react';


const RepostModal = () => {
    return (
        <div className="hover_bkgr_fricc" id="trigger_popup">
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
        </div>
    );
}

export default RepostModal
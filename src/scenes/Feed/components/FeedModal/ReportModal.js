import React from 'react';


const ReportModal = () => {
    return (
        <div className="hover_bkgr_fricc" id="trigger_close_popup">
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont">
                    <div className="popup_body">
                        <div className="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <ul className="lps_btn_grps lps_ul">
                            <li className="lps_title">
                                Don't want to see this?
    </li>
                            <li>
                                <a href="#" className="theme_btn theme_outline_light theme_btn_rds25">Hide This Post</a>
                            </li>
                            <li>
                                <a href="#" className="theme_btn theme_outline_light theme_btn_rds25">Don't Show Me Anything Like This</a>
                            </li>
                            <li>
                                <a href="#" className="theme_btn theme_outline_light theme_btn_rds25">Report</a>
                            </li>
                            <li>
                                <a href="#" className="theme_btn theme_outline_light theme_btn_rds25">Unfollow User</a>
                            </li>
                            <li>
                                <a href="#" className="theme_btn theme_outline_light theme_btn_rds25">Block User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportModal
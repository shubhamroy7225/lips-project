import React from 'react';


const ReportModal = () => {
    return (
        <div class="hover_bkgr_fricc" id="trigger_close_popup">
            <div class="modal-dialog-centered">
                <span class="helper"></span>
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton"><img src="/images/icons/icn_close_white.png" /></div>
                        <ul class="lps_btn_grps lps_ul">
                            <li class="lps_title">
                                Don't want to see this?
    </li>
                            <li>
                                <a href="#" class="theme_btn theme_outline_light theme_btn_rds25">Hide This Post</a>
                            </li>
                            <li>
                                <a href="#" class="theme_btn theme_outline_light theme_btn_rds25">Don't Show Me Anything Like This</a>
                            </li>
                            <li>
                                <a href="#" class="theme_btn theme_outline_light theme_btn_rds25">Report</a>
                            </li>
                            <li>
                                <a href="#" class="theme_btn theme_outline_light theme_btn_rds25">Unfollow User</a>
                            </li>
                            <li>
                                <a href="#" class="theme_btn theme_outline_light theme_btn_rds25">Block User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportModal
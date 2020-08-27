import React from 'react';


const TaggedModal = () => {
    return (
        <div className="hover_bkgr_fricc" id="trigger_hashtag_popup">
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont">
                    <div className="popup_body">
                        <div className="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <ul className="lps_btn_grps lps_ul lps_hash_ul">
                            <li>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                            </li>
                            <li>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                            </li>
                            <li className="lps_pos_rltv">
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                                <a href="#" className="theme_btn theme_outline_light">#Hashtag</a>
                            </li>
                        </ul>
                        <a href="#" className="lps_liks_white">Tagged Improperly?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaggedModal
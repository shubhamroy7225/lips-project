import React from 'react'

const FeedWidget = () => {
    return (
        <ul className="lps_widgets" id="lps_widgets">
            <li className="listed_item">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc" id="trigger_hashtag_close">
                    <img src={require("assets/images/icons/icn_close_white.png")} className="inner_image" alt="Close Icon" />
                </a>
            </li>
            <li className="listed_item lps_pos_rltv">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc" id="trigger_hashtag">
                    <img src={require("assets/images/icons/icn_hashtag_white.png")} className="inner_image" alt="Hashtag Icon" />
                </a>
                <span className="lps_number_badge lps_number_badge_widgets">1</span>
            </li>
            <li className="listed_item">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc">
                    <img src={require("assets/images/icons/icn_share_white.png")} className="inner_image" alt="Share Icon" />
                </a>
            </li>
            <li className="listed_item">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc" id="trigger_popup_fricc">
                    <img src={require("assets/images/icons/icn_repeat_white.png")} className="inner_image" alt="Repeat Icon" />
                </a>
            </li>
            <li className="listed_item">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc icn_hover">
                    <img src={require("assets/images/icons/icn_mouth_white.png")} className="inner_image icn_white" alt="Mouth Icon" />
                    <img src={require("assets/images/icons/icn_lips_active.png")} className="inner_image icn_black" alt="Mouth Icon" />
                </a>
            </li>
        </ul>
    )
}

export default FeedWidget;
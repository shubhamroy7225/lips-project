import React, { useState } from 'react'

const FeedWidget = ({ showWidget }) => {
    let className = !showWidget ? "lps_widgets lps_widgets_none" : "lps_widgets";
    console.log(showWidget);
    return (
        <ul className={className} id="lps_widgets">
            <li class="listed_item">
                <a href="javascript: void(0);" class="trash_icon_wrp circle_image lps_flx_vm_jc" id="trigger_delete">
                    <img src={require("assets/images/icons/icn_trash_white.png")} class="inner_image" alt="Close Icon" />
                </a>
            </li>
            <li className="listed_item">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc" id="trigger_hashtag_close">
                    <img src={require("assets/images/icons/icn_close_white.png")} className="inner_image" alt="Close Icon" />
                </a>
            </li>
            <li className="listed_item lps_pos_rltv">
                <a href="javascript: void(0);" className="circle_image lps_flx_vm_jc" id="trigger_hashtag">
                    <img src={require("assets/images/icons/icn_hashtag_white.png")} className="inner_image" alt="Hashtag Icon" />
                </a>
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
            <li class="listed_item">
                <a href="javascript: void(0);" class="lip_icon_wrp circle_image lps_flx_vm_jc icn_hover_chng">
                    <img src={require("assets/images/icons/icn_lip_white.svg")} class="icn_dfltD" alt="Mouth Icon" />
                    <img src={require("assets/images/icons/icn_lips.png")} class="icn_hvrA" alt="User" />
                </a>
            </li>
        </ul>
    )
}

export default FeedWidget;
import React from 'react'

const FeedWidget = () => {
    return (
        <ul class="lps_widgets" id="lps_widgets">
            <li class="listed_item">
                <a href="javascript: void(0);" class="circle_image lps_flx_vm_jc" id="trigger_hashtag_close">
                    <img src="/images/icons/icn_close_white.png" class="inner_image" alt="Close Icon" />
                </a>
            </li>
            <li class="listed_item lps_pos_rltv">
                <a href="javascript: void(0);" class="circle_image lps_flx_vm_jc" id="trigger_hashtag">
                    <img src="/images/icons/icn_hashtag_white.png" class="inner_image" alt="Hashtag Icon" />
                </a>
                <span class="lps_number_badge lps_number_badge_widgets">1</span>
            </li>
            <li class="listed_item">
                <a href="javascript: void(0);" class="circle_image lps_flx_vm_jc">
                    <img src="/images/icons/icn_share_white.png" class="inner_image" alt="Share Icon" />
                </a>
            </li>
            <li class="listed_item">
                <a href="javascript: void(0);" class="circle_image lps_flx_vm_jc" id="trigger_popup_fricc">
                    <img src="/images/icons/icn_repeat_white.png" class="inner_image" alt="Repeat Icon" />
                </a>
            </li>
            <li class="listed_item">
                <a href="javascript: void(0);" class="circle_image lps_flx_vm_jc icn_hover">
                    <img src="/images/icons/icn_mouth_white.png" class="inner_image icn_white" alt="Mouth Icon" />
                    <img src="/images/icons/icn_lips_active.png" class="inner_image icn_black" alt="Mouth Icon" />
                </a>
            </li>
        </ul>
    )
}

export default FeedWidget;
import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { likeAFeed, unlikeAFeed } from 'redux/actions/feed/action';
import { setFeedModalType, setSelectedFeed } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';

const ToggleListWidget = ({ gridlayoutMode, setGridLayoutMode }) => {

    const toggleState = () => {
        setGridLayoutMode(!gridlayoutMode)
    }

    let className = "horizantal_coll1 icn_hover_chng active"
    if (!gridlayoutMode) {
        className = "horizantal_coll1 icn_hover_chng"
    }

    return (
        <div class="footer-menu-list1 footIndex">
            <a onClick={toggleState} class={className} id="trigger_popup_fricc1">
                <img src={require("assets/images/icons/list.svg")} class="inner_image icn_hvrA" alt="Repeat Icon" />
                <img src={require("assets/images/icons/grid.png")} class="inner_image icn_dfltD boxIcon" alt="Repeat Icon" />
            </a>
        </div>
    )
}

export default ToggleListWidget;
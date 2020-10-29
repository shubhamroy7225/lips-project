import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { likeAFeed, unlikeAFeed } from 'redux/actions/feed/action';
import { setFeedModalType, setSelectedFeed } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';

const ToggleListWidget = ({ gridlayoutMode, setGridLayoutMode }) => {

    const toggleState = () => {
        setGridLayoutMode(!gridlayoutMode)
    }

    let className = "horizantal_coll1 icn_hover_chng"
    debugger;
    if (!gridlayoutMode) {
        className = "horizantal_coll1 icn_hover_chng active"
    }

    return (
        <div class="footer-menu-list1">
            <a onClick={toggleState} class={className} id="trigger_popup_fricc1">
                <img src={require("assets/images/icons/grid.svg")} class="inner_image icn_dfltD" alt="Repeat Icon" />
                <img src={require("assets/images/icons/list.svg")} class="inner_image icn_hvrA" alt="Repeat Icon" />
            </a>
        </div>
    )
}

export default ToggleListWidget;
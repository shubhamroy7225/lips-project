import React, { useEffect, useState } from 'react'
import $ from 'jquery';

const ToggleListWidget = ({ gridlayoutMode, setGridLayoutMode }) => {

    const toggleState = () => {
        setGridLayoutMode(!gridlayoutMode)
    }

    let className = "horizantal_coll1 icn_hover_chng active footer-menu-mobile"
    if (!gridlayoutMode) {
        className = "horizantal_coll1 icn_hover_chng footer-menu-mobile"
    }

    return (
        <div class="footer-menu-list1 footIndex">
            <a onClick={toggleState} class={className} id="trigger_popup_fricc1">
                <img src={require("assets/images/icons/list.png")} class="inner_image icn_hvrA boxIcon" alt="Repeat Icon" />
                <img src={require("assets/images/icons/grid.svg")} class="inner_image icn_dfltD boxIcon" alt="Repeat Icon" />
            </a>
        </div>
    )
}

export default ToggleListWidget;
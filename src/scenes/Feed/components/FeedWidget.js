import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { likeAFeed, unlikeAFeed } from 'redux/actions/feed/action';
import { setFeedModalType, setSelectedFeed } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';

const FeedWidget = ({ user, showWidget, feed }) => {

    const [like, setLike] = useState(feed.liked);

    let className = !showWidget ? "lps_widgets lps_widgets_none" : "lps_widgets";
    useEffect(() => {
        $("#trigger_delete").click(function () {
            $('#trigger_delete_popup').show();
        });

        $("#trigger_hashtag").click(function () {
            $('#trigger_hashtag_popup').show();
        });

        // share popup
        $("#trigger_share").click(function () {
            $('#trigger_share_popup').show();
        });

        // Close popup
        $("#trigger_hashtag_close").click(function () {
            $('#trigger_close_popup').show();
        });

        //share
        $("#trigger_popup_fricc").click(function () {
            $('#trigger_popup').show();
        });

        $('.popupCloseButton').click(function () {
            $('#trigger_hashtag_popup').hide();
            $('#trigger_delete_popup').hide();
            $('#trigger_share_popup').hide();
            $('#trigger_close_popup').hide();
            $('#trigger_popup').hide();
        });

    }, [])

    let isOwner = false
    if (feed && parseInt(feed.user_id) === user.id) {
        isOwner = true
    }

    let likeIconClasses = "lip_icon_wrp circle_image lps_flx_vm_jc icn_hover_chng ";
    if (like) {
        likeIconClasses = likeIconClasses + "active";
    }

    const toggleLike = () => {
        if (like) {
            unlikeAFeed(feed.id);
        } else {
            likeAFeed(feed.id);
        }
        setLike(!like)
    }

    const feedSelectionHandler = (modalType) => {
        setSelectedFeed({ feed });
        setFeedModalType({ modalType });
    }

    return (
        <ul className={className} id="lps_widgets">
            {isOwner && <li class="listed_item">
                <a onClick={() => feedSelectionHandler(FeedModalType.delete)} class="trash_icon_wrp circle_image lps_flx_vm_jc" id="trigger_delete">
                    <img src={require("assets/images/icons/icn_trash_white.png")} class="inner_image" alt="Close Icon" />
                </a>
            </li>}
            {!isOwner && < li className="listed_item">
                <a onClick={() => feedSelectionHandler(FeedModalType.report)} className="circle_image lps_flx_vm_jc" id="trigger_hashtag_close">
                    <img src={require("assets/images/icons/icn_close_white.png")} className="inner_image" alt="Close Icon" />
                </a>
            </li>}
            <li className="listed_item lps_pos_rltv">
                <a onClick={() => feedSelectionHandler(FeedModalType.tag)} className="circle_image lps_flx_vm_jc" id="trigger_hashtag">
                    <img src={require("assets/images/icons/icn_hashtag_white.png")} className="inner_image" alt="Hashtag Icon" />
                </a>
            </li>
            <li className="listed_item">
                <a onClick={() => feedSelectionHandler(FeedModalType.share)} className="circle_image lps_flx_vm_jc" id="trigger_share">
                    <img src={require("assets/images/icons/icn_share_white.png")} className="inner_image" alt="Share Icon" />
                </a>
            </li>
            {!isOwner && <li className="listed_item">
                <a onClick={() => feedSelectionHandler(FeedModalType.repost)} className="circle_image lps_flx_vm_jc" id="trigger_popup_fricc">
                    <img src={require("assets/images/icons/icn_repeat_white.png")} className="inner_image" alt="Repeat Icon" />
                </a>
            </li>}
            <li class="listed_item">
                <a onClick={() => toggleLike()} class={likeIconClasses}>
                    <img src={require("assets/images/icons/icn_lip_white.svg")} class="icn_dfltD" alt="Mouth Icon" />
                    <img src={require("assets/images/icons/icn_lips.png")} class="icn_hvrA" alt="User" />
                </a>
            </li>
        </ul >
    )
}

export default FeedWidget;
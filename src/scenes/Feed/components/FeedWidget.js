import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { likeAFeed, unlikeAFeed } from 'redux/actions/feed/action';
import { setFeedModalType, setSelectedFeed } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';

const FeedWidget = ({ user, showWidget, feed, isReposted }) => {
    const { likable, is_reposted, repostable } = feed;
    let originalPost = feed.type === "repost" ? feed.parent : feed
    const [like, setLike] = useState(feed.type === "repost" ? feed.parent.liked : feed.liked);
    const [likeCount, setLikeCount] = useState(false);
    const likeCountShown = () => {
        setLikeCount(likeCount ? false : true);
    }

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
    if (user) {
        if (feed && parseInt(feed.user_id) === user.id) {
            isOwner = true
        }
    }

    let likeIconClasses = "lip_icon_wrp circle_image lps_flx_vm_jc icn_hover_chng";
    if (like) {
        likeIconClasses = likeIconClasses + " active";
    }

    let repostIconClasses = "repeat_icon_wrp circle_image lps_flx_vm_jc icn_hover_chng";
    if (is_reposted) {
        repostIconClasses = repostIconClasses + " active";
    }

    const toggleLike = () => {
        const feedId = feed.type === "repost" ? feed.parent.id : feed.id
        if (like) {
            unlikeAFeed(feedId);
        } else {
            likeAFeed(feedId);
        }
        setLike(!like)
    }

    const feedSelectionHandler = (modalType) => {
        setSelectedFeed({ feed });
        setFeedModalType({ modalType });
    }
    const checkIsLikable = () => { 
        return user && parseInt(originalPost.user_id) === user.id
    }

    const checkIsRepost = () => {
        return user && user.approval_status === "accepted" && user.privacy_settings !== "private" && feed.repostable
    }

    let listContent = [];
    let reportOption = (
        < li key={1} className="listed_item">
            <a onClick={() => feedSelectionHandler(FeedModalType.report)} className="circle_image lps_flx_vm_jc" id="trigger_hashtag_close">
                <img src={require("assets/images/icons/icn_close_white.png")} className="inner_image" alt="Close Icon" />
            </a>
        </li>);
    let deleteOption = (
        <li key={2} className="listed_item">
            <a onClick={() => feedSelectionHandler(FeedModalType.delete)} className="trash_icon_wrp circle_image lps_flx_vm_jc" id="trigger_delete">
                <img src={require("assets/images/icons/icn_trash_white.png")} className="inner_image" alt="Close Icon" />
            </a>
        </li>);
    let hashtagOptionn = (
        <li key={3} className="listed_item lps_pos_rltv">
            <a onClick={() => feedSelectionHandler(FeedModalType.tag)} className="circle_image lps_flx_vm_jc" id="trigger_hashtag">
                <img src={require("assets/images/icons/icn_hashtag_white.png")} className="inner_image" alt="Hashtag Icon" />
            </a>
        </li>
    );
    let shareOption = (
        <li key={4} className="listed_item">
            <a onClick={() => feedSelectionHandler(FeedModalType.share)} className="circle_image lps_flx_vm_jc" id="trigger_share">
                <img src={require("assets/images/icons/icn_share_white.png")} className="inner_image" alt="Share Icon" />
            </a>
        </li>
    );
    let repostOption = (
        <li key={5} className="listed_item">
            {/* <a onClick={() => feedSelectionHandler(FeedModalType.repost)} className="circle_image lps_flx_vm_jc" id="trigger_popup_fricc">
                <img src={require("assets/images/icons/icn_repeat_white.svg")} className="inner_image" alt="Repeat Icon" />
            </a> */}
            {checkIsRepost() ? 
            <div>
                <a onClick={() => is_reposted ? () => { } : feedSelectionHandler(FeedModalType.repost)}
                    className={repostIconClasses}
                    id="trigger_popup_fricc1">
                    <img src={require("assets/images/icons/refresh.svg")} class="inner_image icn_dfltD" alt="Repeat Icon" />
                    <img src={require("assets/images/icons/refresh_black.svg")} class="inner_image icn_hvrA" alt="Repeat Icon" />
                </a>
            </div> : ""}
        </li>
    );
    let likeOption = (
        <li key={6} className="listed_item">
            {checkIsLikable() ?
                <div>{likeCount ? <span className="countBadge">{(feed.type === "repost" ? feed.parent.likes_count : feed.likes_count)}</span> : ""}
                    <a className={likeIconClasses} onClick={likeCountShown}>
                        <img src={require("assets/images/icons/icn_lip_white.svg")} className="icn_dfltD" alt="Mouth Icon" />
                        {/* <img src={require("assets/images/icons/icn_lip_black.svg")} className="icn_hvrA" alt="User" /> */}
                    </a>
                </div>
                :
                <a onClick={() => toggleLike()} className={likeIconClasses}>
                    <img src={require("assets/images/icons/icn_lip_white.svg")} className="icn_dfltD" alt="Mouth Icon" />
                    <img src={require("assets/images/icons/icn_lip_black.svg")} className="icn_hvrA" alt="User" />
                </a>}
        </li>
    );


    if (user) {
        if (isOwner) {
            if (likable) {
                listContent = [deleteOption, hashtagOptionn, shareOption, likeOption];
            } else {
                listContent = [deleteOption, hashtagOptionn, shareOption];
            }
        } else {
            if (likable) {
                if (isReposted) {
                    listContent = [reportOption, hashtagOptionn, shareOption, likeOption];
                } else {
                    listContent = [reportOption, hashtagOptionn, shareOption, repostOption, likeOption];
                }
            } else {
                if (isReposted) {
                    listContent = [reportOption, hashtagOptionn, shareOption];

                } else {
                    listContent = [reportOption, hashtagOptionn, shareOption, repostOption];
                }
            }

        }
    } else {
        listContent = [hashtagOptionn, shareOption];
    }

    return (
        <ul className={className} id="lps_widgets">
            {listContent}
        </ul >
    )
}

export default FeedWidget;
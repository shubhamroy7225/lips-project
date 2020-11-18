import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import { FeedModalType } from 'utility/constants/constants';
import { toastMsg } from 'utility/utility';
import * as commonService from "utility/utility";

const ReportModal = ({ feed }) => {
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
    }

    let style = { display: "none" }
    if (modalType === FeedModalType.report) {
        if (feed) {
            if (feed.id === selectedFeed.id) {
                style = { display: "block" };
            } else {
                style = { display: "none" };
            }
        } else {
            style = { display: "block" };
        }
    }

    const hideFeed = () => {
        commonService.isDialogOpen.onNext({
            open: true,
            data: {
                title: "Confirm",
                message: "Do you want to hide the post"
            },
            confirmText: "Hide Post",
            onConfirm: () => {
                actions.hideAFeed(selectedFeed);
                closeModal();
                commonService.isDialogOpen.onNext(false);
            },
            onCancel: () => commonService.isDialogOpen.onNext(false)
        });


    }

    const reportFeed = () => {
        actions.reportAFeed(selectedFeed)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("Reported successfully!");
                }
            })
        closeModal();
    }

    const blockAUser = () => {
        actions.blockUser(selectedFeed.user)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("User blocked successfully!");
                }
            })
        closeModal();
    }

    const unfollowAUser = () => {
        actions.unfollowUser(selectedFeed.user)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("User unfollowed!");
                }
            })
        closeModal();
    }

    let isFollowing = selectedFeed && selectedFeed.user.is_following;
    return (
        <div className="hover_bkgr_fricc mobileModal" style={style}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div className="popup_body">
                        <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title">
                                Don't want to see this?
                            </li>
                            <li>
                                <a onClick={hideFeed} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Hide This Post</a>
                            </li>
                            <li>
                                <a onClick={hideFeed} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Hide similar posts</a>
                            </li>
                            <li>
                                <a onClick={reportFeed} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Report</a>
                            </li>
                            {
                                isFollowing &&
                                <li>
                                    <a onClick={unfollowAUser} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Unfollow User</a>
                                </li>
                            }
                            <li>
                                <a onClick={blockAUser} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Block User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportModal
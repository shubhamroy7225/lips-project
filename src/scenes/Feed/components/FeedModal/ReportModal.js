import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import { FeedModalType } from 'utility/constants/constants';
import { toastMsg } from 'utility/utility';


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
        actions.hideAFeed(selectedFeed)
            .then(res => {

            })
        closeModal();
    }

    const reportFeed = () => {
        actions.reportAFeed(selectedFeed)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("reported successfully!");
                }
            })
        closeModal();
    }

    const blockAUser = () => {
        actions.blockUser(selectedFeed.user)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("user blocked successfully!");
                }
            })
        closeModal();
    }

    const unfollowAUser = () => {
        actions.unfollowUser(selectedFeed.user)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("user unfollowed!");
                }
            })
        closeModal();
    }

    return (
        <div className="hover_bkgr_fricc" style={style}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont">
                    <div className="popup_body">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <ul class="lps_btn_grps lps_ul">
                            <li class="lps_title">
                                Don't want to see this?
                        </li>
                            <li>
                                <a onClick={hideFeed} class="theme_btn theme_outline_light theme_btn_rds25 text_uppercase btn_block">Hide This Post</a>
                            </li>
                            <li>
                                <a onClick={hideFeed} class="theme_btn theme_outline_light theme_btn_rds25 text_uppercase btn_block">Don't Show Me Anything Like This</a>
                            </li>
                            <li>
                                <a onClick={reportFeed} class="theme_btn theme_outline_light theme_btn_rds25 text_uppercase btn_block">Report</a>
                            </li>
                            <li>
                                <a onClick={unfollowAUser} class="theme_btn theme_outline_light theme_btn_rds25 text_uppercase btn_block">Unfollow User</a>
                            </li>
                            <li>
                                <a onClick={blockAUser} class="theme_btn theme_outline_light theme_btn_rds25 text_uppercase btn_block">Block User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportModal
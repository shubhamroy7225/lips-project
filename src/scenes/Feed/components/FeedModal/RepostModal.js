import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';
import * as actions from 'redux/actions';
import { toastMsg } from 'utility/utility';
import { useHistory } from 'react-router-dom';

const RepostModal = ({ feed }) => {
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
    const history = useHistory();
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
    }
    let style = { display: "none" }
    if (modalType === FeedModalType.repost) {
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

    const repostFeed = () => {
        let feedId = selectedFeed.id;
        let page = history.location.pathname;
        actions.repostFeed(feedId, page).then(
            res => {
                if (res.data.success) {
                    toastMsg("Reposted successfully!")
                }

            }
        )
    }

    const repostUndoFeed = (feedId) => {
        let id = selectedFeed.id;
        let page = history.location.pathname;
        selectedFeed.is_reposted = false;
        actions.repostUndoFeed(feedId, page, id).then(
            res => {
                toastMsg("Undo successfully!");
            }
        )
        closeModal();
    }

    return (<>
        {selectedFeed ?
            <div class="hover_bkgr_fricc mobileModal" style={style}>
                <div class="modal-dialog-centered">
                    <div class="popup_cont popup-custom-header">
                        <div className="popup_close_header">
                            <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                        </div>
                        {/* <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div> */}
                        <div class="popup_body textBody">
                            <ul class="lps_btn_grps lps_ul mb100">
                                <li>
                                    <a href="#" class="text_white">{selectedFeed.is_reposted ? "Reposted" : "Repost to your account?"}</a>
                                </li>
                            </ul>
                            {selectedFeed.is_reposted ?
                                <a onClick={() => repostUndoFeed(selectedFeed.new_post.id)} class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Undo</a> :
                                <a onClick={repostFeed} class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Repost</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
            : null}
    </>
    );
}

export default RepostModal
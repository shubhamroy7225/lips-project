import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';
import * as actions from 'redux/actions';
import { toastMsg } from 'utility/utility';

const RepostModal = ({ feed }) => {
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
    const [repostButton, setRepostButton] = useState(false);
    const showUndoModal = () => {
        setRepostButton(repostButton ? false : true);
    }
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
        selectedFeed.is_reposted = true
        actions.repostFeed(feedId).then(
            res => {
                toastMsg("Reposted successfully!");
            }
        )
        // closeModal();
    }

    const repostUndoFeed = () => {
        let feedId = selectedFeed.id;
        selectedFeed.is_reposted = false
        actions.repostUndoFeed(feedId).then(
            res => {
                toastMsg("Undo successfully!");
            }
        )
        closeModal();
    }

    return (<>
        <div class="hover_bkgr_fricc mobileModal" style={style}>
            <div class="modal-dialog-centered">
                <div class="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    {/* <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div> */}
                    <div class="popup_body textBody" onClick={showUndoModal}>

                        <ul class="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" class="text_white">{repostButton ? "Reposted" : "Repost to your account?"}</a>
                            </li>
                        </ul>
                        {repostButton ? 
                        <a onClick={repostUndoFeed}  class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Undo</a> :
                        <a onClick={repostFeed} class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Repost</a>    
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default RepostModal
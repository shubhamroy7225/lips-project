import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';
import * as actions from 'redux/actions';

const RepostModal = ({ feed }) => {
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
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
        actions.repostFeed(feedId);
        closeModal();
    }

    return (<>
        <div class="hover_bkgr_fricc" style={style}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    {/* <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div> */}
                    <div class="popup_body">
                        <div class="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                        <ul class="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" class="text_white">Repost to your account?</a>
                            </li>
                        </ul>
                        <a onClick={repostFeed} class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Repost</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default RepostModal
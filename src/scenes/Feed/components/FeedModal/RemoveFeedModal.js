import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';

const RemoveFeedModal = ({ feed }) => {
    //feed param will be passed by desktop layout since the modals are added under feed's DOM - 
    //showing the modal without checking it appears for all the feeds 
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
    }
    let style = { display: "none" }
    if (modalType === FeedModalType.delete) {
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
    return (
        <div class="hover_bkgr_fricc" style={style}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>

                        <ul class="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" class="text_white">Remove post from this collection?</a>
                            </li>
                        </ul>
                        <a href="#" class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RemoveFeedModal
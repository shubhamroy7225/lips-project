import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { deleteFeed } from 'redux/actions';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';

const RemoveFeedModal = ({ feed }) => {
    //feed param will be passed by desktop layout since the modals are added under feed's DOM - 
    //showing the modal without checking it appears for all the feeds 
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
    const [deletedFeed, setDeletedFeed] = useState(false);
    const showdeletedFeedModal = () => {
        setDeletedFeed(deletedFeed ?  false : true);
    }
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

    const removeFeed = () => {
        let feedId = selectedFeed.id;
        deleteFeed(feedId)
        // closeModal();
    }

    return (
        <div className="hover_bkgr_fricc mobileModal" style={style}>
            <div className="modal-dialog-centered">
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    {!deletedFeed ? 
                    <div className="popup_body removeData" onClick={showdeletedFeedModal}>
                        <ul className="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" className="text_white">Delete post?</a>
                            </li>
                        </ul>
                        <a onClick={removeFeed} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Delete</a>
                    </div> :
                    <div className="popup_body removeData">
                    <ul className="lps_btn_grps lps_ul mb100">
                        <li>
                            <a href="#" className="text_white">deleted</a>
                        </li>
                    </ul>
                </div>}
                </div>
            </div>
        </div>
    );
}

export default RemoveFeedModal
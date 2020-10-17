import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';


const SharedModal = ({ feed }) => {
    const { modalType, selectedFeed } = useSelector(state => state.feedReducer);
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
    }

    let style = { display: "none" }
    if (modalType === FeedModalType.share) {
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
                    {/* <div class="popup_close_header">
                        <div class="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div> */}
                    <div class="popup_body">
                        <div class="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>

                        <ul class="lps_btn_grps lps_ul lps_hash_ul">
                            <li>
                                <span onClick={() =>  navigator.clipboard.writeText(`${window.location.origin}/${selectedFeed && selectedFeed.id}`)} className="theme_btn theme_outline_light">{window.location.origin}/{selectedFeed && selectedFeed.id}</span>
                                <p className="copyPara">Click to copy</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharedModal
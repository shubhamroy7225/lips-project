import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';
import * as actions from 'redux/actions';
import { toastMsg } from 'utility/utility';

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
        selectedFeed.is_reposted = true
        actions.repostFeed(feedId).then(
            res => {
                toastMsg("Reposted successfully!");
            }
        )
        closeModal();
    }

    return (<>
        <div className="hover_bkgr_fricc mobileModal" style={style}>
            <div className="modal-dialog-centered">
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    {/* <div className="popup_close_header">
                        <div className="popupCloseButton"><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div> */}
                    <div className="popup_body textBody">

                        <ul className="lps_btn_grps lps_ul mb100">
                            <li>
                                <a href="#" className="text_white">Repost to your account?</a>
                            </li>
                        </ul>
                        <a onClick={repostFeed} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_150">Repost</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default RepostModal
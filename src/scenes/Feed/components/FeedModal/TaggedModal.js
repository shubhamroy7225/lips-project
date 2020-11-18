import React from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import { FeedModalType } from 'utility/constants/constants';


const TaggedModal = ({ feed }) => {
    const { modalType, selectedFeed } = useSelector(state => {
        return state.feedReducer
    });
    const hashtags = selectedFeed ? selectedFeed.hashtagPosts : [];

    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
    }

    let style = { display: "none" }
    if (modalType === FeedModalType.tag) {
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


    let hashTagsContent = hashtags.map((ele, index) => <button key={index} className="theme_btn theme_light text_secondary">{ele.hashtag_name}</button>)
    return (
        <div className="hover_bkgr_fricc mobileModal" style={style}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div className="popup_body">
                        <ul className="lps_btn_grps lps_ul lps_hash_ul">
                            <li>
                                {hashTagsContent.length ? hashTagsContent : <p className="text_white">No hashtag's added</p>}
                            </li>
                        </ul>
                        {/* <a href="#" className="theme_btn theme_outline_primary text_white text_uppercase min_w_170 btnr_25">Wrong tags?</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaggedModal
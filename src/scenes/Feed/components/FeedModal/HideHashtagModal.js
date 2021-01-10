import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import { FeedModalType } from 'utility/constants/constants';
import { toastMsg } from 'utility/utility';

const HideHashtagModal = ( props ) => {
    const [selectTags, setSelectTags] = useState([]);
    const toggleHashTag = (tag) => {
      if (selectTags.includes(tag)) {
        selectTags.splice(selectTags.findIndex(e => e === tag), 1);
        setSelectTags([...selectTags]);
      }
      else setSelectTags([...selectTags, tag]);
    };
    const {showhashTags} = useSelector(store => store.feedReducer);
    
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
    }

    const checkModalOpen = () => {
        return props.hideHashtagModal ? "block" : "none";
    }

    return (
        <div className="hover_bkgr_fricc mobileModal" style={{ display: checkModalOpen() }}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div className="popup_body">
                        <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title lps_title_size">
                                "Select tags you don't want to see"
                            </li>
                            <li>
                            {showhashTags && showhashTags.map((tag, index) =>
                            <button key={index} className="theme_btn theme_secondary text_white">{tag}</button>
                            )}
                            </li>
                            <li>
                                <a class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Block Selected</a>
                            </li>
                            <li>
                                <a class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Block All Tags</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HideHashtagModal

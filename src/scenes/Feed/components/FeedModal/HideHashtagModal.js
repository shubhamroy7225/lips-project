import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import { FeedModalType } from 'utility/constants/constants';
import { toastMsg } from 'utility/utility';
import {Link} from 'react-router-dom';
import { routes } from 'utility/constants/constants';

const HideHashtagModal = ( props ) => {
    const [selectTags, setSelectTags] = useState([]);
    const [showBlockHashtag, setShowBlockHashtag] = useState(false);
    const openBlockHashtagModal = () => {
        setShowBlockHashtag(!showBlockHashtag);
        addHideTags();
    }
    const [loaded, setLoaded] = useState(false);
    const toggleHashTag = (tag) => {
      if (selectTags.includes(tag)) {
        selectTags.splice(selectTags.findIndex(e => e === tag), 1);
        setSelectTags([...selectTags]);
      }
      else setSelectTags([...selectTags, tag]);
    };
    const {selectedFeed, hideHashtag} = useSelector(store => store.feedReducer);
    const hashtags = selectedFeed ? selectedFeed.hashtagPosts : [];
    useEffect(() => {
        if (!hideHashtag.length && !loaded) {
          setLoaded(true)
          actions.getUserHashTags();
        }
    }, []);
    
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
        if(props.hideHashtagModal){
            props.toggleHideHashtagModal(false);
            setShowBlockHashtag(false);
        }
    }

    const checkModalOpen = () => {
        return props.hideHashtagModal ? "block" : "none";
    }

    const addHideTags = () => {
        if(selectTags.length){  
            actions
              .setAvoidTags({ hashtags: { hide: selectTags } })
              .then((res) => {
                if (res) return true;
              });
            }
        };

    return (
        <div>
        <div className="hover_bkgr_fricc mobileModal" style={{ display: checkModalOpen() }}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    <div className="popup_body">
                        {!showBlockHashtag ? 
                        <div className="lpsWH100">
                        <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title lps_title_size">
                                Select tags you don't want to see
                            </li>
                            <li class="lps_title lps_title_size">
                            {hashtags && hashtags.map((tag, index) =>
                            <button key={index} className={`themeOutlineLight ${selectTags.includes(tag.hashtag_name) ? "active" : ""}`} onClick={() => toggleHashTag(tag.hashtag_name)}>{tag.hashtag_name}</button>
                            )}
                            </li>
                            <li>
                                <a onClick={openBlockHashtagModal} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white" >Block Selected</a>
                            </li>
                            <li>
                                <a onClick={openBlockHashtagModal} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white" >Block All Tags</a>
                            </li>
                            <li>
                                <Link to={routes.FEED_SETTING} class="report_link" >feed settings</Link>
                            </li>

                        </ul></div> : 
                        <div className="flexColumnBtw">
                        <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title lps_title_size">
                                You won't see this anymore
                            </li>
                            <li>
                            {selectTags && selectTags.map((tag, index) =>
                            <button key={index} className="themeOutlineLight" >{tag}</button>
                            )}
                            </li>
                        </ul>
                        <div className="lps_bottom_para">
                                <p>you can change this in your <Link className="report_link" to={routes.FEED_SETTING}>feed settings</Link></p>
                            </div>
                        </div>

                      }

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default HideHashtagModal

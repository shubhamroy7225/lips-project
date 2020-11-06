import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as feedActions from 'redux/actions/feed/action';

import AddSuggestedTag from "./AddSuggestedTag";

const AddTags = ({ setShowLipsInfo, count, show, dismiss, selectedHashTags, setSelectedHashTags, hashTags }) => {
    const style = show ? { display: "block" } : { display: "none" };
    const [openSuggestedTagModel, setSuggestedTagModel] = useState(false);
    const [filteredHashtags, setFilteredHashtags] = useState(hashTags);
    const [searchText, setSearchText] = useState('');
    const [filterParams, setFilteredParams] = useState({page: 1, limit: 10});

    useEffect(() => {
        validateHashtags();
    }, []);

    useEffect(() => {
        setFilteredHashtags(hashTags);
        return () => {
            setSearchText("")
        }
    }, [hashTags]);

    const validateHashtags = () => {
        if (!hashTags || hashTags.length === 0) {
            feedActions.getAllHashTags();
        }
    }

    const onHashtagSelectionnHandler = (hashtag) => {
        let isExistingHashtag = selectedHashTags.filter(ele => ele.name === hashtag.name).length > 0;
        if (isExistingHashtag) {
            let filteredArray = selectedHashTags.filter(ele => ele.name !== hashtag.name);
            setSelectedHashTags([...filteredArray]);
        } else {
            let updatedHashtags = [...selectedHashTags, hashtag];
            setSelectedHashTags(updatedHashtags);
        }
    }

    const handInputChange = (e) => {
        let searchText = e.target.value;
        setSearchText(searchText);
        if (searchText.length > 0) {
            let filteredHashtags = hashTags.filter(ele => {
                return ele.name.toLowerCase().includes(searchText)
            })
            setFilteredHashtags(filteredHashtags);
        } else {
            setFilteredHashtags(hashTags)
        }
    }

    const loadMore = () => {
        let tempSearch = {...filterParams};
        tempSearch.page +=1;
        setFilteredParams(tempSearch);
        feedActions.getAllHashTags({...tempSearch});
    };

    return (
        <>{
            openSuggestedTagModel ? <AddSuggestedTag dismiss={dismiss} setShowLipsInfo={setShowLipsInfo} setSuggestedTagModel={setSuggestedTagModel}/> :
                <div className="hover_bkgr_fricc full_Hvh removePointer removeScroll" id="trigger_submit_tag_popup" style={style}>
                    <div className="modal-dialog-centered">
                        <div className="popup_cont">
                            <div className="popup_body post_poup lps_bg_secondary lps_text_white lps_bg_txt_white">
                                <div className="popupCloseButton" onClick={() => dismiss()}>
                                    <img src={require("assets/images/icons/icn_close_white.png")} />
                                </div>
                                <div className="lps_search">
                                    <div className="inner_form">
                                        <div className="input_field">
                                            <button className="btn_search" type="button">
                                                <img src={require("assets/images/icons/icn_search_white.svg")} alt="Search" />
                                            </button>
                                            <input className="input_modify tagInput" type="text" value={searchText} onChange={handInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="hash_tag_block mt_30">
                                    <div className="hashtags weightAnchor">
                                        {
                                            filteredHashtags.map((ele, index) => {
                                                if (selectedHashTags.includes(ele)) {
                                                    return <a className="theme_btn theme_outline_light active"
                                                              key={index}
                                                              onClick={() => onHashtagSelectionnHandler(ele)}>{ele.name}</a>
                                                } else {
                                                    return <a className="theme_btn theme_outline_light"
                                                              key={index}
                                                              onClick={() => onHashtagSelectionnHandler(ele)}>{ele.name}</a>
                                                }

                                            })
                                        }
                                    </div>
                                    <li className="mt_15">
                                        {
                                            count > hashTags.length ?
                                                <button onClick={loadMore} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">
                                                    View more</button> : ""
                                        }
                                    </li>
                                </div>
                                <div className="post_links post_links_undr">
                                    <a onClick={() => dismiss()} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170">add selected</a>
                                    <span onClick={() => setSuggestedTagModel(true)} className="lps_link mt_15 btn_block textDecor cursor-pointer" id="trigger_submit_tag">Can't find what you're looking for ?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }</>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    hashTags: state.feedReducer.hashTags,
    count: parseInt(state.feedReducer.count)
});

export default connect(mapStateToProps, null)(AddTags);

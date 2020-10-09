import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as feedActions from 'redux/actions/feed/action';

import AddSuggestedTag from "./AddSuggestedTag";

const AddTags = ({ show, dismiss, selectedHashTags, setSelectedHashTags, hashTags }) => {
    const style = show ? { display: "block" } : { display: "none" };
    const [openSuggestedTagModel, setSuggestedTagModel] = useState(false);
    const [filteredHashtags, setFilteredHashtags] = useState(hashTags);
    const [searchText, setSearchText] = useState('');

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

    return (
        <>{
            openSuggestedTagModel ? <AddSuggestedTag setSuggestedTagModel={setSuggestedTagModel}/> :
                <div class="hover_bkgr_fricc full_Hvh" id="trigger_submit_tag_popup" style={style}>
                    <div class="modal-dialog-centered">
                        <div class="popup_cont">
                            <div class="popup_body post_poup lps_bg_secondary lps_text_white lps_bg_txt_white">
                                <div class="popupCloseButton" onClick={() => dismiss()}>
                                    <img src={require("assets/images/icons/icn_close_white.png")} />
                                </div>
                                <div class="lps_search">
                                    <div class="inner_form">
                                        <div class="input_field">
                                            <button class="btn_search" type="button">
                                                <img src={require("assets/images/icons/icn_search_white.svg")} alt="Search" />
                                            </button>
                                            <input class="input_modify" type="text" value={searchText} onChange={handInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="hash_tag_block mt_30">
                                    <div class="hashtags">
                                        {
                                            filteredHashtags.map((ele, index) => {
                                                if (selectedHashTags.includes(ele)) {
                                                    return <a class="theme_btn theme_outline_light active"
                                                              key={index}
                                                              onClick={() => onHashtagSelectionnHandler(ele)}>{ele.name}</a>
                                                } else {
                                                    return <a class="theme_btn theme_outline_light"
                                                              key={index}
                                                              onClick={() => onHashtagSelectionnHandler(ele)}>{ele.name}</a>
                                                }

                                            })
                                        }
                                    </div>
                                </div>
                                <div class="post_links post_links_undr">
                                    <a onClick={() => dismiss()} class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170">add selected</a>
                                    <span onClick={() => setSuggestedTagModel(true)} class="lps_link mt_15 btn_block" id="trigger_submit_tag">Can't find what you're looking for</span>
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
    hashTags: state.feedReducer.hashTags
});

export default connect(mapStateToProps, null)(AddTags);

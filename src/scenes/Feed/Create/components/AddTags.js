import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as feedActions from 'redux/actions/feed/action';

const AddTags = (props) => {
    const style = props.show ? { display: "block" } : { display: "none" };
    const [selectedHashtags, setSelectedHashtags] = useState([]);

    useEffect(() => {
        validateHashtags();
    }, []);

    const validateHashtags = () => {
        if (!props.hashTags || props.hashTags.length === 0) {
            feedActions.getAllHashTags();
        }
    }

    const onHashtagSelectionnHandler = (hashtag) => {
        let isExistingHashtag = selectedHashtags.filter(ele => ele.name === hashtag.name).length > 0;
        if (isExistingHashtag) {
            let filteredArray = selectedHashtags.filter(ele => ele.name !== hashtag.name);
            setSelectedHashtags([...filteredArray]);
        } else {
            let updatedHashtags = [...selectedHashtags, hashtag];
            setSelectedHashtags(updatedHashtags);
        }
    }

    return (
        <div class="hover_bkgr_fricc full_Hvh" id="trigger_submit_tag_popup" style={style}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body post_poup lps_bg_secondary lps_text_white lps_bg_txt_white">
                        <div class="popupCloseButton" onClick={() => props.dismiss()}>
                            <img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <div class="lps_search">
                            <div class="inner_form">
                                <div class="input_field">
                                    <button class="btn_search" type="button">
                                        <img src={require("assets/images/icons/icn_search_white.svg")} alt="Search" />
                                    </button>
                                    <input class="input_modify" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="hash_tag_block mt_30">
                            <div class="hashtags">
                                {
                                    props.hashTags.map((ele, index) => {
                                        if (selectedHashtags.includes(ele)) {
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
                            <a href="#" class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170">add selected</a>
                            <a href="#" class="lps_link mt_15 btn_block" id="trigger_submit_tag">Can't find what you're looking for</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    hashTags: state.feedReducer.hashTags
});

export default connect(mapStateToProps, null)(AddTags);

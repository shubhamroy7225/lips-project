import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FeedType } from 'utility/constants/constants';
import * as commonService from "utility/utility";
import {useSelector} from 'react-redux';

const CreateTextTab = ({ handleToggleTags, toggleAddTags, toggleLipsInfo, selectedHashTags, submitFeedRequest }) => {
    const history = useHistory();
    const [likable, setLikable] = useState(true);
    const [repostable, setRepostable] = useState(true);
    const [caption, setCaption] = useState("");
    const captionCharCount = 10000;
    const [inputCount, setInputCount] = useState(0)
    const {  user } = useSelector(state => state.authReducer);

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputCount(value.length)
        setCaption(e.target.value)
    }

    const handleCheckBoxChange = (e) => {
        if (e.target.value === "true") {
            setLikable(false);
        } else {
            setLikable(true);
        }
    }

    const handleRepostBoxChange = (e) => {
        if (e.target.value === "true") {
          setRepostable(false);
        } else {
          setRepostable(true);
        }
      };

    const createPost = () => {
        if (caption.length > 0 && caption.length <= captionCharCount) {
            // create a request to post it to server 
            var request = {}
            var postRequest = {}
            postRequest["type"] = FeedType.text;
            postRequest["description"] = caption;
            postRequest["likable"] = likable;
            postRequest["repostable"] = repostable;
            request["post"] = postRequest;
            if (selectedHashTags.length > 0) {
                request["hashTags"] = selectedHashTags.map(ele => ele.name);
            }
            //send it to parent
            submitFeedRequest(request)
        } else {
            if (caption.length > captionCharCount) {
                commonService.toastInfo("You have exceeded the maximum character limit!")
            } else {
                commonService.toastInfo("Please add the text to proceed!")
            }

        }
    }

    let charCountStyle = {
    }

    if (inputCount > captionCharCount) {
        charCountStyle = {
            color: "red"
        }
    }

    return (
        <div class={`content ${history.location.hash === "#textTab" ? "active" : ""}`} id="textTab1">
            <div class="tab_inn_con">
                <div class="about_gallery">
                    <div class="textRange_wrp">
                        <textarea onChange={handleInputChange} value={caption} class="textarea_modifier textarea-font-family" rows="18"></textarea>
                        <span class="textRange"><span style={charCountStyle}>{inputCount}</span>/{captionCharCount}</span>
                    </div>
                    <p class="mb_0 mt_15">What's going on in this post? Be sure to credit others - @mention feature coming soon. For now give a shout out!</p>
                </div>
                <div class="hash_tag_block">
                    <div class="hashtags">
                        {
                            selectedHashTags.map((ele, index) => {
                                return <a class="theme_btn theme_secondary" onClick={e => handleToggleTags(ele)}>{ele.name}</a>
                            })
                        }
                    </div>
                    <div class="hashtag mt_15">
                        <a onClick={() => toggleAddTags()} class="theme_btn theme_outline_primary text_secondary ft_Weight_500 btnr_25 min_w_170 text_uppercase trigger_add_bodyClass" id="trigger_add_tags">
                            add tags
                    </a>
                        <a onClick={() => toggleLipsInfo()} class="add_tag1 avtar_25 trigger_add_bodyClass" id="trigger_lips_tag">
                            <img src={require("assets/images/icons/icn_question_active.png")} alt="Add Icon" class="add_icn_outline" />
                        </a>
                    </div>
                </div>
                <div class="tag_product_con border_white_box">
                    <div class="d_inline mb_0">
                        <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
                            <h6 class="sm_title">others can <img src={require("assets/images/icons/liked_post.svg")} alt="kiss" /> </h6>
                            <label class="lps_switch">
                                <input type="checkbox"
                                    name="ownContent"
                                    defaultChecked
                                    value={likable}
                                    onChange={handleCheckBoxChange} /><span class="lps_int_slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="tag_product_con border_white_box">
                    <div class="d_inline mb_0">
                        <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
                            <h6 class="sm_title">others can <img src={require("assets/images/icons/refresh_black.svg")} alt="Repost" /> </h6>
                            {user && user.privacy_settings === "public" ? 
                                <label class="lps_switch">
                                    <input
                                    type="checkbox"
                                    name="ownContent"
                                    defaultChecked
                                    value={repostable}
                                    onChange={handleRepostBoxChange}
                                    
                                    />
                                    <span class="lps_int_slider round"></span>
                                </label> :
                                <label class="lps_switch">
                                <input
                                    type="checkbox"
                                    name="ownContent"
                                    disabled
                                    
                                />
                                <span class="lps_int_slider round lps_disable_checkbox"></span>
                                </label> }
                        </div>
                    </div>
                </div>
                <div className= "hashtag mt_15">
                    {user && user.privacy_settings === "public" ? 
                    <p class="mb_0 mt_5 ml_5">
                    Please keep in mind! If you delete this post, any reposts will remain. This is a feature we are working on. You can always contact us if you need all reposts removed. 
                    </p> : <p class="mb_0 mt_5 ml_5">Your account needs to be public to enable reposting.</p> }
                </div>
                <div class="post_block mb20 overlap_menu">
                    <a onClick={createPost} class="circle">Post</a>
                    <a href="/" class="cancel_post">cancel</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTextTab;
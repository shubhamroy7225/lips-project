import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import { FeedType } from 'utility/constants/constants';
import * as commonService from "utility/utility";

const CreateTextTab = ({ toggleAddTags, toggleLipsInfo, selectedHashTags, submitFeedRequest }) => {
    const history = useHistory();
    const [likable, setLikable] = useState(true);
    const [caption, setCaption] = useState("");
    const captionCharCount = 10000;
    const [inputCount, setInputCount] = useState(captionCharCount)

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputCount(captionCharCount - value.length)
        setCaption(e.target.value)
    }

    const handleCheckBoxChange = (e) => {
        if (e.target.value === "true") {
            setLikable(false);
        } else {
            setLikable(true);
        }
    }

    const createPost = () => {
        if (caption.length > 0) {
            // create a request to post it to server 
            var request = {}
            var postRequest = {}
            postRequest["type"] = FeedType.text;
            postRequest["description"] = caption;
            postRequest["likable"] = likable;
            request["post"] = postRequest;
            if (selectedHashTags.length > 0) {
                request["hashTags"] = selectedHashTags.map(ele => ele.name);
            }
            //send it to parent
            submitFeedRequest(request)
        } else {
            commonService.toastInfo("Please add the text to proceed!")
        }
    }

    return (
        <div class={`content ${history.location.hash  === "#textTab" ? "active" : ""}`} id="textTab1">
            <div class="tab_inn_con">
                <div class="about_gallery">
                    <div class="textRange_wrp">
                        <textarea onChange={handleInputChange} value={caption} class="textarea_modifier" rows="18"></textarea>
                        <span class="textRange">0/{inputCount}</span>
                    </div>
                    <p class="mb_0 mt_15">What's going on in this post? Be sure to @credit others.</p>
                </div>
                <div class="hash_tag_block">
                    <div class="hashtags">
                        {
                            selectedHashTags.map((ele, index) => {
                                return <a class="theme_btn theme_secondary">{ele.name}</a>
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
                            <h6 class="sm_title">Others Can <img src={require("assets/images/icons/icn_mouth.png")} alt="kiss" /> </h6>
                            <label class="lps_switch">
                                <input type="checkbox"
                                    name="ownContent"
                                    defaultChecked
                                    value={likable}
                                    onChange={handleCheckBoxChange} />                                <span class="lps_int_slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="post_block mb20 overlap_menu">
                    <a onClick={createPost} class="circle">Post</a>
                    <a href="/" class="cancel_post">Cancel</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTextTab;
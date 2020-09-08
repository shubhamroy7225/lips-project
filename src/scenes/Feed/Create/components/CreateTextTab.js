import React from 'react';

const CreateTextTab = ({ toggleAddTags, toggleLipsInfo }) => {
    return (
        <div class="content" id="textTab">
            <div class="tab_inn_con">
                <div class="about_gallery">
                    <div class="textRange_wrp">
                        <textarea class="textarea_modifier" rows="18"></textarea>
                        <span class="textRange">0/10000</span>
                    </div>
                    <p class="mb_0 mt_15">What's going on in this post? Be sure to @credit others.</p>
                </div>
                <div class="hash_tag_block">
                    <div class="hashtag">
                        <a href="javascript:void(0);" onClick={() => toggleAddTags()} class="theme_btn theme_outline_primary text_secondary ft_Weight_500 btnr_25 min_w_170 text_uppercase">
                            add tags
                        </a>
                        <a href="javascript:void(0);" onClick={() => toggleLipsInfo()} class="add_tag1 avtar_25">
                            <img src={require("assets/images/icons/icn_question_active.png")} alt="Add Icon" class="add_icn_outline" />
                        </a>
                    </div>
                </div>
                <div class="tag_product_con border_white_box">
                    <div class="d_inline mb_0">
                        <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
                            <h6 class="sm_title">Others Can <img src={require("assets/images/icons/icn_mouth.png")} alt="kiss" /> </h6>
                            <label class="lps_switch">
                                <input type="checkbox" checked />
                                <span class="lps_int_slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="post_block mb20">
                    <a href="/" class="circle">Post</a>
                    <a href="/" class="cancel_post">Cancel</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTextTab;
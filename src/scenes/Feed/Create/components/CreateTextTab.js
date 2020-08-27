import React from 'react';

const CreateTextTab = (props) => {
    return (
        <div class="content" id="textTab">
            <div class="tab_inn_con">
                <div class="about_gallery">
                    <textarea class="textarea_modifier" rows="15" cols="50" placeholder="Say something..."></textarea>
                    <p class="mb_0">What's going on in this post? Be sure to @credit others.</p>
                </div>
                <div class="hash_tag_block">
                    <div class="hashtag">
                        <a href="javascript:void(0);" class="hashtag_btn">#Hashtag</a>
                        <a href="javascript:void(0);" class="hashtag_btn">#Hashtag</a>
                        <a href="javascript:void(0);" class="hashtag_btn">#Hashtag</a>
                        <a href="javascript:void(0);" class="add_tag avtar_25" id="trigger_add">
                            <img src={require("assets/images/icons/icn_question_white.png")} alt="Add Icon"
                                class="add_icn_outline" />
                        </a>
                    </div>
                    <div class="hashtag">
                        <h6 class="sm_title">CW?</h6>
                        <a href="javascript:void(0);" class="add_tag" id="trigger_add">
                            <img src={require("assets/images/icons/plus_pink.png")} alt="Add Icon" class="add_icn" /></a>
                    </div>
                </div>
                <div class="tag_product_con">
                    <div class="d_inline">
                        <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
                            <h6 class="sm_title">Others Can <img src={require("assets/images/icons/icn_mouth.png")} alt="kiss" /></h6>
                            <label class="lps_switch">
                                <input type="checkbox" checked />
                                <span class="lps_int_slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="d_inline">
                        <div class="grid_left">
                            <h6 class="sm_title">Delete this Automatically After</h6>
                        </div>
                        <div class="select_box">
                            <select name="cars" id="cars" class="cst_select">
                                <option value="volvo" selected>never</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="post_block mb20">
                    <a href="my_user_profile.html" class="circle">Post</a>
                    <a href="javascript:void(0);" class="cancel_post">Cancel</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTextTab;
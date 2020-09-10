import React, { useState } from 'react'

const ApprovalForm = ({ moveToNextStep, cancel }) => {
    return (
        <div class="lps_container lps_bg_secondary lps_text_white lps_inner_cont ">
            <div class="lps_approval add_product_con ">
                <article class="text_center lps_logo_center">
                    <a class="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" class="header__logo" />
                    </a>
                </article>
                <form>
                    <div class="form_group_modify">
                        <label class="label_modify">3 post example <br />(Images example of visuals or text that you'd post)</label>
                        <div class="add_product_grid">
                            <div class="add_product_box">
                                <img src={require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box">
                                <img src={require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box">
                                <img src={require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                        </div>
                    </div>
                    <div class="form_group_modify">
                        <label class="label_modify">Alternativelly link to your website / portfolio</label>
                        <input class="input_modify" type="text" />
                    </div>
                    <div class="form_group_modify">
                        <label class="label_modify">Why do you want to post on Lips?</label>
                        <textarea class="input_modify txtarea_modify" rows="5"></textarea>
                    </div>
                    <div class="form_group_modify">
                        <label class="lps_cont_check">This Is My Own Original Content
                    <input type="checkbox" checked />
                            <span class="lps_Checkmark"></span>
                        </label>
                    </div>
                </form>
                <div class="post_block mb20 mt_15">
                    <a onClick={() => moveToNextStep()} class="circle">Submit</a>
                    <a onClick={() => cancel()} class="cancel_post link_underline">Cancel</a>
                </div>
            </div>
        </div>
    )
}

export default ApprovalForm;
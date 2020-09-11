import React, { useState } from 'react'

const StartApproval = ({ moveToNextStep }) => {
    return (
        <div class="lps_container lps_bg_secondary lps_text_white">
            <div class="lps_inner_wrp full_scr on_boarding_wrp_spwn border_0">
                <article class="lps_art mt45">
                    <h3>Want to post your original work?</h3>
                    <p class="mt45">
                        In order to keep everyone in the Lips Community safe, we just ask that you tell us-yes, we are real human - a little bit about yourself & read through our <a href="#" class="lps_link link_underline">Community guidelines</a>.
              </p>
                    <p>
                        Once apporved, you can post anything from cat pics to high art - we're not here to judge. as long as it's your original content.
              </p>
                </article>
                <div class="plans_wrp mt45 text_center">
                    <a onClick={() => moveToNextStep()} class="theme_btn theme_primary btn_block btn_r25 text_uppercase lps_mb15 W-50P">Get Approved</a>
                </div>
            </div>
        </div>
    );
}

export default StartApproval;
import React, { useState } from 'react'

const ApprovalCompleted = ({ moveToNextStep }) => {
    return (
        <div class="lps_container lps_bg_secondary lps_text_white">
            <div class="lps_px15 on_boarding_wrp_spwn on_boarding_wrp border_0">
                <div class="lps_form_wrp on_boarding_wrp_spwn border_0">
                    <article class="lps_art lps_art_white">
                        <h3 class="mb45">Your application is submited </h3>
                        <p>
                            We will get back to you in the following 24 hours
                    </p>
                    </article>
                    <div class="pos_wrp onboarding_btm">
                        <a onClick={() => moveToNextStep()} class="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P">Back to lips</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCompleted;
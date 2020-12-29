import React from 'react'

const ApprovalCompleted = ({ moveToNextStep }) => {
    return (
        <div class="lps_container lps_bg_secondary lps_text_white">
            <div class="lps_px15 on_boarding_wrp_spwn on_boarding_wrp border_0">
                <div class="lps_form_wrp on_boarding_wrp_spwn border_0">
                    <article class="lps_art lps_art_white">
                        <h3 class="mb45">EEE! We can’t wait to check out your stuff.</h3>
                        <p>Our team personally looks at each approval application, but try our best to notify you within 24 hours - so keep an eye on your notifications!</p>
                    </article>
                    <div class="pos_wrp onboarding_btm">
                        <a onClick={() => moveToNextStep()} class="approve_btn_bck theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio">Back to lips</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCompleted;
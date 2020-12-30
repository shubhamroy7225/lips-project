import React from 'react'
import {Link} from 'react-router-dom'
import { routes } from 'utility/constants/constants';

const AccessCodeCompleted = () => {
    return (
        <div id="wrap" class="mt_0 lps_bg_secondary">
            <div class="lps_container lps_bg_secondary lps_text_white">
                <div class="lps_inner_wrp full_scr on_boarding_wrp_spwn border_0">
                    <article class="lps_art lps_art_white lps_heading">
                        <p>Our team has already seen your work and is inspired by your vision, so we are streamlining you through the approval process! We trust that you will arrive on Lips with the shared intention of making it a space where we all can express ourselves openly & honestly. </p>
                    </article>
                    <div class="plans_wrp text_center plans_mobile_top">
                        <Link to={routes.CREATE} class="theme_btn theme_primary btn_block btn_r25 text_uppercase lps_mb15 W-50P desktopVersio approve_btn_bck">create my first post</Link>
                        <Link to={routes.ROOT} class="about_link">later</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccessCodeCompleted;
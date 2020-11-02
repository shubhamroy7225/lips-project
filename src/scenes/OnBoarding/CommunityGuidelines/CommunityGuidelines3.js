import React from "react";
import {Link} from "react-router-dom";
import { routes } from "utility/constants/constants";
export default ({setGuidelineState}) => {
  return (
      <div id="wrap" class="mt_0 lps_bg_secondary">
        <div class="lps_container">
          <div class="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div class="lps_form_wrp on_boarding_wrp_spwn border_0 comuNitiInner">
              <article class="lps_art">
              <p className="text_primary">3/6</p>
                <h3 class="text_white mb45"> Find Your Purpose </h3>
                <p>Use Lips as a space to figure out what it is you are meant to do and who it is you are meant to be.</p>
                <p>   Today, creators are fortunate that we can make a living doing what we love. Lips encourages you to clarify, articulate, and act on that with our support along the way.
                </p>
              </article>
              
                <div class="onboarding_btm lps_flx_vm_jsbtwn">
                <Link to={routes.COMMUNITY_GUIDELINES} onClick={() => setGuidelineState(2)} className="link_underline lps_link ft_Weight_500">Back</Link>
                  <button onClick={() => setGuidelineState(4)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        }
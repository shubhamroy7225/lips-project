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
                <p className="text_primary">2/6</p>
                <h3 class="text_white mb45"> grow </h3>
                <p>We believe Lips can be a place for us all to develop in body, mind, and spirit, as well as financially and creatively. To foster that, we ask that you help us to create a judgement-free zone.Only if we accept each other at our truest and most vulnerable, will we be able to grow into our highest selves. </p>
                <p>Lips has a zero-tolerance policy for hate speech, harassment, abuse, or discrimination. Lips operates on the philosophy sometimes referred to the paradox of tolerance:"If a society is tolerant without limit, its ability to be tolerant is eventually seized or destroyed by the intolerant."</p>
                <p>
                  Hate speech is not free speech, as it forces others into silence in order to survive.
                </p>
              </article>
              
                <div class="onboarding_btm lps_flx_vm_jsbtwn">
                  <Link to={routes.COMMUNITY_GUIDELINES} onClick={() => setGuidelineState(1)} className="link_underline lps_link ft_Weight_500">back</Link>
                  <button onClick={() => setGuidelineState(3)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
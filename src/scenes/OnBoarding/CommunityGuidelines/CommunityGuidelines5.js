import React from "react";
import {Link} from "react-router-dom";
import { routes } from "utility/constants/constants";
export default ({setGuidelineState}) => {
  return (
      <div id="wrap" class="mt_0 lps_bg_secondary container-register-flow">
        <div class="lps_container">
          <div class="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div class="lps_form_wrp on_boarding_wrp_spwn border_0 comuNitiInner">
              <article class="lps_art">
              <p className="text_primary">5/6</p>
                <h3 class="text_white mb45"> empathize </h3>
                <p>Sometimes complex emotions and sentiments can be lost in the digital world, but trust that everyone enters this space with good intentions. You may not agree with everything you see, and that’s okay. Have empathy and learn from perspectives that are different from your own. Be comfortable with being uncomfortable. </p>
                <p>Consider this is a “brave” space. </p>
                <p>
                  For leagal reasons, we cananot allow pronography on the site. However, we understand the line between pronographyand arotic art /creative expression is blurry, and approach this distinction with an intersectional, and open-minded perspective.
                </p>
                <p>
                  You will always be allowed to promote leagl sex work, as well as link to outside websites to showcase content we are unable to host here.
                </p>
              </article>
              
                <div class="onboarding_btm lps_flx_vm_jsbtwn">
                <Link to={routes.COMMUNITY_GUIDELINES} onClick={() => setGuidelineState(4)} className="link_underline lps_link ft_Weight_500">back</Link>
                  <button onClick={() => setGuidelineState(6)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        }
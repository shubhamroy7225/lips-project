import React from "react";
import {Link} from "react-router-dom";
export default ({setGuidelineState}) => {
  return (
      <div id="wrap" class="mt_0 lps_bg_secondary">
        <div class="lps_container">
          <div class="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div class="lps_form_wrp on_boarding_wrp_spwn border_0 comuNitiInner">
              <article class="lps_art">
              <p className="text_primary">4/6</p>
                <h3 class="text_white mb45"> Respect </h3>
                <p>Treat everyone with dignity and kindness. If someone (yourself/another) has said something hurtful, use it as a learning and teaching experience. </p>
                <p>Respect people’s boundaries by using the Lips hashtag system to thoroughly label your content so that everyone has control over what they see.</p>
              </article>
              
                <div class="onboarding_btm lps_flx_vm_jsbtwn">
                <Link to="/community-guidelines" onClick={() => setGuidelineState(3)} className="link_underline lps_link ft_Weight_500">Back</Link>
                  <button onClick={() => setGuidelineState(5)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        }
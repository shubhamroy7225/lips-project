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
              <p className="text_primary">4/6</p>
                <h3 class="text_white mb45"> respect </h3>
                <p>Treat everyone with dignity and kindness.Respect people’s boundaries by using the Lips hashtag system to thoroughly label your content so that everyone has control over what they see.</p>
                <p>
                  Also, please have patience for this app and our team! We are a small team who has built this app using very limited resources-this app is a continual work in progress.Know that our team always has our community's best interests in mind and vow to maintain a dialogue with you as a grow.
                </p>
                <p>
                  With your support and feedback, we are excited at the possibilities of the future, and ask for some leeway in the present &#60;3
                </p>
              </article>
              
                <div class="onboarding_btm lps_flx_vm_jsbtwn">
                <Link to={routes.COMMUNITY_GUIDELINES} onClick={() => setGuidelineState(3)} className="link_underline lps_link ft_Weight_500">back</Link>
                  <button onClick={() => setGuidelineState(5)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        }
import React from "react";
import {Link} from "react-router-dom";
import { routes } from "utility/constants/constants";
export default ({isSetting, setGuidelineState}) => {
  return (
      <div id="wrap" class="mt_0 lps_bg_secondary">
        <div class="lps_container">
          <div class="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div class="lps_form_wrp on_boarding_wrp_spwn border_0 comuNitiInner">
              <article class="lps_art">
              <p className="text_primary">6/6</p>
                <h3 class="text_white mb45"> Pursue Your Vision for a Better World </h3>
                <p>We have built Lips to elevate, support, and raise the voices of marginalized creators but the rest is up to YOU: the beautiful humans on this app. </p>
                <p>Use this platform to fight injustice, to foster diversity, to create more beauty, and to manifest the future you believe in. </p>
              </article>
              
                <div class="onboarding_btm lps_flx_vm_jsbtwn">
                <Link to={routes.COMMUNITY_GUIDELINES} onClick={() => setGuidelineState(5)} className="link_underline lps_link ft_Weight_500">Back</Link>
                <Link to={isSetting ? routes.SETTING : routes.ACCOUNT_PRIVACY} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase finish_btn">Finish</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        }
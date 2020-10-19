import React from "react";
import {Link} from "react-router-dom";
export default ({isSetting}) => {
  return (
      <div id="wrap" class="mt_0">
        <div class="lps_container">
          <div class="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div class="lps_form_wrp on_boarding_wrp_spwn border_0">
              <article class="lps_art">
                <h3 class="text_white mb45"><span class="text_primary">10</span> Community guidelines </h3>
                <p>You can find the detailed version in settings</p>
              </article>
              <div class="count_wrp text_center">
                <h1 class="text_primary display-1">10</h1>
                <h4>Lorem ipsum dolor sit amet, cons<br/>
                  entelur adipiscing elit, sed do.
                </h4>
                </div>
                <div class="onboarding_btm text_right">
                  <Link to={isSetting ? "/settings" : "/account-privacy"} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Finish</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        }
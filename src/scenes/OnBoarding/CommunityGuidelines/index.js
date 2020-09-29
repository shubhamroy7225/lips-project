import React from "react";
import {Link} from "react-router-dom";
export default ({isSetting}) => {
  return (
          <div id="wrap" className="mt_0">
            <div className="lps_container mt_0">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
                <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
                  <article className="lps_art">
                    <h3 className="text_white mb45"><span className="text_primary">10</span> Community guidelines </h3>
                    <p>You can find the detailed version in settings</p>
                  </article>
                  <div className="count_wrp text_center">
                    <h1 className="text_primary display-1">1</h1>
                    <h4>Lorem ipsum dolor sit amet, cons<br/>
                      entelur adipiscing elit, sed do.
                    </h4>
                    </div>
                    <div className="onboarding_btm lps_flx_vm_jsbtwn">
                      <Link to={isSetting ? "/settings" : "/account-privacy"} className="link_underline lps_link ft_Weight_500">Skip</Link>
                      <Link to={isSetting ? "/settings" : "/account-privacy"} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
};
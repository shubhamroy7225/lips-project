import React from "react";
import {Link} from "react-router-dom";
import TermsAndCondition from "../components/TermsAndConditions";
export default () => {
  return (
          <div id="wrap" className="mt_0">
            <div className="top_text_wrp lps_bg_secondary">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi. Please reach out if ....
              </p>
              <div className="text_center">
                <Link to="/contact_user" className="theme_btn theme_outline_primary btn_r25 text_uppercase text_white min_w_170">Contact us</Link>
              </div>
            </div>
            <div className="lps_container lps_terms_con_wrps bg_grayCCC">
            <TermsAndCondition></TermsAndCondition>
            <div className="lps_fixed_btm lps_bg_secondary">
              <Link to="/community-guidelines" className="theme_btn theme_outline_primary text_white btn_r25 btn_block text_uppercase">Agree & Continue</Link>
            </div>
            </div>
          </div>
  )
}
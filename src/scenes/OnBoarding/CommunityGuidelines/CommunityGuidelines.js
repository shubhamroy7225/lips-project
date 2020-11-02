import React from "react";
import {Link} from "react-router-dom";
import { routes } from "utility/constants/constants";
export default ({isSetting, setGuidelineState}) => {
  return (
      <div id="wrap" className="mt_0 lps_bg_secondary">
        <div className="lps_container mt_0">
          <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div className="lps_form_wrp on_boarding_wrp_spwn border_0 comuNiti">
              <article className="lps_art">
                
                <h3 className="text_white mb45"> Welcome to Lips! </h3>
                <p>Lips is a safe space that centers marginalized communities including women, non-binary folks, People of Color, and the LGBTQIA+ community. As artists and creators ourselves, we came together to build Lips because we were fed up with the censorship and harassment we faced on mainstream platforms. On Lips, we hope you feel welcomed, recognized, and valued.</p>
                <p>These 6 guiding principles are based on inclusivity and reflect our community values rather than those of the heterosexual cis white male-dominated tech industry we aim to resist. Please read them carefully and uphold them all while you occupy this digital space.</p>
                
                </article>
              {/* <div className="count_wrp text_center">
                <h1 className="text_primary display-1">1</h1>
                <h4>Lorem ipsum dolor sit amet, cons<br/>
                  entelur adipiscing elit, sed do.
                </h4>
              </div> */}
              <div className="onboarding_btm lps_flx_vm_jsbtwn">
                <button onClick={() => setGuidelineState(1)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">COMMUNITY GUIDELINES</button>
                <Link to={isSetting ? routes.SETTING : routes.ACCOUNT_PRIVACY} className="link_underline lps_link ft_Weight_500">Skip</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


import React from "react";
import {Link} from "react-router-dom";
export default ({setGuidelineState}) => {
  return (
      <div id="wrap" className="mt_0 lps_bg_secondary">
        <div className="lps_container mt_0">
          <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary lps_text_white on_boarding_wrp">
            <div className="lps_form_wrp on_boarding_wrp_spwn border_0 comuNitiInner">
              <article className="lps_art">
                <p className="text_primary">1/6</p>
                <h3 className="text_white mb45"> Create </h3>
                <p>Lips originated as a print zine for “open and honest expression,” and this remains our calling.</p>
                <p>Share your original art, poetry, selfies, or anything at all, and feel free to use the reblog feature to share other’s work. Please don’t plagiarize or call another’s work  your own.</p>
                <p>We welcome your experimental, unconfined, weirdest creations, and invite you to explore with curiosity and vivid imagination.</p>
              </article>
              {/* <div className="count_wrp text_center">
                <h1 className="text_primary display-1">1</h1>
                <h4>Lorem ipsum dolor sit amet, cons<br/>
                  entelur adipiscing elit, sed do.
                </h4>
              </div> */}
              <div className="onboarding_btm lps_flx_vm_jsbtwn">
                <Link to="/community-guidelines" onClick={() => setGuidelineState(0)} className="link_underline lps_link ft_Weight_500">Back</Link>
                <button onClick={() => setGuidelineState(2)} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


import React from "react";
import {useDispatch} from "react-redux";
import { Link, useHistory } from "react-router-dom";

import * as AuthActions from "redux/actions";

export default () => {
   const history = useHistory();
   const disptach = useDispatch();
   const completeOnBoard = () => {
      disptach(AuthActions.completeOnBordingFlow());
      history.push("/");
   };
  return (
  <div className="limiter">
  <div className="container-login100">
    <div id="wrap" className="mt_0">
        <div className="lps_container">
          <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
              <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
                  <article className="lps_art lps_art_white">
                    <h4 className="mb30">Want a customized experience</h4>
                    <p className="mb30">
                      An auto-populated feed may include content that's not for everyone such as nudity or profanity.
                    </p>
                    <p>
                      Can't decide now? You can always adjust your Feed settings later.
                    </p>
                  </article>
                  <div className="pos_wrp onboarding_btm">
                    <Link to="/favorite-tags" className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase lps_mb10">Customize feed</Link>
                    <button onClick={completeOnBoard} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase">Auto-Generate</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>
  )
}
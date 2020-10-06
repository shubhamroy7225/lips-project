import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as AuthActions from "redux/actions";
import { useSelector } from "react-redux";

export default () => {
   const history = useHistory();
   const completeOnBoard = () => {
      AuthActions.completeOnBordingFlow();
      history.push("/main-feeds");
   };

   const { token, userToken } = useSelector(state => state.authReducer);

  return (
    <div id="wrap" className="mt_0">
        <div className="lps_container mt_0">
          <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
              <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
                  <article className="lps_art lps_art_white">
                    <h3 className="mb30">Want a customized experience</h3>
                    <h5 className="mb30 ft_Weight_400">
                      An auto-populated feed may include content that's not for everyone such as nudity or profanity.
                    </h5>
                    <h5 className="ft_Weight_400">
                      Can't decide now? You can always adjust your Feed settings later.
                    </h5>
                  </article>
                  <div className="pos_wrp onboarding_btm">
                    {token ? 
                    <Link to="/favorite-tags" className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase lps_mb10 W-50P">Customize feed</Link>
                    : null }
                    <button onClick={completeOnBoard} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase W-50P">Auto-Generate</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}
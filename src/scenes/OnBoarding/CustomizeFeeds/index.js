import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as AuthActions from "redux/actions";
import { routes } from "utility/constants/constants";
import * as commonService from "utility/utility";

export default () => {
  const history = useHistory();

  const loading = () => {
    commonService.isLoading.onNext(true)
    const timer = setTimeout(() => {
      commonService.isLoading.onNext(false)
      completeOnBoard()
    }, 3000);
    return () => clearTimeout(timer);
  }
  const completeOnBoard = () => {
    AuthActions.completeOnBordingFlow();
    history.push(routes.MAIN_FEED);
  };

  return (
      <div id="wrap" className="mt_0 lps_bg_secondary onboardingBackArrowWrp">
        <div className="topSubHeader">
            <button className="popupCloseButton popupCloseButtonLeft backBtnHash" onClick={history.goBack}><img src={require("assets/images/icons/icn_left_arrow_white.png")} /></button>
        </div>
        <div className="lps_container mt_0">
          <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
            <div className="lps_form_wrp on_boarding_wrp_spwn on_boarding_flow_wrp_strech border_0 commonWidth on_boarding_top">
              <article className="lps_art lps_art_white">
                <h3 className="mb30">start from scratch or let us fill your feed</h3>
                <h5 className="mb30 ft_Weight_400">
                  An auto-populated feed may include content that's not for everyone such as nudity or profanity.
                  {/* The lips app may include content that's not for everyone such as nudity or profanity. can't decide now?You can always adjust your feed settings later */}
                </h5>
                <h5 className="ft_Weight_400">
                  Can't decide now? You can always adjust your feed settings later.
                </h5>
              </article>
              <div className="pos_wrp onboarding_btm onboarding_flow_bttom">
                <Link to={routes.SELECT_FAVORITE_TAGS} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase lps_mb10 desktopVersio">I'll build my feed</Link>
                <button onClick={loading} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase desktopVersio">auto generate</button>
                {/* <Link onClick={()=> history.goBack()} className="link_underline lps_link back-button link_tag">Go Back</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
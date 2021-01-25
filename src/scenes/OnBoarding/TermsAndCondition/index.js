import React from "react";
import { Link, useHistory } from "react-router-dom";
import { routes } from "utility/constants/constants";

import TermsAndCondition from "../components/TermsAndConditions";

export default ({
  setTermsAndConditionPageActive,
  isRegister,
  handleSubmit,
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (isRegister) setTermsAndConditionPageActive(false);
    else history.push(routes.SETTING);
  };

  return (
    <div id="wrap" className="mt_0">
      <div className="lps_header_link lps_flx_vm lps_px15 mb25">
        <button className=" btn-transparent" onClick={handleClick}>
          <img
            src={require("assets/images/icons/icn_left_arrow.png")}
            alt="Icon Arrow"
            className="lps_header_img"
          />
        </button>
        <span className="lp_left_auto text_black ft_Weight_500">
          Privacy Policy
        </span>
      </div>

      
        <div className="lps_container lps_terms_con_wrps bg_grayCCC">
          <TermsAndCondition></TermsAndCondition>
          <div className="lps_fixed_btm lps_bg_gray text-align-center">
            <button
              onClick={handleSubmit}
              className="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase W-100P desktopVersio"
            >
              Agree &amp; Continue
            </button>
          </div>
        </div>
      </div>
    
  );
};

import React from "react";
import { Link, useHistory } from "react-router-dom";

import TermsAndCondition from "../components/TermsAndConditions";

export default ({
  setTermsAndConditionPageActive,
  isRegister,
  handleSubmit,
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (isRegister) setTermsAndConditionPageActive(false);
    else history.push("/settings");
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
          Terms &amp; Conditions
        </span>
      </div>

      <div id="wrap" className="mt_0">
        <div className="top_text_wrp lps_bg_secondary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
            eiusmod tempor incidi. Please reach out if ....
          </p>
          <div className="text_center">
            <Link
              to="/contact_user"
              className="theme_btn theme_outline_primary btn_r25 text_uppercase text_white min_w_170"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="lps_container lps_terms_con_wrps bg_grayCCC">
          <TermsAndCondition></TermsAndCondition>
          <div className="lps_fixed_btm lps_bg_secondary">
            <button
              onClick={handleSubmit}
              className="theme_btn theme_outline_primary text_white btn_r25 btn_block text_uppercase"
            >
              Agree & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

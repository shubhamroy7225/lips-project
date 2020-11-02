import React from "react";
import TermsAndCondition from "../OnBoarding/components/TermsAndConditions";
import {Link} from "react-router-dom";
import { routes } from "utility/constants/constants";
export default () => (
    <div id="wrap" className="mt_0">
      <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to={routes.SETTING}>
        <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
        <span className="lp_left_auto text_black ft_Weight_500">Terms &amp; Conditions</span>
      </Link>
  <div className="lps_container lps_terms_con_wrps bg_grayCCC">
      <TermsAndCondition></TermsAndCondition>
      </div>
    </div>)
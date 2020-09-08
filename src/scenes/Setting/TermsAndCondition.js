import React from "react";
import TermsAndCondition from "../OnBoarding/TermsAndCondition";
import {Link} from "react-router-dom";
export default () => (
    <div id="wrap" className="mt_0">
      <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
        <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
        <span className="lp_left_auto text_black">My Account</span>
      </Link>
      <TermsAndCondition></TermsAndCondition>
    </div>)
import React from "react";
import { Link } from "react-router-dom"
export default () => {
  return (
    <div className="limiter">
       <div className="container-login100">
          <div id="wrap" className="mt_0">
             <div className="lps_container">
                <div className="lps_flx_vm_jc lps_bg_txt_white on_boarding_wrp">
                   <div className="lps_form_wrp on_boarding_wrp_spwn">
                      <article className="lps_art lps_art_white">
                         <h4 className="mb30">Some things are not for everybody</h4>
                         <p>
                            Mark the ones you don't want to see and we will do our best to provide tag-based warnings.
                         </p>
                      </article>
                      <ul className="lps_btn_grps lps_ul lps_hash_ul">
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                         </li>
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                         </li>
                         <li className="lps_pos_rltv">
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                         </li>
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light">#Hashtag</Link>
                         </li>
                      </ul>
                      <div className="pos_wrp onboarding_btm">
                         <Link to="/" className="theme_btn theme_light btn_block theme_btn_rds25 text_uppercase">Browse</Link>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
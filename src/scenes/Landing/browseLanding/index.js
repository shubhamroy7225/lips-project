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
                         <h4 className="mb30">Want a customized experience</h4>
                         <p className="mb30">
                            An auto-populated feed may include content that's not for everyone such as nudity or profanity.
                         </p>
                         <p>
                            Can't decide now? You can always adjust your Feed settings later.
                         </p>
                      </article>
                      <div className="pos_wrp onboarding_btm">
                         <Link to="/browse-feeds" className="theme_btn theme_light btn_block theme_btn_rds25 text_uppercase lps_mb10">Customize</Link>
                         <Link to="/" className="theme_btn theme_light btn_block theme_btn_rds25 text_uppercase">Auto Generate</Link>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
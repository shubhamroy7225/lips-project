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
                         <h4 className="mb30">You decide what's personal for you (not the algorithm)</h4>
                         <p>
                            Begin by choosing a few things you'd like to see more of.
                         </p>
                      </article>
                      <ul className="lps_btn_grps lps_ul lps_hash_ul">
                         <li>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                         </li>
                         <li>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                         </li>
                         <li className="lps_pos_rltv">
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                         </li>
                         <li>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                         </li>
                         <li>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                         </li>
                         <li className="lps_pos_rltv">
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                            <button className="theme_btn theme_outline_light">#Hashtag</button>
                         </li>
                      </ul>
                      <div className="pos_wrp onboarding_btm">
                         <Link to="/provide-feeds-tags" className="theme_btn theme_light btn_block theme_btn_rds25 text_uppercase">Continue</Link>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
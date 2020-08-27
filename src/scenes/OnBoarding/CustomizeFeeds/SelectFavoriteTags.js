import React, {useState} from "react";
import { Link } from "react-router-dom";
export default () => {
const [selectTags, setSelectTags] = useState([]);
  return (
    <div className="limiter">
       <div className="container-login100">
          <div id="wrap" className="mt_0">
             <div className="lps_container">
                <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
                   <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
                      <article className="lps_art lps_art_white">
                         <h4 className="mb30">You decide what's personal for you (not the algorithm)</h4>
                         <p>
                            Begin by choosing a few things you'd like to see more of.
                         </p>
                      </article>
                      <ul className="lps_btn_grps lps_ul lps_hash_ul">
                         <li>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                         </li>
                         <li>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                         </li>
                         <li classNameName="lps_pos_rltv">
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                            <button className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</button>
                         </li>
                         <li className="mt_15">
                            <Link to="#" className="theme_btn theme_outline_primary text_white min_w_150 theme_btn_rds25 text_uppercase">View more</Link>
                          </li>
                      </ul>
                      <div className="pos_wrp onboarding_btm">
                         <Link to="/avoid-tags" className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase">
                         Continue</Link>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as AuthActions from "redux/actions";
export default () => {
  const history = useHistory();
  const disptach = useDispatch();
  const [selectTags, setSelectTags] = useState([]);
  const completeOnBoard = () => {
    disptach(AuthActions.completeOnBordingFlow());
    history.push("/");
  };
  return (
          <div id="wrap" className="mt_0">
             <div className="lps_container mt_0">
                <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
                   <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
                      <article className="lps_art lps_art_white">
                         <h3 className="mb30">Some things are not for everybody</h3>
                         <h5 className="ft_Weight_400">
                            Mark the ones you don't want to see and we will do our best to provide tag-based warnings.
                         </h5>
                      </article>
                      <ul className="lps_btn_grps lps_ul lps_hash_ul">
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                         </li>
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                         </li>
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                         </li>
                         <li>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                            <Link to="#" className="theme_btn theme_outline_light" onClick={() => setSelectTags([...selectTags, "selected"])}>#Hashtag</Link>
                         </li>
                         <li className="mt_15">
                            <Link to="#" className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">
                            View more</Link>
                         </li>
                      </ul>
                      <div className="pos_wrp onboarding_btm">
                         <button onClick={completeOnBoard} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase">Browse</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
  )
}
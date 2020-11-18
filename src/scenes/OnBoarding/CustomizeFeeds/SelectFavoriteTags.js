import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as actions from "redux/actions";
import { routes } from "utility/constants/constants";

import HashTags from "../components/hashTags";

export default () => {
  const history = useHistory();
  const {user} = useSelector(store => store.authReducer);
  const [selectTags, setSelectTags] = useState([]);
  const showhashTags = [];
  const addFavoriteTags = () => {
   if(selectTags.length){
    if (user) actions.setFavoriteTags({hashtags: {show: selectTags}}).then(res => {
      if(res) history.push(routes.SELECT_AVOID_TAGS)
    });
    else actions.setFavoriteAvoidTagsJustBrowse({hashtags: {show: selectTags}}).then(res => {
      if(res) history.push(routes.SELECT_AVOID_TAGS)
    })}
  else{
    history.push(routes.SELECT_AVOID_TAGS)
  }    
  };

  return (
          <div id="wrap" className="mt_0 lps_bg_secondary">
             <div className="lps_container mt_0">
                <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
                   <div className="lps_form_wrp on_boarding_wrp_spwn border_0 commonWidth">
                      <article className="lps_art lps_art_white">
                         <h3>We think you (not an algorithm) should have control of what you see in the Lips app. </h3>
                         {/* <h4 className="mb30">(not the algorithm)</h4> */}
                         <h5 className="ft_Weight_400">
                            Begin by choosing a few things you'd like to see more of.
                         </h5>
                      </article>
                     <HashTags setSelectTags={setSelectTags} selectTags={selectTags} showhashTags={showhashTags}/>
                      <div className="pos_wrp onboarding_btm">
                         <button onClick={addFavoriteTags} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase desktopVersio">
                         Continue</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
  )
}
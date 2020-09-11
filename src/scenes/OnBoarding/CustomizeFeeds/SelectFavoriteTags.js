import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as actions from "redux/actions";

export default () => {
  const history = useHistory();

  const {hashTags} = useSelector(store => store.feedReducer);

  const [selectTags, setSelectTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      actions.getAllHashTags()
    }
  }, []);

  const toggleHashTag = (tag) => {
    if (selectTags.includes(tag.name)) {
      selectTags.splice(selectTags.findIndex(e => e === tag.name), 1);
      setSelectTags([...selectTags]);
    }
    else setSelectTags([...selectTags, tag.name]);
  };

  const addFavoriteTags = () => {
    actions.setFavoriteAvoidTags({hashtags: {show: selectTags}}).then(res => {
      if(res) history.push("/avoid-tags")
    });
  };

  return (
          <div id="wrap" className="mt_0">
             <div className="lps_container mt_0">
                <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
                   <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
                      <article className="lps_art lps_art_white">
                         <h3>You decide what's personal for you</h3>
                         <h4 className="mb30">(not the algorithm)</h4>
                         <h5 className="ft_Weight_400">
                            Begin by choosing a few things you'd like to see more of.
                         </h5>
                      </article>
                      <ul className="lps_btn_grps lps_ul lps_hash_ul lips-hash-tags">
                        <li>
                        {hashTags.map((tag, index) =>
                                  <button key={index} className={`theme_btn theme_outline_light ${selectTags.includes(tag.name) ? "active" : ""}`} onClick={() => toggleHashTag(tag)}>{tag.name}</button>
                        )}
                        </li>
                      </ul>
                      <div className="pos_wrp onboarding_btm">
                         <button onClick={addFavoriteTags} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase">
                         Continue</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
  )
}
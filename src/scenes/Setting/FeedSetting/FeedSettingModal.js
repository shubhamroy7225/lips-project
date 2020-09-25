import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import * as actions from "redux/actions";

const FeedSettingModal = ({setParentLoaded, setEditTag, editTag, existingTags}) => {
    const history = useHistory();
   const {hashTags} = useSelector(store => store.feedReducer);
   const [loaded, setLoaded] = useState(false);
   const [selectTags, setSelectTags] = useState([]);
   const [removedTags, setRemovedTags] = useState([]);

   const toggleHashTag = (tag) => {
    if (existingTags.includes(tag.name)) {
      if (removedTags.includes(tag.name)) {
        removedTags.splice(removedTags.findIndex(e => e === tag.name), 1);
        setRemovedTags([...removedTags]);
      }
      else setRemovedTags([tag.name, ...removedTags])
    }
    else if (selectTags.includes(tag.name)) {
      selectTags.splice(selectTags.findIndex(e => e === tag.name), 1);
      setSelectTags([...selectTags]);
    }
    else setSelectTags([...selectTags, tag.name]);
  };
  

   useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      actions.getAllHashTags()
    }
  }, [loaded]);

  const showFavoriteTags = () => {
    actions.setFavoriteAvoidTags({hashtags: {
      [editTag]: selectTags,
      remove: removedTags
    }}).then(res => {
      setParentLoaded(false);
      setEditTag(null);
    });
  };

  return (
    <>
        <div class="hover_bkgr_fricc hover_fullS" id="trigger_addMore_popup" style={{display: "block"}}>
            <div class="modal-dialog-centered">
                <div class="popup_cont lps_text_white">
                    <div class="popupCloseButton">
                        <Link to="/settings/feed-setting" className="nav-link not_line">
                            <img src={require("assets/images/icons/icn_close_white.png")} alt="Icon Search"/>
                        </Link>
                    </div>
                    <div class="VspcBtwn">
                    <div class="lps_hash_tags_wrp hash_tag_block hash_tag_links">
                        <div class="lps_search">
                        <div class="inner_form mt_0">
                            <div class="input_field">
                            <button class="btn_search" type="button">
                                <img src={require("assets/images/icons/icn_search_white.svg")} alt="Icon Search"/>
                            </button>
                            <input class="input_modify" type="text"/>
                            </div>
                        </div>
                        </div>
                        <div class="hashtag">
                        <ul className="lps_btn_grps lps_ul lps_hash_ul lips-hash-tags">
                                 <li>
                                 {hashTags.map((tag, index) =>
                                  <button key={index} className={`theme_btn theme_outline_light ${(!removedTags.includes(tag.name) && existingTags.includes(tag.name)) || selectTags.includes(tag.name) ? "active" : ""}`} onClick={() => toggleHashTag(tag)}>{tag.name}</button>
                                 )}
                                    
                                 </li>
                              </ul>
                        </div>
                    </div>
                    <div class="plans_wrp">
                        <a onClick={showFavoriteTags} class="theme_btn theme_outline_primary text_white btn_r25 text_uppercase min_w_170 W-50P">add selected</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
   
    </>
  );
}
export default FeedSettingModal
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import * as actions from "redux/actions";

const FeedSettingModal = ({setParentLoaded, setEditTag, editTag, existingTags}) => {
   const {hashTags, count} = useSelector(store => store.feedReducer);
   const [loaded, setLoaded] = useState(false);
   const [selectTags, setSelectTags] = useState([]);
   const [removedTags, setRemovedTags] = useState([]);
   const [search, setSearch] = useState({
      page: 1, limit: 10,
     name: ""
   });

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
    if (!loaded && !hashTags.length) {
      setLoaded(true);
      actions.getAllHashTags(search);
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

  const handleChange = (e) => {
    let tempSearch = {...search};
    tempSearch.page=1;
    setSearch(tempSearch);
    actions.filterHashTags(tempSearch)
  };
  const loadMore = () => {
    let tempSearch = {...search};
    tempSearch.page +=1;
    setSearch(tempSearch);
    actions.getAllHashTags(tempSearch)
  };

  return (
    <>
        <div class="hover_bkgr_fricc full_Hvh" id="trigger_add_popup" style={{display: "block"}}>
      <div class="modal-dialog-centered">
        <div class="popup_cont">
          <div class="popup_body post_poup lps_bg_secondary lps_text_white">
            <div class="popupCloseButton">
            <Link to="/settings/feed-setting" onClick={e => setEditTag(null)} className="nav-link not_line">
              <img src={require("assets/images/icons/icn_close_white.png")}/></Link></div>
            <div class="lps_search">
              <div class="inner_form">
                <div class="input_field">
                  <button class="btn_search" type="button" onClick={e => handleChange(e)}>
                    <img src={require("assets/images/icons/icn_search_white.svg")} alt="Search"/>
                  </button>
                  <input class="input_modify" type="text" value={search.name} onChange={e => setSearch({...search, name: e.target.value})}/>
                </div>
              </div>
            </div>
            <div class="hash_tag_block mt_30">
              <div class="hashtags">
              {hashTags.map((tag, index) =>
                            <button key={index} className={`theme_btn theme_outline_light ${(!removedTags.includes(tag.name) && existingTags.includes(tag.name)) || selectTags.includes(tag.name) ? "active" : ""}`} onClick={() => toggleHashTag(tag)}>{tag.name}</button>
                           )}
              </div>
            </div>
            <div class="hashtag">
                        {
                          count > hashTags.length ?
                          <button onClick={e => loadMore()} class="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">View more</button>
                          : ""
                        }
                        
                      </div>
            <div class="post_links post_links_undr">
              <a onClick={showFavoriteTags} class="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170">add selected</a>
              <a href="#" class="lps_link mt_15 btn_block" id="trigger_submit_tag">Can't find what you're looking for</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
}
export default FeedSettingModal
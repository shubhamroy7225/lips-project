import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import * as actions from "redux/actions";
const hashtag = ({setEditTag, showhashTags, hideHashtag}) => {
  return (
    <>
      <li className="list-group-item">
         <div className="lps_user_info lps_accnt_links my_10">
            <h5 className="ft_Weight_500 mb_5">Thing you're seeing more of </h5>
            <p className="lps_md_para">Click to unselect or browse for more tags to add</p>
         </div>
         <div className="lps_hash_tags_wrp hash_tag_block hash_tag_links lps_user_info">
            <div className="hashtag">
               <ul className="lps_btn_grps lps_ul lps_hash_ul lips-hash-tags">
                  <li>
                     {showhashTags.map((tag, index) =>
                     <button key={index} className="theme_btn theme_secondary text_white">{tag}</button>
                     )}
                  </li>
               </ul>
            </div>
            <div className="hashtag my_10">
               <button onClick={e => setEditTag("show")} class="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase min_w_170" id="trigger_addMore">
               Add more</button>
            </div>
         </div>
      </li>
      <li className="list-group-item">
         <div className="lps_user_info lps_accnt_links my_10">
            <h5 className="ft_Weight_500 mb_5">Things you're not seeing</h5>
            <p className="lps_md_para">Click to unselect or browse for more tags to add</p>
         </div>
         <div className="lps_hash_tags_wrp hash_tag_block hash_tag_links lps_user_info">
            <div className="hashtag">
               <ul className="lps_btn_grps lps_ul lps_hash_ul lips-hash-tags">
                  <li>
                     {hideHashtag.map((tag, index) =>
                     <button key={index} className="theme_btn theme_outline_light btn-color">{tag}</button>
                     )}
                  </li>
               </ul>
            </div>
            <div className="hashtag my_10">
               <button onClick={e => setEditTag("hide")}  className="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase min_w_170">
               Add more</button>
            </div>
         </div>
      </li>
    </>
  );
}
export default hashtag
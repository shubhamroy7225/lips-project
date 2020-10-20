import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import * as actions from "redux/actions";

export default  ({selectTags, setSelectTags}) => {

  const [loaded, setLoaded] = useState(false);
  const {hashTags, count} = useSelector(store => store.feedReducer);
  const [filterParams, setFilteredParams] = useState({page: 1, limit: 10});

  const toggleHashTag = (tag) => {
    if (selectTags.includes(tag.name)) {
      selectTags.splice(selectTags.findIndex(e => e === tag.name), 1);
      setSelectTags([...selectTags]);
    }
    else setSelectTags([...selectTags, tag.name]);
  };

  useEffect(() => {
    if (!hashTags.length && !loaded) {
      setLoaded(true)
      actions.getAllHashTags({...filterParams});
    }
  }, []);

  const loadMore = () => {
    let tempSearch = {...filterParams};
    tempSearch.page +=1;
    setFilteredParams(tempSearch);
    actions.getAllHashTags({...tempSearch});
  };

  return (<ul className="lps_btn_grps lps_ul lps_hash_ul lips-hash-tags">
    <li>
      {hashTags.map((tag, index) =>
              <button key={index} className={`theme_btn theme_outline_light ${selectTags.includes(tag.name) ? "active" : ""}`} onClick={() => toggleHashTag(tag)}>{tag.name}</button>
      )}
    </li>

    <li className="mt_15">
      {
        count > hashTags.length ?
            <button onClick={loadMore} className="theme_btn theme_outline_primary text_white min_w_170 theme_btn_rds25 text_uppercase">
              View more</button> : ""
      }
    </li>
  </ul>)
}
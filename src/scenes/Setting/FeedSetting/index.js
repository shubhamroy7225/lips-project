import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import UserHashtag from "./components/Hashtag.js";
import BlockUser from "./components/BlockUser.js";
import FeedSettingModal from "./FeedSettingModal";

import * as actions from "redux/actions";
import store from 'redux/store/store.js';
const FeedSetting = () => {
  const {showhashTags, hideHashtag} = useSelector(store => store.feedReducer);
  const {users} = useSelector(store => store.authReducer);
  const [loaded, setLoaded] = useState(false);
  const [editTag, setEditTag] = useState(null);
  useEffect(() => {
    if (!loaded) {
    setLoaded(true)
    actions.getUserHashTags()
    }
  }, [loaded]);

  useEffect(() => {
    if (!loaded) {
    setLoaded(true)
    actions.fetchBlockUser()
    }
  }, [loaded]);
  return (
    <>
    {
        editTag ? <FeedSettingModal setParentLoaded={setLoaded} setEditTag={setEditTag} editTag={editTag} existingTags={editTag === "hide" ? hideHashtag : showhashTags} /> :  <div id="wrap" className="mt_0 feed-setting">
          <div className="lps_container mt_0">
            <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
              <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
              <span className="lp_left_auto text_black">Feed Settings</span>
            </Link>
            <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">

              <UserHashtag setEditTag={setEditTag} showhashTags={showhashTags} hideHashtag={hideHashtag}/>
              <BlockUser users={users}/>
            </ul>
          </div>
        </div>
    }

    </>
  );
}
export default FeedSetting
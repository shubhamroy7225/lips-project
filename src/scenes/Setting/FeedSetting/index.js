import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import UserHashtag from "./components/Hashtag.js";
import BlockUser from "./components/BlockUser.js";
import * as actions from "redux/actions";
const FeedSetting = () => {
  const {showhashTags} = useSelector(store => store.feedReducer);
  const {hideHashtag} = useSelector(store => store.feedReducer);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
    setLoaded(true)
    actions.getUserHashTags()
    }
  }, []);
  return (
    <>
      <div id="wrap" className="mt_0 feed-setting">
         <div className="lps_container mt_0">
            <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
            <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
            <span className="lp_left_auto text_black">Feed Settings</span>
            </Link>
            <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
               <li className="list-group-item">
                  <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                     <article>
                        <h5 className="ft_Weight_500 mb_5">This product</h5>
                        <p className="mb_0">is meant for educational purposes only.</p>
                     </article>
                     <label className="lps_switch">
                     <input type="checkbox" checked/>
                     <span className="lps_int_slider round"></span>
                     </label>
                  </div>
               </li>
               <li className="list-group-item">
                  <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                     <article>
                        <h5 className="ft_Weight_500 mb_5">This product</h5>
                        <p className="mb_0">is meant for educational purposes only.</p>
                     </article>
                     <label className="lps_switch">
                     <input type="checkbox" checked/>
                     <span className="lps_int_slider round"></span>
                     </label>
                  </div>
               </li>
               <li className="list-group-item">
                  <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                     <article>
                        <h5 className="ft_Weight_500 mb_5">This product</h5>
                        <p className="mb_0">is meant for educational purposes only.</p>
                     </article>
                     <label className="lps_switch">
                     <input type="checkbox" checked/>
                     <span className="lps_int_slider round"></span>
                     </label>
                  </div>
               </li>
               <UserHashtag showhashTags={showhashTags} hideHashtag={hideHashtag}/>
               <BlockUser/>
            </ul>
         </div>
      </div>
    </>
  );
}
export default FeedSetting
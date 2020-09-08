import React from 'react';
import { Link } from "react-router-dom";
const Setting = () => {
   return (
      <div id="wrap" className="mt_0">
         <div className="lps_container">
         <Link className="lps_header_link lps_flx_vm text_uppercase lps_px15" to="main_feed.html">
            <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
            <span className="lp_left_auto">Settings</span>
          </Link>
            <div className="lps_inner_wrp lps_search">
               <div className="inner_form">
                  <div className="input_field">
                     <button className="btn_search" type="button">
                        <img src={require("assets/images/icons/search.png")} alt="Search"/>
                     </button>
                     <input className="input_modify" type="text" />
                  </div>
               </div>
            </div>
            <ul className="lps_list_group lps_listN">
               <li className="list-group-item">
                  <Link to="/settings/my-account">My account</Link>
               </li>
               <li className="list-group-item">
                  <Link to="/settings/manage-data">Manage your data</Link>
               </li>
               <li className="list-group-item">
                  <Link to="/settings/feed-setting">Feed settings</Link>
               </li>
               <li className="list-group-item">
                  <Link to="/settings/notification">Notifications</Link>
               </li>
               <li className="list-group-item">
                  <Link to="#">Invite someone to lips</Link>
               </li>
               <li className="list-group-item">
                  <Link to="/settings/community-guidelines">Community guidelines</Link>
               </li>
               <li className="list-group-item">
                  <Link to="/settings/terms-and-condition">Terms and conditions</Link>
               </li>
               <li className="list-group-item">
                  <Link to="/settings/privacy-policy">Privacy policy</Link>
               </li>
               <li className="list-group-item">
                  <Link to="#">Log out</Link>
               </li>
               <li className="list-group-item">
                  <Link to="#">Need Help?</Link>
               </li>
            </ul>
         </div>
      </div>
   );
}
export default Setting
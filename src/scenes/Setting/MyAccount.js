import React from 'react';
import {Link} from "react-router-dom";
const MyAccount = () => {
  return (
    <>
            <div id="wrap">
               <div className="lps_container">
                  <ul className="lps_list_group my_acctn_list">
                     <li className="list-group-item">
                        <div className="lps_media lps_flx_vm my_acctn_pt10">
                           <figure className="lps_fig lps_fig_circle">
                              <img src={require("assets/images/icons/user.jpg")} alt="User" />
                           </figure>
                           <div className="lps_media_body">
                              <p className="lps_md_title">My Account</p>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label">Username</p>
                           <div className="user_info_field">
                              <input type="text" className="input_modify" value="Jon Snow"/> <a href="#" className="lps_link">change</a>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label">Email <span className="text_primary">/ Key</span></p>
                           <div className="user_info_field">
                              <input type="text" className="input_modify" value="JonSnow@gmail.com"/> <a href="#" className="lps_link">change</a>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label lps_mb10">Account privacy</p>
                           <label className="lps_cont_rdo">
                           Public <br/>
                           Anyone on the internet can see you posts                  
                           <input type="radio" checked="checked" name="radio"/>
                           <span className="lps_checkmark"></span>
                           </label>
                           <label className="lps_cont_rdo">
                           Only Lips users<br/>
                           Only registered Lips users can find & see me
                           <input type="radio" name="radio"/>
                           <span className="lps_checkmark"></span>
                           </label>
                           <label className="lps_cont_rdo">
                           Private<br/>
                           Only People who follow you can see your posts
                           <input type="radio" name="radio"/>
                           <span className="lps_checkmark"></span>
                           </label>                
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label lps_mb15">
                              <Link to="#">Deactivate Account</Link>
                           </p>
                           <p className="user_info_label">
                              <Link to="#">Delete Account</Link>
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}
export default MyAccount
import React from 'react';
import {Link} from "react-router-dom";
const MyAccount = () => {
  return (
    <>
            <div id="wrap" className="mt_0">
               <div className="lps_container">
                  <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label">Username <Link to="#" className="lps_link ft_Weight_600">change</Link></p>
                           <div className="user_info_field">
                              <span className="input_modify">Username</span>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label">Email <Link to="#" className="lps_link ft_Weight_600">change</Link></p>
                           <div className="user_info_field">
                              <span className="input_modify">JonSnow@gmail.com</span>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label lps_mb10">Account privacy</p>
                           <label className="lps_cont_rdo">
                           <span class="ft_Weight_500">Public</span> <br/>
                           Anyone on the internet can see you posts                  
                           <input type="radio" checked="checked" name="radio"/>
                           <span className="lps_checkmark"></span>
                           </label>
                           <label className="lps_cont_rdo">
                           <span className="ft_Weight_500">Only Lips users</span><br/>
                           Only registered Lips users can find & see me
                           <input type="radio" name="radio"/>
                           <span className="lps_checkmark"></span>
                           </label>
                           <label className="lps_cont_rdo">
                           <span className="ft_Weight_500">Private</span><br/>
                           Only People who follow you can see your posts
                           <input type="radio" name="radio"/>
                           <span className="lps_checkmark"></span>
                           </label>                
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label lps_mb15">
                              <Link to="#" className="ft_Weight_500">Deactivate Account</Link>
                           </p>
                        </div>
                     </li> 
                      <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">     
                           <p className="user_info_label">
                              <Link to="#" classname="ft_Weight_500">Delete Account</Link>
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
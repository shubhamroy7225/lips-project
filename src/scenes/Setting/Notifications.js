import React from 'react';
import {Link} from "react-router-dom";
import Header from 'scenes/Setting/SettingHeader';
const Notifications = () => {
  return (
    <>
            <div id="wrap">
               <div className="lps_container">
                  <ul className="lps_list_group my_acctn_list">
                     <li className="list-group-item">
                        <div className="lps_media lps_flx_vm my_acctn_pt10">
                           <figure className="lps_fig lps_fig_circle lps_fig_circle_visible">
                              <img src={require("assets/images/icons/icn_settings_black.png")} alt="User"/>
                           </figure>
                           <div className="lps_media_body">
                              <p className="lps_md_title">Notifications</p>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item lps_pink_bg">
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm">
                           <p className="lps_md_title mb_0">Allow All</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <p className="mb_0">This product is meant for educational<br/> purposes only.</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <p className="mb_0">This product is meant for educational<br/> purposes only.</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm">
                           <p className="mb_0">This product is meant for educational<br/> purposes only.</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}
export default Notifications
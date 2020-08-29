import React from 'react';
import {Link} from "react-router-dom";
const ManageData = () => {
  return (
    <>
            <div id="wrap">
               <div className="lps_container">
                  <ul className="lps_list_group my_acctn_list">
                     <li className="list-group-item">
                        <div className="lps_media lps_flx_vm my_acctn_pt10">
                           <figure className="lps_fig lps_fig_circle lps_fig_circle_visible">
                              <img src={require("assets/images/icons/icn_lock.png")} alt="User" />
                           </figure>
                           <div className="lps_media_body">
                              <p className="lps_md_title">Manage your data</p>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item lps_pink_bg">
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm">
                           <p className="lps_md_title mb_0">Allow All</p>
                           <label className="lps_switch">
                           <input type="checkbox" checked/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links lps_mb20">
                           <p className="lps_md_title">Personalization</p>
                        </div>
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
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links lps_mb20">
                           <p className="lps_md_title">Ads</p>
                        </div>
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
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label mb_0">
                              <Link to="#">
                              Cached data</Link>
                           </p>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label mb_0">
                              <Link to="#">
                              Download your data (pdf)</Link>
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}
export default ManageData
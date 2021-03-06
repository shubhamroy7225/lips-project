import React from 'react';
import {Link} from "react-router-dom";
const Notifications = () => {
  return (
    <>
            <div id="wrap" className="mt_0">
               <div className="lps_container mt_0">
               <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
                  <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                  <span className="lp_left_auto text_black">Notifications</span>
               </Link>
                  <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
                     
                     <li className="list-group-item bg_gray_feed">
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm">
                           <p className="lps_md_title mb_0">Allow All</p>
                           <label className="lps_switch">
                           <input type="checkbox" checked/>
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
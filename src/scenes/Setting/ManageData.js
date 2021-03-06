import React from 'react';
import {Link} from "react-router-dom";
const ManageData = () => {
  return (
    <>
            <div id="wrap" className="mt_0">
               <div className="lps_container mt_0">
               <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
                  <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                  <span className="lp_left_auto text_black">Manage Your Data</span>
               </Link>
                  <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
                     <li className="list-group-item bg_gray_feed">
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
                            <article>
                              <h5 className="ft_Weight_500 mb_5">This product</h5>
                              <p className="mb_0">is meant for educational purposes only.</p>
                             </article>
                           <label className="lps_switch">
                           <input type="checkbox"/>
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
                           <input type="checkbox"/>
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
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <Link to="#"><h5 className="mb_0 ft_Weight_500">Cached data</h5></Link>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <Link to="#"><h5 className="mb_0 ft_Weight_500">Download your data (pdf)</h5></Link>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}
export default ManageData
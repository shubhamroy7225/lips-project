import React from 'react';
import {Link} from "react-router-dom";
const Notifications = () => {
  return (
    <>
            <div id="wrap">
               <div className="lps_container">
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
                     
                  </ul>
               </div>
            </div>
    </>
  );
}
export default Notifications
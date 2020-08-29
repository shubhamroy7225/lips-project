import React from 'react';
import {Link} from "react-router-dom";

const SwitchAccount = () => {
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
                              <p className="lps_md_title">Switch account</p>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label">
                              <Link to="#">
                              Add an Account</Link>
                           </p>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label">
                              <Link to="#">
                              Create new a Account</Link>
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}
export default SwitchAccount
import React from 'react';
import {Link} from "react-router-dom";
 import * as actions from "redux/actions";
const blockUser = ({blockedUsers}) => {
    const unblockUser = (id) =>{
       actions.unblockUser(id).then(res => {
          return res
        
       });
     };
  return (
    <>
      <li className="list-group-item">
         <div className="lps_user_info lps_accnt_links">
            <p className="lps_md_title ft_Weight_500 mt_10">Blocked Users</p>
            {blockedUsers.map((block_user, index) =>
            <div className="lps_media lps_flx_vm my_acctn_pt10" key={index}>
               <figure className="lps_fig lps_fig_circle">
               <img src={block_user.photo_urls.medium ? block_user.photo_urls.medium : require("assets/images/icons/user.jpg")} alt="User"/>
               </figure>
               <div className="lps_media_body">
                  <Link to="/settings/feed-setting" onClick={e => unblockUser(block_user.id)} className="lps_link lps_flt_right ft_Weight_600">
                  unblock</Link>
              <p className="lps_md_title mb_0 ft_Weight_500">{block_user.user_name}</p>
               </div>
            </div>)}
         </div>
      </li>
    </>
  );
}
export default blockUser
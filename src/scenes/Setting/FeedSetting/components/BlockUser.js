import React from 'react';
import {Link} from "react-router-dom";
 import * as actions from "redux/actions";
 import * as commonService from "utility/utility";
const blockUser = ({blockedUsers}) => {
    const unblockUser = (id) =>{
       actions.unblockUser(id).then(res => {
         commonService.isDialogOpen.onNext(false);
         return res
        
       });
     };

     const blockUserConfirm = (blockedUsers) => {
      commonService.isDialogOpen.onNext({
         open: true,
         data: {
            title: "",
            message: "Are you sure to unblock?"
         },
         confirmText: "Yes",
         cancelText: "No",
         onConfirm: () => unblockUser(blockedUsers),
         onCancel: () => commonService.isDialogOpen.onNext(false)
      });
   };
  return (
    <>
      <li className="list-group-item">
         <div className="lps_user_info lps_accnt_links">
            <p className="lps_md_title ft_Weight_500 mt_10">blocked users</p>
            <p className="lps_title mt_10">users you block will appear here</p>
            {blockedUsers.map((block_user, index) =>
            <div className="lps_media lps_flx_vm my_acctn_pt10" key={index}>
               <figure className="lps_fig lps_fig_circle">
               <img src={block_user.photo_urls.medium ? block_user.photo_urls.medium : require("assets/images/icons/icn_profile.svg")} alt="User"/>
               </figure>
               <div className="lps_media_body">
                  <span onClick={e => blockUserConfirm(block_user.id)} className="btn-transparent lps_link lps_flt_right ft_Weight_600">
                  unblock</span>
              <p className="lps_md_title mb_0 ft_Weight_500">{block_user.user_name}</p>
               </div>
            </div>)}
         </div>
      </li>
    </>
  );
}
export default blockUser
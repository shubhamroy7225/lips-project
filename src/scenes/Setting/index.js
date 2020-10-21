import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import * as AuthActions from "redux/actions";
import * as commonService from "utility/utility";
const Setting = () => {
   const history = useHistory();
   const [ModalOpen, setModalOpen] = useState(false);

   const logout = () => {
      AuthActions.signOut();
      commonService.isDialogOpen.onNext(false);
   };
   const logoutConfirm = () => {
      commonService.isDialogOpen.onNext({
         open: true,
         data: {
            title: "",
            message: "Are you sure you want to Logout?"
         },
         confirmText: "LOGOUT",
         onConfirm: () => logout(),
         onCancel: () => commonService.isDialogOpen.onNext(false)
      });
   };

   return (
      <>
         <div id="wrap" className="mt_0">
            <div className="lps_container mt_0">
               <Link className="lps_header_link lps_flx_vm text_uppercase lps_px15" to="main_feed.html">
                  <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                  <span className="lp_left_auto">Settings</span>
               </Link>
               <ul className="lps_list_group lps_listN mt_25">
                  <li className="list-group-item lps_hrSep">
                     <Link to="/settings/my-account">My account</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to="/settings/feed-setting">Feed settings</Link>
                  </li>
                  {/* <li className="list-group-item">
                     <Link to="/settings/notification">Notifications</Link>
                  </li> */}
                  <li className="list-group-item">
                     <a href="mailto://?subject=Invitation from Lips&body=Hello,%0DJoin Today https://stage.lips.social" target="_blank">Invite someone to lips</a>
                  </li>
                  <li className="list-group-item lps_hrSep">
                     <Link to="/settings/community-guidelines">Community guidelines</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to="/settings/terms-and-condition">Terms and conditions</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to="/settings/privacy-policy">Privacy policy</Link>
                  </li>
                  <li className="list-group-item lps_hrSep">
                     <Link to="/settings" onClick={logoutConfirm}>Log out</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to="#">FAQ</Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}
export default Setting
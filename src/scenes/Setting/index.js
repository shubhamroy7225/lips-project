import React, { useState } from 'react';
import { isMobile } from "react-device-detect";
import { Link, useHistory } from "react-router-dom";
import * as AuthActions from "redux/actions";
import { routes } from 'utility/constants/constants';
import * as commonService from "utility/utility";
import AddToHome from "scenes/components/AddToHome";

const Setting = () => {
   const history = useHistory();
   const [ModalOpen, setModalOpen] = useState(false);
   const toggleModal = (value) =>{
      setModalOpen(value);
   }

   const logout = () => {
      AuthActions.signOut();
      commonService.isDialogOpen.onNext(false);
   };
   const logoutConfirm = () => {
      commonService.isDialogOpen.onNext({
         open: true,
         data: {
            title: "",
            message: "Are you sure you want to Sign out?"
         },
         confirmText: "Sign out",
         onConfirm: () => logout(),
         onCancel: () => commonService.isDialogOpen.onNext(false)
      });
   };
   return (
      <>
         <div id="wrap" className="mt_0">
            <div className="lps_container mt_0">
               <Link className="lps_header_link lps_flx_vm text_uppercase lps_px15" to={routes.ROOT}>
                  <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                  <span className="lp_left_auto">Settings</span>
               </Link>
               <ul className="lps_list_group lps_listN mt_25">
                  <li className="list-group-item lps_hrSep">
                     <Link to={routes.MY_ACCOUNT}>My account</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to={routes.FEED_SETTING}>Feed settings</Link>
                  </li>
                  {/* <li className="list-group-item">
                     <Link to="/settings/notification">Notifications</Link>
                  </li> */}
                  <li className="list-group-item">
                     <a href={`mailto://?subject=Invitation from Lips&body=Hello,%0DJoin Today ${window.location.origin}`} target="_blank">Invite someone to lips</a>
                  </li>
                  <li className="list-group-item lps_hrSep">
                     <Link to={routes.SETTING_COMMUNITY_GUIDELINES}>Community guidelines</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to={routes.SETTING_TERMS_AND_CONDITIONS}>Terms and conditions</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to={routes.PRIVACY_POLICY}>Privacy policy</Link>
                  </li>
                  {isMobile ? 
                  <li className="list-group-item">
                     <Link onClick={()=> toggleModal(true)}>Add Lips to home screen</Link>
                     <AddToHome toggleModal={toggleModal} modalStatus={ModalOpen} />
                  </li> : ""}
                  <li className="list-group-item lps_hrSep">
                     <Link to={routes.SETTING} onClick={logoutConfirm}>Sign out</Link>
                  </li>
                  <li className="list-group-item">
                     <Link to={routes.SETTING_FAQ}>FAQ</Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}
export default Setting
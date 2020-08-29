import React from 'react';
import {Link} from "react-router-dom";
const Setting = () => {
  return (
    <>
               <div className="lps_container">
                  <div className="lps_inner_wrp lps_search">
                     <div className="inner_form">
                        <div className="input_field">
                           <button className="btn_search" type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                 <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                              </svg>
                           </button>
                           <input className="input_modify" type="text"/>
                        </div>
                     </div>
                  </div>
                  <ul className="lps_list_group">
                     <li className="list-group-item">
                        <Link to="/settings/my-account">My Account</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/switch-account">Switch Account</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/manage-data">Manage your data</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/feed-setting">Feed Settings</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/notification">Notifications</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="#">Invit someone to lips</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/community-guidelines">community guid</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/terms-and-condition">Terms and Conditions</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="/settings/privacy-policy">Privacy Policy</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="#">Log out</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to="#">Need Help?</Link>
                     </li>
                  </ul>
                  <div className="text_center">
                     <Link to="#" className="link_underline lps_link">Need help?</Link>
                  </div>
               </div>
    </>
  );
}
export default Setting
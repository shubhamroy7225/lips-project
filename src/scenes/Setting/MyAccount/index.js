import React from 'react';
import {Link, useHistory} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {useSelector} from "react-redux";
import * as actions from "redux/actions";

import * as commonService from "utility/utility";

import PrivacySetting from "./components/PrivacySetting.js";
import UsernameSetting from "./components/UsernameSetting.js";

export default ()  => {
  const {user} = useSelector(store => store.authReducer);
  const history = useHistory();

  
  const deleteUser =() => {
      commonService.isLoading.onNext(true);
      actions.deleteUser().then(res => {
        history.push("/");
      });
    commonService.isDialogOpen.onNext(false);
  };
  const handleDelete = () => {
    commonService.isDialogOpen.onNext({
      open: true,
      data: {
        title: "Delete this account?",
        message: "All content on this account will be lost forever."
      },
      confirmText: "DELETE ACCOUNT",
      onConfirm: () => deleteUser(),
      onCancel: () => commonService.isDialogOpen.onNext(false)
    });
  };
  return (
      <>
      <div id="wrap" className="mt_0">
        <div className="lps_container mt_0">
          <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
            <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
            <span className="lp_left_auto text_black">My Account</span>
          </Link>
          <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
            <UsernameSetting user={user}/>
            <li className="list-group-item">
              <div className="lps_user_info">
                <p className="user_info_label">Email</p>
                <div className="user_info_field">
                  <span className="input_modify">{user.email}</span>
                </div>
              </div>
            </li>
            <PrivacySetting user={user}/>
            <li className="list-group-item">
              <div className="lps_user_info lps_accnt_links">
                <p className="user_info_label" onClick={handleDelete}>
                  <Link to="/settings/my-account" classname="ft_Weight_500">Delete Account</Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </>
  );
};
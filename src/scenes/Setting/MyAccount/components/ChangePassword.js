import React from "react";
import { Link, useHistory } from "react-router-dom";

import { toastMsg } from 'utility/utility';
import { changePassword } from "redux/actions/user/action";

export default () => {
  const history = useHistory();
  const defaultForm = {
    current_password: "",
    password: "",
    password_confirmation: "",
  }
  const [passwordForm, setPasswordForm] = React.useState(defaultForm);

  const handleChange = (e) => {
    setPasswordForm({...passwordForm, [e.target.name]: e.target.value});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    changePassword({user: passwordForm}).then(res => {
      if (res.data && res.data.success) {
        toastMsg("Password changed successfully!");
        history.push("/settings/my-account");
      }
    });
  };

  return (
      <div className="lps_container mt_0">
        <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings/my-account">
          <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
          <span className="lp_left_auto text_black">Change Password</span>
        </Link>
        <div className="lps_list_group my_acctn_list my_acctn_list_pl0 changePassword lipsFields">
          <form onSubmit={handleSubmit}>
            <div className="lps_fields">
              <div className="form_group_modify">
                <label for="current_password">Current Password</label>
                <input type="password" className="input_modify" name="current_password" onChange={handleChange} placeholder="Current Password"/>
              </div>
            </div>
            <div className="lps_fields">
              <div className="form_group_modify">
                <label for="current_password">Password</label>
                <input type="password" className="input_modify" name="password" onChange={handleChange} placeholder="Password"/>
              </div>
            </div>
            <div className="lps_fields">
              <div className="form_group_modify">
                <label for="current_password">Confirm Password</label>
                <input type="password" className="input_modify" name="password_confirmation" onChange={handleChange} placeholder="Confirm Password"/>
              </div>
            </div>
            <div className="pos_wrp onboarding_btm">
              <button
                  type="submit"
                  className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio"
                  >
                Change Password
              </button>
              </div>
          </form>
        </div>
      </div>
  )
}
import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import * as AuthActions from "redux/actions";

import SimpleReactValidator from 'simple-react-validator';

let LoginForm = (props) => {
  const history = useHistory();
  //initialize validations
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  //user data state
  const [user, setUser] = useState({ user: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {...user, user: user.user.toLowerCase().trim()}

    if (simpleValidator.current.allValid()) {
      var updatedUser = { ...userData, session_info: { platform: 'web' } }
      AuthActions.login({ user: updatedUser }).then(res => {
        if (res) history.push("/");
      });
    } //check validations
    else {
      simpleValidator.current.showMessages(); //show validation messages
      forceUpdate(1)
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    forceUpdate(1)
  };
  return (
    <div id="wrap" className="mt_0 lps_bg_secondary onboardingBackArrowWrp">
    <div className="topSubHeader">
            <Link className="popupCloseButton popupCloseButtonLeft" to='/'><img src={require("assets/images/icons/icn_left_arrow_white.png")} /></Link>
        </div>
      <div className="lps_container mt_0">
        <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
          <div className="lps_form_wrp">
            <form
              onSubmit={handleSubmit}>
              <article className="text_center lps_logo_center">
                <Link className="logo mb_0" to="#">
                  <img src={require("assets/images/thumbnails/lips-logo-icon.svg")} alt="Lips Logo" className="header__logo" />
                  <h5 className="text_uppercase text_white">Sign In</h5>
                </Link>
              </article>
              <div className="lps_fields lipsFields">
                <div className="form_group_modify">
                  <input type="text" name="user" className="input_modify"
                    placeholder="username or email" value={user.user}
                    onBlur={() => simpleValidator.current.showMessageFor('user')}
                    onChange={(e) => handleChange({target: {name: e.target.name, value: e.target.value.trim()}})} />
                  {simpleValidator.current.message('user', user.user, 'required')}
                </div>
                <div className="form_group_modify lps_pos_rltv">
                  <input type={passwordShown ? "text" : "password"} name="password" className="input_modify" placeholder="password"
                    value={user.password}
                    onChange={handleChange}
                    onBlur={() => simpleValidator.current.showMessageFor('password')}

                  />
                  <span className="icn_passAbslt">


                    {passwordShown ? <img onClick={togglePasswordVisiblity} src={require("assets/images/icons/icb_eye_hide_black.png")} /> : <img onClick={togglePasswordVisiblity} src={require("assets/images/icons/icb_eye_pink.png")} />}
                  </span>
                  {simpleValidator.current.message('password', user.password, 'required')}
                </div>
                <div className="form_group_modify text_right mb20">
                  <Link to="/forgot_password" className="report_link">Forgot password?</Link>
                </div>
                <div className="form_group_modify">
                  <label className="lps_cont_check">keep me signed in
                          <input type="checkbox" />
                    <span className="lps_Checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="pos_wrp onboarding_btm">
                <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio approve_btn_bck">Sign In</button>
                <p className="btm_links mt_25 text_white">New to Lips? &nbsp;&nbsp; <Link to="/register" className="link_tag link_underline lps_link">register</Link></p>
                {/* <Link onClick={()=> history.goBack()} className="link_underline lps_link link_tag">Go Back</Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
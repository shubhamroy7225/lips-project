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
    debugger
    setUser({ ...user, [e.target.name]: e.target.value });
    forceUpdate(1)
  };
  return (
    <div id="wrap" className="mt_0 lps_bg_secondary">
      <div className="lps_container mt_0">
        <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
          <div className="lps_form_wrp">
            <form
              onSubmit={handleSubmit}>
              <article className="text_center lps_logo_center">
                <Link className="logo mb_0" to="#">
                  <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" className="header__logo" />
                  <h5 className="text_uppercase text_white">Sign In</h5>
                </Link>
              </article>
              <div className="lps_fields lipsFields">
                <div className="form_group_modify">
                  <input type="text" name="user" className="input_modify"
                    placeholder="Username or Email" value={user.user}
                    onBlur={() => simpleValidator.current.showMessageFor('user')}
                    onChange={(e) => handleChange({target: {name: e.target.name, value: e.target.value.trim()}})} />
                  {simpleValidator.current.message('user', user.user, 'required')}
                </div>
                <div className="form_group_modify lps_pos_rltv">
                  <input type={passwordShown ? "text" : "password"} name="password" className="input_modify" placeholder="Password"
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
                  <Link to="/forgot_password" className="link_white">Forgot Password</Link>
                </div>
                <div className="form_group_modify">
                  <label className="lps_cont_check">Keep me signed in
                          <input type="checkbox" />
                    <span className="lps_Checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="pos_wrp onboarding_btm">
                <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio">Sign In</button>
                <p className="btm_links mt_25 text_white">New to Lips? <Link to="/register" className="link_underline lps_link">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
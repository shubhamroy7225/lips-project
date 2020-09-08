import React, {useState, useRef} from "react";
import { Link, useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import * as AuthActions from "redux/actions";

import SimpleReactValidator from 'simple-react-validator';

let LoginForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //initialize validations
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  //user data state
  const [user, setUser] = useState({email: "", password: ""});
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = ()=> {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      AuthActions.login({user}).then(res =>{
        history.push("/");
      });
    } //check validations
    else {
      simpleValidator.current.showMessages(); //show validation messages
      forceUpdate(1)
    }
  };

  const handleChange= (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    forceUpdate(1)
  };
  return (
          <div id="wrap" className="mt_0">
            <div className="lps_container">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
                <div className="lps_form_wrp">
                  <form
                      onSubmit={handleSubmit}>
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" className="header__logo" />
                        <h5 className="text_uppercase text_white">Sign In</h5>
                      </a>
                    </article>
                    <div className="lps_fields">
                      <div className="form_group_modify">
                        <input type="text" name="email" className="input_modify"
                               placeholder="email" value={user.email}
                               onBlur={() => simpleValidator.current.showMessageFor('email')}
                               onChange={handleChange}/>
                        {simpleValidator.current.message('email', user.email, 'required')}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input type={passwordShown ? "text" : "password"} name="password" className="input_modify" placeholder="Password"
                               value={user.password}
                               onChange={handleChange}
                               onBlur={() => simpleValidator.current.showMessageFor('password')}

                            />
                        <span className="icn_passAbslt">
                          <img onClick={togglePasswordVisiblity} src={require("assets/images/icons/icb_eye_white.png")} className={passwordShown ? "hidden" : ""}/>

                          <img onClick={togglePasswordVisiblity} src={require( "assets/images/icons/icn_hide_white.png")} className={!passwordShown ? "hidden" : ""} />
                        </span>
                        {simpleValidator.current.message('password', user.password, 'required')}
                      </div>
                      <div className="form_group_modify text_right mb20">
                        <a href="#" className="link_white">Forgot Password</a>
                      </div>
                      <div className="form_group_modify">
                        <label className="lps_cont_check">Keep me signed in
                          <input type="checkbox" checked />
                          <span className="lps_Checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase">Sign In</button>
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
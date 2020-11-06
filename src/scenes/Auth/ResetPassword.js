import React, {useState,  useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import * as AuthActions from "redux/actions";
import * as commonService from "utility/utility.js";
export default () => {
  const [user, setUser] = useState({
    password: "",
    password_confirmation: ""
  });

  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  //initialize validations
  const simpleValidator = useRef(new SimpleReactValidator({validators: {
    sameAs: {  // name the rule
      message: 'The password and :attribute are not matched.',
          rule: (val, params, validator) => {
        return val === params[0]//validator.helpers.testRegex(val,/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/) && params.indexOf(val) === -1
      },

          required: true  // optional
    }}
  }));
  const [, forceUpdate] = useState();
  
  const handleSubmit = e => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
    let reset_password_token = commonService.getSearchParams(history, 'reset_password_token');
    
    if (user.password === user.password_confirmation) {
      var updatedUser = { ...user, reset_password_token }
      AuthActions.resetPassword({user: updatedUser}).then(res => {
        if (res.success === true) {
          setUser({});
          history.push("/login");
        }
      });
    }
  }
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
          <div id="wrap" className="mt_0 lps_bg_secondary">
            <div className="lps_container mt_0">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
                <div className="lps_form_wrp">
                  <form onSubmit={handleSubmit}>
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" className="header__logo" />
                        <h5 className="text_uppercase text_white">Reset Password</h5>
                      </a>
                    </article>
                    <div className="lps_fields lipsFields">
                      <div className="form_group_modify lps_pos_rltv">
                        <input type={passwordShown ? "text" : "password"} className="input_modify" placeholder="Password" name="password"  value={user.password}
                               onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('password')} />
                        
                        <span className="icn_passAbslt">
                          <img
                              onClick={() => setPasswordShown(!passwordShown)}
                              src={require(`assets/images/icons/${passwordShown? "icb_eye_hide_black" : "icb_eye_pink"}.png`)}
                              />
                        </span>
                          {simpleValidator.current.message('password', user.password, 'required')}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input  type={confirmPasswordShown ? "text" : "password"} className="input_modify" placeholder="Password Confirmation"  value={user.password_confirmation}
                               onChange={handleChange} name="password_confirmation" onBlur={() => simpleValidator.current.showMessageFor('password_confirmation')} />
                          <span className="icn_passAbslt">
                          <img
                              onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                              src={require(`assets/images/icons/${confirmPasswordShown? "icb_eye_hide_black" : "icb_eye_pink"}.png`)}
                              />
                        </span>
                          {simpleValidator.current.message('password_confirmation', user.password_confirmation, `required|sameAs:${user.password}`)}
                      </div>
                    </div>
                    <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio">
                        Submit</button>
                      <Link to="/login" className="link_underline lps_link mt_10">Sign in</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}
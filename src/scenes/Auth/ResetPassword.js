import React, {useState,  useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import {useDispatch} from "react-redux";
// import * as AuthActions from "redux/actions";
import * as commonService from "utility/utility.js";
export default () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    password: "",
    password_confirmation: ""
  });

  const history = useHistory();
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let reset_password_token = commonService.getSearchParams(history, 'reset_password_token');
  //   debugger
  //   if (simpleValidator.current.allValid()) {
  //     AuthActions.resetPassword({...user, reset_password_token}).then(res =>{
  //       debugger
  //       history.push("/");
  //     });

  //   } //check validations
  //   else {
  //     simpleValidator.current.showMessages(); //show validation messages
  //     forceUpdate(1)
  //   }
  // };

  
  const handleChange= (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    forceUpdate(1)
  };

  return (
          <div id="wrap" className="mt_0">
            <div className="lps_container mt_0">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
                <div className="lps_form_wrp">
                  <form>
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" className="header__logo" />
                        <h5 className="text_uppercase text_white">Reset Password</h5>
                      </a>
                    </article>
                    <div className="lps_fields">
                      
                      <div className="form_group_modify lps_pos_rltv">
                        <input type="password" className="input_modify" placeholder="Password" name="password"  value={user.password}
                               onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('password')} />
                        
                          {simpleValidator.current.message('password', user.password, 'required')}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input  type="password" className="input_modify" placeholder="Password Confirmation"  value={user.password_confirmation}
                               onChange={handleChange} name="password_confirmation" onBlur={() => simpleValidator.current.showMessageFor('password_confirmation')} />
                          {simpleValidator.current.message('password_confirmation', user.password_confirmation, `required|sameAs:${user.password}`)}
                      </div>
                    </div>
                    <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase">
                        Submit</button>
                      <Link to="/login" className="link_underline lps_link">Sign in</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}
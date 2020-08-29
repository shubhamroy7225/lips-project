import React, {useState,  useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';

export default () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const history = useHistory();
  //initialize validations
  const simpleValidator = useRef(new SimpleReactValidator({validators: {
    sameAs: {  // name the rule
      message: 'The password and :attribute are not matched.',
          rule: (val, params, validator) => {
        return validator.helpers.testRegex(val,/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/i) && params.indexOf(val) === -1
      },

          required: true  // optional
    }}
  }));
  const [, forceUpdate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) history.push("/terms-and-condition"); //check validations
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
      <div className="limiter">
        <div className="container-login100">
          <div id="wrap" className="mt_0">
            <div className="lps_container">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp">
                <div className="lps_form_wrp">
                  <form onSubmit={handleSubmit}>
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.png")} alt="Lips Logo" className="header__logo" />
                        <h5 className="text_uppercase text_white">Register</h5>
                      </a>
                    </article>
                    <div className="lps_fields">
                      <div className="form_group_modify">
                        <input type="text" className="input_modify" placeholder="Username" name="username"  value={user.username}
                               onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('username')}  />
                         {simpleValidator.current.message('username', user.username, 'required')}      
                      </div>
                      <div className="form_group_modify">
                        <input type="email" className="input_modify" placeholder="Email" name="email"  value={user.email}
                         onBlur={() => simpleValidator.current.showMessageFor('email')} onChange={handleChange} />
                         {simpleValidator.current.message('email', user.email, 'required|email')}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input type="password" className="input_modify" placeholder="Password" name="password"  value={user.password}
                               onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('password')} />
                        <span className="icn_passAbslt">
                          <img src={require("assets/images/icons/icb_eye_white.png")} />
                        </span>
                          {simpleValidator.current.message('password', user.password, 'required')}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input  type="password" className="input_modify" placeholder="Repeat Password"  value={user.confirm_password}
                               onChange={handleChange} name="confirm_password" onBlur={() => simpleValidator.current.showMessageFor('confirm_password')} />
                        <span className="icn_passAbslt">
                          <img src={require("assets/images/icons/icb_eye_white.png")} />
                        </span>
                          {simpleValidator.current.message('confirm_password', user.confirm_password, `required|sameAs:${user.password}`)}
                      </div>
                      <div className="mt_25">
                        <div className="form_group_modify">
                          <label className="lps_cont_check">I am 18 years or older
                            <input type="checkbox" checked />
                            <span className="lps_Checkmark"></span>
                          </label>
                        </div>
                        <div className="form_group_modify">
                          <label className="lps_cont_check">Keep me signed in
                            <input type="checkbox" checked />
                            <span className="lps_Checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase">Review
                        Terms & Conditions</button>
                      <p className="btm_links mt_25 text_white">Have an account? <Link to="/login"
                                                                                className="link_underline lps_link">Sign in</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
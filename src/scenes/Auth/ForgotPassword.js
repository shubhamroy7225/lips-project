import React, {useState, useRef} from "react";
import { Link, useHistory } from "react-router-dom";
import * as AuthActions from "redux/actions";

import SimpleReactValidator from 'simple-react-validator';

let ForgotPasswordForm = (props) => {
  const history = useHistory();
  //initialize validations
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  //user data state
  const [user, setUser] = useState({email: ""});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      AuthActions.forgotPassword({user}).then(res =>{
        history.push("/login");
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
            <div className="lps_container mt_0">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
                <div className="lps_form_wrp">
                  <form onSubmit={handleSubmit}>
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" className="header__logo" />
                        <h5 className="text_uppercase text_white">Forgot Password</h5>
                      </a>
                    </article>
                    <div className="lps_fields">
                      <div className="form_group_modify">
                        <input type="text" name="email" className="input_modify"
                               placeholder="Email" value={user.email}
                               onBlur={() => simpleValidator.current.showMessageFor('email')}
                               onChange={handleChange}/>
                        {simpleValidator.current.message('email', user.email, 'required')}
                      </div>
                    </div>
                   <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio">Submit</button>
                      <p className="btm_links mt_25 text_white">New to Lips? <Link to="/login" className="link_underline lps_link">Sign In</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ForgotPasswordForm;
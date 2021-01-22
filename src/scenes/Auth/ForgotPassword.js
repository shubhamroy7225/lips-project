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
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      AuthActions.forgotPassword({user}).then(res =>{
        if(res.success)return [setUser({email: ""}), setSubmitted(true)]
        else return false
      });
    } //check validations
    else {
      setSubmitted(false)
      simpleValidator.current.showMessages(); //show validation messages
      forceUpdate(1)
    }
  };

  const handleChange= (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    forceUpdate(1)
  };
  return (
          <div id="wrap" className="mt_0 lps_bg_secondary onboardingBackArrowWrp">
          <div className="topSubHeader">
            <Link className="popupCloseButton popupCloseButtonLeft" to='/login'><img src={require("assets/images/icons/icn_left_arrow_white.png")} /></Link>
        </div>
            <div className="lps_container mt_0">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng on_boardingNChngForms">
                <div className="lps_form_wrp lipsFields">
                  <form onSubmit={handleSubmit} className="lpsFormFlexBtwnV">
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/lips-logo-icon.svg")} alt="Lips Logo" className="header__logo" />
                        <h5 className="text_uppercase text_white">Forgot Password</h5>
                      </a>
                    </article>
                    <div className="lps_fields">
                      <div className="form_group_modify">
                        <input type="text" name="email" className="input_modify"
                               placeholder="email" value={user.email}
                               onBlur={() => simpleValidator.current.showMessageFor('email')}
                               onChange={handleChange}/>
                        {!submitted ? simpleValidator.current.message('email', user.email, 'required') : ""}
                        {submitted ? 
                        <span style={{color: "#fff"}}>Check your inbox!</span> : "" }
                      </div>
                    </div>
                   <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio approve_btn_bck">Password reset</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ForgotPasswordForm;
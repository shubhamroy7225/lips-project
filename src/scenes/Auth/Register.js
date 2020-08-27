import React from "react";
import {useHistory} from "react-router-dom";

export default () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/terms-and-condition");
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
                        <input type="text" className="input_modify" placeholder="Username" name="username" required/>
                      </div>
                      <div className="form_group_modify">
                        <input type="email" className="input_modify" placeholder="Email" name="email" required/>
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input type="password" className="input_modify" placeholder="Password" name="password" required/>
                        <span className="icn_passAbslt">
                          <img src={require("assets/images/icons/icb_eye_white.png")} />
                        </span>
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input type="password" className="input_modify" placeholder="Repeat Password" name="password_confirmation" required/>
                        <span className="icn_passAbslt">
                          <img src={require("assets/images/icons/icb_eye_white.png")} />
                        </span>
                      </div>
                      <div className="mt_25">
                        <div className="form_group_modify">
                          <label className="lps_cont_check">I am 18 years or older
                            <input type="checkbox" />
                            <span className="lps_Checkmark"></span>
                          </label>
                        </div>
                        <div className="form_group_modify">
                          <label className="lps_cont_check">Keep me signed in
                            <input type="checkbox" />
                            <span className="lps_Checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pos_wrp onboarding_btm">
                      <button type="submit" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase">Review
                        Terms & Conditions</button>
                      <p className="btm_links mt_25 text_white">Have an account? <a href="sign_in.html"
                                                                                className="link_underline lps_link">Sign in</a></p>
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
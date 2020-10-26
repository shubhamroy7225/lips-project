import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import * as AuthActions from "redux/actions";

import TermsAndConditionPage from "../OnBoarding/TermsAndCondition";
export default () => {
  const [reviewTemsAndCondition, setTermsAndConditionPageActive] = useState(
      false
  );
  const [isSubmitted, setSubmitted] = useState(false);

  const [user, setUser] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const history = useHistory();
  //initialize validations
  const simpleValidator = useRef(
      new SimpleReactValidator({
        validators: {
          sameAs: {
            // name the rule
            message: "The password and :attribute are not matched.",
            rule: (val, params, validator) => {
              return val === params[0]; //validator.helpers.testRegex(val,/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/) && params.indexOf(val) === -1
            },

            required: true, // optional
          },
        },
      })
  );
  const [, forceUpdate] = useState();

  const checkValidation = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      AuthActions.verifyUsername(user.user_name.toLowerCase()).then((res) => {
        setTermsAndConditionPageActive(true);
      });
    } else {
      setSubmitted(true);
      simpleValidator.current.showMessages(); //show validation messages
      forceUpdate(1);
    }
  };

  const handleSubmit = (e) => {   
    let userData = { ...user, user_name: user.user_name.toLowerCase() };

    var updatedUser = { ...userData, session_info: { platform: "web" } };
    delete updatedUser.confirm_password;
    AuthActions.signup({ user: updatedUser }).then((res) => {
      history.push("/community-guidelines");
    }).catch(err => {
      setTermsAndConditionPageActive(false);
    });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [resetPasswordShown, setResetPasswordShown] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    forceUpdate(1);
  };

  return (
      <>
      {reviewTemsAndCondition ? (
          <TermsAndConditionPage
              isRegister={true}
              handleSubmit={handleSubmit}
              setTermsAndConditionPageActive={setTermsAndConditionPageActive}
              />
      ) : (
          <div id="wrap" className="mt_0">
            <div className="lps_container mt_0">
              <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp on_boardingNChng">
                <div className="lps_form_wrp">
                  <form onSubmit={e => checkValidation(e)}>
                    <article className="text_center lps_logo_center">
                      <a className="logo mb_0" href="#">
                        <img
                            src={require("assets/images/thumbnails/logo.svg")}
                            alt="Lips Logo"
                            className="header__logo"
                            />
                        <h5 className="text_uppercase text_white">Register</h5>
                      </a>
                    </article>
                    <div className="lps_fields">
                      <div className="form_group_modify">
                        <input
                            type="text"
                            className="input_modify"
                            placeholder="Username"
                            name="user_name"
                            value={user.user_name}
                            onChange={handleChange}
                            onBlur={() =>
                          isSubmitted ?  simpleValidator.current.showMessageFor("user_name") : true
                        }
                            />
                        { simpleValidator.current.message(
                            "user_name",
                            user.user_name,
                            "required|alpha"
                        )}
                      </div>
                      <div className="form_group_modify">
                        <input
                            type="email"
                            className="input_modify"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onBlur={() =>
                           isSubmitted ? simpleValidator.current.showMessageFor("email") : true
                        }
                            onChange={handleChange}
                            />
                        {simpleValidator.current.message(
                            "email",
                            user.email,
                            "required|email"
                        )}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input
                            type={passwordShown ? "text" : "password"}
                            className="input_modify"
                            placeholder="Password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            onBlur={() =>
                          isSubmitted ?  simpleValidator.current.showMessageFor("password") : true
                        }
                            />
                        <span className="icn_passAbslt">
                          <img
                              onClick={() => setPasswordShown(!passwordShown)}
                              src={require(`assets/images/icons/${passwordShown? "icb_eye_hide_black" : "icb_eye_black"}.png`)}
                              />
                        </span>
                        { simpleValidator.current.message(
                            "password",
                            user.password,
                            "required"
                        )}
                      </div>
                      <div className="form_group_modify lps_pos_rltv">
                        <input
                            type={resetPasswordShown ? "text" : "password"}
                            className="input_modify"
                            placeholder="Repeat Password"
                            value={user.confirm_password}
                            onChange={handleChange}
                            name="confirm_password"
                            onBlur={(e) =>
                        isSubmitted ?  simpleValidator.current.showMessageFor(
                            "confirm_password"
                          ) : true
                        }
                            />
                        <span className="icn_passAbslt">
                          <img
                              onClick={(e) => setResetPasswordShown(!resetPasswordShown)}
                              src={require(`assets/images/icons/${resetPasswordShown? "icb_eye_hide_black" : "icb_eye_black"}.png`)}
                              />
                        </span>
                        { simpleValidator.current.message(
                            "confirm_password",
                            user.confirm_password,
                            `required|sameAs:${user.password}`
                        )}
                      </div>
                      <div className="mt_25">
                        <div className="form_group_modify mb_25">
                          <label className="lps_cont_check">
                            I am 18 years or older
                            <input type="checkbox" checked={true} />
                            <span className="lps_Checkmark"></span>
                          </label>
                        </div>
                        <div className="form_group_modify">
                          <label className="lps_cont_check">
                            Keep me signed in
                            <input type="checkbox" defaultChecked />
                            <span className="lps_Checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pos_wrp onboarding_btm">
                      <button
                          type="submit"
                          className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio"
                          >
                        Review Terms &amp; Conditions
                      </button>
                      <p className="btm_links mt_25 text_white">
                        Have an account?{" "}
                        <Link to="/login" className="link_underline lps_link">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      )}
      </>
  );
};

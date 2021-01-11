import React,{useState, useRef} from "react";
import { Link, useHistory } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { toastMsg } from 'utility/utility';
import { changePassword } from "redux/actions/user/action";
import { routes } from "utility/constants/constants";

export default () => {
  const history = useHistory();
  const defaultForm = {
    current_password: "",
    password: "",
    password_confirmation: "",
  }
  const [passwordForm, setPasswordForm] = React.useState(defaultForm);
  const [isSubmitted, setSubmitted] = useState(false);
  const [currentPasswordShown, setCurrentPasswordShown] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
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

  const handleChange = (e) => {
    setPasswordForm({...passwordForm, [e.target.name]: e.target.value});
    forceUpdate(1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
    changePassword({user: passwordForm}).then(res => {
      if (res.data && res.data.success) {
        toastMsg("Password changed successfully!");
        history.push(routes.MY_ACCOUNT);
      }
    })}
    else {
      setSubmitted(true);
      simpleValidator.current.showMessages(); //show validation messages
      forceUpdate(1);
    };
  };

  return (
      <div className="lps_container mt_0">
        <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to={routes.MY_ACCOUNT}>
          <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
          <span className="lp_left_auto text_black">change password</span>
        </Link>
        <div className="lps_list_group my_acctn_list my_acctn_list_pl0 changePassword lipsFields">
          <form onSubmit={handleSubmit}>
            <div className="lps_fields">
              <div className="form_group_modify">
                <label for="current_password">current password</label>
                <input type={currentPasswordShown ? "text" : "password"} className="input_modify" name="current_password" onBlur={(e) =>
                         isSubmitted ?  simpleValidator.current.showMessageFor("current_password") : true
                        }
                 onChange={handleChange} placeholder="current password"/>
                {/* <span className="icn_passAbslt_password">
                          <img
                              onClick={() => setCurrentPasswordShown(!currentPasswordShown)}
                              src={require(`assets/images/icons/${currentPasswordShown? "icb_eye_hide_black" : "icb_eye_pink"}.png`)}
                              />
                        </span>  */}
                 { simpleValidator.current.message("current_password",passwordForm.current_password,"required")}
              </div>
            </div>
            <div className="lps_fields">
              <div className="form_group_modify">
                <label for="current_password">new password</label>
                <input type={passwordShown ? "text" : "password"} className="input_modify" name="password" onBlur={(e) =>
                         isSubmitted ?  simpleValidator.current.showMessageFor("password") : true
                        }
                onChange={handleChange} placeholder="new password"/>
                <span className="icn_passAbslt_password">
                          <img
                              onClick={() => setPasswordShown(!passwordShown)}
                              src={require(`assets/images/icons/${passwordShown? "icb_eye_hide_black" : "icb_eye_pink"}.png`)}
                              />
                        </span>
                { simpleValidator.current.message("password", passwordForm.password ,"required")}
              </div>
            </div>
            <div className="lps_fields">
              <div className="form_group_modify">
                <label for="current_password">confirm password</label>
                <input type={confirmPasswordShown ? "text" : "password"} className="input_modify" name="password_confirmation"  onBlur={(e) =>
                        isSubmitted ?   simpleValidator.current.showMessageFor("password_confirmation") : true
                        }
                 onChange={handleChange} placeholder="confirm password"/>
                 <span className="icn_passAbslt_password">
                          <img
                              onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                              src={require(`assets/images/icons/${confirmPasswordShown? "icb_eye_hide_black" : "icb_eye_pink"}.png`)}
                              />
                        </span> 
                 { simpleValidator.current.message("password_confirmation",passwordForm.password_confirmation,`required|sameAs:${passwordForm.password}`)}
              </div>
            </div>
            <div className="pos_wrp onboarding_btm">
              <button
                  type="submit"
                  className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio chng_pwd_btn"
                  >
                Change Password
              </button>
              </div>
          </form>
        </div>
      </div>
  )
}
import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as actions from "redux/actions";
import { routes } from "utility/constants/constants";
export default () => {
  const history = useHistory();
  const {user} = useSelector(store => store.authReducer);
  const [privacy_settings, setPrivacy] = useState(user.privacy_settings);

  const changePrivacyPolicy = () => {
    actions.changePrivacy({privacy_settings}).then(res => {
      history.push(routes.CUSTOMIZE_FEEDS);
    });
  };

  return (
          <div id="wrap" className="mt_0 lps_bg_secondary">
            <div className="lps_container lps_bg_secondary lps_text_white mt_0">
              <div className="acctn_privacy on_boarding_wrp_spwn border_0">
                <article className="lps_art lps_px15">
                  <h3>How private do you want your <br/>account?</h3>
                    <p>You can always change this in your Account settings </p>
                  </article>
                  <ul className="lps_list_group my_acctn_list removeWhiteLine">
                    <li className="list-group-item">
                      <div className="lps_user_info">
                        <label className="lps_cont_rdo">
                          <span className="ft_Weight_500 radio_title">Public</span> <br/>
                          Anyone on the internet can see your posts
                          <input type="radio" checked="checked" name="radio" value={privacy_settings} checked={privacy_settings === "public"} onClick={e=> setPrivacy("public")} />
                            <span className="lps_checkmark"></span>
                          </label>
                            <label className="lps_cont_rdo">
                              <span className="ft_Weight_500 radio_title">Private</span><br/>
                              Only People who follow you can see your posts
                              <input type="radio" name="radio" value={privacy_settings} checked={privacy_settings === "private"} onClick={e=> setPrivacy("private")}/>
                                <span className="lps_checkmark"></span>
                              </label>
                            </div>
                            </li>
                          </ul>
                            <div className="btn_block">
                              <button onClick={changePrivacyPolicy} className="theme_btn theme_primary btn_r25 text_uppercase W-50P desktopVersio">Continue</button>
                            </div>
                          </div>
                        </div>
                        </div>
                     
  )
}
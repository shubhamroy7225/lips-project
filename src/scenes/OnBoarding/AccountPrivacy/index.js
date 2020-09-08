import React from "react";
import {Link } from "react-router-dom";
export default () => {
  return (
          <div id="wrap" className="mt_0">
            <div className="lps_container lps_bg_secondary lps_text_white mt_0">
              <div className="acctn_privacy on_boarding_wrp_spwn border_0">
                <article className="lps_art lps_px15">
                  <h3>How private do you want your <br/>account?</h3>
                    <p>You can always change this in your Account settings </p>
                  </article>
                  <ul className="lps_list_group my_acctn_list">
                    <li className="list-group-item">
                      <div className="lps_user_info">
                        <label className="lps_cont_rdo">
                          <span className="ft_Weight_500 radio_title">Public</span> <br/>
                          Anyone on the internet can see you posts
                          <input type="radio" checked="checked" name="radio" />
                            <span className="lps_checkmark"></span>
                          </label>
                          <label className="lps_cont_rdo">
                            <span className="ft_Weight_500 radio_title">Only Registered users</span><br/>
                            Only registered Lips users can find & see me
                            <input type="radio" name="radio" />
                              <span className="lps_checkmark"></span>
                            </label>
                            <label className="lps_cont_rdo">
                              <span className="ft_Weight_500 radio_title">Private</span><br/>
                              Only People who follow you can see your posts
                              <input type="radio" name="radio" />
                                <span className="lps_checkmark"></span>
                              </label>
                            </div>
                            </li>
                          </ul>
                            <div className="btn_block">
                              <Link to="/customize-tags" className="theme_btn theme_primary btn_r25 text_uppercase">Continue</Link>
                            </div>
                          </div>
                        </div>
                        </div>
                     
  )
}
import React from "react";

export default () => {
  return (
      <div class="limiter">

        <div class="container-login100">
          <div id="wrap" class="mt_0">
            <div class="lps_container lps_bg_secondary lps_text_white">
              <div class="acctn_privacy on_boarding_wrp_spwn border_0">
                <article class="lps_art lps_px15">
                  <h5>How private do you want your <br/>account?</h5>
                    <p>You can always change this in your Account settings </p>
                  </article>
                  <ul class="lps_list_group my_acctn_list">
                    <li class="list-group-item">
                      <div class="lps_user_info">
                        <label class="lps_cont_rdo">
                          <span class="ft_Weight_600">Public</span> <br/>
                          Anyone on the internet can see you posts
                          <input type="radio" checked="checked" name="radio" />
                            <span class="lps_checkmark"></span>
                          </label>
                          <label class="lps_cont_rdo">
                            <span class="ft_Weight_600">Only Registered users</span><br/>
                            Only registered Lips users can find & see me
                            <input type="radio" name="radio" />
                              <span class="lps_checkmark"></span>
                            </label>
                            <label class="lps_cont_rdo">
                              <span class="ft_Weight_600">Private</span><br/>
                              Only People who follow you can see your posts
                              <input type="radio" name="radio" />
                                <span class="lps_checkmark"></span>
                              </label>
                            </div>
                            </li>
                          </ul>
                            <div class="btn_block">
                              <a href="Just_registered_browse_or_customize.html" class="theme_btn theme_primary btn_r25 text_uppercase">Continue</a>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
  )
}
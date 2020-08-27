import React from "react";

export default () => {
  return (
      <div class="limiter">
        <div class="container-login100">
          <div id="wrap" class="mt_0">

            <div class="lps_container">
              <div class="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp">
                <div class="lps_form_wrp">
                  <form>
                    <article class="text_center lps_logo_center">
                      <a class="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.png")} alt="Lips Logo" class="header__logo" />
                        <h5 class="text_uppercase text_white">Sign In</h5>
                      </a>
                    </article>
                    <div class="lps_fields">
                      <div class="form_group_modify">
                        <input type="text" class="input_modify" placeholder="Username" />
                      </div>
                      <div class="form_group_modify lps_pos_rltv">
                        <input type="password" class="input_modify" placeholder="Password" />
                        <span class="icn_passAbslt">
                          <img src={require("assets/images/icons/icb_eye_white.png")} />
                        </span>
                      </div>
                      <div class="form_group_modify text_right mb20">
                        <a href="#" class="link_white link_underline">Forgot Password</a>
                      </div>
                      <div class="form_group_modify">
                        <label class="lps_cont_check">Keep me signed in
                          <input type="checkbox" checked />
                          <span class="lps_Checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="pos_wrp onboarding_btm">
                      <a href="main_feed.html" class="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase">Signe In</a>
                      <p class="btm_links mt_25 text_white">New to Lips? <a href="register.html" class="link_underline lps_link">Register</a></p>
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
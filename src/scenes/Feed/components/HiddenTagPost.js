import React from 'react';
import { Link } from 'react-router-dom';

const HiddenTagPost = ({viewAnywayHandler, hidden_hashtags}) => {
  return (
    <div className="lps_list bg_grayCCC mt45">
      <div className="lps_flx_vm_jc lps_feed_settings">
        <div className="lps_form_wrp on_boarding_wrp_spwn">

          <div className="lps_header_wrp lps_header_end">
            <Link to="" className="lps_circle_white1">
              <img src={require("assets/images/icons/icn_about.svg")} alt="Icon" />
            </Link>
          </div>

          <article className="lps_art lps_art_white text_center">
            <figure className="lps_fig_xs mt_25">
              <img src={require("assets/images/icons/icn_pat_active.svg")} alt="Icon" />
            </figure>
            <h4 className="post_para1">
              This post includes
            </h4>
            {hidden_hashtags.map((item, i) => (
                <button className="theme_btn theme_secondary text_white" key={i}>{item}</button>
            ))}
          </article>

          <div className="pos_wrp onboarding_btm text_center">
            <button onClick={viewAnywayHandler} className="theme_btn theme_outline_primary text_secondary theme_btn_rds25 text_uppercase min_w_170 ft_Weight_500">View
              Anyway</button>
            <p className="btm_links mt45 text_white"><Link to="/settings/feed-setting" className="link_underline link_black">Feed Settings</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HiddenTagPost
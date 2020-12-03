import React, { useRef } from "react";
import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel2';
import { routes } from "utility/constants/constants";

export default () => {
  const ref = useRef();
  const options = {
    items: 1,
    animateOut: "fadeOut",
    loop: true,
    rewind: true,
    autoplay: true
  };
  return (
    <>
      <div id="wrap" className="mt_0">
        <div className="lps_container lps_NewChngCon mt_0 landingContainer">
          <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp">
            <div className="lps_form_wrp">
              <form>
                <article className="text_center lps_logo_center">
                  <Link className="logo" to="#">
                    <img src={require("assets/images/thumbnails/new_logo.svg")} alt="Lips Logo" className="header__logo" />
                  </Link>
                </article>
                <div className="product_grid_block saved_product pd_y brand_product_wrp px_0 landingCarouse">
                  <OwlCarousel ref={ref} options={options} >
                    <div className="item">
                      <div className="product_item_wrp">
                        <h5>A creative space for women-identified &amp; LGBTQIA+ creators</h5>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_item_wrp">
                        <h5>Share your work and explore content by the creators you love</h5>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_item_wrp">
                        <h5>Express yourself without biased censorship or online harassment</h5>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
                <div className="pos_wrp">
                  <Link to={routes.LOGIN} className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase lps_mb10 W-50P desktopVersio">
                    Sign in</Link>
                  <Link to={routes.CUSTOMIZE_FEEDS} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio">
                    Just Browse</Link>
                  <p className="btm_links mt_25 text_gary">
                    You must be 17 or older to use Lips
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
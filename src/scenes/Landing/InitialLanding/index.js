import React from "react";
import { Link } from "react-router-dom"
export default () => {
  return (
      <div className="limiter">
        <div className="container-login100">
          <div id="wrap" className="mt_0">
            <div className="lps_container">
              <div className="lps_flx_vm_jc lps_bg_txt_white on_boarding_wrp">
                <div className="lps_form_wrp">
                  <form>
                    <article className="text_center lps_logo_center">
                      <a className="logo_txt" href="#">
                        Lips
                      </a>
                    </article>
                    <div className="product_grid_block saved_product pd_y brand_product_wrp px_0">
                      <div className="owl-carousel owl-theme lps_slider product_slider1 pd_t10 brand_pro_slider" id="product_slider2">
                        <div className="item">
                          <div className="product_item_wrp">
                            <div className="product_item">
                              <figure className="lps_fig">
                                <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1"/>
                              </figure>
                            </div>
                            <h5>Discover Open & Honest Content</h5>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product_item_wrp">
                            <div className="product_item">
                              <figure className="lps_fig">
                                <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1"/>
                              </figure>
                            </div>
                            <h5>Show Lips love</h5>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product_item_wrp">
                            <div className="product_item">
                              <figure className="lps_fig">
                                <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1"/>
                              </figure>
                            </div>
                            <h5>Create your collections</h5>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product_item_wrp">
                            <div className="product_item">
                              <figure className="lps_fig">
                                <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1"/>
                              </figure>
                            </div>
                            <h5>Express youself</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pos_wrp">
                      <a href="sign_in.html" className="theme_btn theme_light btn_block theme_btn_rds25 text_uppercase lps_mb10">Signe In</a>
                      <a href="/browse-landing" className="theme_btn theme_light btn_block theme_btn_rds25 text_uppercase">Just Browse</a>
                      <p className="btm_links mt_25 text_white">You must be 18 or older to use Lips <a href="#" className="link_underline link_white">Leave</a></p>
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
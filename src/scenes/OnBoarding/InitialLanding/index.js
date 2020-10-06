import React from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import AddToHome from "scenes/components/AddToHome";

export default () => {
   const {isModel, count} = useSelector(state => state.authReducer);
   
   return (
      <>
         <div id="wrap" className="mt_0">
            <div className="lps_container lps_NewChngCon mt_0">
               <div className="lps_flx_vm_jc lps_bg_txt_white lps_bg_secondary on_boarding_wrp">
                  <div className="lps_form_wrp">
                     <form>
                        <article className="text_center lps_logo_center">
                           <Link className="logo" to="#">
                              <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" className="header__logo" />
                           </Link>
                        </article>
                        <div className="product_grid_block saved_product pd_y brand_product_wrp px_0">
                           <div className="owl-carousel owl-theme lps_slider product_slider1 pd_t10 brand_pro_slider" id="product_slider2">
                              <div className="item">
                                 <div className="product_item_wrp">
                                    <div className="product_item">
                                       <figure className="lps_fig">
                                          {/* <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1" /> */}
                                       </figure>
                                    </div>
                                    <h5>Discover Open & Honest Content</h5>
                                 </div>
                              </div>
                              <div className="item">
                                 <div className="product_item_wrp">
                                    <div className="product_item">
                                       <figure className="lps_fig">
                                          {/* <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1" /> */}
                                       </figure>
                                    </div>
                                    <h5>Show Lips love</h5>
                                 </div>
                              </div>
                              <div className="item">
                                 <div className="product_item_wrp">
                                    <div className="product_item">
                                       <figure className="lps_fig">
                                          {/* <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1" /> */}
                                       </figure>
                                    </div>
                                    <h5>Create your collections</h5>
                                 </div>
                              </div>
                              <div className="item">
                                 <div className="product_item_wrp">
                                    <div className="product_item">
                                       <figure className="lps_fig">
                                          {/* <img src={require("assets/images/thumbnails/thumbnail1.png")} alt="thumbnail1" /> */}
                                       </figure>
                                    </div>
                                    <h5>Express youself</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="pos_wrp">
                           <Link to="/login" className="theme_btn theme_primary btn_block theme_btn_rds25 text_uppercase lps_mb10 W-50P">
                              Sign in</Link>
                           <Link to="/customize-tags" className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase W-50P">
                              Just Browse</Link>
                           <p className="btm_links mt_25 text_white">
                              You must be 18 or older to use Lips
                            </p>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {isMobile && <AddToHome />}
      </>
   )
}
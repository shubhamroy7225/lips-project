import React from "react";
export default () => {

  return (
    
      
      <div id="wrap">
        <div className="lps_container bg_grayCCC">
          <div className="lps_list">
            <div className="lps_inner_wrp lps_inner_wrp_media">
              <div className="lps_media lps_pos_rltv lps_f_end">
                <figure className="lps_fig lps_fig_circle">
                  <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                </figure>
                <div className="lps_media_body">
                  <div className="lps_media_body">
                    <p className="more"><span className="text_primary ft_Weight_500">username </span></p>
                    <figure className="lps_fig lps_fig_cont lps_fig_circle lps_float_right">
                      <a href="/edit-profile"><img src={require("assets/images/icons/icn_paint_active.svg")} alt="User" /></a>
                    </figure>
                   {/* <figure className="lps_fig lps_fig_circle lps_float_right">
                      <a href="#" id="heart_notify">
                        <img src={require("assets/images/icons/user_outline.png")} alt="User" />
                      </a>
                    </figure>  */}
                    <div className="hover_bkgr_fricc heart_notify_box" id="trigger_heart_popup">
                      <div className="popup_cont lps_pos_rltv">
                        <div className="popup_body">
                          Get notified every time the post
                        </div>
                        <span className="bottm_shape"></span>
                      </div>
                      <a href="#" className="heart_notify_right">
                        <img src={require("assets/images/icons/icn_heart_outline.png")} alt="User" />
                      </a>
                    </div> 
                  </div>
                </div>
              </div>

              <p className="mt_15 mb_5"> sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <a href="#" className="dots_link" id="trigger_followers_block"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                <div className="followers_block followers_block_none" id="followers_block">
                  <a href="javascript:void(0);" className="followers_trigger">000 <br/> Followers </a>
                  <a href="javascript:void(0);" className="following_trigger">000 <br/> Following </a>
                </div>
            </div>
          </div>
         
          <section className="lips_tab tabs_grid_view_sec">
            <ul className="tabs_block_cst">
              <li className="tab-link" data-tab="tab-1">
                <figure className="lps_fig lps_fig_sm">
                  <img src={require("assets/images/icons/icn_image_sm_white.svg")} alt="Picture" />
                </figure>
              </li>
              <li className="tab-link" data-tab="tab-2">
                <figure className="lps_fig lps_fig_sm">
                  <img src={require("assets/images/icons/icn_folder.png")} alt="Folder" />
                </figure>
              </li> 
            </ul>

            <div id="tab-1" className="tab-content_cst current pt_0">
              <div className="lps_product_grid">
                <div className="product_card">
                  <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </div>
                <div className="product_card">
                 <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </div>
                <div className="product_card">
                  <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </div>
                <div className="product_card">
                  <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </div>
                <div className="product_card">
                 <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </div>
                <div className="product_card">
                  <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-content_cst">
              <div className="lps_inner_wrp">
                <ul className="lps_ul lps_ul_folder">
                  <li>
                    <figure className="lps_fig lps_fig_md">
                      <img src={require("assets/images/icons/icn_folder.png")} alt="Icon folder" />
                    </figure>
                    <p>Collection</p>
                  </li>
                  <li>
                    <figure className="lps_fig lps_fig_md">
                      <img src={require("assets/images/icons/icn_folder.png")} alt="Icon folder" />
                    </figure>
                    <p>Collection</p>
                  </li>
                  <li>
                    <figure className="lps_fig lps_fig_md">
                      <img src={require("assets/images/icons/icn_folder.png")} alt="Icon folder" />
                    </figure>
                    <p>Collection</p>
                  </li>
                  <li>
                    <figure className="lps_fig lps_fig_md">
                      <img src={require("assets/images/icons/icn_folder.png")} alt="Icon folder" />
                    </figure>
                    <p>Collection</p>
                  </li>
                  <li>
                    <figure className="lps_fig lps_fig_md">
                      <img src={require("assets/images/icons/icn_folder.png")} alt="Icon folder" />
                    </figure>
                    <p>Collection</p>
                  </li>
                  <li>
                    <figure className="lps_fig lps_fig_md">
                      <img src={require("assets/images/icons/icn_folder.png")} alt="Icon folder" />
                    </figure>
                    <p>Collection</p>
                  </li>

                </ul>
              </div>
            </div>
          </section>
             
            <div className="footer-menu-list">
              <div className="horizantal_coll">
                <i className="fa fa-angle-top wr_icon_top" aria-hidden="true"></i>
              </div>
              <div className="collapsible">
                <ul className="ul_list custom_ul">
                  <li className="listed_item">
                    <a href="post.html" className="collapse_links">
                      <img src={require("assets/images/icons/white_plus.svg")} className="ci_image" alt="plus" />
                    </a>
                  </li>
                  <li className="listed_item">
                    <a href="explore.html" className="collapse_links">
                      <img src={require("assets/images/icons/white_search.svg")} className="ci_image" alt="search" />
                    </a>
                  </li>
                  <li className="listed_item">
                    <a href="liked.html" className="collapse_links">
                      <img src={require("assets/images/icons/white_kiss.svg")} className="ci_image" alt="mouth" />
                    </a>
                  </li>
                  <li className="listed_item">
                    <a href="my_user_profile.html" className="collapse_links">
                      <img src={require("assets/images/icons/user_white.svg")} className="ci_image" alt="user" />
                    </a>
                  </li>
                  <li className="listed_item">
                    <a href="javascript: void(0);" className="right_widget">
                      <i className="fa fa-angle-right wr_icon" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            

            
            <div className="bg_grayCCC lps_h_100 followers_wrp">
              <div className="lps_inner_wrp lps_inner_content lps_h_100 bg_grayCCC followers_wrp_inner">
                <div className="lps_title_wrp text_center lps_pos_rltv">
                  <a className="lps_arrow_left close_follow" href="#">
                    <img src={require("assets/images/icons/icn_close.png")} className="lps_header_img" alt="Icon Arrow" />
                  </a>
                  <div className="lps_txtFollow_center">
                    <span className="lps_sm_folow">Followers</span>
                  </div>
                </div>
                <div className="follow_overflow">
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                      <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">follower</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg_grayCCC lps_h_100 following_wrp">
              <div className="lps_inner_wrp lps_inner_content lps_h_100 bg_grayCCC following_wrp_inner">
                <div className="lps_title_wrp text_center lps_pos_rltv">
                  <a className="lps_arrow_left close_follow" href="#">
                     <img src={require("assets/images/icons/icn_close.png")}  alt="Icon Arrow" className="lps_header_img"/>
                  </a>
                  <div className="lps_txtFollow_center">
                    <span className="lps_sm_folow">Following</span>
                  </div>
                </div>
                <div className="follow_overflow">
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                      <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                      <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                      <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lps_media lps_f_vm lps_follow_media">
                    <figure className="lps_fig lps_fig_circle">
                       <img src={require("assets/images/icons/user.jpg")}  alt="User" />
                    </figure>
                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="lps_flx_vm_jsbtwn">
                          <span className="lps_sm_folow">following</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
        </div>
      </div>
    
                     
  )
}
import React from 'react';
import {Link} from "react-router-dom";
const FeedSetting = () => {
  return (
    <>
            <div id="wrap" className="mt_0">
               <div className="lps_container mt_0">
               <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
                  <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                  <span className="lp_left_auto text_black">Feed Settings</span>
               </Link>
                  <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
                     <li className="list-group-item">
                        
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <article>
                             <h5 className="ft_Weight_500 mb_5">This product</h5>
                              <p className="mb_0">is meant for educational purposes only.</p>
                           </article>
                           <label className="lps_switch">
                           <input type="checkbox" checked/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li>   
                        <li className="list-group-item">
                        
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <article>
                             <h5 className="ft_Weight_500 mb_5">This product</h5>
                              <p className="mb_0">is meant for educational purposes only.</p>
                           </article>
                           <label className="lps_switch">
                           <input type="checkbox" checked/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li> 
                        <li className="list-group-item">
                        
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <article>
                             <h5 className="ft_Weight_500 mb_5">This product</h5>
                              <p className="mb_0">is meant for educational purposes only.</p>
                           </article>
                           <label className="lps_switch">
                           <input type="checkbox" checked/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li> 
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links my_10">
                           <h5 className="ft_Weight_500 mb_5">Thing you're seeing more of </h5>
                           <p className="lps_md_para">Click to unselect or browse for more tags to add</p>
                        </div>
                        <div className="lps_hash_tags_wrp hash_tag_block hash_tag_links lps_user_info">
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtagtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtagtag</Link>
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                           </div>
                           
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                           </div>
                           <div className="hashtag my_10">
                              <Link to ="javascript:void(0);" className="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase min_w_170">Add more</Link>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links my_10">
                           <h5 className="ft_Weight_500 mb_5">Things you're not seeing</h5>
                           <p className="lps_md_para">Click to unselect or browse for more tags to add</p>
                        </div>
                        <div className="lps_hash_tags_wrp hash_tag_block hash_tag_links lps_user_info">
                           <div className="hashtag">
                              <Link to ="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtagtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to ="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtagtag</Link>
                              <Link to ="javascript:void(0);" className="theme_btn theme_secondary text_white">#Hashtag</Link>
                           </div>
                           
                           <div className="hashtag my_10">
                              <Link to="javascript:void(0);" className="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase min_w_170">Add more</Link>
                              
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="lps_md_title ft_Weight_500 mt_10">Blocked Users</p>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="lps_link lps_flt_right ft_Weight_600">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0 ft_Weight_500">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className=" lps_link lps_flt_right ft_Weight_600">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0 ft_Weight_500">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className=" lps_link lps_flt_right ft_Weight_600">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0 ft_Weight_500">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className=" lps_link lps_flt_right ft_Weight_600">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0 ft_Weight_500">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="lps_link lps_flt_right ft_Weight_600">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0 ft_Weight_500">Username</p>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}
export default FeedSetting
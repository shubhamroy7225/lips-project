import React from 'react';
import {Link} from "react-router-dom";
const FeedSetting = () => {
  return (
    <>
            <div id="wrap" className="feed-settings">
               <div className="lps_container">
                  <ul className="lps_list_group my_acctn_list">
                     <li className="list-group-item">
                        <div className="lps_media lps_flx_vm my_acctn_pt10">
                           <figure className="lps_fig lps_fig_circle lps_fig_circle_visible">
                              <img src={require("assets/images/icons/icn_settings_black.png")} alt="User"/>
                           </figure>
                           <div className="lps_media_body">
                              <p className="lps_md_title">Feed settings</p>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links lps_mb20">
                           <p className="lps_md_title">Subheading</p>
                        </div>
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <p className="mb_0">This product is meant for educational<br/> purposes only.</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                           <p className="mb_0">This product is meant for educational<br/> purposes only.</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                        <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm">
                           <p className="mb_0">This product is meant for educational<br/> purposes only.</p>
                           <label className="lps_switch">
                           <input type="checkbox"/>
                           <span className="lps_int_slider round"></span>
                           </label>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links lps_mb10">
                           <p className="lps_md_title">Thing you're seeing more of </p>
                        </div>
                        <div className="hash_tag_block hash_tag_links lps_user_info">
                           <div className="hashtag text-left">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag text-left">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag text-left">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag text-left">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag text-left">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag text-left">
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="add_tag_link">
                              <img src={require("assets/images/icons/add.svg")} alt="Add Icon" className="add_icn_outline"/>
                              <img src={require("assets/images/icons/add_fill.svg")} alt="Add Icon" className="add_icn_fill"/>
                              </Link>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links lps_mb10">
                           <p className="lps_md_title">Thing you're seeing more of </p>
                        </div>
                        <div className="hash_tag_block hash_tag_links lps_user_info">
                           <div className="hashtag">
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to ="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                           </div>
                           <div className="hashtag">
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="hashtag_btn">#Hashtag</Link>
                              <Link to="javascript:void(0);" className="add_tag_link">
                              <img src={require("assets/images/icons/add.svg")} alt="Add Icon" className="add_icn_outline"/>
                              <img src={require("assets/images/icons/add_fill.svg")} alt="Add Icon" className="add_icn_fill"/>
                              </Link>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="lps_md_title">Blocked Users</p>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="link_underline lps_link lps_flt_right">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="link_underline lps_link lps_flt_right">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="link_underline lps_link lps_flt_right">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="link_underline lps_link lps_flt_right">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0">Username</p>
                              </div>
                           </div>
                           <div className="lps_media lps_flx_vm my_acctn_pt10">
                              <figure className="lps_fig lps_fig_circle">
                                 <img src={require("assets/images/icons/user.jpg")} alt="User"/>
                              </figure>
                              <div className="lps_media_body">
                                 <Link to="#" className="link_underline lps_link lps_flt_right">
                                 unblock</Link>
                                 <p className="lps_md_title mb_0">Username</p>
                              </div>
                           </div>
                           <div className="see_more_wrp text_center">
                              <Link to="#" className="lps_link link_underline">
                              more</Link>
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
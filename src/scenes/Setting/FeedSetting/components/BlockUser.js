import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import * as actions from "redux/actions";
const blockUser = () => {
  return (
    <>
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
    </>
  );
}
export default blockUser
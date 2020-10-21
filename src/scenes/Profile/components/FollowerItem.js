import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';
import $ from 'jquery';
import scroller from 'scenes/Feed/Home/scroller';

const FollowerItem = ({ data, user }) => {
    let history = useHistory()
    const profilePhoto = user.photo_urls && user.photo_urls.medium ? user.photo_urls.medium : require("assets/images/icons/user.jpg");

    const moveToProfile = () => {
        $('.followers_wrp').addClass('close');
        $('.followers_wrp').removeClass('open');
        $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        history.push(`${routes.PROFILE}/${user.user_name}`)
    }

    return (
        <div class="lps_media lps_f_vm lps_follow_media">
            <figure class="lps_fig lps_fig_circle">
                <img src={profilePhoto} alt="User" />
            </figure>
            <div class="lps_media_body">
                <div class="lps_media_body">
                    <div class="lps_flx_vm_jsbtwn">
                        <span class="lps_sm_folow"><a onClick={() => { moveToProfile() }}>{user.user_name}</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowerItem;
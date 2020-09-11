import React from 'react';

const FollowerItem = (props) => {
    return (
        <div class="lps_media lps_f_vm lps_follow_media">
            <figure class="lps_fig lps_fig_circle">
                <img src={require("assets/images/icons/user.jpg")} alt="User" />
            </figure>
            <div class="lps_media_body">
                <div class="lps_media_body">
                    <div class="lps_flx_vm_jsbtwn">
                        <span class="lps_sm_folow">follower</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowerItem;
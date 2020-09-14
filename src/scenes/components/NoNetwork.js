import React from 'react';

const NoNetwork = (props) => {
    return (
        <div id="wrap" class="mt_0">
            <div class="lps_container no_netwrok lps_bg_secondary ">
                <div class="lps_inner_wrp wave_shape_mxW">
                    <div class="lps_top_d">
                        <figure class="lps_fig">
                            <img src={require("assets/images/icons/icn_network.png")} />
                        </figure>
                    </div>
                    <div class="lps_bottom_d">
                        <article class="lps_art">
                            <h2 class="btm_xs_bdr">Oh Snap!</h2>
                            <p>
                                We're sorry, but something went wrong.
                                Don't worry, it's not your fault. Please check
                                your connection and try again.
                </p>
                            <a href="#" class="theme_btn theme_light text_uppercase btnr_25 min_w_150">Try again</a>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoNetwork;
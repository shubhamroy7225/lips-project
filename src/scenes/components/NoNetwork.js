import React from 'react';

import {Link} from "react-router-dom";
const NoNetwork = (props) => {
    return (
        <div id="wrap" class="mt_0">
            <div class="lps_container no_netwrok lps_bg_secondary ">
                <div class="lps_inner_wrp wave_shape_mxW">
                    <div class="lps_top_d">
                        <figure class="lps_fig">
                            <img src={require("assets/images/thumbnails/no_network.svg")} />
                        </figure>
                        <article class="lps_art">
                            <h2 class="btm_xs_bdr">oh snap!</h2>
                            <p>
                                Something went wrong. Please check your connection and try again.
                </p>
                            <button onClick={() => console.log("no network")} class="theme_btn theme_outline_primary text_white text_uppercase btnr_25 min_w_170">Try again</button>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoNetwork;
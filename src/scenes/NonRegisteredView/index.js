import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';

const Options = {
    create: {
        title: "Want to post?",
        desc: "Registered and approved users can easily manage or text posts (from cat pics to high art. Lips is the place for it as long as it's original content)."
    },
    likes: {
        title: "Want to spread the love ?",
        desc: "Registered users can send Lips Love and create collections of their favorite content."
    },
    explore: {
        title: "Want to explore the feeds ?",
        desc: "Registered users can explore posts of their favorite hashtags."
    },
    profile: {
        title: "Create a profile",
        desc: "Registered and approved users can easily manage or text posts (from cat pics to high art. Lips is the place for it as long as it's original content)."
    }
}

const NonRegisteredView = (props) => {
    let history = useHistory();
    let type = props.history && props.history.location.state && props.history.location.state.type;
    if (!type) {
        type = routes.PROFILE //setting default option
    }
    type = type.substring(1);
    let option = Options[type];
    return (
        <div id="wrap" class="mt_0">
            <div class="lps_containe lps_bg_secondary lps_text_white">
                <div class="top_sub_header">
                    <a onClick={() => history.push(routes.MAIN_FEED)} class="close_link">
                        <img src={require("assets/images/icons/icn_close_white.png")} alt="Close Icon" />
                    </a>
                </div>
                <div class="lps_inner_wrp full_scr on_boarding_wrp_spwn border_0">
                    <article class="lps_art text_center">
                        <h4 class="text_center mb45">{option.title}</h4>
                        <p class="mb45">
                            {option.desc}
                        </p>
                    </article>
                    <div class="plans_wrp mt45">
                        <a onClick={() => { history.push(routes.REGISTER) }} class="theme_btn theme_outline_primary text_white btn_block btn_r25 text_uppercase lps_mb15 W-50P">Register</a>
                        <p>Already have an account? <a onClick={() => { history.push(routes.LOGIN) }} class="link_underline lps_link">Sign in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NonRegisteredView;
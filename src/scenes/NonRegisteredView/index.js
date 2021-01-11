import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';

const Options = {
    create: {
        title: "express yourself",
        desc: "Registered and approved users can easily create image or text posts to share with the lips universe. from selfies and memes, to doodles and high art - you can post & repost (almost) ANYTHING on lips."
    },
    likes: {
        title: "create a profile",
        desc: "Registered users can show Lips love, and share the content they love with others."
    },
    explore: {
        title: "eager to explore the lips universe of creators?",
        desc: "Registered users can discover posts to love and accounts to follow using our explore feature."
    },
    profile: {
        title: "express yourself",
        desc: "Registered and approved users can easily create image or text posts to share with the lips universe. from selfies and memes, to doodles and high art - you can post & repost (almost) ANYTHING on lips."
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
                    <a onClick={() => history.goBack()} class="close_link">
                        <img src={require("assets/images/icons/icn_close_white.png")} alt="Close Icon" />
                    </a>
                </div>
                <div class="lps_inner_wrp full_scr on_boarding_wrp_spwn border_0 justifyCenter">
                    <div className="commonWidth NonRegisterHeightBTWN">
                        <article class="lps_art text_center">
                            <h4 class="text_center mb45">{option.title}</h4>
                            <p class="mb45 lh30">
                                {option.desc}
                            </p>
                        </article>
                        <div class="plans_wrp mt45 text_center">
                            <a onClick={() => { history.push(routes.REGISTER) }} class="theme_btn theme_outline_primary text_white btn_block btn_r25 text_uppercase lps_mb15 desktopVersio">Register</a>
                            <p>already have an account? &nbsp; <a onClick={() => { history.push(routes.LOGIN) }} class="lps_link report_link">sign in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NonRegisteredView;
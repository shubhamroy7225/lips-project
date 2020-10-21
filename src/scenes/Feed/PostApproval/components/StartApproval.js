import React, { useRef, useState } from 'react'
import { fetchUser, sendApprovalCode } from 'redux/actions';
import SimpleReactValidator from 'simple-react-validator';
import { toastMsg } from 'utility/utility';
import * as commonService from "utility/utility";
import { routes } from 'utility/constants/constants';
import { Link } from 'react-router-dom';

const StartApproval = ({ moveToNextStep }) => {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    //user data state
    const [accessCode, setAccessCode] = useState("");


    const handleSubmit = async () => {
        if (accessCode.length > 0) {
            commonService.isLoading.onNext(true);
            const response = await sendApprovalCode(accessCode);
            if (response.data.success === true) {
                const userResponsne = await fetchUser();
                if (userResponsne.success === true) {
                    toastMsg("You are all set to post!");
                    // will navigate to create route - navigation is done in PostApproval index.js
                    //as soon as the user upadted and status is accepted the route is navigated to create 
                }
            }
            commonService.isLoading.onNext(false);
        } else {
            moveToNextStep();
        }
    };

    const handleChange = (e) => {
        setAccessCode(e.target.value);

        forceUpdate(1)
    };

    return (
        <div class="lps_container lps_bg_secondary lps_text_white">
            <div class="lps_inner_wrp full_scr on_boarding_wrp_spwn border_0">
                <article class="lps_art mt45">
                    <h3>We are so excited to have you share your voice on Lips! </h3>
                    <p class="mt45">In order to reduce hate-speech and harassment on the Lips app, we ask that new users tell us a bit about what you’d like to post. This is a one time thing, once approved you will be able to post whenever and whatever you like! </p>
                    <p>You can post (almost) ANYTHING on Lips and you don’t have to worry about biased censorship here! We see you, we hear you and we want you to express yourself freely! </p>
                    <p>Our only ask is that you read and adhere to our <Link to={routes.SETTING_COMMUNITY_GUIDELINES} class="lps_link link_underline">Community guidelines</Link>, which have been carefully crafted BY THE COMMUNITY. These guidelines ensure an open & honest environment, where everyone has the chance to safely speak their truth without fear of harassment. </p>
                    <p>TL/DR - Hate-speech get outta here. </p>
                </article>
                <div class="plans_wrp text_center mt45">
                    <a onClick={handleSubmit} class="theme_btn theme_primary btn_block btn_r25 text_uppercase lps_mb15 W-50P desktopVersio">Get Approved</a>
                </div>
                <div className="lps_fields ifAccess">
                    <p className="mt45">If you have an access code to skip the approval process, enter your code here</p>
                    <div className="form_group_modify">
                        <input type="text"
                            name="accessCode"
                            className="input_modify input_brdrBtnmP"
                            placeholder="access code"
                            value={accessCode}
                            onBlur={() => simpleValidator.current.showMessageFor('accessCode')}
                            onChange={handleChange} />
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default StartApproval;
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
                    <h3>Want to post your original work?</h3>
                    <p class="mt45">
                        In order to keep everyone in the Lips Community safe, we just ask that you tell us-yes, we are real human - a little bit about yourself & read through our <Link to={routes.SETTING_COMMUNITY_GUIDELINES} class="lps_link link_underline">Community guidelines</Link>.
              </p>
                    <p>
                        Once apporved, you can post anything from cat pics to high art - we're not here to judge. as long as it's your original content.
              </p>
                </article>
                <div className="lps_fields">
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
                <div class="plans_wrp mt45 text_center">
                    <a onClick={handleSubmit} class="theme_btn theme_primary btn_block btn_r25 text_uppercase lps_mb15 W-50P">Get Approved</a>
                </div>
            </div>
        </div>
    );
}

export default StartApproval;
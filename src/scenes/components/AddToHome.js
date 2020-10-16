import React, { useState, useEffect } from 'react';
import { isMobile } from "react-device-detect";
import {useSelector} from "react-redux";

import * as AuthActions from "redux/actions";

const AddToHome = (props) => {
    const {isLandingModalOpen} = useSelector(state => state.authReducer);
    const [hidden, setHidden] = useState(false);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        if (!loaded && !isLandingModalOpen) {
            setLoaded(true);
            setTimeout(() => AuthActions.openPageLandingModel(), 20000);  
        }
    }, [loaded]);

    const checkModalOpen = () => {
        return (!hidden && loaded && isLandingModalOpen && isMobile) ? "block" : "none";
    }
    return (
        <div class="hover_bkgr_fricc hover_alternate_W modal-backdrop" id="trigger_HomeScreen_popup" style={{ display: checkModalOpen()}}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton" id="popupCloseButton"><a onClick={() => { setHidden(true) }}><img src={require("assets/images/icons/icn_close.png")} /></a></div>
                        <figure class="lps_fig lps_top_imgs">
                            <img src={require("assets/images/icons/add_to_home_logo.svg")} alt="Image Placeholder" />
                        </figure>
                        <h2>Did you know Lips is an app?</h2>
                        <p>Add Lips to your home screen for a better experience.</p>
                        <h4>Tap <a href="#" class="inline_WText"><img src={require("assets/images/icons/icn_upload.png")} alt="Upload" /></a> then 'Add to Home Screen'</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToHome;
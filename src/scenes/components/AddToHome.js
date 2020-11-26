import React, { useState, useEffect } from 'react';
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";

import * as AuthActions from "redux/actions";

const AddToHome = (props) => {
    const { isLandingModalOpen } = useSelector(state => state.authReducer);
    const [hidden, setHidden] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const hideModal = () =>{
        setHidden(true);
        if(props.modalStatus){
          props.toggleModal(false);
        }
    }

    useEffect(() => {
        if (!loaded && !isLandingModalOpen) {
            setLoaded(true);
            setTimeout(() => AuthActions.openPageLandingModel(), 20000);
        }
    }, [loaded]);

    const checkModalOpen = () => {
        return (!hidden && loaded && isLandingModalOpen && isMobile) || props.modalStatus ? "block" : "none";
    }
    return (
        <div className="onTimeModel">
            <div className="hover_bkgr_fricc hover_alternate_W modal-backdrop home-modal" id="trigger_HomeScreen_popup" style={{ display: checkModalOpen() }}>
                <div className="modal-dialog-centered">
                    <div className="popup_cont">
                        <div className="popup_body">
                            <div className="popupCloseButton" id="popupCloseButton"><a onClick={() => { hideModal() }}><img src={require("assets/images/icons/icn_close.png")} /></a></div>
                            <figure className="lps_fig lps_top_imgs">
                                <img src={require("assets/images/icons/add_to_home_logo.svg")} alt="Image Placeholder" />
                            </figure>
                            <h2>Did you know Lips is an app?</h2>
                            <p>Add Lips to your home screen for a better experience.</p>
                            <h4>Tap <a href="#" className="inline_WText" onClick={() => { setHidden(true) }}><img src={require("assets/images/icons/icn_upload.png")} alt="Upload" /></a> then 'Add to Home Screen'</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToHome;
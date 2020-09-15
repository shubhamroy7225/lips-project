import React, { useState } from 'react';

const AddToHome = (props) => {
    const [hidden, setHidden] = useState(false)
    return (
        <div class="hover_bkgr_fricc hover_alternate_W modal-backdrop" id="trigger_HomeScreen_popup" style={{ display: hidden ? "none" : "block" }}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body">
                        <div class="popupCloseButton" id="popupCloseButton"><a onClick={() => { setHidden(true) }}><img src={require("assets/images/icons/icn_close.png")} /></a></div>
                        <figure class="lps_fig lps_top_imgs">
                            <img src={require("assets/images/thumbnails/logo.svg")} alt="Image Placeholder" />
                        </figure>
                        <h2>Lips</h2>
                        <h4 class="Opcty5">Add this app to your home screen for easy access and a better experience.</h4>
                        <h4>Tap <a href="#" class="inline_WText"><img src={require("assets/images/icons/icn_upload.png")} alt="Upload" /></a> then 'Add to Home Screen'</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToHome;
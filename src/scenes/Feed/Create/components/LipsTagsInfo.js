import React, { useRef, useState } from 'react';

const LipsTagsInfo = ({ show, dismiss }) => {
    let style = show ? { display: "block" } : { display: "none" };
    return (
        <div class="hover_bkgr_fricc" id="trigger_lips_tag_popup" style={style}>
            <div class="modal-dialog-centered">
                <div class="popup_cont">
                    <div class="popup_body post_poup lps_bg_secondary lps_text_white">
                        <div class="popupCloseButton" onClick={() => dismiss()}><img src={require("assets/images/icons/icn_close_white.png")} /></div>
                        <article class="lps_art mt_15 text_left">
                            <div class="para_list_mb">
                                <h3 class="text_white">Lips tags 101</h3>
                            </div>
                            <div class="para_list_mb">
                                <h4 class="text_white">Why?</h4>
                                <p class="text_white">
                                    Sed ut perspiciatis unde omnis iste natus error sit volu tatem accusantium doloremque laudantium, totam re aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
                            </div>
                            <div class="para_list_mb">
                                <h5 class="text_white">How do i use it?</h5>
                                <p class="text_white">
                                    Sed ut perspiciatis unde omnis iste natus error sit volu tatem accusantium doloremque laudantium, totam re aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
                            </div>
                            <div class="para_list_mb">
                                <h5 class="text_white">Can i use my own?</h5>
                                <p class="text_white">
                                    Sed ut perspiciatis unde omnis iste natus error sit volu tatem accusantium doloremque laudantium, totam re aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LipsTagsInfo
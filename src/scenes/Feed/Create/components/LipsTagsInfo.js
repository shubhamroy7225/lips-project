import React, { useRef, useState } from 'react';
import AddSuggestedTag from "./AddSuggestedTag";

const LipsTagsInfo = ({setShowLipsInfo, show, dismiss }) => {
    let style = show ? { display: "block" } : { display: "none" };
  const [openSuggestedTagModel, setSuggestedTagModel] = useState(false);
    return (
        <>{
          openSuggestedTagModel ? <AddSuggestedTag dismiss={dismiss} setShowLipsInfo={setShowLipsInfo} setSuggestedTagModel={setSuggestedTagModel}/> :
              <div className="hover_bkgr_fricc full_Hvh" id="trigger_lips_tag_popup" style={style}>
                <div className="modal-dialog-centered">
                  <div className="popup_cont">
                    <div className="popup_body post_poup lps_bg_secondary lps_text_white">
                      <div className="popupCloseButton" onClick={() => dismiss()}><img
                          src={require("assets/images/icons/icn_close_white.png")}/></div>
                      <article className="lps_art mt_15 text_left">
                        <div className="para_list_mb">
                          <h3 className="text_white">Lips tags 101</h3>
                        </div>
                        <div className="para_list_mb">
                          <h4 className="text_white">Why?</h4>

                          <p className="text_white">
                          Current platforms fail to distinguish between sexual expression and sexual exploitation - meaning that women’s bodies, sex ed, legal sex work promos, and lgbtq+ content is deleted from the Internet for no good reason. In contrast, the Lips app is an inclusive one, meaning you can avoid content you don’t want to see - without having to kick others off the platform.
                          </p>
                        </div>
                        <div className="para_list_mb">
                          <h5 className="text_white">How do i use it?</h5>

                          <p className="text_white">
                          Using our pre-set hashtags, the lips algorithm gets trained by YOU the users in the nuances of creative expression. be sure to label every post with as many hashtags as apply. This allows users to find your content, but it also enables a safe viewing experience for everyone.
                          </p>
                        </div>
                        <div className="para_list_mb">
                          <h5 className="text_white">Can i use my own?</h5>

                          <p className="text_white">
                          Yes! We want our hashtags to reflect the lips community. If you don’t see a tag in our presets, you can suggest it to our team.
                          </p>
                        </div>
                        <div className="lps_btns">
                          <button onClick={() => setSuggestedTagModel(true)}
                                  className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170 mb_0">
                            Suggest a tag
                          </button>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
        }</>
    );
}

export default LipsTagsInfo
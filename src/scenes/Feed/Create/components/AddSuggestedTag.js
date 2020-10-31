import React from "react";
import  {addSuggestedHashTag} from 'redux/actions/feed/action';

export default ({dismiss, setShowLipsInfo, setSuggestedTagModel}) => {
  const [suggestedTag, setSuggested] = React.useState("#");
  const [tagSubmitted, setSubmitted] = React.useState(false);
  const handleSubmit = (e) => {
    if(suggestedTag.length > 2){
      addSuggestedHashTag({hashtag:{name: suggestedTag}}).then(e => {
        return [setSuggested(""),setSubmitted(true)];
      })
    }
    return true;
  };

  const handleChange = (e) => {
    if (e.target.value[0] !== "#") e.target.value =`#${e.target.value}`;
    setSuggested(e.target.value);
  };

  return (
      <div className="hover_bkgr_fricc full_Hvh" id="trigger_submit_tag_popup" style={{display: "block"}}>
        <div className="modal-dialog-centered">
          <div className="popup_cont">
            <div className="popup_body post_poup lps_bg_secondary lps_text_white lps_bg_txt_white">
              <div className="popupCloseButton popupCloseButtonLeft" onClick={() => setSuggestedTagModel(false)}><img src={require("assets/images/icons/icn_left_arrow.png")} /></div>
                <article className="lps_art mt45 text_left">
                {suggestedTag &&
                  <div>
                    <div className="para_list_mb">
                      <h4 className="text_white">Can’t Find What You’re Looking For?</h4>
                      <p className="text_white lh26">
                        Suggest a tag below and we’ll look into including it as a tag for the Lips community. Keep in mind, it’s best to suggest a tag that a lot of people will want to use - so keep it broad if possible. Read more about how tags work on Lips <a href="#" onClick={e => [dismiss(), setSuggestedTagModel(false), setShowLipsInfo(true)]} className="lps_link">here</a>.
                      </p>
                    </div>
                    <div className="para_list_mb">
                      <div className="form_group_modify">
                        <input type="text" className="input_modify placeholder-color botderBot" placeholder="enter your tag here" name="suggestedTag" value={suggestedTag} onChange={handleChange} />
                      </div>
                    </div>
                    
                    <div className="lps_btns para_list_mb">
                      <button onClick={handleSubmit} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170 mb_0">Submit</button>
                    </div>
                  </div>}
                   {tagSubmitted &&<p>Our team personally looks at each suggested tag, but try our best to notify you within 24 hours - so keep an eye on your email notifications!</p>}
                  </article>
                </div>
              </div>
            </div>
          </div>
  )
}
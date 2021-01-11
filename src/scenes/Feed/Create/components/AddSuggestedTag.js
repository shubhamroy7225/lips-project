import React from "react";
import  {addSuggestedHashTag} from 'redux/actions/feed/action';

export default ({dismiss, setShowLipsInfo, setSuggestedTagModel}) => {
  const [suggestedTag, setSuggested] = React.useState("#");
  const [tagSubmitted, setSubmitted] = React.useState(false);
  const handleSubmit = (e) => {
    if(suggestedTag.length > 2){
      addSuggestedHashTag({hashtag:{name: suggestedTag}}).then(e => {
        if (e.data.success)  return [setSuggested(""),setSubmitted(true)];
        else return false;       

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
              <div className="popupCloseButton popupCloseButtonLeft" onClick={() => setSuggestedTagModel(false)}><img src={require("assets/images/icons/icn_left_arrow_white.png")} /></div>
                <article className="lps_art mt45 text_left">
                  <div>
                    <div className="para_list_mb">
                      <h4 className="text_white">Can’t find what you’re looking for?</h4>
                      <p className="text_white lh26">
                      Suggest a tag and we will consider including it in the app. Read more about how tags work on lips <a href="#" onClick={e => [dismiss(), setSuggestedTagModel(false), setShowLipsInfo(true)]} className="lps_link">here</a>.
                      </p>
                    </div>
                    <div className="para_list_mb">
                      <div className="form_group_modify">
                        <input type="text" className="input_modify placeholder-color botderBot" placeholder="enter your tag here" name="suggestedTag" value={suggestedTag} onChange={handleChange} />
                      </div>
                    </div>
                    
                    <div className="lps_btns para_list_mb">
                      {!tagSubmitted ? 
                      <button onClick={handleSubmit} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170 mb_0">Submit</button> :
                      <button onClick={handleSubmit} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170 mb_0">Submitted</button> }
                    </div>
                  </div>
                   {tagSubmitted &&<p>Our team personally looks at each suggested tag, but we’ll try our best to add your tag within 24 hours, If approved. Be sure to check back to see if your tag or a similar tag was added. </p>}
                  </article>
                </div>
              </div>
            </div>
          </div>
  )
}
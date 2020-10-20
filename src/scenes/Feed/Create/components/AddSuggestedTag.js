import React from "react";
import  {addSuggestedHashTag} from 'redux/actions/feed/action';

export default ({setSuggestedTagModel}) => {
  const [suggestedTag, setSuggested] = React.useState("#");
  const [tagSubmitted, setSubmitted] = React.useState(false);
  const handleSubmit = () => {
    addSuggestedHashTag({hashtag:{name: suggestedTag}}).then(e => {
      return [setSuggested(""),setSubmitted(true)];
    })
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
                  <div className="para_list_mb">
                    <h4 className="text_white">Can't find what you're looking for?</h4>
                    <p className="text_white lh26">
                      Suggest a tag and we will consider includung it in the app. Read more about how tags work on Lips <a href="#" className="lps_link">here</a>.
                    </p>
                  </div>
                  <div className="para_list_mb">
                    <div className="form_group_modify">
                      <input type="text" className="input_modify" placeholder="enter your tag here" name="suggestedTag" value={suggestedTag} onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="lps_btns para_list_mb">
                      <button onClick={handleSubmit} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170 mb_0">Submit</button>
                    </div>
                   {tagSubmitted &&<p>We will notify you if the tag was added</p>}
                  </article>
                </div>
              </div>
            </div>
          </div>
  )
}
import React,{useState, useRef} from "react";
import SimpleReactValidator from 'simple-react-validator';
import { routes } from "utility/constants/constants";
import * as actions from 'redux/actions/feed/action';
import { Link, useHistory } from 'react-router-dom';

export default () => {
    const [accessCode, setAccessCode] = useState("");
    const history = useHistory();
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    const handleSubmit = (e) => {
      actions.submitAccessCodeData({code:accessCode}).then(e => {
        if (e.data.success) history.push(routes.ROOT)
        else return false;       

      })
  };

  const handleChange = (e) => {
    setAccessCode(e.target.value);
    forceUpdate(1)
  };

  return (
      <div className="hover_bkgr_fricc full_Hvh" id="trigger_submit_tag_popup" style={{display: "block"}}>
        <div className="modal-dialog-centered">
          <div className="popup_cont">
            <div className="popup_body post_poup lps_bg_secondary lps_text_white lps_bg_txt_white">
              <Link className="popupCloseButton popupCloseButtonLeft" to={routes.POST_APPROVAL}><img src={require("assets/images/icons/icn_left_arrow.png")} /></Link>
                <article className="lps_art mt45 article_desktopView">
                  <div>
                    <div className="lps_fields ifAccess">
                      <p className="mt45">Access codes were sent via email to selected creators who we have worked with in the past. Is this you? Enter below to skip the approved user process, cuz you’re already in babe!</p>
                    </div>
                    <div className="lps_fields ifAccess accessCodeForm">
                      <div className="form_group_modify access-field">
                      <input type="text"
                            name="accessCode"
                            className="input_modify input_brdrBtnmP access_input"
                            placeholder="enter the code here"
                            value={accessCode}
                            onBlur={() => simpleValidator.current.showMessageFor('accessCode')}
                            onChange={handleChange} />
                      </div>
                    </div>
                    
                    <div className="lps_btns para_list_mb">
                      <button disabled={!accessCode} onClick={handleSubmit} className="theme_btn theme_outline_primary text_white btnr_25 text_uppercase min_w_170 access_button mb_0">Submit</button>
                    </div>
                  </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
  )
}
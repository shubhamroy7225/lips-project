import React, {useState} from "react";
import * as actions from "redux/actions";

export default ({user}) => {
  const [privacy_settings, setPrivacy] = useState(user.privacy_settings);

  const changePrivacyPolicy = () => {
    actions.changePrivacy({privacy_settings}).then(res => {
      return res
    });
  };

  return (
      <li className="list-group-item">
        <div className="lps_user_info">
          <p className="user_info_label lps_mb10">Account privacy</p>
          <label className="lps_cont_rdo">
            <span class="ft_Weight_500">Public</span> <br/>
            Anyone on the internet can see you posts
            <input type="radio" value={privacy_settings} checked={privacy_settings === "public"} name="radio" onChange={changePrivacyPolicy} onClick={e=> setPrivacy("public")} />
            <span className="lps_checkmark"></span>
          </label>
          <label className="lps_cont_rdo">
            <span className="ft_Weight_500">Only Lips users</span><br/>
            Only registered Lips users can find & see me
            <input type="radio" name="radio" value={privacy_settings} checked={privacy_settings === "registered"} onChange={changePrivacyPolicy} onClick={e=> setPrivacy("registered")} />
            <span className="lps_checkmark"></span>
          </label>
          <label className="lps_cont_rdo">
            <span className="ft_Weight_500">Private</span><br/>
            Only People who follow you can see your posts
            <input type="radio" name="radio" value={privacy_settings} checked={privacy_settings === "private"} onChange={changePrivacyPolicy} onClick={e=> setPrivacy("private")}  />
            <span className="lps_checkmark"></span>
          </label>
        </div>
      </li>
  )
}
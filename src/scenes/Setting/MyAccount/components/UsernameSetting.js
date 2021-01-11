import React, {useState} from "react";
import * as actions from "redux/actions";

export default ({user}) => {
  const [userForm, setUserForm] = useState({...user});


  const [inputShown, setInputShown] = useState(false);
  const inputVisible = () => {
    setInputShown(inputShown ? false : true);
  };
  const handleChange = (e) => {
    setUserForm({...userForm, [e.target.name]: e.target.value});
  };


  const updateUser = (e) => {
    const {user_name} = userForm;
    actions.verifyUsername(user_name.toLowerCase()).then(res => {
      actions.updateUser({user: {user_name: user_name.toLowerCase()}}).then(res => {
        inputVisible()
      });
    });
  };
  return (
      <li className="list-group-item">
        <div className="lps_user_info">
          <p className="user_info_label">username
            <span className={`ml_5 lps_link ft_Weight_600 ml_5 submit-cursor`}
                     onClick={inputVisible}>{inputShown ? " cancel" : ""}
            </span> </p>
          <div className="user_info_field">
            {inputShown ? <div>
              <input type="text" name="user_name" className="user_field" value={userForm.user_name || ""} onChange={handleChange} />
              <button type="button" className="btn-transparent ml_5 lps_link btn_bold" onClick={updateUser}>save</button>
            </div>: <div> <span className={`input_modify `}>{user.user_name}</span>
            <button type="button" className="btn-transparent ml_5 lps_link btn_bold" onClick={inputVisible}>change</button></div>}
          </div>
        </div>
      </li>
  )
}
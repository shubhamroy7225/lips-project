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
    actions.verifyUsername(user_name).then(res => {
      actions.updateUser({user: {user_name}}).then(res => {
        inputVisible()
      });
    });
  };
  return (
      <li className="list-group-item">
        <div className="lps_user_info">
          <p className="user_info_label">Username
            <buttton className={`ml_5 lps_link ft_Weight_600 `}
                     onClick={inputVisible}> {inputShown ? " Cancel" : " Change"}
            </buttton> </p>
          <div className="user_info_field">
            {inputShown ? <div>
              <input type="text" name="user_name" className="user_field" value={userForm.user_name || ""} onChange={handleChange} />
              <button type="button" className="btn-transparent ml_5 lps_link" onClick={updateUser}>Save</button>
            </div>:  <span className={`input_modify `}>{user.user_name}</span>}
          </div>
        </div>
      </li>
  )
}
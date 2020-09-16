import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "redux/actions";
const MyAccount = ({user}) => {
   const history = useHistory();
   const [userForm, setUserForm] = useState({});
   const [loaded, setLoaded] = useState(false);
   const [privacy_settings, setPrivacy] = useState(user.privacy_settings);
   const deleteUser = () =>{
      actions.deleteUser().then(res => {
         history.push("/settings");
       });
   }

   useEffect(() => {
      if (!loaded) {
        setLoaded(true);
        actions.fetchUsers()
      }
       if (user && !userForm.user_name) setUserForm({...user})
     }, [user]);

   const handleChange = (e) => {
     setUserForm({...userForm, [e.target.name]: e.target.value});
   };

   const changePrivacyPolicy = () => {
      actions.changePrivacy({privacy_settings}).then(res => {
        return res
      });
    };

    const updateUser = (e) => {
      const {user_name} = userForm;
      actions.updateUser({user: {user_name}});
    };
   
  return (
    <>
            <div id="wrap" className="mt_0">
               <div className="lps_container mt_0">
               <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to="/settings">
                  <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img" />
                  <span className="lp_left_auto text_black">My Account</span>
               </Link>
                  <ul className="lps_list_group my_acctn_list my_acctn_list_pl0">
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label">Username</p>
                           <div className="user_info_field">
                            <input type="text" name="user_name" className="input_modify"  value={userForm.user_name || ""} onChange={handleChange} />
                              <button type="submit" onClick={updateUser}>Save</button>
                           </div>
                        </div>
                     </li>
                     <li className="list-group-item">
                        <div className="lps_user_info">
                           <p className="user_info_label">Email</p>
                           <div className="user_info_field">
                              <span className="input_modify">{userForm.email}</span>
                           </div>
                        </div>
                     </li>
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
                     <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">
                           <p className="user_info_label lps_mb15">
                              <Link to="#" className="ft_Weight_500">Deactivate Account</Link>
                           </p>
                        </div>
                     </li> 
                      <li className="list-group-item">
                        <div className="lps_user_info lps_accnt_links">     
                           <p className="user_info_label" onClick={deleteUser}>
                              <Link to="#" classname="ft_Weight_500">Delete Account</Link>
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
    </>
  );
}

const mapStateToProps = (state) => {
   return {
      user: state.authReducer.user
   }
}

const mapDispatchToProps = (dispatch) => {
   return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyAccount));
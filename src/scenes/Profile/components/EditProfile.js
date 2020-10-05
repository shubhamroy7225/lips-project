import React, {useState, useEffect} from 'react';
import * as commonService from "utility/utility";
import {Link, useHistory} from "react-router-dom";
import * as ConfigAPI from 'api/configAPI';
import * as AuthActions from "redux/actions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {useDispatch} from "react-redux";

const EditProfile = ({setIsEdit, user}) => {
  const [userForm, setUserForm] = useState({...user});
  const [files, setFile] = useState({header_image: {}, photo_url: {}});

  const handleFile = (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    let fileName= e.target.name;
    let newFiles = {...files, [e.target.name]: {src: url, file}};
    AuthActions.config({ext: ['.png']}).then(res=> {
      let header_image = res.urls[0].photo_path;
      setUserForm({...userForm, [fileName]: header_image})
      ConfigAPI.uploadImageToS3(res.urls[0].presigned_url, file)
    });
    setFile(newFiles);
  };

  const handleChange = (e) => {
    setUserForm({...userForm, [e.target.name]: e.target.value});
  };

  const updateUserProfile = (e) => {
    const {bio, show_following, show_followers, header_image, photo_url} = userForm;
    AuthActions.updateUser({user: {bio, show_following, show_followers, header_image, photo_url}}).then(res => {
      setIsEdit(false)
    });
  };

  return (
      <>
      <div className="limiter" style={{zIndex: 999}}>
        <div className="container-login100">
          <div id="wrap" className="mt_0">
            <div className="post_page_header top__sm_header">
              <ul className="lp_nav lp_nav_customize lps_flx_vm_jsbtwn lps_f_vm">
                <li className="nav-item">
                  <Link to="/profile" className="nav-link not_line" onClick={e => setIsEdit(false)}>
                    <img src={require("assets/images/icons/icn_close_white.svg")} alt="Close Icon" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link not_line check_link" onClick={updateUserProfile}>
                    <img src={require("assets/images/icons/icn_checkWhite.png")} alt="Check Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lps_container mt_10">
              <div className="lps_list">
                <div className="lps_inner_wrp lps_pink_dashed">
                  <label htmlFor="file_input">
                    <figure  className="lps_fig lps_fig90 add_image">
                      <input type="file" id="file_input" name="header_image" hidden onChange={handleFile}/>
                      {files.header_image.src ?  <img src={files.header_image.src} alt="Add Image" /> :
                          (userForm.header_images && userForm.header_images.medium ? <img src={userForm.header_images.original} alt="Add Image" /> : <img src={require("assets/images/icons/image_icon_dashed.svg")} alt="Add Image" />) }
                    </figure>
                  </label>
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media">
                  <div className="lps_media lps_pos_rltv lps_f_end mb20">
                    <label htmlFor="profile_file_input">
                    <figure className="profile-image-container lps_fig lps_fig_circle" style={{position: "relative"}}>
                      <input type="file" id="profile_file_input" name="photo_url" hidden onChange={handleFile}/>
                      {files.photo_url.src ?  <img src={files.photo_url.src} alt="Add Image" /> :
                          (userForm.photo_urls && userForm.photo_urls.medium ? <img src={userForm.photo_urls.medium} alt="Add Image" /> : <img  src={require("assets/images/icons/icn_profile.svg")} alt="User"/>) }

                      <i className="fa fa-pencil"></i>
                    </figure>
                    </label>
                    {/* <div className="avatar-preview">
                     {files ? <img src={files[0]} alt="img-pict" style={{height: "100%", width: "100%",borderRadius: "50%"}}/> : ""}
                     {!files && userForm.photo_url ? <img src={userForm.photo_url.medium} alt="img-pict" style={{height: "100%",
                     width: "100%",borderRadius: "50%"}}/> : ""}
                     </div> */}

                    <div className="lps_media_body">
                      <div className="lps_media_body">
                        <div className="inline_wrp">
                          <span className="">
                            <span className="text_primary ft_Weight_500">{userForm.user_name} </span>
                          </span>

                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="mail_about_wrp">
                  </div>
                  <textarea className="input_modify txtarea_modify border_0 brds_0" defaultValue="foo" name="bio" rows="5" onChange={handleChange}
                   value={userForm.bio || ""} />

                  <span className="textRange">0/50000</span>
                </div>
              </div>
              <ul className="lps_list_group my_acctn_list my_acctn_list1">
                <li className="list-group-item">
                  <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                    <p className="mb_0">Show Followers</p>
                    <label className="lps_switch">
                      <input type="checkbox" checked={userForm.show_followers} onChange={e => handleChange({target: {name: "show_followers", value: e.target.checked}})}/>
                      <span className="lps_int_slider round"></span>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="lps_user_info lps_flx_vm_jsbtwn lps_f_vm lps_mb15">
                    <p className="mb_0">Show Following</p>
                    <label className="lps_switch">
                      <input type="checkbox" checked={userForm.show_following} onChange={e => handleChange({target: {name: "show_following", value: e.target.checked}})}/>
                      <span className="lps_int_slider round"></span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

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



export default withRouter(connect(mapStateToProps, null)(EditProfile));
import React, {useState, useEffect} from 'react';
// import {Link, useHistory} from "react-router-dom";
import * as AuthActions from "redux/actions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as commonService from "utility/utility";

const EditProfile = ({user, updateProfile}) => {
    const [userForm, setUserForm] = useState({});
    const [filePath, setFilePath] = useState('');

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
     if (!loaded) {
       setLoaded(true);
       AuthActions.fetchUsers()
     }
      if (user && !userForm.user_name) setUserForm({...user})
    }, [user]);

    const handleFile = (e) => {
      debugger
      if (e.target.files[0]) {
        let file = e.target.files[0];
        (AuthActions.config({ "ext": [".png"]})).then(res => {
          debugger
          let url = res.urls[res.urls.length -1 ];
          if (url.presigned_url && url.photo_path) {
            commonService.isLoading.onNext(true);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "image/png");
            let requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: file
            };
            fetch(url.presigned_url, requestOptions).then(res=>{
              debugger
              commonService.isLoading.onNext(false);
              setUserForm({...userForm,photo_url: url.photo_path, header_image: url.photo_path});
              debugger
            },
            error =>  commonService.isLoading.onNext(false))
          }
          return res.url;
        });
        let url = URL.createObjectURL(e.target.files[0]);
        setFilePath(url)
      }
  
    };
      

  const handleChange = (e) => {
    setUserForm({...userForm, [e.target.name]: e.target.value});
  };

  const updateUserProfile = (e) => {
    const {bio, user_name, header_image, show_following, show_followers} = userForm;
    AuthActions.updateUser({user: {bio, user_name, header_image, show_following, show_followers}});
  };
  return (
    <>
          
    <div id="wrap" className="mt_0">
      <div className="post_page_header top__sm_header">
        <ul className="lp_nav lp_nav_customize lps_flx_vm_jsbtwn lps_f_vm">
          <li className="nav-item">
            <a href="#" className="nav-link not_line">
                <img src={require("assets/images/icons/icn_close_white.svg")} alt="Close Icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link not_line check_link">
                <img src={require("assets/images/icons/icn_checkWhite.png")} alt="Check Icon" />
            </a>
          </li>
        </ul>
      </div>
        <div className="lps_container">
          <div className="lps_list">
            <div className="lps_inner_wrp lps_pink_dashed">
              <label htmlFor="file_input">
              <figure  className="lps_fig lps_fig160 lps_fig120p20">
              <input type="file" id="file_input" name="image" hidden onChange={handleFile} />
                <img src={require("assets/images/icons/image_icon_dashed.svg")} alt="Add Image" />
                <div className="avatar-preview">
                                    {filePath ? <img src={filePath} alt="img-pict" style={{height: "100%",
                                      width: "100%",borderRadius: "50%"}}/> : ""}
                                      {!filePath && userForm.photoPath ? <img src={userForm.photo_url.medium} alt="img-pict" style={{height: "100%",
                                              width: "100%",borderRadius: "50%"}}/> : ""}
                                 </div>
              </figure>
              </label>
            </div>
            <div className="lps_inner_wrp lps_inner_wrp_media">
              <div className="lps_media lps_pos_rltv lps_f_end mb20">
              <label htmlFor="file_input">
                <figure className="lps_fig lps_fig_circle">
                <input type="file" id="file_input" name="image" hidden />
                  <img  src={require("assets/images/icons/icn_profile.svg")} alt="User"/>
                  
                </figure>
                </label>
               

                <div className="lps_media_body">
                  <div className="lps_media_body">                    
                    <div className="inline_wrp">
                    <span className="">
                    <input type="text" name="user_name"  value={userForm.user_name || ""} onChange={handleChange} />
                      </span>

                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="mail_about_wrp">
                <a href="/contact_user" className="link_target_mail ml_0"><img src={require("assets/images/icons/icn_message.svg")} alt="Mail" /></a>

                <div className="hr_seprator"></div>
                <a href="javascript:void(0);" className="add_tag1 avtar_25 trigger_add_bodyclassName" id="trigger_lips_tag">
                  <img src={require("assets/images/icons/icn_question_active.png")} alt="Add Icon" className="add_icn_outline" />
                </a>
              </div>
              <textarea className="input_modify txtarea_modify border_0 brds_0" name="bio" rows="5" onChange={handleChange} value={userForm.bio}>{userForm.bio}</textarea>
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
         <button onClick={updateUserProfile}>update</button>
            <section className="lips_tab lps_tab_cutomize">
              <ul className="tabs_block_cst">
                <li className="tab-link current" data-tab="tab-1">
                  <figure className="lps_fig lps_fig_sm">
                     <img src={require("assets/images/icons/icn_picture.png")} alt="Picture"  />
                  </figure>
                </li>
              </ul>
              <div id="tab-1" className="tab-content_cst current">
                  <div className="lps_inner_cont lps_px15">
                    <h5 className="text_center">None of your collections are unlocked for others to see yet</h5>
                  </div>
              </div>
            </section>
        </div>
    </div>
   
    <div className="modal_gredient hover_bkgr_fricc" id="trigger_gredient_popup">
      <div className="modal_gredient_inner">
        <div className="popup_cont">
          <div className="popup_body">
            <div className="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} /></div>

            <ul className="lps_btn_grps lps_ul gredient_ul">
              <li>
                <h6 className="text_uppercase">Color</h6>
                <figure className="lps_fig">
                  <img src={require("assets/images/thumbnails/gradient1.png")} alt="thumnail" />
                </figure>
              </li>
              <li>
                <h6 className="text_uppercase">Brightness</h6>
                <figure className="lps_fig">
                  <img src={require("assets/images/thumbnails/gradient2.png")} alt="thumnail" />
                </figure>
              </li>
              <li>
                <a href="#" className="theme_btn theme_outline_light text_uppercase">#ffffff</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="hover_bkgr_fricc full_Hvh" id="trigger_lips_tag_popup">
      <div className="modal-dialog-centered">
        <div className="popup_cont">
          <div className="popup_body post_poup lps_bg_secondary lps_text_white">
            <div className="popupCloseButton"><img src={require("assets/images/icons/icn_close_white.png")} alt="thumnail" /></div>
            
            <article className="lps_art mt_15 text_left">
              <div className="para_list_mb">
                <h3 className="text_white">Messaging on lips</h3>
              </div>
              <div className="para_list_mb">
                <h4 className="text_white">Lorem ipsum</h4>
                <p className="text_white lh26">
                  Sed ut perspiciatis unde omnis iste natus error sit volu tatem accusantium doloremque laudantium, totam re aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="para_list_mb">
                <h4 className="text_white">Dolor</h4>
                <p className="text_white lh26">
                  Sed ut perspiciatis unde omnis iste natus error sit volu tatem accusantium doloremque laudantium, totam re aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="para_list_mb">
                <h4 className="text_white">se amat</h4>
                <p className="text_white lh26">
                  Sed ut perspiciatis unde omnis iste natus error sit volu tatem accusantium doloremque laudantium, totam re aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
   
  
    </>
  );
}

const mapStateToProps = (state) => {
   return {
      user: state.authReducer.currentUser
   }
}



export default withRouter(connect(mapStateToProps, null)(EditProfile));
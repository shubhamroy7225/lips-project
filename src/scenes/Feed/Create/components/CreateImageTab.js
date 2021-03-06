import React, { useRef, useState } from "react";
import * as ConfigAPI from "api/configAPI";
import * as commonService from "utility/utility";
import { FeedType, routes } from "utility/constants/constants";
import { useHistory } from "react-router-dom";
import { decode } from "base64-arraybuffer";
import {useSelector} from 'react-redux';

const CreateImageTab = ({
  toggleAddTags,
  toggleLipsInfo,
    handleToggleTags,
  selectedHashTags,
  submitFeedRequest,
}) => {
  let history = useHistory();
  const [imageData, setImageData] = useState({
    base64: null,
    file: null,
    photo_path: null,
  });
  const [likable, setLikable] = useState(true);
  const [repostable, setRepostable] = useState(true);
  const [caption, setCaption] = useState("");
  const captionCharCount = 5000;
  const [inputCount, setInputCount] = useState(0);

  const fileSelector = useRef(null);
  const postImg = useRef(null);
  const {  user } = useSelector(state => state.authReducer);



  const handleFileSelect = () => {
    fileSelector.current.click();
  };

  const onFileSelectionHandler = async (e) => {
    let file = await commonService.compressImage(e.target.files[0], {});
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImageData({ ...imageData, base64: reader.result, file: file });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setInputCount(value.length);
    setCaption(e.target.value);
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.value === "true") {
      setLikable(false);
    } else {
      setLikable(true);
    }
  };

  const handleRepostBoxChange = (e) => {
    if (e.target.value === "true") {
      setRepostable(false);
    } else {
      setRepostable(true);
    }
  };

  const createPost = () => {
    if (inputCount > captionCharCount) {
      commonService.toastInfo("You have exceeded the maximum character limit!")
      return
    }
    //1. Upload Image
    if (imageData.base64) {
      //1. presign url
      let photo_path = null;
      let fileExtensions = [];
      if (imageData.file.type === "image/png") {
        fileExtensions.push(".png");
      } else {
        fileExtensions.push(".jpeg");
      }
      commonService.isLoading.onNext(true); // start loading
      ConfigAPI.fetchUploadUrl({ ext: fileExtensions })
        .then((res) => {
          //2. upload image
          if (res.data.success) {
            let urls = res.data.urls;
            photo_path = urls[0].photo_path;
            let base64ToBeUploaded = imageData.base64.split(",")[1];
            return ConfigAPI.uploadImageToS3(
              urls[0].presigned_url,
              decode(base64ToBeUploaded)
            );
          }
        })
        .then((res) => {
          if (res.status === 200) {
            // create a request to post it to server
            var request = {};
            var postRequest = {};
            postRequest["type"] = FeedType.image;
            postRequest["photo_paths"] = [
              {
                url: photo_path,
                height: postImg.current.naturalHeight.toString(),
                width: postImg.current.naturalWidth.toString(),
              },
            ];
            if (caption.length > 0) {
              postRequest["description"] = caption;
            }
            postRequest["likable"] = likable;
            postRequest["repostable"] = repostable;
            request["post"] = postRequest;
            if (selectedHashTags.length > 0) {
              request["hashTags"] = selectedHashTags.map((ele) => ele.name);
            }
            //send it to parent
            submitFeedRequest(request);
          }
        })
        .catch((error) => {
          commonService.isLoading.onNext(false); // start loading
          commonService.toastMsg(error.message, true);
        });
    } else {
      //didn't select the image
      commonService.toastInfo("Please add the image to proceed!");
    }
  };

  let imgClassNames = ["lps_img_fixed lps_flx_vm_jc lps_f_vm"];
  if (!imageData.base64) {
    imgClassNames.push("add_image");
  }

  let charCountStyle = {
  }

  if (inputCount > captionCharCount) {
    charCountStyle = {
      color: "red"
    }
  }


  return (
    <div
      class={`content ${history.location.hash !== "#textTab" ? "active" : ""}`}
      id="imageTab0"
    >
      <div class="tab_inn_con">
        <div class="add_img_block add_img_blockP0">
          <figure
            class={imgClassNames.join(" ")}
            onClick={() => handleFileSelect()}
          >
            <img
              src={
                imageData.base64
                  ? imageData.base64
                  : require("assets/images/icons/image_icon_dashed.svg")
              }
              ref={postImg}
              alt="Add Image"
            />
          </figure>
          <input
            type="file"
            id="file"
            accept=".png, .jpg, .jpeg"
            ref={fileSelector}
            style={{ display: "none" }}
            onChange={(e) => onFileSelectionHandler(e)}
          />
        </div>
        <div class="about_gallery">
          <textarea
            onChange={handleInputChange}
            value={caption}
            class="textarea_modifier textarea-font-family"
            rows="8"
          ></textarea>
          <span class="textRange"><span style={charCountStyle}>{inputCount}</span>/{captionCharCount}</span>
          <p class="mb_0 mt_5">
          What's going on in this post? Be sure to credit others - @mention feature coming soon. For now give a shout out!
          </p>
        </div>

        <div class="hash_tag_block">
          <div class="hashtags">
            {selectedHashTags.map((ele, index) => {
              return <a class="theme_btn theme_secondary" onClick={e => handleToggleTags(ele)}>{ele.name}</a>;
            })}
          </div>
          <div class="hashtag mt_15">
            <a
              onClick={() => toggleAddTags()}
              class="theme_btn theme_outline_primary text_secondary ft_Weight_500 btnr_25 min_w_170 text_uppercase trigger_add_bodyClass"
              id="trigger_add_tags"
            >
              add tags
            </a>
            <a
              onClick={() => toggleLipsInfo()}
              class="add_tag1 avtar_25 trigger_add_bodyClass"
              id="trigger_lips_tag"
            >
              <img
                src={require("assets/images/icons/icn_question_active.png")}
                alt="Add Icon"
                class="add_icn_outline"
              />
            </a>
            <p class="mb_0 mt_5">
        Remember to use  tags when you create a post, 
        This helps folks find your content.
        </p>
          </div>
        </div>

        <div class="tag_product_con border_white_box">
          <div class="d_inline mb_0">
            <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
              <h6 class="sm_title">
                others can{" "}
                <img
                  src={require("assets/images/icons/liked_post.svg")}
                  alt="kiss"
                />{" "}
              </h6>
              <label class="lps_switch">
                {/* <input type="checkbox" checked /> */}

                <input
                  type="checkbox"
                  name="ownContent"
                  defaultChecked
                  value={likable}
                  onChange={handleCheckBoxChange}
                />
                <span class="lps_int_slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="tag_product_con border_white_box">
          <div class="d_inline mb_0">
            <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
              <h6 class="sm_title">
                others can{" "}
                <img
                  src={require("assets/images/icons/refresh_black.svg")}
                  alt="repost"
                />{" "}
              </h6>
              {user && user.privacy_settings === "public" ? 
              <label class="lps_switch">
                <input
                  type="checkbox"
                  name="ownContent"
                  defaultChecked
                  value={repostable}
                  onChange={handleRepostBoxChange}
                  
                />
                <span class="lps_int_slider round"></span>
              </label> :
              <label class="lps_switch">
              <input
                type="checkbox"
                name="ownContent"
                disabled
                
              />
              <span class="lps_int_slider round lps_disable_checkbox"></span>
            </label> }
            </div>
          </div>
          
        </div>
        <div className= "hashtag mt_15">
        {repostable && user && user.privacy_settings === "public" ? 
        <p class="mb_0 mt_5 ml_5">
        Please keep in mind! If you delete this post, any reposts will remain. This is a feature we are working on. You can always contact us if you need all reposts removed. 
        </p> : user.privacy_settings === "private" && <p class="mb_0 mt_5 ml_5">Your account needs to be public to enable reposting.</p> }</div>
        
        <div class="post_block mb20 overlap_menu">
          <a onClick={createPost} class="circle">
            Post
          </a>
          <a onClick={() => history.push(routes.ROOT)} class="cancel_post">
            cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateImageTab;

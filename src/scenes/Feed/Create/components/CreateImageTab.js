import React, { useRef, useState } from 'react';

const CreateImageTab = ({ toggleAddTags, toggleLipsInfo, selectedHashTags }) => {
    const withoutImageStyle = {
        width: "50%",
        height: "41%",
    };

    const [imageBase64, setImageBase64] = useState(null)
    const [likable, setLikable] = useState(true);
    const [caption, setCaption] = useState("");


    const fileSelector = useRef(null);

    const handleFileSelect = () => {
        fileSelector.current.click();
    }

    const onFileSelectionHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setImageBase64(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleInputChange = (e) => {
        setCaption(e.target.value)
    }

    const createPost = () => {
        //1. Upload Image

        //2. Create Post API 
    }

    return (
        <div class="content active" id="imageTab">
            <div class="tab_inn_con">
                <div class="add_img_block add_img_blockP0">
                    <figure class="lps_img_fixed lps_flx_vm_jc lps_f_vm" onClick={() => handleFileSelect()}>
                        <img style={!imageBase64 ? withoutImageStyle : null} src={imageBase64 ? imageBase64 : require("assets/images/icons/image_icon_dashed.svg")} alt="Add Image" />
                    </figure>
                    <input type="file" id="file" ref={fileSelector} style={{ display: "none" }} onChange={(e) => onFileSelectionHandler(e)} />
                </div>
                <div class="about_gallery">
                    <textarea onChange={handleInputChange} value={caption} class="textarea_modifier" rows="8" placeholder="Say something about this..."></textarea>
                    <span class="textRange">0/50000</span>
                    <p class="mb_0 mt_5">What's going on in this post? Be sure to @credit others.</p>
                </div>

                <div class="hash_tag_block">
                    <div class="hashtags">
                        {
                            selectedHashTags.map((ele, index) => {
                                return <a class="theme_btn theme_secondary">{ele.name}</a>
                            })
                        }
                    </div>
                    <div class="hashtag mt_15">
                        <a onClick={() => toggleAddTags()} class="theme_btn theme_outline_primary text_secondary ft_Weight_500 btnr_25 min_w_170 text_uppercase trigger_add_bodyClass" id="trigger_add_tags">
                            add tags
                    </a>
                        <a onClick={() => toggleLipsInfo()} class="add_tag1 avtar_25 trigger_add_bodyClass" id="trigger_lips_tag">
                            <img src={require("assets/images/icons/icn_question_active.png")} alt="Add Icon" class="add_icn_outline" />
                        </a>
                    </div>
                </div>

                <div class="tag_product_con border_white_box">
                    <div class="d_inline mb_0">
                        <div class="grid_left lps_flx_vm_jsbtwn lps_flx_vm others_wrp">
                            <h6 class="sm_title">Others Can <img src={require("assets/images/icons/icn_mouth.png")} alt="kiss" /> </h6>
                            <label class="lps_switch">
                                <input type="checkbox" checked />
                                <span class="lps_int_slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="post_block mb20">
                    <a href="/" class="circle">Post</a>
                    <a href="/" class="cancel_post">Cancel</a>
                </div>
            </div>
        </div>
    );
}

export default CreateImageTab;
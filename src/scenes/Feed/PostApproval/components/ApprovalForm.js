import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import * as API from 'api/configAPI';
import * as commonService from "utility/utility";
import * as feedsAction from 'redux/actions/feed/action';
import { decode } from 'base64-arraybuffer';

const ApprovalForm = ({ moveToNextStep, cancel }) => {
    const postImgFirst = useRef(null);
    const postImgSecond = useRef(null);
    const postImgThird = useRef(null);

    const withoutImageStyle = {
        width: "50%",
        height: "48%",
    };


    const [approvalForm, setApprovalForm] = useState({ link: null, description: "" }) // ownContent: true
    const simpleValidator = useRef(new SimpleReactValidator());
    const simpleValidator2 = useRef(new SimpleReactValidator(
        {
            messages: {
                required: "Please add 3 image examples of post"
            }
        }
    ));
    const [, forceUpdate] = useState();

    const [image1, setImage1] = useState({file:null, base64:null})
    const [image2, setImage2] = useState({file:null, base64:null})
    const [image3, setImage3] = useState({file:null, base64:null})
    const [isSubmitted, setSubmitted] = useState(false);

    const fileSelector1 = useRef(null)
    const fileSelector2 = useRef(null)
    const fileSelector3 = useRef(null)

    const handleFileSelect = (fs) => {
        if (!image1.base64){
            fileSelector1.current.click();
        }else if (!image2.base64){
            fileSelector2.current.click();
        }else if (!image3.base64){
            fileSelector3.current.click();
        }else{
            fs.current.click()
        }
    }

    const onFileSelectionHandler = (e, fs) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if (fs === fileSelector1) {
                setImage1({...image1, base64:reader.result, file:file})
            } else if (fs === fileSelector2) {
                setImage2({...image2, base64:reader.result, file:file})
            } else {
                setImage3({...image3, base64:reader.result, file:file})
            }
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleInputChange = (e) => {
        setApprovalForm({ ...approvalForm, [e.target.name]: e.target.value });
        forceUpdate(1)
    };

    // const handleCheckBoxChange = (e) => {
    //     if (e.target.value === "true") {
    //         setApprovalForm({ ...approvalForm, [e.target.name]: false });
    //     } else {
    //         setApprovalForm({ ...approvalForm, [e.target.name]: true });
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (simpleValidator.current.allValid() && ((image1.base64 && image2.base64 && image3.base64) || approvalForm.link)) {
            
            let images = [image1, image2, image3];
            images = images.filter(ele => ele.base64);
            //upload all images
            if (images.length > 0){
                uploadImages(images);
            }else{
                postDataToServer();
            }
        } else {
            setSubmitted(true);
            simpleValidator.current.showMessages(); //show validation messages
            simpleValidator2.current.showMessages();
            forceUpdate(1)
        }
    }
    const postImg =  {
        0: postImgFirst,
        1: postImgSecond,
        2: postImgThird,
    }
    const postDataToServer = async (urls = []) =>{
        //update data to server
        let photoPaths = urls.map((ele, index) => {
            return {url: ele.photo_path, height: postImg[index].current.naturalHeight.toString(),
                width: postImg[index].current.naturalWidth.toString()}
        });
        let approval = {
                link:approvalForm.link,
                about:approvalForm.description,
                //own_content: approvalForm.ownContent,
                photo_paths:photoPaths
            }
        if (!approval.link) delete approval.link;

        feedsAction.submitCreateFeedApprovalData({approval})
        .then(response => {
            //success
            if (response.data.success){
                moveToNextStep();
            }
        });
    }

    const uploadImages = async (images) => {
        commonService.isLoading.onNext(true); // start loading
        let fileExtensions = [];
        for (var obj in images){
            if (images[obj].file.type === "image/png"){
                fileExtensions.push(".png")
            }else{
                fileExtensions.push(".jpeg")
            }
        }
         //1. fetch presigned url 
         const response = await API.fetchUploadUrl({ext:fileExtensions});
         if (response.data.success){
             let urls = response.data.urls;
             //2. upload all the images
             
             var imagesUploadedCount = 0
             images.forEach((element, index) => {
                let base64ToBeUploaded = element.base64.split(",")[1]
                API.uploadImageToS3(urls[index].presigned_url,decode(base64ToBeUploaded))
                .then(res => {
                    if (res.status === 200){
                        imagesUploadedCount = imagesUploadedCount + 1;
                        if (imagesUploadedCount === images.length){
                            //successfully uploaded all images
                            postDataToServer(urls)
                        }
                    }else{
                        //error
                        commonService.isLoading.onNext(false); // stop loading
                    }
                })
                .catch(error => {
                    //error
                    commonService.isLoading.onNext(false); // stop loading
                })
             });
         }else{
            //error
            commonService.isLoading.onNext(false); // stop loading
         }
    }

    return (
        <div class="lps_container lps_bg_secondary lps_text_white lps_inner_cont pt-75">
            <div class="lps_approval add_product_con ">
                <article class="text_center lps_logo_center">
                    <a class="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/new_logo.svg")} alt="Lips Logo" class="header__logo" />
                    </a>
                </article>
                <form onSubmit={handleSubmit}>
                    <div class="form_group_modify postApproval">
                        <label class="label_modify">3 post examples of visuals or text that you'd post*</label>
                        <div class="add_product_grid">
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector1)}>
                                <img style={!image1.base64 ? withoutImageStyle : null} src={image1.base64 ? image1.base64 : require("assets/images/icons/icn_add_img_pink.png")} ref={postImgFirst} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector2)}>
                                <img style={!image2.base64 ? withoutImageStyle : null} src={image2.base64 ? image2.base64 : require("assets/images/icons/icn_add_img_pink.png")} ref={postImgSecond} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector3)}>
                                <img style={!image3.base64 ? withoutImageStyle : null} src={image3.base64 ? image3.base64 : require("assets/images/icons/icn_add_img_pink.png")} ref={postImgThird} alt="Image" class="add_img" />
                            </div>
                        </div>
                        <input accept="image/x-png,image/jpeg" type="file" id="file" name="portfolio1" ref={fileSelector1} style={{ display: "none" }} 
                        onBlur={() => isSubmitted ? simpleValidator.current.showMessageFor('portfolio1') : true} onChange={(e) => onFileSelectionHandler(e, fileSelector1)} />
                        {!approvalForm.link && <span style={{ color: "red" }}>{simpleValidator2.current.message('portfolio1', image1.base64, 'required')}</span>}
                        
                        <input accept="image/x-png,image/jpeg" type="file" id="file" name="portfolio2" ref={fileSelector2} style={{ display: "none" }} 
                        onBlur={() => isSubmitted ? simpleValidator.current.showMessageFor('portfolio2') : true} onChange={(e) => onFileSelectionHandler(e, fileSelector2)} />
                       {!approvalForm.link && image1.base64 && <span style={{ color: "red" }}>{simpleValidator2.current.message('portfolio2', image2.base64, 'required')}</span>}

                        <input accept="image/x-png,image/jpeg" type="file" id="file" name="portfolio3" ref={fileSelector3} style={{ display: "none" }} 
                        onBlur={ isSubmitted ? () => simpleValidator.current.showMessageFor('portfolio3') : true} onChange={(e) => onFileSelectionHandler(e, fileSelector3)} />
                        {!approvalForm.link && image2.base64 && <span style={{ color: "red" }}>{simpleValidator2.current.message('portfolio3', image3.base64, 'required')}</span>}

                    </div>
                    <div class="form_group_modify">
                        <label class="label_modify">Alternatively link to your website / portfolio</label>
                        <input class="input_modify"
                            type="text"
                            name="link"
                            value={approvalForm.link}
                            onChange={handleInputChange}
                            onBlur={() => simpleValidator.current.showMessageFor('link')} />
                        <span style={{ color: "red" }}>{simpleValidator.current.message('link', approvalForm.link, 'url')}</span>

                    </div>
                    <div class="form_group_modify">
                        <label class="label_modify">Why do you want to post on Lips? *</label>
                        <textarea class="input_modify txtarea_modify"
                            rows="5"
                            name="description"
                            value={approvalForm.description}
                            onChange={handleInputChange} />
                        <span style={{ color: "red" }}>{simpleValidator.current.message('description', approvalForm.description, 'required')}</span>

                    </div>
                    {/* <div class="form_group_modify">
                        <label class="lps_cont_check">This Is My Own Original Content
                        
                            <input type="checkbox"
                                name="ownContent"
                                defaultChecked
                                value={approvalForm.ownContent}
                                onChange={handleCheckBoxChange} />
                            <span class="lps_Checkmark"></span>
                        </label>
                    </div> */}
                    <p>If you plan to share the work of others on your profile that is fine! However, we ask that you give full credit to any artists/creators involved. Lips loves our creators, so intentional plagiarism and copyright infringement is a one-way ticket to outta here town for sure.</p>
                    <div class="post_block mb20 mt_15">
                        <button type="submit" class="circle submit-cursor">Submit</button>
                        <a onClick={() => cancel()} class="cancel_post link_underline">Cancel</a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ApprovalForm;
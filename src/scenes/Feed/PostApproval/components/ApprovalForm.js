import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import * as API from 'api/configAPI';


const ApprovalForm = ({ moveToNextStep, cancel }) => {
    const withoutImageStyle = {
        width: "50%",
        height: "48%",
    };


    const [approvalForm, setApprovalForm] = useState({ link: "", description: "", ownContent: true })
    const simpleValidator = useRef(new SimpleReactValidator());
    const simpleValidator2 = useRef(new SimpleReactValidator(
        {
            messages: {
                required: "Please add image examples of post"
            }
        }
    ));
    const [, forceUpdate] = useState();

    const [image1, setImage1] = useState({file:null, base64:null})
    const [image2, setImage2] = useState({file:null, base64:null})
    const [image3, setImage3] = useState({file:null, base64:null})

    const fileSelector1 = useRef(null)
    const fileSelector2 = useRef(null)
    const fileSelector3 = useRef(null)

    const handleFileSelect = (fs) => {
        if (fs === fileSelector1) {
            fileSelector1.current.click();
        } else if (fs === fileSelector2) {
            fileSelector2.current.click();
        } else {
            fileSelector3.current.click();
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
                setImage2({...image1, base64:reader.result, file:file})
            } else {
                setImage3({...image1, base64:reader.result, file:file})
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

    const handleCheckBoxChange = (e) => {
        if (e.target.value === "true") {
            setApprovalForm({ ...approvalForm, [e.target.name]: false });
        } else {
            setApprovalForm({ ...approvalForm, [e.target.name]: true });
        }
    }

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        if (simpleValidator2.current.allValid() && simpleValidator.current.allValid() && (image1.base64 && image2.base64 && image3.base64)) {
            let formData = {
                images: [image1, image2, image3],
                ...approvalForm
            }
            console.log(formData);
            postDataToServer(formData);
        } else {
            simpleValidator.current.showMessages(); //show validation messages
            simpleValidator2.current.showMessages();
            forceUpdate(1)
        }
    }

    const postDataToServer = async (formData) =>{
        let fileExtensions = [];

        let images = formData.images;
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
            debugger;
            let base64ToBeUploaded = images[0].base64.split(",")[1]
             API.uploadImageToS3(urls[0].presigned_url,base64ToBeUploaded)
             .then(res => {
                let base64ToBeUploaded = images[1].base64.split(",")[1]
                 return API.uploadImageToS3(urls[1].presigned_url,base64ToBeUploaded);
             }).then(res => {
                let base64ToBeUploaded = images[2].base64.split(",")[1]
                return API.uploadImageToS3(urls[2].presigned_url,base64ToBeUploaded);
             }).then(res => {
                debugger;
                if (res.status === 200){
                    //success
                    //update to server
                    moveToNextStep();
                }
             }).catch(error => {
                 debugger;
             })
        }else{

        }
        debugger;

        //2. upload the images

        //3. update the data to server

    }

    return (
        <div class="lps_container lps_bg_secondary lps_text_white lps_inner_cont ">
            <div class="lps_approval add_product_con ">
                <article class="text_center lps_logo_center">
                    <a class="logo mb_0" href="#">
                        <img src={require("assets/images/thumbnails/logo.svg")} alt="Lips Logo" class="header__logo" />
                    </a>
                </article>
                <form onSubmit={handleSubmit}>
                    <div class="form_group_modify">
                        <label class="label_modify">3 post example <br />(Images example of visuals or text that you'd post)</label>
                        <div class="add_product_grid">
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector1)}>
                                <img style={!image1.base64 ? withoutImageStyle : null} src={image1.base64 ? image1.base64 : require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector2)}>
                                <img style={!image2.base64 ? withoutImageStyle : null} src={image2.base64 ? image2.base64 : require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector3)}>
                                <img style={!image3.base64 ? withoutImageStyle : null} src={image3.base64 ? image3.base64 : require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                        </div>
                        <input type="file" id="file" name="portfolio" ref={fileSelector1} style={{ display: "none" }} onChange={(e) => onFileSelectionHandler(e, fileSelector1)} />

                        <span style={{ color: "red" }}>{simpleValidator2.current.message('portfolio', image1.base64, 'required')}</span>
                        <input type="file" id="file" ref={fileSelector2} style={{ display: "none" }} onChange={(e) => onFileSelectionHandler(e, fileSelector2)} />
                        <input type="file" id="file" ref={fileSelector3} style={{ display: "none" }} onChange={(e) => onFileSelectionHandler(e, fileSelector3)} />

                    </div>
                    <div class="form_group_modify">
                        <label class="label_modify">Alternativelly link to your website / portfolio</label>
                        <input class="input_modify"
                            type="text"
                            name="link"
                            value={approvalForm.link}
                            onChange={handleInputChange}
                            onBlur={() => simpleValidator.current.showMessageFor('link')} />
                        <span style={{ color: "red" }}>{simpleValidator.current.message('link', approvalForm.link, 'url')}</span>

                    </div>
                    <div class="form_group_modify">
                        <label class="label_modify">Why do you want to post on Lips?</label>
                        <textarea class="input_modify txtarea_modify"
                            rows="5"
                            name="description"
                            value={approvalForm.description}
                            onChange={handleInputChange} />
                        <span style={{ color: "red" }}>{simpleValidator.current.message('description', approvalForm.description, 'required')}</span>

                    </div>
                    <div class="form_group_modify">
                        <label class="lps_cont_check">This Is My Own Original Content
                        
                            <input type="checkbox"
                                name="ownContent"
                                defaultChecked
                                value={approvalForm.ownContent}
                                onChange={handleCheckBoxChange} />
                            <span class="lps_Checkmark"></span>
                        </label>
                    </div>
                    <div class="post_block mb20 mt_15">
                        <button type="submit" class="circle">Submit</button>
                        <a onClick={() => cancel()} class="cancel_post link_underline">Cancel</a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ApprovalForm;
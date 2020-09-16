import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const ApprovalForm = ({ moveToNextStep, cancel }) => {
    const [approvalForm, setApprovalForm] = useState({ link: "", description: "", ownContent: true })
    const simpleValidator = useRef(new SimpleReactValidator(
        {
            messages: {
                description: "please add some description",
                link: "please add link"
            }
        }
    ));
    const [, forceUpdate] = useState();

    const [imageBase641, setImageBase641] = useState(null)
    const [imageBase642, setImageBase642] = useState(null)
    const [imageBase643, setImageBase643] = useState(null)

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
                setImageBase641(reader.result)
            } else if (fs === fileSelector2) {
                setImageBase642(reader.result)
            } else {
                setImageBase643(reader.result)
            }
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleInputChange = (e) => {
        if (e.target.value === "on") {
            setApprovalForm({ ...approvalForm, [e.target.name]: true });
        } else if (e.target.value === "off") {
            setApprovalForm({ ...approvalForm, [e.target.name]: false });
        } else {
            setApprovalForm({ ...approvalForm, [e.target.name]: e.target.value });
        }
        forceUpdate(1)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (simpleValidator.current.allValid() && (imageBase641 || imageBase642 || imageBase643)) {
            moveToNextStep();
        } else {
            simpleValidator.current.showMessages(); //show validation messages
            forceUpdate(1)
        }
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
                                <img src={imageBase641 ? imageBase641 : require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector2)}>
                                <img src={imageBase642 ? imageBase642 : require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                            <div class="add_product_box" onClick={() => handleFileSelect(fileSelector3)}>
                                <img src={imageBase643 ? imageBase643 : require("assets/images/icons/icn_add_img_pink.png")} alt="Image" class="add_img" />
                            </div>
                        </div>
                        <input type="file" id="file" ref={fileSelector1} style={{ display: "none" }} onChange={(e) => onFileSelectionHandler(e, fileSelector1)} />
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
                            <input type="checkbox" name="ownContent" checked={approvalForm.ownContent} onChange={handleInputChange} />
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
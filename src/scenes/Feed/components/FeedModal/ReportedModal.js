import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import { FeedModalType } from 'utility/constants/constants';
import { toastMsg } from 'utility/utility';

const ReportedModal = ( props ) => {
    const {  selectedFeed } = useSelector(state => state.feedReducer);
    const [thankyouModal, setThankyouModal] = useState(false);
    const openThankyouModal = () => {
        setThankyouModal(thankyouModal ? false : true);
        reportFeed();
    }
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
        if(props.modalStatus){
            props.toggleModal(false);
        }
    }

    const checkModalOpen = () => {
        return props.modalStatus ? "block" : "none";
    }

    const reportFeed = () => {
        actions.reportAFeed(selectedFeed)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("Reported successfully!");
                }
            })
        // closeModal();
    }
    return (
        <div className="hover_bkgr_fricc mobileModal" style={{ display: checkModalOpen() }}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    {!thankyouModal ? 
                    <div className="popup_body">
                        <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title lps_title_size">
                                Report
                            </li>
                            <li>
                                <a onClick={openThankyouModal} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Harmful</a>
                            </li>
                            <li>
                                <a onClick={openThankyouModal} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">copyright viulation</a>
                            </li>
                            
                        </ul>
                    </div> :
                    <div className="popup_body">
                        <div className="lps_title lps_title_size lps_titel_report_modal">   
                            <h5>Thanks for keeping our community safe</h5>
                            <p>We will reveiw this post and let you know what happens with it in the next 24 hours.</p>
                            <h6 className="inline_WText">read more about <a className="report_link">lips moderation process</a></h6>
                        </div>
                    </div> }
                </div>
            </div>
        </div>
    );
}

export default ReportedModal
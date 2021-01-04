import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setFeedModalType } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import { FeedModalType } from 'utility/constants/constants';
import { toastMsg } from 'utility/utility';

const BlockUserModal = ( props ) => {
    const {  selectedFeed } = useSelector(state => state.feedReducer);
    const username = selectedFeed && selectedFeed.user ? selectedFeed.user.user_name : "johns robin"
    const [blockUserModal, setBlockUserModal] = useState(false);
    const userBlockSuccessModal  = () => {
        setBlockUserModal(blockUserModal ? false : true);
        blockAUser();
    }
    const closeModal = () => {
        setFeedModalType({ modalType: FeedModalType.undefined })
        if(props.modalStatus){
            props.toggleBlockModal(false);
        }
    }

    const blockAUser = () => {
        actions.blockUser(selectedFeed.user)
            .then(res => {
                if (res && res.data.success === true) {
                    toastMsg("User blocked successfully!");
                }
            })
        // closeModal();
    }

    const checkModalOpen = () => {
        return props.modalStatus ? "block" : "none";
    }

    return (
        <div className="hover_bkgr_fricc mobileModal" style={{ display: checkModalOpen() }}>
            <div className="modal-dialog-centered">
                <span className="helper"></span>
                <div className="popup_cont popup-custom-header">
                    <div className="popup_close_header">
                        <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
                    </div>
                    {!blockUserModal ? 
                    <div className="popup_body">
                        <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title lps_title_size">
                                Block  {username}
                            </li>
                            <li className="lps_title lps_title_size">
                                <p>
                                    You and this user won't be able to see or find each other on Lips.You can reverse this in your feed seetings.
                                </p>
                            </li>
                            <li>
                                <a onClick={userBlockSuccessModal} class="theme_btn theme_outline_primary theme_btn_rds25 text_uppercase text_white">Block</a>
                            </li>
                            
                        </ul>
                    </div> :
                    <div className="popup_body">
                         <ul class="lps_btn_grps lps_ul newButton">
                            <li class="lps_title lps_title_size">
                            <h5> {username} blocked</h5>
                            </li>
                            <li className="lps_title lps_title_size">
                            <p>You can change this in your feed setting</p>
                            </li>
                            
                            
                        </ul>
                        {/* <div className="lps_title lps_title_size lps_titel_report_modal1">   


                        </div> */}
                    </div> }
                </div>
            </div>
        </div>
    );
}

export default BlockUserModal
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setFeedModalType } from "redux/actions/feed";
import { FeedModalType } from "utility/constants/constants";

const SharedModal = ({ feed }) => {
  const { modalType, selectedFeed } = useSelector((state) => state.feedReducer);
  const linkVar = "click to copy"
  const closeModal = () => {
    setFeedModalType({ modalType: FeedModalType.undefined });
  };

  const [linkCopy, setLinkCopy] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/post/${selectedFeed && selectedFeed.id}`
    );
    setLinkCopy(true);
    const timer = setTimeout(function () {
      setLinkCopy(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  let style = { display: "none" };
  if (modalType === FeedModalType.share) {
    if (feed) {
      if (feed.id === selectedFeed.id) {
        style = { display: "block" };
      } else {
        style = { display: "none" };
      }
    } else {
      style = { display: "block" };
    }
  }
  return (
    <div class="hover_bkgr_fricc mobileModal" style={style}>
      <div class="modal-dialog-centered">
        <div class="popup_cont popup-custom-header">
          <div className="popup_close_header">
            <div className="popupCloseButton" onClick={closeModal}><img src={require("assets/images/icons/icn_close_pink.png")} /></div>
          </div>
          <div class="popup_body">

            <ul class="lps_btn_grps lps_ul lps_hash_ul">
              <li class="lps_title lps_shareLink_text">
                online people with a lips account will see things
              </li>
              <li>
                <span
                  onClick={copyLink}
                  className="theme_btn theme_outline_light mobileShare share_link_button"
                >
                  {window.location.origin}/post/
                  {selectedFeed && selectedFeed.id}
                </span>
                <p onClick={copyLink} className="copyPara">
                  {linkCopy ? "link copied!" : linkVar}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedModal;

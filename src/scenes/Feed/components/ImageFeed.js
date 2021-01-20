import React, { useEffect, useState } from "react";
import FeedWidget from "scenes/Feed/components/FeedWidget";
import { isMobile } from "react-device-detect";
import RepostModal from "./FeedModal/RepostModal";
import TaggedModal from "./FeedModal/TaggedModal";
import ReportModal from "./FeedModal/ReportModal";
import SharedModal from "./FeedModal/SharedModal";
import HiddenTagPost from "./HiddenTagPost";
import RemoveFeedModal from "./FeedModal/RemoveFeedModal";
import { routes } from "utility/constants/constants";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import placeholder from "assets/images/thumbnails/thumb_placeholder.png";
import { capitalizeFirstLetter } from "utility/utility";
import { useSelector } from "react-redux";
const ImageFeed = (props) => {
  const { changedFeedId } = useSelector((state) => state.feedReducer);
  const { user, feed, isReposted, refHandler } = props;
  if (typeof feed == "undefined") debugger;
  const { attachments, description } = feed;
  const repostedByUser = isReposted ? feed.user : {};
  const feed_user = isReposted ? feed.parent.user : feed.user;
  const user_name = feed_user.user_name;
  const feed_user_photo = feed_user.photo_urls;
  const { photo_urls } =
    attachments.length > 0
      ? attachments[0]
      : { photo_urls: { medium: placeholder } }; //else part is to handle the crash in case there is no image for feed type = "image"
  const [showWidget, setShowWidget] = useState(false);
  const [currentChangesFeed, setCurrentChangedFeed] = useState(null);
  let history = useHistory();

  //more or less description
  var showCharMobileView = 135; // How many characters are shown by default
  var showCharDesktop = 450; // How many characters are shown by default
  let showChar = isMobile ? showCharMobileView : showCharDesktop;
  var ellipsestext = "...";
  let shortDesc = description ? description.substr(0, showChar) : "";
  var pendingText = description
    ? description.substr(showChar, description.length - showChar)
    : "";
  const [moreTextEnabled, setMoreTextEnabled] = useState(false);
  const [viewAnyway, setViewAnyway] = useState(true);
  useEffect(() => {
    if (changedFeedId !== currentChangesFeed) {
        setViewAnyway(true)
      setCurrentChangedFeed(changedFeedId);
    }
  }, [currentChangesFeed, changedFeedId]);
  const clickHandler = () => {
    setShowWidget(!showWidget);
  };

  const viewAnywayHandler = () => {
    setViewAnyway(false);
  };
  console.log("changedFeedId", changedFeedId);

  if (!feed.has_hidden || !viewAnyway) {
    if (isMobile) {
      return (
        <div className="post_shape">
          <div
            className="lps_list postBox"
            ref={(r) => refHandler && refHandler(r)}
          >
            <div className={isReposted ? "lps_list_repost" : ""}>
              <div className="lps_sm_shape"></div>
              <div className="post_img_block lps_widgets_wrp bg_gray_feed">
                {isReposted && (
                  <div className="reposted_wrps">
                    <div className="rwposted_txt">
                      <a
                        onClick={() => {
                          history.push(
                            user
                              ? `${routes.PROFILE}/${repostedByUser.user_name}`
                              : routes.LOGIN_TO_PROCEED
                          );
                        }}
                        className="lps_link"
                      >
                        {capitalizeFirstLetter(repostedByUser.user_name)}
                      </a>
                    </div>
                    <img
                      src={require("assets/images/icons/icn_repeat.svg")}
                      alt="Add Image"
                    />
                  </div>
                )}

                <a onClick={clickHandler} id="trigger_main_feed">
                  <figure className="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty">
                    <img src={photo_urls.medium} alt="Add Image" />
                  </figure>
                </a>

                <FeedWidget
                  showWidget={showWidget}
                  feed={feed}
                  user={user}
                  isReposted={isReposted}
                />
              </div>
              <div className="lps_inner_wrp lps_inner_wrp_media post_mediaText">
                <div className="lps_media mProfile">
                  <figure className="lps_fig lps_fig_circle">
                    <img
                      src={
                        feed_user_photo && feed_user_photo.medium
                          ? feed_user_photo.medium
                          : require("assets/images/icons/icn_profile.svg")
                      }
                      alt="User"
                    />
                  </figure>
                  <div className="lps_media_body">
                    <div className="lps_media_body">
                      <p className="mb_5 more desc-break">
                        <span className="text_primary ft_Weight_500">
                          <a
                            onClick={() => {
                              history.push(
                                `${routes.PROFILE}/${feed_user.user_name}`
                                 
                              );
                            }}
                          >
                            {user_name}{" "}
                          </a>
                        </span>{" "}
                        {shortDesc}
                        {pendingText.length > 0 && (
                          <>
                            <span
                              className="moreellipses"
                              style={{ display: moreTextEnabled ? "none" : "" }}
                            >
                              {ellipsestext}&nbsp;
                            </span>
                            <span className="morecontent moreLess">
                              <span
                                style={{
                                  display: moreTextEnabled ? "inline" : "none",
                                }}
                              >
                                {pendingText}
                              </span>
                              &nbsp;&nbsp;
                              <a
                                onClick={() =>
                                  setMoreTextEnabled(!moreTextEnabled)
                                }
                                className={
                                  moreTextEnabled ? "morelink less" : "morelink"
                                }
                              >
                                {moreTextEnabled ? "less" : "more"}
                              </a>
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="lps_list lps_dsk_list postBox"
          ref={(r) => refHandler && refHandler(r)}
        >
          <div
            className={`lps_inner_wrp_media ${
              isReposted ? "lps_text_reposted" : ""
            }`}
          >
            <div className="lps_media mProfile">
              <figure className="lps_fig lps_fig_circle">
                <img
                  src={
                    feed_user_photo && feed_user_photo.medium
                      ? feed_user_photo.medium
                      : require("assets/images/icons/icn_profile.svg")
                  }
                  alt="User"
                />
              </figure>
              <div className="lps_media_body">
                <div className="lps_media_body">
                  <p className="moreDesktop desc-break">
                    <span className="text_primary">
                      <a
                        onClick={() => {
                          history.push(
                            `${routes.PROFILE}/${feed_user.user_name}`
                          );
                        }}
                      >
                        {capitalizeFirstLetter(user_name)}{" "}
                      </a>
                    </span>
                    {shortDesc}
                    {pendingText.length > 0 && (
                      <>
                        <span
                          className="moreellipses"
                          style={{ display: moreTextEnabled ? "none" : "" }}
                        >
                          {ellipsestext}&nbsp;
                        </span>
                        <span className="morecontent">
                          <span
                            style={{
                              display: moreTextEnabled ? "inline" : "none",
                            }}
                          >
                            {pendingText}
                          </span>
                          &nbsp;&nbsp;
                          <a
                            onClick={() => setMoreTextEnabled(!moreTextEnabled)}
                            className={
                              moreTextEnabled ? "morelink less" : "morelink"
                            }
                          >
                            {moreTextEnabled ? "Show less" : "Show more"}
                          </a>
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={isReposted ? "lps_list_repost" : ""}>
            <div className="post_img_block lps_pink_bg lps_widgets_wrp model_border textContent hightAuto">
              <div className="lps_sm_shape"></div>
              {isReposted && (
                <div className="reposted_wrps" style={{ zIndex: "100" }}>
                  <div className="rwposted_txt">
                    <a
                      onClick={() => {
                        history.push(
                          user
                            ? `${routes.PROFILE}/${repostedByUser.user_name}`
                            : routes.LOGIN_TO_PROCEED
                        );
                      }}
                      className="lps_link"
                    >
                      {capitalizeFirstLetter(repostedByUser.user_name)}
                    </a>
                  </div>
                  <img
                    src={require("assets/images/icons/icn_repeat.svg")}
                    alt="Add Image"
                  />
                </div>
              )}
              <a onClick={clickHandler}>
                <figure className="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty">
                  <img src={photo_urls.medium} alt="Add Image" />
                </figure>
              </a>
              {!isMobile && (
                <>
                  <RepostModal feed={feed} />
                  <TaggedModal feed={feed} />
                  <ReportModal feed={feed} />
                  <SharedModal feed={feed} />
                  <RemoveFeedModal feed={feed} />
                </>
              )}
            </div>
          </div>
          <FeedWidget
            showWidget={true}
            feed={feed}
            user={user}
            isReposted={isReposted}
          />
        </div>
      );
    }
  } else {
    return (
      <HiddenTagPost
        viewAnywayHandler={viewAnywayHandler}
        hidden_hashtags={feed.hidden_hashtags}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageFeed);

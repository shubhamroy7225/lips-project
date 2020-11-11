import React, { useState } from 'react';
import FeedWidget from 'scenes/Feed/components/FeedWidget';
import { isMobile } from 'react-device-detect';
import RepostModal from './FeedModal/RepostModal';
import TaggedModal from './FeedModal/TaggedModal';
import ReportModal from './FeedModal/ReportModal';
import SharedModal from './FeedModal/SharedModal';
import RemoveFeedModal from './FeedModal/RemoveFeedModal';
import { routes } from 'utility/constants/constants';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import placeholder from 'assets/images/thumbnails/thumb_placeholder.png';

const ImageFeed = (props) => {
    const { user, feed, isReposted, refHandler } = props
    const { attachments, description } = feed;

    const repostedByUser = isReposted ? feed.user : {};
    const feed_user = isReposted ? feed.parent.user : feed.user;
    const user_name = feed_user.user_name;
    const feed_user_photo = feed_user.photo_urls;
    const { photo_urls } = attachments.length > 0 ? attachments[0] : { photo_urls: { medium: placeholder } }; //else part is to handle the crash in case there is no image for feed type = "image"
    const [showWidget, setShowWidget] = useState(false)
    let history = useHistory()

    //more or less description
    var showCharMobileView = 135;  // How many characters are shown by default
    var showCharDesktop = 450;  // How many characters are shown by default
    let showChar = isMobile ? showCharMobileView : showCharDesktop;
    var ellipsestext = "...";
    let shortDesc = description ? description.substr(0, showChar) : "";
    var pendingText = description ? description.substr(showChar, description.length - showChar) : "";
    const [moreTextEnabled, setMoreTextEnabled] = useState(false)


    const clickHandler = () => {
        setShowWidget(!showWidget)
    }

    const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (isMobile) {
        return (
            <div className="lps_list" ref={(r) => refHandler && refHandler(r)}>
                <div className="lps_sm_shape"></div>
                <div className="post_img_block lps_widgets_wrp bg_gray_feed">

                    {isReposted && <div class="reposted_wrps">
                        <img src={require("assets/images/icons/icn_repeat.svg")} alt="Add Image" />
                        <div class="rwposted_txt">by &nbsp;
                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${repostedByUser.user_name}` : routes.LOGIN_TO_PROCEED) }} class="lps_link">{capitalizeFirstLetter(repostedByUser.user_name)}</a>
                        </div>
                    </div>}

                    <a onClick={clickHandler} id="trigger_main_feed">
                        <figure className="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty" >
                            <img src={photo_urls.medium} alt="Add Image" />
                        </figure>
                    </a>
                    <FeedWidget showWidget={showWidget} feed={feed} user={user} isReposted={isReposted} />
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={feed_user_photo && feed_user_photo.medium ? feed_user_photo.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div className="lps_media_body">
                            <div className="lps_media_body">
                                <p className="mb_5 more">
                                    <span className="text_primary ft_Weight_500">
                                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${feed_user.user_name}` : routes.LOGIN_TO_PROCEED) }}>{user_name} </a>
                                    </span> {shortDesc}
                                    {pendingText.length > 0 &&
                                        <>
                                            <span className="moreellipses" style={{ display: moreTextEnabled ? "none" : "" }}>{ellipsestext}&nbsp;</span>
                                            <span className="morecontent moreLess">
                                                <span style={{ display: moreTextEnabled ? "inline" : "none" }}>{pendingText}
                                                </span>&nbsp;&nbsp;
                                                <a onClick={() => setMoreTextEnabled(!moreTextEnabled)} className={moreTextEnabled ? "morelink less" : "morelink"}>{moreTextEnabled ? "less" : "more"}</a>
                                            </span>
                                        </>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className="lps_list lps_dsk_list" ref={(r) => refHandler && refHandler(r)}>
                <div className="lps_inner_wrp_media">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={feed_user_photo && feed_user_photo.medium ? feed_user_photo.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div className="lps_media_body">
                            <div className="lps_media_body">
                                <p className="moreDesktop">
                                    <span className="text_primary">
                                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${feed_user.user_name}` : routes.LOGIN_TO_PROCEED) }}>{capitalizeFirstLetter(user_name)} </a>
                                    </span>
                                    {shortDesc}
                                    {pendingText.length > 0 &&
                                        <>
                                            <span className="moreellipses" style={{ display: moreTextEnabled ? "none" : "" }}>{ellipsestext}&nbsp;</span>
                                            <span className="morecontent">
                                                <span style={{ display: moreTextEnabled ? "inline" : "none" }}>{pendingText}
                                                </span>&nbsp;&nbsp;
                                                <a onClick={() => setMoreTextEnabled(!moreTextEnabled)} className={moreTextEnabled ? "morelink less" : "morelink"}>{moreTextEnabled ? "Show less" : "Show more"}</a>
                                            </span>
                                        </>
                                    }
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="post_img_block lps_pink_bg lps_widgets_wrp model_border">
                    <div className="lps_sm_shape"></div>
                    {isReposted && <div class="reposted_wrps" style={{ zIndex: "100" }}>
                        <img src={require("assets/images/icons/icn_repeat.svg")} alt="Add Image" />
                        <div class="rwposted_txt">by &nbsp;
                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${repostedByUser.user_name}` : routes.LOGIN_TO_PROCEED) }} class="lps_link">{capitalizeFirstLetter(repostedByUser.user_name)}</a>
                        </div>
                    </div>}
                    <a onClick={clickHandler}>
                        <figure className="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty" >
                            <img src={photo_urls.medium} alt="Add Image" />
                        </figure>
                    </a>
                    {!isMobile &&
                        <>
                            <RepostModal feed={feed} />
                            <TaggedModal feed={feed} />
                            <ReportModal feed={feed} />
                            <SharedModal feed={feed} />
                            <RemoveFeedModal feed={feed} />
                        </>}
                </div>
                <FeedWidget showWidget={true} feed={feed} user={user} isReposted={isReposted} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageFeed);


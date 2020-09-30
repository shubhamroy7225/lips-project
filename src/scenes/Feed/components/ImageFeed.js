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

const ImageFeed = (props) => {
    const { user, feed, isReposted } = props
    const { attachments, description } = feed;

    const repostedByUser = isReposted ? feed.user : {};
    const feed_user = isReposted ? feed.parent.user : feed.user;
    const user_name = feed_user.user_name;
    const feed_user_photo = feed_user.photo_urls;
    const { photo_urls } = attachments[0];
    const [showWidget, setShowWidget] = useState(false)
    let history = useHistory()

    //more or less description
    var showChar = 135;  // How many characters are shown by default
    var ellipsestext = "...";
    let shortDesc = description ? description.substr(0, showChar) : "";
    var pendingText = description ? description.substr(showChar, description.length - showChar) : "";
    const [moreTextEnabled, setMoreTextEnabled] = useState(false)


    const clickHandler = () => {
        setShowWidget(!showWidget)
    }

    if (isMobile) {
        return (
            <div className="lps_list">
                <div className="lps_sm_shape"></div>
                <div class="post_img_block lps_widgets_wrp bg_gray_feed">
                    <a href="javascript:void(0);" onClick={clickHandler} id="trigger_main_feed">
                        <figure class="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty" >
                            <img src={photo_urls.medium} alt="Add Image" />
                        </figure>
                        {
                            isReposted &&
                            <div class="lps_inner_wrp pd_b10 text_secondary">repost by <span class="text_primary">
                                <a onClick={() => { history.push(user ? `${routes.PROFILE}/${repostedByUser.user_name}` : routes.LOGIN_TO_PROCEED) }}>{repostedByUser.user_name}</a>
                            </span>
                            </div>
                        }
                    </a>
                    <FeedWidget showWidget={showWidget} feed={feed} user={user} isReposted={isReposted} />
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={feed_user_photo && feed_user_photo.medium ? feed_user_photo.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p class="mb_5 more">
                                    <span class="text_primary ft_Weight_500">
                                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${feed_user.user_name}` : routes.LOGIN_TO_PROCEED) }}>{user_name} </a>
                                    </span> {shortDesc}
                                    {pendingText.length > 0 &&
                                        <>
                                            <span class="moreellipses" style={{ display: moreTextEnabled ? "none" : "" }}>{ellipsestext}&nbsp;</span>
                                            <span class="morecontent">
                                                <span style={{ display: moreTextEnabled ? "inline" : "none" }}>{pendingText}
                                                </span>&nbsp;&nbsp;
                                                <a onClick={() => setMoreTextEnabled(!moreTextEnabled)} class={moreTextEnabled ? "morelink less" : "morelink"}>{moreTextEnabled ? "less" : "more"}</a>
                                            </span>
                                        </>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div class="lps_list lps_dsk_list">
                <div class="lps_inner_wrp_media">
                    <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                            <img src={feed_user_photo && feed_user_photo.medium ? feed_user_photo.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p>
                                    <span class="text_primary">
                                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${feed_user.user_name}` : routes.LOGIN_TO_PROCEED) }}>{user_name} </a>
                                    </span>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post_img_block lps_pink_bg lps_widgets_wrp">
                    <div class="lps_sm_shape"></div>
                    {/* <figure class="feed_galary lps_flx_vm_jc lps_f_vm">
                        <img src={require("assets/images/icons/landscape-image.png")} alt="Add Image" />
                    </figure> */}
                    <a href="javascript:void(0);" onClick={clickHandler}>
                        <figure class="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty" >
                            <img src={photo_urls.medium} alt="Add Image" />
                        </figure>
                        {
                            isReposted && <div class="lps_inner_wrp pd_b10 text_secondary">repost by <span class="text_primary">
                                <a onClick={() => { history.push(user ? `${routes.PROFILE}/${repostedByUser.user_name}` : routes.LOGIN_TO_PROCEED) }}>{repostedByUser.user_name}</a>
                            </span></div>
                        }
                    </a>
                    <RepostModal feed={feed} />
                    <TaggedModal feed={feed} />
                    <ReportModal feed={feed} />
                    <SharedModal feed={feed} />
                    <RemoveFeedModal feed={feed} />
                </div>
                <FeedWidget showWidget={showWidget} feed={feed} user={user} isReposted={isReposted} />
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


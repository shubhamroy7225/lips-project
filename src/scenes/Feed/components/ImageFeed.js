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
    const { reposted, user, feed, selectionHandler } = props
    const { attachments, description, hashtagPosts, likable, liked, parent_id } = feed;
    const { photo_urls } = attachments[0]
    const [showWidget, setShowWidget] = useState(false)
    let history = useHistory()

    const clickHandler = () => {
        setShowWidget(!showWidget)
        selectionHandler();
    }

    if (isMobile) {
        return (
            <div className="lps_list">
                <div className="lps_sm_shape"></div>
                <div class="post_img_block lps_widgets_wrp bg_gray_feed">
                    <a href="javascript:void(0);" onClick={() => clickHandler} id="trigger_main_feed">
                        <figure class="feed_galary lps_flx_vm_jc lps_f_vm lps_bg_prty" >
                            <img src={photo_urls.medium} alt="Add Image" />
                        </figure>
                        {
                            reposted && <div class="lps_inner_wrp pd_b10 text_secondary">repost by <span class="text_primary">username</span></div>
                        }
                    </a>
                    <FeedWidget showWidget={showWidget} feed={feed} user={user} />
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p class="mb_5" style={{ whiteSpace: "pre-line" }}>
                                    <span class="text_primary ft_Weight_600">
                                        <a onClick={() => { history.push(user ? routes.PROFILE : routes.LOGIN_TO_PROCEED) }}>username</a>
                                    </span>
                                    {description}
                                </p>
                                <a href="main_feed_full_post_description.html" class="lps_link more_zindex ft_Weight_600">more</a>
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
                            <img src={require("assets/images/icons/user.jpg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p>
                                    <span class="text_primary">
                                        <a onClick={() => { history.push(user ? routes.PROFILE : routes.LOGIN_TO_PROCEED) }}>Jon snow </a>
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
                            reposted && <div class="lps_inner_wrp pd_b10 text_secondary">repost by <span class="text_primary">username</span></div>
                        }
                    </a>
                    <RepostModal />
                    <TaggedModal />
                    <ReportModal />
                    <SharedModal />
                    <RemoveFeedModal />
                </div>
                <FeedWidget showWidget={showWidget} feed={feed} user={user} />
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


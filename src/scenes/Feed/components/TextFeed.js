import React, { useState } from 'react';
import FeedWidget from 'scenes/Feed/components/FeedWidget';
import { isMobile } from 'react-device-detect';
import { useHistory, withRouter } from 'react-router-dom';
import { routes } from 'utility/constants/constants';
import { connect } from 'react-redux';
import RepostModal from './FeedModal/RepostModal';
import TaggedModal from './FeedModal/TaggedModal';
import ReportModal from './FeedModal/ReportModal';
import SharedModal from './FeedModal/SharedModal';
import RemoveFeedModal from './FeedModal/RemoveFeedModal';

const TextFeed = (props) => {
    let history = useHistory();
    const descriptionViewStyle = {
        whiteSpace: "pre-line",
        textAlign: "justify"
    }

    //ref handler is sent by search and profile page - this is to scroll to specific post on toggling between grid and list view
    const { user, feed, isReposted, refHandler } = props
    const { description } = feed;
    const reposted = isReposted;
    const repostedByUser = isReposted ? feed.user : {};
    const feed_user = isReposted ? feed.parent.user : feed.user;
    const user_name = feed_user.user_name;
    const [showWidget, setShowWidget] = useState(false)
    const feed_user_photo = feed_user.photo_urls;

    const clickHandler = () => {
        setShowWidget(!showWidget)
    }

    if (isMobile) {
        return (
            <div className="lps_list" ref={(r) => refHandler && refHandler(r)}>
                <div className="lps_sm_shape lps_sm_shape1"></div>
                <div class="lps_inner_wrp bg_gray_feed lps_mt_50">
                    <div className="lps_inner_cont lps_pos_rltv">
                        <article className="lps_art">
                            <a id="trigger_text_feed1" onClick={clickHandler}>
                                <p style={descriptionViewStyle}>{description}</p>
                                {/* <a href="main_feed_full_text.html" class="lps_link ft_Weight_600" title="more">more</a> */}
                                {
                                    reposted && <div class="lps_inner_wrp pd_b10 text_secondary">repost by <span class="text_primary">
                                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${repostedByUser.user_name}` : routes.LOGIN_TO_PROCEED) }}>{repostedByUser.user_name}</a>
                                    </span></div>
                                }
                            </a>
                        </article>
                        <FeedWidget showWidget={showWidget} feed={feed} user={user} />
                    </div>
                </div>
                <div className="lps_inner_wrp lps_inner_wrp_media pd_b0">
                    <div className="lps_media">
                        <figure className="lps_fig lps_fig_circle">
                            <img src={feed_user_photo && feed_user_photo.medium ? feed_user_photo.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div className="lps_media_body">
                            <div className="lps_media_body">
                                <p><span class="text_primary ft_Weight_600">
                                    <a onClick={() => { history.push(user ? `${routes.PROFILE}/${feed_user.user_name}` : routes.LOGIN_TO_PROCEED) }}>{user_name} </a>
                                </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div class="lps_list lps_dsk_list" ref={(r) => refHandler && refHandler(r)}>
                <div class="lps_inner_wrp_media">
                    <div class="lps_media">
                        <figure class="lps_fig lps_fig_circle">
                            <img src={feed_user_photo && feed_user_photo.medium ? feed_user_photo.medium : require("assets/images/icons/icn_profile.svg")} alt="User" />
                        </figure>
                        <div class="lps_media_body">
                            <div class="lps_media_body">
                                <p><span class="text_primary">
                                    <a onClick={() => { history.push(user ? `${routes.PROFILE}/${feed_user.user_name}` : routes.LOGIN_TO_PROCEED) }}>{user_name} </a>
                                </span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lps_inner_wrp lps_pink_border lps_widgets_wrp lps_mt_50">
                    <div class="lps_sm_shape lps_sm_shape1"></div>
                    <div class="lps_inner_cont lps_pos_rltv">
                        <article className="lps_art">
                            <a id="trigger_text_feed1" onClick={clickHandler}>
                                <p style={descriptionViewStyle}>{description}</p>
                                {/* <a href="main_feed  _full_text.html" className="lps_link" title="more">more</a> */}
                                {
                                    reposted && <div class="lps_inner_wrp pd_b10 text_secondary">repost by <span class="text_primary">
                                        <a onClick={() => { history.push(user ? `${routes.PROFILE}/${repostedByUser.user_name}` : routes.LOGIN_TO_PROCEED) }}>{repostedByUser.user_name}</a>
                                    </span></div>
                                }
                            </a>
                        </article>
                    </div>
                    {!isMobile &&
                        <>
                            <RepostModal feed={feed} />
                            <TaggedModal feed={feed} />
                            <ReportModal feed={feed} />
                            <SharedModal feed={feed} />
                            <RemoveFeedModal feed={feed} />
                        </>
                    }
                </div>
                <FeedWidget showWidget={true} feed={feed} user={user} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TextFeed);


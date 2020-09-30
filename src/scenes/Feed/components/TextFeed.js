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

    const { user, feed } = props
    const { description, parent_id } = feed;
    const reposted = parent_id && true;
    const [showWidget, setShowWidget] = useState(false)
    const feed_user = reposted ? feed.owner : feed.user;
    const user_name = feed_user.user_name;
    const feed_user_photo = feed_user.photo_urls;
    const repostedByUser = reposted ? feed.user : "";

    const clickHandler = () => {
        setShowWidget(!showWidget)
    }

    if (isMobile) {
        return (
            <div className="lps_list">
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
                                <p><span class="text_primary ft_Weight_600"><a onClick={() => { history.push(routes.PROFILE) }}>{user_name}</a> </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
                                <p><span class="text_primary"><a onClick={() => { history.push(routes.PROFILE) }}>{user_name}</a> </span></p>
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
                    <RepostModal feed={feed} />
                    <TaggedModal feed={feed} />
                    <ReportModal feed={feed} />
                    <SharedModal feed={feed} />
                    <RemoveFeedModal feed={feed} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TextFeed);


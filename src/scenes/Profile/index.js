import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import MenuOptionSlider from 'scenes/Feed/components/MenuOptionSlider';
import $ from 'jquery';
import { isMobile } from 'react-device-detect';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import FollowerItem from './components/FollowerItem';
import NonRegisteredView from 'scenes/NonRegisteredView';
import EditProfile from "./components/EditProfile";
import * as actions from 'redux/actions';

import * as commonService from "utility/utility";
import { FeedType, routes } from 'utility/constants/constants';
import ImageItem from 'scenes/Feed/components/ImageItem';
import TextItem from 'scenes/Feed/components/TextItem';
import ProfileHeader from './components/ProfileHeader';
import { decode } from 'base64-arraybuffer';
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';
import SharedModal from 'scenes/Feed/components/FeedModal/SharedModal';
import RemoveFeedModal from 'scenes/Feed/components/FeedModal/RemoveFeedModal';

const LoadingType = {
    undefined: "undefined",
    user: "user",
    feeds: "feeds",
    no_feed_access: "no_feed_access",
}

const Profile = (props) => {
    const { userFeeds } = useSelector((state) => state.feedReducer)
    const { otherUserFeeds } = useSelector((state) => state.feedReducer)
    const { user } = useSelector((state) => state.authReducer)
    const { otherUser } = useSelector((state) => state.authReducer)
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isEdit, setEdit] = useState(false)
    const [isOtherUser, setIsOtherUser] = useState(false)
    const [dataLoadedType, setDataLoadedType] = useState(LoadingType.undefined);

    const history = useHistory();

    useEffect(() => {
        $('.close_follow').on("click", function () {
            $('.followers_wrp').addClass('close');
            $('.followers_wrp').removeClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });

        $('.followers_trigger').on("click", function () {
            $('.followers_wrp').removeClass('close');
            $('.followers_wrp').addClass('open');
            $('.followers_wrp_inner').toggleClass('animated fadeInUp');
        });

    }, [])

    useEffect(() => {
        let userName = props.match.params.id; // get user name from url - if searching directly for the profile
        let tempIsOtherUser = isOtherUser; // for local scope

        if (userName && (!user || user.user_name !== userName)) {
            // if username is available, and not equal to currently signed in user assume it to be other user profile
            // other user's profile
            commonService.isLoading.onNext(true);
            setIsOtherUser(true);
            tempIsOtherUser = true
        } else {
            userName = user.user_name; //for self user
        }

        //fetch user info by username
        actions.fetchUserByUserName(userName)
            .then(response => {
                commonService.isLoading.onNext(false);
                if (response.data.success === true) {
                    let userID = response.data.user.id;
                    setDataLoadedType(LoadingType.user);
                    let showPost = tempIsOtherUser ? response.data.user.show_post : true; //if isotheruser then check for response else show post of signed in user
                    if (showPost) {
                        if (tempIsOtherUser) {
                            actions.fetchOtherUserFeeds(userID)
                                .then(res => {
                                    setDataLoadedType(LoadingType.feed);
                                });
                        } else {
                            actions.fetchUserFeeds()
                                .then(res => {
                                    setDataLoadedType(LoadingType.feed);
                                });
                        }
                    } else {
                        setDataLoadedType(LoadingType.no_feed_access);
                    }
                } else {
                    history.push(routes.ROOT)
                }
            });
    }, [])

    const toggleFeedLayoutMode = (feed) => {
        setGridLayoutMode(false)
    }

    let userInfo = isOtherUser ? otherUser : user
    let gridFeedContent = [];
    let listFeedContent = [];
    let feeds = [];

    if (isOtherUser) {
        feeds = otherUserFeeds;
    } else {
        feeds = userFeeds
    }
    if (user) {
        if (dataLoadedType === LoadingType.user) {
            gridFeedContent = <AsyncUILoader show={true} />
        } else {
            feeds.forEach(feed => {
                if (feed.type === FeedType.image) {
                    gridFeedContent.push(<ImageItem feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                    listFeedContent.push(<ImageFeed feed={feed} />)
                } else {
                    gridFeedContent.push(<TextItem feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                    listFeedContent.push(<TextFeed feed={feed} />)
                }
            });
        }

        if (dataLoadedType !== LoadingType.undefined) {
            let feedContent = null;
            if (dataLoadedType === LoadingType.user) {
                feedContent = (
                    <div id="tab-1" class="tab-content_cst current pt_0">
                        <AsyncUILoader show={true} />
                    </div>
                );
            } else if (dataLoadedType === LoadingType.no_feed_access) {
                feedContent = (
                    <div id="tab-1" class="tab-content_cst current">
                        <div class="main_feed_cont">
                            <div class="lps_tb_para">
                                <h4>The posts on this account are only visible <br /> to their followers</h4>
                            </div>
                        </div>
                    </div>
                )
            } else {
                //dataLoadedType === feed
                if (gridFeedContent.length === 0) {
                    feedContent = (
                        <div id="tab-1" class="tab-content_cst current">
                            <div class="main_feed_cont">
                                <div class="lps_tb_para">
                                    <h4>No Posts Yet</h4>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    feedContent = (
                        <div id="tab-1" class="tab-content_cst current pt_0">
                            {
                                gridlayoutMode ?
                                    <div class="lps_product_grid">
                                        {gridFeedContent}
                                    </div>
                                    :
                                    <div class="main_feed_cont">
                                        <div class="list_view">
                                            {listFeedContent}
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                }
            }

            if (isEdit) {
                return <EditProfile setIsEdit={setEdit} />
            } else {
                return (
                    <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
                        <div class="lps_container bg_grayCCC">
                            <ProfileHeader setEdit={setEdit}
                                user={userInfo}
                                isUserProfile={!isOtherUser} />
                            {/* <!-- Lips Tab --> */}
                            <section class="lips_tab tabs_grid_view_sec">
                                <ul class="tabs_block_cst">
                                    <li class="tab-link current" data-tab="tab-1">
                                        <figure class="lps_fig lps_fig_sm">
                                            <img src={require("assets/images/icons/icn_image_sm_black.svg")} alt="Picture" />
                                        </figure>
                                    </li>
                                </ul>
                                {feedContent}
                            </section>

                            {/* <!-- Menu bottom here --> */}
                            <MenuOptionSlider />
                            {/* <!-- // Menu bottom here --> */}

                            {/* <!-- followers content --> */}
                            <div class="bg_grayCCC lps_h_100 followers_wrp close">
                                <div class="lps_inner_wrp lps_inner_content lps_h_100 bg_grayCCC followers_wrp_inner">
                                    <div class="lps_title_wrp text_center lps_pos_rltv">
                                        <a class="lps_arrow_left close_follow" href="#">
                                            <img src={require("assets/images/icons/icn_close.png")} alt="Icon Arrow" class="lps_header_img" />
                                        </a>
                                        <div class="lps_txtFollow_center">
                                            <span class="lps_sm_folow">Followers</span>
                                        </div>
                                    </div>
                                    <div class="follow_overflow">
                                        <FollowerItem />
                                        <FollowerItem />
                                        <FollowerItem />
                                        <FollowerItem />
                                        <FollowerItem />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TaggedModal />
                        <SharedModal />
                        <RemoveFeedModal />
                    </div>
                );
            }
        } else {
            return null;
        }
    } else {
        return <NonRegisteredView />
    }
}

export default Profile;

const AsyncUILoader = ({ show }) => {
    return (
        <div class="lps_loader_wrp" style={{ display: show ? "block" : "none" }}>
            <img src={require("assets/images/icons/icn_refresh.svg")} alt="Loader" />
        </div>
    )
}
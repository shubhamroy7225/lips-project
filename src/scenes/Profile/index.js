import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import MenuOptionSlider from 'scenes/Feed/components/MenuOptionSlider';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import NonRegisteredView from 'scenes/NonRegisteredView';
import EditProfile from "./components/EditProfile";
import * as actions from 'redux/actions';
import * as commonService from "utility/utility";
import { FeedType, PageSize, routes } from 'utility/constants/constants';
import ImageItem from 'scenes/Feed/components/ImageItem';
import TextItem from 'scenes/Feed/components/TextItem';
import ProfileHeader from './components/ProfileHeader';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import SharedModal from 'scenes/Feed/components/FeedModal/SharedModal';
import RemoveFeedModal from 'scenes/Feed/components/FeedModal/RemoveFeedModal';
import UserListPopUp from './components/UserlistPopup';
import { resetFollowersList } from "redux/actions/auth";
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';

const LoadingType = {
    undefined: "undefined",
    user: "user",
    feeds: "feeds",
    no_feed_access: "no_feed_access",
}

const Profile = (props) => {
    const { userFeeds } = useSelector((state) => state.feedReducer)
    const { otherUserFeeds } = useSelector((state) => state.feedReducer)
    const { user, followers, following, isOpeningFollowers } = useSelector((state) => state.authReducer)
    const { otherUser } = useSelector((state) => state.authReducer)
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isEdit, setEdit] = useState(false)
    const [isOtherUser, setIsOtherUser] = useState(false)
    const [dataLoadedType, setDataLoadedType] = useState(LoadingType.undefined);
    const history = useHistory();

    const [isFollowersPaginationCompleted, setIsFollowersPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    const [isFollowingPaginationCompleted, setIsFollowingPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    let followersPage = useRef(1)
    let followingsPage = useRef(1)
    var selectedFeedOnToggle = useRef(null);

    useEffect(() => {
        setGridLayoutMode(true)
        followingsPage.current = 1;
        followersPage.current = 1;

        resetFollowersList(); //reset previous list if there is any

        setIsFollowersPaginationCompleted(false)
        setIsFollowingPaginationCompleted(false)

        let userName = props.match.params.id; // get user name from url - if searching directly for the profile
        let tempIsOtherUser = isOtherUser; // for local scope

        if (userName && (!user || user.user_name !== userName)) {
            // if username is available, and not equal to currently signed in user assume it to be other user profile
            // other user's profile
            setIsOtherUser(true);
            tempIsOtherUser = true
        } else {
            userName = user.user_name; //for self user
            setIsOtherUser(false);
            tempIsOtherUser = false
        }

        commonService.isLoading.onNext(true);
        //fetch user info by username
        actions.fetchUserByUserName(userName)
            .then(response => {
                commonService.isLoading.onNext(false);
                if (response.data.success === true) {
                    let userID = response.data.user.id;
                    setDataLoadedType(LoadingType.user);
                    let showPost = tempIsOtherUser ? response.data.user.show_post : true; //if isotheruser then check for response else show post of signed in user
                    if (user) {
                        // get only if user is logged in - for non logged in user don't show followers and following users
                        fetchAssociatedUsersDetails(tempIsOtherUser ? response.data.user : user)
                    }
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
    }, [props.match.params.id])

    useEffect(() => {

    }, [])

    const fetchAssociatedUsersDetails = (user) => {
        // fetch followers and following users here
        actions.fetchFollowers(user.id, followersPage.current, PageSize)
            .then(response => {
                if (response.data && response.data.followers.length < PageSize) {
                    setIsFollowersPaginationCompleted(true)
                }
            })
        actions.fetchFollowingUsers(user.id, followingsPage.current, PageSize)
            .then(response => {
                if (response.data && response.data.following.length < PageSize) {
                    setIsFollowingPaginationCompleted(true)
                }
            })
    }

    //for pagination
    const fetchNextFollowers = () => {
        ;
        let updatedUser = isOtherUser ? otherUser : user;
        followersPage.current = followersPage.current + 1
        actions.fetchFollowers(updatedUser.id, followersPage.current, PageSize)
            .then(response => {
                if (response.data && response.data.followers.length < PageSize) {
                    setIsFollowersPaginationCompleted(true)
                }
            })
    }

    // scroll to specifc post
    const scrollRefHandler = (ref) => {
        if (ref) {
            window.scrollTo(0, ref.offsetTop)
            selectedFeedOnToggle.current = null;
        }
    }

    //for pagination
    const fetchNextFollowingUsers = () => {
        let updatedUser = isOtherUser ? otherUser : user;
        followingsPage.current = followingsPage.current + 1
        actions.fetchFollowingUsers(updatedUser.id, followingsPage.current, PageSize)
            .then(response => {
                if (response.data && response.data.following.length < PageSize) {
                    setIsFollowingPaginationCompleted(true)
                }
            })
    }


    const toggleFeedLayoutMode = (feed) => {
        if (user) {
            selectedFeedOnToggle.current = feed
            setGridLayoutMode(false)
        } else {
            history.push(routes.LOGIN_TO_PROCEED)
        }
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
    //if self user coming to profile then ask for login if not logged in
    //routes with username are allowed to check the profile even if not logged in
    let showView = props.match.params.id || user
    if (showView) {
        if (dataLoadedType === LoadingType.user) {
            gridFeedContent = <AsyncUILoader show={true} />
        } else {
            feeds.forEach(feed => {
                if (feed.type === FeedType.image) {
                    gridFeedContent.push(<ImageItem feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                    listFeedContent.push(<ImageFeed refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} />)
                } else if (feed.type === FeedType.repost) {
                    let parentFeed = feed.parent;
                    if (parentFeed.type === FeedType.image) {
                        gridFeedContent.push(<ImageItem feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                        listFeedContent.push(<ImageFeed refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} isReposted={true} />)
                    } else {
                        gridFeedContent.push(<TextItem feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                        listFeedContent.push(<TextFeed refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} isReposted={true} />)
                    }
                } else {
                    gridFeedContent.push(<TextItem feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                    listFeedContent.push(<TextFeed refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} />)
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
                                    <div class="lps_product_grid destkVersion mt_5">
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
                        <div class="lps_container bg_grayCCC mt_0">
                            <ProfileHeader setEdit={setEdit}
                                user={userInfo}
                                isUserProfile={!isOtherUser}
                                isLoggedIn={user} />
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
                                        <a class="lps_arrow_left close_follow">
                                            <img src={require("assets/images/icons/icn_close.png")} alt="Icon Arrow" class="lps_header_img" />
                                        </a>
                                        <div class="lps_txtFollow_center">
                                            <span class="lps_sm_folow">{isOpeningFollowers ? "Followers" : "Following"}</span>
                                        </div>
                                    </div>
                                    <UserListPopUp followers={followers}
                                        following={following}
                                        fetchNextFollowers={fetchNextFollowers}
                                        fetchNextFollowingUsers={fetchNextFollowingUsers}
                                        isFollowersPaginationCompleted={isFollowersPaginationCompleted}
                                        isFollowingPaginationCompleted={isFollowingPaginationCompleted} />
                                </div>
                            </div>
                        </div>
                        {isMobile &&
                            <>
                                <TaggedModal />
                                <SharedModal />
                                <RemoveFeedModal />
                                <RepostModal />
                                <ReportModal />
                            </>
                        }
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

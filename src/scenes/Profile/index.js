import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
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
import ToggleListWidget from 'scenes/Feed/components/ToggleListWidget';
import scroller from 'scenes/Feed/Home/scroller';
import {
    setProfileFeedPaginationCompleted,
    setUserFeedPage,
    resetProfileFeedPaginationCompleted,
    setOtherProfileFeedPaginationCompleted,
    resetOtherProfileFeedPaginationCompleted,
    setOtherUserFeedPage
} from 'redux/actions/feed';
import PaginationLoader from 'scenes/Feed/components/PaginationLoader';
import InfiniteScroll from 'react-infinite-scroll-component';

const LoadingType = {
    undefined: "undefined",
    user: "user",
    feeds: "feeds",
    no_feed_access: "no_feed_access",
}

const Profile = (props) => {
    const { userFeeds } = useSelector((state) => state.feedReducer)
    const { user, followers, following, isOpeningFollowers, otherUser } = useSelector((state) => state.authReducer)

    const { otherUserFeeds } = useSelector((state) => state.feedReducer)
    const [isOtherUser, setIsOtherUser] = useState(false)
    const otherUserID = useRef(null);

    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isEdit, setEdit] = useState(false)
    const [dataLoadedType, setDataLoadedType] = useState(LoadingType.undefined);
    const history = useHistory();

    const [isFollowersPaginationCompleted, setIsFollowersPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    const [isFollowingPaginationCompleted, setIsFollowingPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    let followersPage = useRef(1)
    let followingsPage = useRef(1)
    let selectedFeedOnToggle = useRef(null);

    //scroll listener
    useEffect(() => {
        // console.log("scroll listen")
        window.addEventListener("scroll", props.listener);
        return () => {
            // console.log("release")
            window.removeEventListener("scroll", props.listener);
        };
    }, []);

    useEffect(() => {
        resetProfileFeedPaginationCompleted()
        resetOtherProfileFeedPaginationCompleted()

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
            setDataLoadedType(LoadingType.user); // for self user show the user info directly from local storage
        }

        tempIsOtherUser && commonService.isLoading.onNext(true); //only for other user
        //fetch user info by username
        actions.fetchUserByUserName(userName)
            .then(response => {
                commonService.isLoading.onNext(false);
                if (response.data.success === true) {
                    otherUserID.current = response.data.user.id;
                    setDataLoadedType(LoadingType.user);
                    let showPost = tempIsOtherUser ? response.data.user.show_post : true; //if isotheruser then check for response else show post of signed in user
                    if (user) {
                        // get only if user is logged in - for non logged in user don't show followers and following users
                        fetchAssociatedUsersDetails(tempIsOtherUser ? response.data.user : user)
                    }
                    if (showPost) {
                        fetchFeeds(true, tempIsOtherUser)
                    } else {
                        setDataLoadedType(LoadingType.no_feed_access);
                    }
                } else {
                    history.push(routes.ROOT)
                }
            });
    }, [props.match.params.id])

    const fetchFeeds = (isInitialFetch, isOtherUser) => {
        // if initial fetch then pass page 1 
        // for next page pass props.page that contains next page url
        let pageQuery = '';
        if (isOtherUser) {
            pageQuery = isInitialFetch ? `?limit=${PageSize}&page=${1}` : `?${props.otherUserFeedPage}`;
        } else {
            pageQuery = isInitialFetch ? `?limit=${PageSize}&page=${1}` : `?${props.page}`;
        }
        if (isOtherUser) {
            actions.fetchOtherUserFeeds(otherUserID.current, pageQuery, isInitialFetch)
                .then(res => {
                    if (res.data.success === true) {
                        if (res.data.posts.length > 0) {
                            let nextPage = res.data.nextPage;
                            if (nextPage) {
                                nextPage = nextPage.split("?")[1];
                                setOtherUserFeedPage({ page: nextPage });
                            } else {
                                setOtherProfileFeedPaginationCompleted();
                            }
                        } else {
                            //empty post means we have fetched all the posts
                            setOtherProfileFeedPaginationCompleted();
                        }
                    }
                    setDataLoadedType(LoadingType.feed);
                });
        } else {
            actions.fetchUserFeeds(pageQuery, isInitialFetch)
                .then(res => {
                    debugger;
                    if (res.data.success === true) {
                        if (res.data.posts.length > 0) {
                            let nextPage = res.data.nextPage;
                            if (nextPage) {
                                nextPage = nextPage.split("?")[1];
                                setUserFeedPage({ page: nextPage });
                            } else {
                                setProfileFeedPaginationCompleted();
                            }
                        } else {
                            //empty post means we have fetched all the posts
                            setProfileFeedPaginationCompleted();
                        }
                    }
                    setDataLoadedType(LoadingType.feed);
                });
        }
    }

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

    const feedSelectionHandler = (feed) => {
        if (user) {
            selectedFeedOnToggle.current = feed
            setGridLayoutMode(false)
        } else {
            history.push(routes.LOGIN_TO_PROCEED)
        }
    }

    const toggleFeedLayoutMode = () => {
        setGridLayoutMode(!gridlayoutMode)
    }

    useEffect(() => {
        console.log("isPaginationCompleted:" + props.isPaginationCompleted)
    }, [props.isPaginationCompleted])

    let userInfo = isOtherUser ? otherUser : user
    let gridFeedContent = [];
    let listFeedContent = [];
    let feeds = [];

    feeds = isOtherUser ? otherUserFeeds : userFeeds;

    //if self user coming to profile then ask for login if not logged in
    //routes with username are allowed to check the profile even if not logged in
    let showView = props.match.params.id || user
    if (showView) {
        if (dataLoadedType === LoadingType.user) {
            gridFeedContent = <AsyncUILoader show={true} />
        } else {
            feeds.forEach((feed, index) => {
                if (feed.type === FeedType.image) {
                    gridFeedContent.push(<ImageItem key={index} feed={feed} selectionHandler={() => feedSelectionHandler(feed)} />);
                    listFeedContent.push(<ImageFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} />)
                } else if (feed.type === FeedType.repost) {
                    let parentFeed = feed.parent;
                    if (parentFeed.type === FeedType.image) {
                        gridFeedContent.push(<ImageItem key={index} feed={feed} isReposted={true} selectionHandler={() => feedSelectionHandler(feed)} />);
                        listFeedContent.push(<ImageFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} isReposted={true} />)
                    } else {
                        gridFeedContent.push(<TextItem key={index} feed={feed} isReposted={true} selectionHandler={() => feedSelectionHandler(feed)} />);
                        listFeedContent.push(<TextFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} isReposted={true} />)
                    }
                } else {
                    gridFeedContent.push(<TextItem key={index} feed={feed} selectionHandler={() => feedSelectionHandler(feed)} />);
                    listFeedContent.push(<TextFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} feed={feed} />)
                }
            });
        }
        let isPaginationCompleted = isOtherUser ? props.isOtherProfilePaginationCompleted : props.isPaginationCompleted

        if (dataLoadedType !== LoadingType.undefined) {
            let feedContent = null;
            if (dataLoadedType === LoadingType.user) {
                feedContent = (
                    <div id="tab-1" className="tab-content_cst current pt_0">
                        <AsyncUILoader show={true} />
                    </div>
                );
            } else if (dataLoadedType === LoadingType.no_feed_access) {
                feedContent = (
                    <div id="tab-1" className="tab-content_cst current">
                        <div className="main_feed_cont">
                            <div className="lps_tb_para">
                                <h4>The posts on this account are only visible <br /> to their followers</h4>
                            </div>
                        </div>
                    </div>
                )
            } else {
                //dataLoadedType === feed
                if (gridFeedContent.length === 0) {
                    feedContent = (
                        <div id="tab-1" className="tab-content_cst current">
                            <div className="main_feed_cont">
                                <div className="lps_tb_para">
                                    <h4>No Posts Yet</h4>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    feedContent = (
                        <div id="tab-1" className="tab-content_cst current pt_0">
                            {
                                gridlayoutMode ?
                                    <InfiniteScroll
                                        dataLength={feeds.length}
                                        next={() => fetchFeeds(false, isOtherUser)}
                                        hasMore={!isPaginationCompleted}
                                        loader={<PaginationLoader show={true} />}>
                                        <div className="lps_product_grid destkVersion mt_5">
                                            {gridFeedContent}
                                        </div>

                                    </InfiniteScroll>
                                    :
                                    <div className="main_feed_cont">
                                        <div className="list_view">
                                            <InfiniteScroll
                                                dataLength={feeds.length}
                                                next={() => fetchFeeds(false, isOtherUser)}
                                                hasMore={!isPaginationCompleted}
                                                loader={<PaginationLoader show={true} />}
                                            >
                                                {listFeedContent}
                                            </InfiniteScroll>
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
                        <div className="lps_container bg_grayCCC mt_0">
                            <ProfileHeader setEdit={setEdit}
                                user={userInfo}
                                isUserProfile={!isOtherUser}
                                isLoggedIn={user} />
                            {/* <!-- Lips Tab --> */}
                            <section className="lips_tab tabs_grid_view_sec">
                                <ul className="tabs_block_cst">
                                    <li className="tab-link current" data-tab="tab-1">
                                        <figure className="lps_fig lps_fig_sm">
                                            <img src={require("assets/images/icons/icn_image_sm_black.svg")} alt="Picture" />
                                        </figure>
                                    </li>
                                </ul>
                                {feedContent}
                            </section>

                            {/* <!-- Menu bottom here --> */}
                            <ToggleListWidget gridlayoutMode={gridlayoutMode} setGridLayoutMode={setGridLayoutMode} />
                            <MenuOptionSlider />
                            {/* <!-- // Menu bottom here --> */}

                            {/* <!-- followers content --> */}
                            <div className="bg_grayCCC lps_h_100 followers_wrp close">
                                <div className="lps_inner_wrp lps_inner_content lps_h_100 bg_grayCCC followers_wrp_inner">
                                    <div className="lps_title_wrp text_center lps_pos_rltv">
                                        <a className="lps_arrow_left close_follow">
                                            <img src={require("assets/images/icons/icn_close.png")} alt="Icon Arrow" className="lps_header_img" />
                                        </a>
                                        <div className="lps_txtFollow_center">
                                            <span className="lps_sm_folow">{isOpeningFollowers ? "Followers" : "Following"}</span>
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

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    page: state.feedReducer.userFeedPage,
    isPaginationCompleted: state.feedReducer.profileFeedIsPaginationCompleted,
    otherUserFeedPage: state.feedReducer.otherUserFeedPage,
    isOtherProfilePaginationCompleted: state.feedReducer.otherUserProfileFeedsIsPaginationCompleted
});

export default connect(mapStateToProps, null)(scroller(Profile));


const AsyncUILoader = ({ show }) => {
    return (
        <div className="lps_loader_wrp" style={{ display: show ? "block" : "none" }}>
            <img src={require("assets/images/icons/icn_refresh.svg")} alt="Loader" />
        </div>
    )
}

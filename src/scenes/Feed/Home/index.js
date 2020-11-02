import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import RestrictedFeed from 'scenes/Feed/components/RestrictedFeed';
import MenuOptionSlider from '../components/MenuOptionSlider';
import { isMobile } from 'react-device-detect';
import { fetchFeeds, fetchFeedsForNonRegUser } from 'redux/actions';
import { FeedType, PageSize } from 'utility/constants/constants';
import { setPage } from 'redux/actions/feed';
import scroller from './scroller';
import PaginationLoader from '../components/PaginationLoader';
import * as commonService from "utility/utility";
import storage from 'utility/storage';
import ToggleListWidget from '../components/ToggleListWidget';
import { setMainFeedPaginationCompleted } from 'redux/actions/feed';

const MainFeed = (props) => {
    const [isFeedCallInProgress, setIsFeedCallInProgress] = useState(false); // if feed call in progress don't trigger multiple
    const selectedFeed = props.selectedFeed;

    //will mount and unmount - on unmount show the header if it's hidden
    useEffect(() => {
        if (props.feeds.length === 0) {
            fetchFeedsFromServer(true);
        }
    }, [])

    //scroll listener
    useEffect(() => {
        window.addEventListener("scroll", props.listener);
        return () => {
            window.removeEventListener("scroll", props.listener);
        };
    });

    // on unmount ennsure the header is visible
    useEffect(() => {
        return () => {
            props.toggleHeader(true);
        };
    }, []);


    useEffect(() => {
        if (props.bottomOffset &&
            props.bottomOffset < 200 &&
            !isFeedCallInProgress && //if feed call in progress don't fire again
            !props.mainFeedIsPaginationCompleted) { //check if all the feeds are fetched - don't fire
            onReachingBottom();
        }
    }, [props.bottomOffset, props.mainFeedIsPaginationCompleted])

    // called from HOC Scroller on reaching bottom 
    const onReachingBottom = () => {
        setIsFeedCallInProgress(true);
        //make feed call for page
        console.log("making pagination call");
        fetchFeedsFromServer(false);
        console.log("reached bottom initiate page call");
    }

    //fetch feeds from server 
    const fetchFeedsFromServer = (isInitialFetch) => {
        // if initial fetch then pass page 1 
        // for next page pass props.page that contains next page url
        let pageQuery = isInitialFetch ? `?limit=${PageSize}&page=${1}` : `?${props.page}`;
        let selectedHashtags = storage.get("justBrowseTags");
        if (!props.user && selectedHashtags) {
            // if user is not there, get the selected hashtags stored in storage and fetch the feeds
            let request = { hashtags: selectedHashtags }
            fetchFeedsForNonRegUser(request, isInitialFetch, pageQuery).then(res => {
                if (res.data.success === true) {
                    if (res.data.posts.length > 0) {
                        let nextPage = res.data.nextPage;
                        if (nextPage) {
                            nextPage = nextPage.split("?")[1];
                            setPage({ page: nextPage });
                        } else {
                            setMainFeedPaginationCompleted();
                        }
                    } else {
                        //empty post means we have fetched all the posts
                        setMainFeedPaginationCompleted();
                    }
                }
                setIsFeedCallInProgress(false);
            }).catch(error => {
                setIsFeedCallInProgress(false);
            })
        } else {
            fetchFeeds(pageQuery).then(res => {
                if (res.data.success === true) {
                    if (res.data.posts.length > 0) {
                        let nextPage = res.data.nextPage;
                        if (nextPage) {
                            nextPage = nextPage.split("?")[1];
                            setPage({ page: nextPage });
                        } else {
                            setMainFeedPaginationCompleted();
                        }
                    } else {
                        //empty post means we have fetched all the posts
                        setMainFeedPaginationCompleted();
                    }
                }
                setIsFeedCallInProgress(false);
            }).catch(error => {
                setIsFeedCallInProgress(false);
            })
        }

    }

    let feedContent = [];
    let lps_container = "";
    if (props.feeds && props.feeds.length > 0) {
        lps_container = "lps_container"
        feedContent = props.feeds.map((feed, index) => {
            if (feed.type === FeedType.image) {
                return <ImageFeed feed={feed} />
            } else if (feed.type === FeedType.repost) {
                let parentFeed = feed.parent;
                if (parentFeed.type === FeedType.image) {
                    return <ImageFeed feed={feed} isReposted={true} />
                } else {
                    return <TextFeed feed={feed} isReposted={true} />
                }
            } else {
                return <TextFeed feed={feed} />
            }
        })
    } else {
        if (props.user) {
            feedContent = (
                <div className="appearHere">
                    <div className="up_arrow_wrp mt_10">
                        <img src={require("assets/images/icons/icn_up_arrow.png")} alt="Image" className="lip_icn" />
                        <h5 className="h5_title lps_flx_vm tags_lip_inline text_inherit">to come back here click <img src={require("assets/images/thumbnails/logo.png")} alt="Image" className="lip_icn" /> </h5>
                    </div>
                    <div className="lps_tb_para wlcome">
                        <h3>Welcome to your feed</h3>
                        <h4>Posts from account you follow will appear here.</h4>
                    </div>
                    <div className="up_arrow_wrp down_arrow_wrp">
                        {isMobile ? 
                        <>
                        <div className="h5_title1 inline_img1">Open the menu and click <img src={require("assets/images/icons/icn_search.png")} alt="Image" className="lip_icn" /> to discover accounts to follow.</div>
                        <img src={require("assets/images/icons/icn_down_arrow.png")} alt="Image" className="lip_icn" />
                        </>  : null }
                    </div>
                </div>
            )
        } else {
            feedContent = (
                <div class="lps_tb_para">
                    <h4></h4>
                </div>
            )
        }

    }

    if (props.feeds && props.feeds.length > 0) {
        if (isMobile) {
            return (
                <>
                    <div id="wrap" >
                        <div class="lps_container main_feed_cont bg_grayCCC">
                            {feedContent}
                            {/* <RestrictedFeed /> */}
                            <PaginationLoader show={!props.mainFeedIsPaginationCompleted} />
                            {/* <!-- Menu bottom here --> */}
                            <MenuOptionSlider feed={selectedFeed} hideMenuOptionSlider={props.hideMenuOptionSlider} />
                            {/* <!-- //end Menu bottom here --> */}
                        </div>
                    </div>

                    {/*   popup */}
                    {
                        selectedFeed &&
                        <>
                            <RepostModal />
                            <TaggedModal />
                            <ReportModal />
                            <SharedModal />
                            <RemoveFeedModal />
                        </>
                    }
                </>
            )
        } else {
            return (
                <div id="wrap" className="lps_xl_view">
                    <div className="lps_container main_feed_cont">
                        {feedContent}
                    </div>
                    <PaginationLoader show={!props.mainFeedIsPaginationCompleted} />
                    <MenuOptionSlider feed={selectedFeed} hideMenuOptionSlider={props.hideMenuOptionSlider} />
                </div>
            );
        }
    } else {
        if (isMobile) {
            return (
                <div id="wrap">
                    <div class="lps_container empty_feed_bg_wrp empty_feed_bg_wrp_spc">
                        <div class="up_arrow_wrp">
                            <a href="#" class="lips_arrow">
                                <img src={require("assets/images/icons/icn_up_arrow.png")} alt="Image" class="lip_icn" />
                            </a>
                            <h5 class="h5_title lps_flx_vm tags_lip_inline text_inherit">to come back here click <img src={require("assets/images/thumbnails/logo.png")} alt="Image" class="lip_icn" /> </h5>
                        </div>
                        <div class="mdl_arrow_wrp">
                            <h5 class="h5_title text_inherit">Welcome to your feed.</h5>
                            <h5 class="h5_title text_inherit">Posts from account you follow will appear here.</h5>
                        </div>
                        <div class="up_arrow_wrp down_arrow_wrp">
                            <div class="h5_title1 inline_img1">Open the menu and click <img src={require("assets/images/icons/icn_search.png")} alt="Image" class="lip_icn" /> to discover accounts to follow.</div>
                            <a href="#" class="lips_arrow">
                                <img src={require("assets/images/icons/icn_down_arrow.png")} alt="Image" class="lip_icn" />
                            </a>
                        </div>
                        <MenuOptionSlider feed={selectedFeed} hideMenuOptionSlider={props.hideMenuOptionSlider} />
                    </div>
                </div>
            );
        } else {
            return (
                <div id="wrap" className="lps_xl_view">
                    <div class="lps_container empty_feed_bg_wrp empty_feed_bg_wrp_spc">
                        <div class="up_arrow_wrp">
                            <a href="#" class="lips_arrow">
                                <img src={require("assets/images/icons/icn_up_arrow.png")} alt="Image" class="lip_icn" />
                            </a>
                            <h5 class="h5_title lps_flx_vm tags_lip_inline text_inherit">to come back here click <img src={require("assets/images/thumbnails/logo.png")} alt="Image" class="lip_icn" /> </h5>
                        </div>
                        <div class="mdl_arrow_wrp">
                            <h5 class="h5_title text_inherit">Welcome to your feed.</h5>
                            <h5 class="h5_title text_inherit">Posts from account you follow will appear here.</h5>
                        </div>
                        <div class="up_arrow_wrp down_arrow_wrp">
                            <div class="h5_title1 inline_img1">Click <img src={require("assets/images/icons/icn_search.png")} alt="Image" class="lip_icn" /> to discover accounts to follow.</div>
                            {/* <a href="#" class="lips_arrow">
                                <img src={require("assets/images/icons/icn_down_arrow.png")} alt="Image" class="lip_icn" />
                            </a> */}
                        </div>
                        <MenuOptionSlider feed={selectedFeed} hideMenuOptionSlider={props.hideMenuOptionSlider} />
                    </div>
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    feeds: state.feedReducer.feeds,
    page: state.feedReducer.page,
    selectedFeed: state.feedReducer.selectedFeed,
    mainFeedIsPaginationCompleted: state.feedReducer.mainFeedIsPaginationCompleted
});

export default connect(mapStateToProps, null)(scroller(MainFeed));

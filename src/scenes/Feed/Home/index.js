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
import { fetchFeeds } from 'redux/actions/feed/action';
import { FeedType, PageSize } from 'utility/constants/constants';
import { clearAllFeeds, setPage } from 'redux/actions/feed';
import scroller from './scroller';
import PaginationLoader from '../components/PaginationLoader';

const MainFeed = (props) => {
    const [isFeedCallInProgress, setIsFeedCallInProgress] = useState(false); // if feed call in progress don't trigger multiple
    const [isPaginationCompleted, setIsPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    const selectedFeed = props.selectedFeed;

    //will mount and unmount - on unmount show the header if it's hidden
    useEffect(() => {
        if (props.feeds.length === 0) {
            clearAllFeeds();
            fetchFeedsFromServer();
        }
    }, [])

    // called from HOC Scroller on reaching bottom 
    const validatePaginationCompletion = () => {
        let feedsCount = props.feeds.length;
        if (feedsCount % PageSize !== 0) {
            setIsPaginationCompleted(true)
        }
    }

    //scroll listener
    useEffect(() => {
        window.addEventListener("scroll", props.listener);
        return () => {
            window.removeEventListener("scroll", props.listener);
        };
    });

    //listen for feed changes
    useEffect(() => {
        console.log(props.feeds);
        //keep validating on every update of feeds
        validatePaginationCompletion();
    }, [props.feeds]);

    useEffect(() => {
        if (props.bottomOffset &&
            props.bottomOffset < 200 &&
            !isFeedCallInProgress && //if feed call in progress don't fire again
            !isPaginationCompleted) { //check if all the feeds are fetched - don't fire
            onReachingBottom();
        }
    }, [props.bottomOffset])

    // called from HOC Scroller on reaching bottom 
    const onReachingBottom = () => {
        setIsFeedCallInProgress(true);
        //make feed call for page
        console.log("making pagination call");
        fetchFeedsFromServer();
        console.log("reached bottom initiate page call");
    }

    //fetch feeds from server
    const fetchFeedsFromServer = () => {
        let pageQuery = `?limit=${PageSize}&page=${props.page}`;
        fetchFeeds(pageQuery).then(res => {
            if (res.data.success === true) {
                if (res.data.posts.length > 0) {
                    let updatedPage = props.page + 1;
                    setPage({ page: updatedPage });
                } else {
                    //empty post means we have fetched all the posts
                    setIsPaginationCompleted(true);
                }
            }
            setIsFeedCallInProgress(false);
        }).catch(error => {
            setIsFeedCallInProgress(false);
        })
    }

    let feedContent = [];
    if (props.feeds) {
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
    }

    if (isMobile) {
        return (
            <>
                <div id="wrap" >
                    <div class="lps_container main_feed_cont bg_grayCCC">
                        {feedContent}
                        {/* <RestrictedFeed /> */}
                        <PaginationLoader show={!isPaginationCompleted} />
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
                <PaginationLoader show={!isPaginationCompleted} />
                <MenuOptionSlider feed={selectedFeed} hideMenuOptionSlider={props.hideMenuOptionSlider} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    feeds: state.feedReducer.feeds,
    page: state.feedReducer.page,
    selectedFeed: state.feedReducer.selectedFeed
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(scroller(MainFeed));

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router'
import { connect, useSelector } from 'react-redux';
import SearchInput from './components/SearchInput';
import MenuOptionSlider from '../components/MenuOptionSlider';
import ImageItem from '../components/ImageItem';
import { isMobile } from 'react-device-detect';
import * as actions from 'redux/actions';
import TextItem from '../components/TextItem';
import ImageFeed from '../components/ImageFeed';
import TextFeed from '../components/TextFeed';
import { FeedType, PageSize } from 'utility/constants/constants';
import * as commonService from "../../../utility/utility";
import { setSearchPage } from 'redux/actions/feed';
import PaginationLoader from '../components/PaginationLoader';
import scroller from '../Home/scroller';
import RepostModal from '../components/FeedModal/RepostModal';
import TaggedModal from '../components/FeedModal/TaggedModal';
import ReportModal from '../components/FeedModal/ReportModal';
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';

const ExploreFeed = (props) => {
    const { searchFeeds } = useSelector(state => state.feedReducer);
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [isFeedCallInProgress, setIsFeedCallInProgress] = useState(false); // if feed call in progress don't trigger multiple
    const [isPaginationCompleted, setIsPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    let searchText = null;

    //will mount and unmount - on unmount show the header if it's hidden
    useEffect(() => {
        if (searchFeeds.length === 0) {
            fetchFeedsFromServer("", props.searchPage);
        }

        // on unmount ennsure the header is visible
        return () => {
            props.toggleHeader(true);
        };
    }, [])

    //listen for feed changes
    useEffect(() => {
        console.log(props.feeds);
        //keep validating on every update of feeds
        validatePaginationCompletion();
    }, [searchFeeds]);

    const validatePaginationCompletion = () => {
        let feedsCount = searchFeeds.length;
        if (feedsCount % PageSize !== 0) {
            setIsPaginationCompleted(true)
        }
    }

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

    //scroll listener
    useEffect(() => {
        window.addEventListener("scroll", props.listener);
        return () => {
            window.removeEventListener("scroll", props.listener);
        };
    });

    // called on reaching bottom 
    const onReachingBottom = () => {
        setIsFeedCallInProgress(true);
        //make feed call for page
        console.log("making pagination call");
        fetchFeedsFromServer(searchText, props.searchPage);
        console.log("reached bottom initiate page call");
    }

    const toggleFeedLayoutMode = (feed) => {
        setGridLayoutMode(false)
    }

    //fetch feeds from server
    const fetchFeedsFromServer = (searchText, page) => {
        let pageQuery = "";
        let isNextPage = page > 1 ? true : false
        if (searchText && searchText.length > 0) {
            pageQuery = `?search=${searchText}` //&limit=${props.pageSize}&page=${props.page}`;
            pageQuery = pageQuery + `&limit=${PageSize}&page=${page}`
        } else {
            pageQuery = `?limit=${PageSize}&page=${page}`
        }

        if (page === 1) { //when doing page 1 call - reset the pagination flag 
            setIsPaginationCompleted(false);
        }

        actions.searchFeeds(pageQuery, isNextPage).then(res => {
            setIsDataFetched(true);
            if (res.data.success === true) {
                if (res.data.success === true) {
                    if (res.data.posts.length > 0) {
                        let updatedPage = props.searchPage + 1;
                        setSearchPage({ page: updatedPage });
                    } else {
                        //empty post means we have fetched all the posts
                        setIsPaginationCompleted(true);
                    }
                }
                setIsFeedCallInProgress(false);

            } else {
                //error
                setIsPaginationCompleted(true);
            }
            // validatePaginationCompletion();
        }).catch(error => {
            setIsPaginationCompleted(true);
            setIsFeedCallInProgress(false);
        })
    }

    const submitHandler = (searchTxt) => {
        searchText = searchTxt
        setSearchPage({ page: 1 })
        fetchFeedsFromServer(searchText, 1);
    }

    let gridFeedContent = [];
    let listFeedContent = [];
    searchFeeds.forEach(feed => {
        if (feed.type === FeedType.image) {
            gridFeedContent.push(<ImageItem feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
            listFeedContent.push(<ImageFeed feed={feed} />)
        } else if (feed.type === FeedType.repost) {
            let parentFeed = feed.parent;
            if (parentFeed.type === FeedType.image) {
                gridFeedContent.push(<ImageItem feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                listFeedContent.push(<ImageFeed feed={feed} isReposted={true} />)
            } else {
                gridFeedContent.push(<TextItem feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                listFeedContent.push(<TextFeed feed={feed} isReposted={true} />)
            }
        } else {
            gridFeedContent.push(<TextItem feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
            listFeedContent.push(<TextFeed feed={feed} />)
        }
    });
    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div className="lps_container">
                <SearchInput submitHandler={submitHandler} />
                <div className="browse_category">
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
                    {gridFeedContent.length === 0 && isDataFetched && <div class="main_feed_cont">
                        <div class="lps_tb_para">
                            <h4>No Results Found!</h4>
                        </div>
                    </div>}
                </div>

                <PaginationLoader show={!isPaginationCompleted} />
                <MenuOptionSlider />
            </div>
            {isMobile &&
                <>
                    <RepostModal />
                    <TaggedModal />
                    <ReportModal />
                    <SharedModal />
                    <RemoveFeedModal />
                </>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    searchPage: state.feedReducer.searchPage,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(scroller(ExploreFeed));

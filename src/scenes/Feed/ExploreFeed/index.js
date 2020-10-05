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

const ExploreFeed = (props) => {
    const { searchFeeds } = useSelector(state => state.feedReducer);
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [isFeedCallInProgress, setIsFeedCallInProgress] = useState(false); // if feed call in progress don't trigger multiple
    const [isPaginationCompleted, setIsPaginationCompleted] = useState(false); // indicate if all the feeds are fetched

    useEffect(() => {
        // Update the document title using the browser API
        console.log(props);
    });

    //will mount and unmount - on unmount show the header if it's hidden
    useEffect(() => {
        if (searchFeeds.length === 0) {
            fetchFeedsFromServer("");
        }
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

    const onReachingBottom = () => {
        setIsFeedCallInProgress(true);
        //make feed call for page
        console.log("making pagination call");
        fetchFeedsFromServer();
        console.log("reached bottom initiate page call");
    }

    const toggleFeedLayoutMode = (feed) => {
        setGridLayoutMode(false)
    }

    //fetch feeds from server
    const fetchFeedsFromServer = (searchText) => {
        let pageQuery = "";
        if (searchText.length > 0) {
            pageQuery = `?search=${searchText}` //&limit=${props.pageSize}&page=${props.page}`;
            pageQuery = pageQuery + `&limit=${PageSize}&page=${props.searchPage}`
        } else {
            pageQuery = `?limit=${PageSize}&page=${props.searchPage}`
        }

        actions.searchFeeds(pageQuery).then(res => {
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

    const submitHandler = (searchText) => {
        fetchFeedsFromServer(searchText);
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
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    searchPage: state.feedReducer.searchPage,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(ExploreFeed));

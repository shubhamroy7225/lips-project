import React, { useEffect, useRef, useState } from 'react';
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
import { resetSearchFeedPagination, setSearchPage } from 'redux/actions/feed';
import PaginationLoader from '../components/PaginationLoader';
import scroller from '../Home/scroller';
import RepostModal from '../components/FeedModal/RepostModal';
import TaggedModal from '../components/FeedModal/TaggedModal';
import ReportModal from '../components/FeedModal/ReportModal';
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';
import ToggleListWidget from '../components/ToggleListWidget';
import { setSearchFeedPaginationCompleted } from 'redux/actions/feed';
import InfiniteScroll from 'react-infinite-scroll-component';

const ExploreFeed = (props) => {
    const { searchFeeds } = useSelector(state => state.feedReducer);
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const searchText = useRef(null);
    const selectedFeedOnToggle = useRef(null);

    //will mount and unmount - on unmount show the header if it's hidden
    //scroll listener
    useEffect(() => {
        console.log("scroll listen")
        if (searchFeeds.length === 0) {
            fetchFeedsFromServer("", true);
        }
        window.addEventListener("scroll", props.listener);
        return () => {
            props.toggleHeader(true);         // on unmount ensure the header is visible
            window.removeEventListener("scroll", props.listener);
        };
    }, []);

    const toggleFeedLayoutMode = (feed) => {
        selectedFeedOnToggle.current = feed
        setGridLayoutMode(false)
    }

    // scroll to specifc post 
    const scrollRefHandler = (ref) => {
        if (ref) {
            window.scrollTo(0, ref.offsetTop)
            selectedFeedOnToggle.current = null;
        }
    }

    //fetch feeds from server
    const fetchFeedsFromServer = (searchText, isInitialFetch) => {
        let pageQuery = "";
        let page = isInitialFetch ? 1 : props.searchPage
        let isNextPage = page === 1 ? false : true
        if (isInitialFetch) {
            if (searchText && searchText.length > 0) {
                pageQuery = `?search=${searchText}` //&limit=${props.pageSize}&page=${props.page}`;
                pageQuery = pageQuery + `&limit=${PageSize}&page=${1}`
            } else {
                pageQuery = `?limit=${PageSize}&page=${1}`
            }
        } else {
            pageQuery = `?${props.searchPage}`
        }

        if (page === 1) {
            resetSearchFeedPagination()
        }

        actions.searchFeeds(pageQuery, isNextPage).then(res => {
            setIsDataFetched(true);
            if (res.data.success === true) {
                if (res.data.success === true) {
                    if (res.data.posts.length > 0) {
                        let nextPage = res.data.nextPage; //next page url
                        if (nextPage) {
                            nextPage = nextPage.split("?")[1]; //only parse query string 
                            setSearchPage({ page: nextPage }); //and store it in reducer
                        } else {
                            setSearchFeedPaginationCompleted(); // if no next page then pagination is complete
                        }
                    } else {
                        //empty post means we have fetched all the posts
                        setSearchFeedPaginationCompleted();  // if post is empty then pagination is complete
                    }
                }
            } else {
                //error
                setSearchFeedPaginationCompleted()
            }
        }).catch(error => {
            setSearchFeedPaginationCompleted()
        })
    }

    const submitHandler = (searchTxt) => {
        searchText.current = searchTxt.replace("#", "");
        setSearchPage({ page: 1 })
        fetchFeedsFromServer(searchText.current, true);
    }


    const getMoreData = () => {
        fetchFeedsFromServer(searchText.current, false);
    }

    let gridFeedContent = [];
    let listFeedContent = [];
    searchFeeds.forEach((feed, index) => {
        if (gridlayoutMode == true) {
            if (feed.type === FeedType.image) {
                gridFeedContent.push(<ImageItem key={index} feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
            } else if (feed.type === FeedType.repost) {
                let parentFeed = feed.parent;
                if (parentFeed.type === FeedType.image) {
                    gridFeedContent.push(<ImageItem key={index} feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                } else {
                    gridFeedContent.push(<TextItem key={index} feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                }
            } else {
                gridFeedContent.push(<TextItem key={index} feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
            }
        } else {
            if (feed.type === FeedType.image) {
                listFeedContent.push(<ImageFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }}
                    index={feed.id} feed={feed} />)
            } else if (feed.type === FeedType.repost) {
                let parentFeed = feed.parent;
                if (parentFeed.type === FeedType.image) {
                    listFeedContent.push(<ImageFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} index={feed.id} feed={feed} isReposted={true} />)
                } else {
                    listFeedContent.push(<TextFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} index={feed.id} feed={feed} isReposted={true} />)
                }
            } else {
                listFeedContent.push(<TextFeed key={index} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }}
                    index={feed}
                    feed={feed} />)
            }
        }
    });

    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div className="lps_container">
                <SearchInput submitHandler={submitHandler} />
                <div className="browse_category">
                    {
                        gridlayoutMode ?
                            <InfiniteScroll
                                dataLength={searchFeeds.length}
                                next={getMoreData}
                                hasMore={!props.isPaginationCompleted}
                                loader={<PaginationLoader show={true} />}
                            >
                                <div class="lps_product_grid destkVersion">
                                    {gridFeedContent}
                                </div>
                            </InfiniteScroll>

                            :
                            <div class="main_feed_cont">
                                <div class="list_view">
                                    <InfiniteScroll
                                        dataLength={searchFeeds.length}
                                        next={getMoreData}
                                        hasMore={!props.isPaginationCompleted}
                                        loader={<PaginationLoader show={true} />}>
                                        {listFeedContent}
                                    </InfiniteScroll>
                                </div>

                            </div>
                    }
                    {gridFeedContent.length === 0 && isDataFetched && <div class="main_feed_cont">
                        <div class="lps_tb_para">
                            <h4>No Results Found!</h4>
                        </div>
                    </div>}
                </div>

                <ToggleListWidget gridlayoutMode={gridlayoutMode} setGridLayoutMode={setGridLayoutMode} />
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
    isPaginationCompleted: state.feedReducer.searchFeedIsPaginationCompleted
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(scroller(ExploreFeed));

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
import { FeedType } from 'utility/constants/constants';
import * as commonService from "../../../utility/utility";

const ExploreFeed = (props) => {
    const { searchFeeds } = useSelector(state => state.feedReducer);
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);

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

    const toggleFeedLayoutMode = (feed) => {
        setGridLayoutMode(false)
    }

    //fetch feeds from server
    const fetchFeedsFromServer = (searchText) => {
        commonService.isLoading.onNext(true);
        let pageQuery = `?search=${searchText}` //&limit=${props.pageSize}&page=${props.page}`;
        actions.searchFeeds(pageQuery).then(res => {
            setIsDataFetched(true);
            if (res.data.success === true) {
                if (res.data.posts.length > 0) {
                } else {
                    //empty post means we have fetched all the posts
                }
            }
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


                <MenuOptionSlider />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(ExploreFeed));

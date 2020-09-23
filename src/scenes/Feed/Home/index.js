import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import RestrictedFeed from 'scenes/Feed/components/RestrictedFeed';
import MenuOptionSlider from '../components/MenuOptionSlider';
import { isMobile } from 'react-device-detect';
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';
import { fetchFeeds } from 'redux/actions/feed/action';
import { FeedType } from 'utility/constants/constants';
import { clearAllFeeds } from 'redux/actions/feed';

const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);


const MainFeed = (props) => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [, setScrollX] = useState(bodyOffset.left);
    const [, setScrollDirection] = useState();

    const pageSize = 2;
    const [page, setPage] = useState(1);
    const [isPaginationCompleted, setIsPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    const [isFeedCallInProgress, setIsFeedCallInProgress] = useState(false); // if feed call in progress don't trigger multiple
    const [selectedFeed, setSelectedFeed] = useState(null);

    const validatePaginationCompletion = () => {
        let feedsCount = props.feeds.length;
        if (feedsCount % pageSize !== 0) {
            setIsPaginationCompleted(true)
        }
    }

    //scroll listener
    //detecting bottom to initiate pagination
    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        // console.log(scrollDirection);
        let scrollDirection = lastScrollTop > -bodyOffset.top ? "down" : "up"

        if (scrollDirection === "up" && scrollY > 70) {
            toggleHeader(false)
        } else {
            toggleHeader(true)
        }
        // debugger;
        setLastScrollTop(-bodyOffset.top);

        let bottom = document.body.scrollHeight - (-bodyOffset.top + bodyOffset.height);
        if (bottom < 200 &&
            !isFeedCallInProgress && //if feed call in progress don't fire again
            !isPaginationCompleted) { //check if all the feeds are fetched - don't fire
            setIsFeedCallInProgress(true);
            //make feed call for page
            console.log("making pagination call");
            fetchFeedsFromServer();
            console.log("reached bottom initiate page call");
        }
    };

    //for hiding/showing header
    const toggleHeader = (enable) => {
        if (enable) {
            removeBodyClass("scroll-down")
            addBodyClass("scroll-up")
        } else {
            addBodyClass("scroll-down")
            removeBodyClass("scroll-up")
        }
    }

    //will mount and unmount - on unmount show the header if it's hidden
    useEffect(() => {
        clearAllFeeds();
        fetchFeedsFromServer();
        return () => {
            toggleHeader(true)
        }
    }, [])

    //fetch feeds from server
    const fetchFeedsFromServer = () => {
        let pageQuery = `?limit=${pageSize}&page=${page}`;
        fetchFeeds(pageQuery).then(res => {
            if (res.data.success === true) {
                if (res.data.posts.length > 0) {
                    let updatedPage = page + 1;
                    setPage(updatedPage);
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

    //scroll listener
    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    //listen for feed changes
    useEffect(() => {
        console.log(props.feeds);
        //keep validating on every update of feeds
        validatePaginationCompletion();
    }, [props.feeds]);

    const onFeedSelectionHandler = feed => {
        console.log(feed.id);
    }


    let feedContent = [];
    if (props.feeds) {
        feedContent = props.feeds.map((feed, index) => {
            if (feed.type === FeedType.image) {
                return <ImageFeed feed={feed} selectionHandler={() => onFeedSelectionHandler(feed)} />
            } else {
                return <TextFeed feed={feed} selectionHandler={() => onFeedSelectionHandler(feed)} />
            }
        })
    }

    if (isMobile) {
        return (
            <>
                <div id="wrap" >
                    <div class="lps_container main_feed_cont bg_grayCCC">
                        {feedContent}
                        {/* <ImageFeed reposted={true} /> */}
                        {/* <RestrictedFeed /> */}
                        <PaginationLoader show={!isPaginationCompleted} />
                        {/* <!-- Menu bottom here --> */}
                        <MenuOptionSlider feed={selectedFeed} />
                        {/* <!-- //end Menu bottom here --> */}
                    </div>
                </div>
                {/* //   popup */}
                <RepostModal feed={selectedFeed} />
                <TaggedModal feed={selectedFeed} />
                <ReportModal feed={selectedFeed} />
                <SharedModal feed={selectedFeed} />
                <RemoveFeedModal feed={selectedFeed} />
            </>
        )
    } else {
        return (
            <div id="wrap" className="lps_xl_view">
                <div className="lps_container main_feed_cont">
                    {feedContent}
                </div>
                <PaginationLoader show={!isPaginationCompleted} />
                <MenuOptionSlider feed={selectedFeed} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    feeds: state.feedReducer.feeds
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(MainFeed);


const PaginationLoader = ({ show }) => {
    return (
        <div class="lps_loader_wrp" style={{ display: show ? "block" : "none" }}>
            <img src={require("assets/images/icons/icn_refresh.svg")} alt="Loader" />
        </div>
    )
}
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, withRouter } from 'react-router'
import { useSelector } from 'react-redux';
import MenuOptionSlider from '../components/MenuOptionSlider';
import { isMobile } from 'react-device-detect';
import { fetchLikedFeeds } from 'redux/actions/feed/action';
import { FeedType } from 'utility/constants/constants';
import ImageFeed from '../components/ImageFeed';
import TextFeed from '../components/TextFeed';
import * as commonService from "../../../utility/utility";
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';
import ImageItem from '../components/ImageItem';
import TextItem from '../components/TextItem';
import scroller from '../Home/scroller';
import ToggleListWidget from '../components/ToggleListWidget';

const Likes = (props) => {
    const { likedFeeds } = useSelector((state) => state.feedReducer);
    const [topHashtags, setTopHashtags] = useState([]);
    const [gridlayoutMode, setGridLayoutMode] = useState(true);
    let isFeedCallInProgress = useRef(false)   // if feed call in progress don't trigger multiple
    const [isPaginationCompleted, setIsPaginationCompleted] = useState(false); // indicate if all the feeds are fetched
    var selectedFeedOnToggle = useRef(null);

    //will mount and unmount - on unmount show the header if it's hidden
    useEffect(() => {
        if (likedFeeds.length === 0) {
            commonService.isLoading.onNext(true); // start loading
            fetchLikedFeeds();
        } else {
            fetchLikedFeeds();
        }
        return () => {
            props.toggleHeader(true);
        };
    }, [])

    useEffect(() => {
        getTopHashTags();
    }, [likedFeeds])


    useEffect(() => {
        if (props.bottomOffset &&
            props.bottomOffset < 200 &&
            !isFeedCallInProgress.current && //if feed call in progress don't fire again
            !isPaginationCompleted) { //check if all the feeds are fetched - don't fire
            onReachingBottom();
        }
    }, [props.bottomOffset])

    //scroll listener
    useEffect(() => {
        debugger;
        window.addEventListener("scroll", props.listener);
        return () => {
            window.removeEventListener("scroll", props.listener);
        };
    }, [props.bottomOffset]);


    const getTopHashTags = () => {
        let feeds = likedFeeds;
        let hashtagCountMapping = {};
        feeds.forEach(element => {
            let hashposts = element.hashtagPosts;
            hashposts.forEach(hashtag => {
                if (hashtag.hashtag_name in hashtagCountMapping) {
                    let count = hashtagCountMapping[hashtag.hashtag_name];
                    hashtagCountMapping[hashtag.hashtag_name] = count + 1;
                } else {
                    hashtagCountMapping[hashtag.hashtag_name] = 1;
                }
            })
        });
        var sortable = [];
        for (var key in hashtagCountMapping) {
            sortable.push([key, hashtagCountMapping[key]]);
        }
        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });

        sortable = sortable.slice(0, 5);
        // return sortable.map(ele => ele[0]);
        setTopHashtags(sortable.map(ele => ele[0]));
    }

    // called on reaching bottom 
    const onReachingBottom = () => {
        //make feed call for page
        console.log("making pagination call");
        console.log("reached bottom initiate page call");
    }

    // scroll to specifc post 
    const scrollRefHandler = (ref) => {
        if (ref) {
            window.scrollTo(0, ref.offsetTop)
            selectedFeedOnToggle.current = null;
        }
    }

    const toggleFeedLayoutMode = (feed) => {
        selectedFeedOnToggle.current = feed
        setGridLayoutMode(false)
    }

    let emptyPostData = [];
    let gridFeedContent = [];
    let listFeedContent = [];
    if (likedFeeds && likedFeeds.length > 0) {
        likedFeeds.forEach((feed, index) => {
            if (feed.type === FeedType.image) {
                gridFeedContent.push(<ImageItem key={feed.id} feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                listFeedContent.push(<ImageFeed key={feed.id} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }}
                    feed={feed} />)
            } else if (feed.type === FeedType.repost) {
                let parentFeed = feed.parent;
                if (parentFeed.type === FeedType.image) {
                    gridFeedContent.push(<ImageItem key={feed.id} feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                    listFeedContent.push(<ImageFeed key={feed.id} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} index={feed.id} feed={feed} isReposted={true} />)
                } else {
                    gridFeedContent.push(<TextItem key={feed.id} feed={feed} isReposted={true} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                    listFeedContent.push(<TextFeed key={feed.id} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }} index={feed.id} feed={feed} isReposted={true} />)
                }
            } else {
                gridFeedContent.push(<TextItem key={feed.id} feed={feed} selectionHandler={() => toggleFeedLayoutMode(feed)} />);
                listFeedContent.push(<TextFeed key={feed.id} refHandler={selectedFeedOnToggle.current && feed.id === selectedFeedOnToggle.current.id ? scrollRefHandler : () => { }}
                    index={feed}
                    feed={feed} />)
            }
        })
    } else {
        emptyPostData = (
            <div class="main_feed_cont">
                <div class="lps_tb_para">
                    <h4>All the posts you  <img src={require("assets/images/icons/liked_post.png")} alt="BitCot Logo" className="header__logo like_logo" />  will appear here</h4>
                </div>
            </div>
        )
    }

    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div class={isMobile ? "lps_container main_feed_cont bg_grayCCC" : "lps_container main_feed_cont"}>
                {
                    likedFeeds.length > 0 && <div class="lps_inner_wrp">
                        <div class="see_also">
                            <h5 class="h5_title lps_flx_vm tags_lip_inline mb_15">MOST <img src={require("assets/images/icons/icn_mouth.png")} alt="Image" class="lip_icn" />TAGS</h5>
                            <div class="hashtag hashtag_seondary weightAnchor">
                                {topHashtags.map((tag, index) => <a key={index} class="theme_btn theme_secondary">{tag}</a>)}
                            </div>
                        </div>
                    </div>
                }

                {
                    gridlayoutMode ?
                        <div class="lps_product_grid destkVersion">
                            {gridFeedContent}
                        </div>
                        :
                        <div class="main_feed_cont">
                            <div class="list_view">
                                {listFeedContent}
                            </div>
                        </div>
                }
                {emptyPostData}
                <ToggleListWidget gridlayoutMode={gridlayoutMode} setGridLayoutMode={setGridLayoutMode} />
                <MenuOptionSlider />
            </div>
            {isMobile && <>
                <RepostModal />
                <TaggedModal />
                <ReportModal />
                <SharedModal />
                <RemoveFeedModal />
            </>}
        </div >
    )
}

export default scroller(Likes);
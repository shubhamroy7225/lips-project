import React, { useEffect, useState } from 'react';
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

export default (props) => {
    const { likedFeeds } = useSelector((state) => state.feedReducer);
    const [topHashtags, setTopHashtags] = useState([]);

    useEffect(() => {
        if (likedFeeds.length === 0) {
            commonService.isLoading.onNext(true); // start loading
            fetchLikedFeeds();
        } else {
            fetchLikedFeeds();
        }
    }, [])

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

    useEffect(() => {
        getTopHashTags();
    }, [likedFeeds])

    let feedContent = [];
    if (likedFeeds) {
        feedContent = likedFeeds.map((feed, index) => {
            if (feed.type === FeedType.image) {
                return <ImageFeed feed={feed} />
            } else {
                return <TextFeed feed={feed} />
            }
        })
    }

    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div class={isMobile ? "lps_container main_feed_cont bg_grayCCC" : "lps_container main_feed_cont"}>
                <div class="lps_inner_wrp">
                    <div class="see_also">
                        <h5 class="h5_title lps_flx_vm tags_lip_inline mb_15">
                            MOST
                  <img src={require("assets/images/icons/icn_mouth.png")} alt="Image" class="lip_icn" />TAGS
                </h5>
                        <div class="hashtag hashtag_seondary">
                            {topHashtags.map((tag, index) => <a key={index} class="theme_btn theme_secondary">{tag}</a>)}
                        </div>
                    </div>
                </div>
                {feedContent}
                <MenuOptionSlider />
            </div>
            <>
                <RepostModal />
                <TaggedModal />
                <ReportModal />
                <SharedModal />
                <RemoveFeedModal />
            </>
        </div >
    )
}
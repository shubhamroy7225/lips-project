import { fetchFeed } from 'api/feedsAPI'
import React, { useEffect, useState } from 'react'
import FeedWidget from '../components/FeedWidget'
import ImageFeed from '../components/ImageFeed'
import * as commonService from "utility/utility";
import { useHistory } from 'react-router-dom';
import { FeedType, routes } from 'utility/constants/constants';
import TextFeed from '../components/TextFeed';
import { isMobile } from 'react-device-detect';
import RepostModal from '../components/FeedModal/RepostModal';
import TaggedModal from '../components/FeedModal/TaggedModal';
import ReportModal from '../components/FeedModal/ReportModal';
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';

const FeedDetail = (props) => {
    const [feed, setFeed] = useState(null)
    let history = useHistory();

    useEffect(() => {
        let feedID = props.match.params.id; // get user name from url - if searching directly for the profile
        if (feedID) {
            commonService.isLoading.onNext(true);
            fetchFeed(feedID)
                .then(response => {
                    if (response.data.success === true) {
                        setFeed(response.data.post)
                    }
                    commonService.isLoading.onNext(false)
                }).catch(error => {
                    history.push(routes.ROOT);
                    commonService.isLoading.onNext(false)
                })
        }
    }, [props.match.params.id])
    let content = null;
    if (feed) {
        if (feed.type === FeedType.image) {
            content = <ImageFeed refHandler={() => { }} index={feed.id} feed={feed} />
        } else if (feed.type === FeedType.repost) {
            let parentFeed = feed.parent;
            if (parentFeed.type === FeedType.image) {
                content = <ImageFeed refHandler={() => { }} index={feed.id} feed={feed} />
            } else {
                content = <TextFeed refHandler={() => { }} index={feed.id} feed={feed} isReposted={true} />
            }
        } else {
            content = <TextFeed refHandler={() => { }} index={feed.id} feed={feed} />
        }
    } else {

    }

    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div class="lps_container main_feed_cont bg_grayCCC">
                {content}
            </div>
            { isMobile &&
                <>
                    <RepostModal />
                    <TaggedModal />
                    <ReportModal />
                    <SharedModal />
                    <RemoveFeedModal />
                </>
            }
        </div>

    )
}

export default FeedDetail;
import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import RestrictedFeed from 'scenes/Feed/components/RestrictedFeed';
import MenuOptionSlider from '../components/MenuOptionSlider';
import { isMobile } from 'react-device-detect';

const MainFeed = (props) => {
    useEffect(() => {
        // Update the document title using the browser API
        console.log(props);
    });
    if (isMobile) {
        return (
            <>
                <div id="wrap">
                    <div class="lps_container main_feed_cont bg_grayCCC">
                        <ImageFeed />
                        <TextFeed />
                        <ImageFeed />
                        <ImageFeed />
                        <ImageFeed />
                        {/* <RestrictedFeed /> */}
                        <div className="lps_loader">Loading...</div>
                        {/* <!-- Menu bottom here --> */}
                        <MenuOptionSlider />
                        {/* <!-- //end Menu bottom here --> */}
                    </div>
                </div>
                {/* //   popup */}
                <RepostModal />
                <TaggedModal />
                <ReportModal />
            </>
        )
    } else {
        return (
            <div id="wrap">
                <div className="lps_container main_feed_cont">
                    <ImageFeed />
                    <ImageFeed />
                    <ImageFeed />
                    <TextFeed />
                    <ImageFeed />
                </div>
                <MenuOptionSlider />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(MainFeed));


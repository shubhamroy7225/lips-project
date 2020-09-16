import React, { useEffect, useState } from 'react';
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
import SharedModal from '../components/FeedModal/SharedModal';
import RemoveFeedModal from '../components/FeedModal/RemoveFeedModal';

const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);


const MainFeed = (props) => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState();

    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        // console.log(scrollDirection);
        let scrollDirection = lastScrollTop > -bodyOffset.top ? "down" : "up"
        console.log(scrollY)
        // debugger;
        if (scrollDirection === "up" && scrollY > 70) {
            toggleHeader(false)
        } else {
            toggleHeader(true)
        }

        setLastScrollTop(-bodyOffset.top);
    };

    const toggleHeader = (enable) => {
        if (enable) {
            removeBodyClass("scroll-down")
            addBodyClass("scroll-up")
        } else {
            addBodyClass("scroll-down")
            removeBodyClass("scroll-up")
        }
    }

    useEffect(() => {
        return () => {
            toggleHeader(true)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    if (isMobile) {
        return (
            <>
                <div id="wrap">
                    <div class="lps_container main_feed_cont bg_grayCCC">
                        <ImageFeed />
                        <TextFeed />
                        <ImageFeed reposted={true} />
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
                <SharedModal />
                <RemoveFeedModal />
            </>
        )
    } else {
        return (
            <div id="wrap" className="lps_xl_view">
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


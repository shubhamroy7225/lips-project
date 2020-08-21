import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import ReportModal from 'scenes/Feed/components/FeedModal/ReportModal';
import TaggedModal from 'scenes/Feed/components/FeedModal/TaggedModal';
import RepostModal from 'scenes/Feed/components/FeedModal/RepostModal';
import ImageFeed from 'scenes/Feed/components/ImageFeed';
import TextFeed from 'scenes/Feed/components/TextFeed';
import RestrictedFeed from 'scenes/Feed/components/RestrictedFeed';

const MainFeed = (props) => {
    useEffect(() => {
        // Update the document title using the browser API
        console.log(props);
    });

    return (
        <>
            <div id="wrap">
                <div class="lps_container main_feed_cont">
                    <ImageFeed />
                    <TextFeed />
                    <ImageFeed />
                    <ImageFeed />
                    <ImageFeed />
                    <RestrictedFeed />
                    <div class="lps_loader">Loading...</div>
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
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(MainFeed));


const MenuOptionSlider = () => {
    return (
        <div class="footer-menu-list">
            <div class="horizantal_coll">
                <i class="fa fa-angle-right wr_icon" aria-hidden="true"></i>
            </div>
            <div class="collapsible">
                <ul class="ul_list custom_ul">
                    <li class="listed_item">
                        <a href="post.html" class="collapse_links">
                            <img src={require("assets/images/icons/white_plus.svg")} class="ci_image" alt="plus" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="explore.html" class="collapse_links">
                            <img src={require("assets/images/icons/white_search.svg")} class="ci_image" alt="search" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="liked.html" class="collapse_links">
                            <img src={require("assets/images/icons/white_kiss.svg")} class="ci_image" alt="mouth" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="my_user_profile.html" class="collapse_links">
                            <img src={require("assets/images/icons/user_white.svg")} class="ci_image" alt="user" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="javascript: void(0);" class="right_widget">
                            <i class="fa fa-angle-right wr_icon" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
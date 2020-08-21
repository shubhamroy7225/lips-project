import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import ReportModal from 'components/Modal/ReportModal';
import TaggedModal from 'components/Modal/TaggedModal';
import RepostModal from 'components/Modal/RepostModal';
import ImageFeed from 'components/Feeds/ImageFeed';
import TextFeed from 'components/Feeds/TextFeed';
import RestrictedFeed from 'components/Feeds/RestrictedFeed';

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
                            <img src="/images/icons/white_plus.svg" class="ci_image" alt="plus" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="explore.html" class="collapse_links">
                            <img src="/images/icons/white_search.svg" class="ci_image" alt="search" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="liked.html" class="collapse_links">
                            <img src="/images/icons/white_kiss.svg" class="ci_image" alt="mouth" />
                        </a>
                    </li>
                    <li class="listed_item">
                        <a href="my_user_profile.html" class="collapse_links">
                            <img src="/images/icons/user_white.svg" class="ci_image" alt="user" />
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
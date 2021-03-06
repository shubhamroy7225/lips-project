import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router'
import { connect } from 'react-redux';
import CreateImageTab from './components/CreateImageTab';
import CreateTextTab from './components/CreateTextTab';
import AddTags from './components/AddTags';
import LipsTagsInfo from './components/LipsTagsInfo';
import * as feedsAction from 'redux/actions/feed/action';
import { routes } from 'utility/constants/constants';
import { isMobile } from 'react-device-detect';
import { toastMsg } from 'utility/utility';

const Create = () => {
    let history = useHistory();
    const [showAddTags, setShowAddTags] = useState(false);
    const [showLipsInfo, setShowLipsInfo] = useState(false);

    const [selectedHashTags, setSelectedHashTags] = useState([])

    const submitFeedRequest = (request) => {
        //API - create a post
        feedsAction.createFeed(request)
            .then(res => {
                if (res.data.success === true) {
                    history.push(routes.PROFILE);
                }
            });
    };

    const handleToggleTags = (ele) => {
        let tags = [...selectedHashTags];
        tags.splice(tags.findIndex(e => e.name === ele.name), 1);
        setSelectedHashTags(tags);
    };

    return (
        <>
            <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
                <div className="lps_container">
                    <div class="theme_tab_cont">
                        <CreateImageTab
                            handleToggleTags={handleToggleTags}
                            selectedHashTags={selectedHashTags}
                            toggleAddTags={() => setShowAddTags(!showAddTags)}
                            toggleLipsInfo={() => setShowLipsInfo(!showLipsInfo)}
                            submitFeedRequest={submitFeedRequest} />
                        <CreateTextTab
                            handleToggleTags={handleToggleTags}
                            selectedHashTags={selectedHashTags}
                            toggleAddTags={() => setShowAddTags(!showAddTags)}
                            toggleLipsInfo={() => setShowLipsInfo(!showLipsInfo)}
                            submitFeedRequest={submitFeedRequest} />
                    </div>
                </div>
            </div>
            <AddTags show={showAddTags} setShowLipsInfo={setShowLipsInfo} dismiss={() => {
                setShowAddTags(false)
                setShowLipsInfo(false)
            }}
                selectedHashTags={selectedHashTags}
                setSelectedHashTags={setSelectedHashTags}
            />
            <LipsTagsInfo show={showLipsInfo} setShowLipsInfo={setShowLipsInfo} dismiss={() => {
                setShowAddTags(false)
                setShowLipsInfo(false)
            }} />
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Create));


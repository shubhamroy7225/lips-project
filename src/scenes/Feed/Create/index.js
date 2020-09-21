import React, { useState } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import MenuOptionSlider from '../components/MenuOptionSlider';
import CreateImageTab from './components/CreateImageTab';
import CreateTextTab from './components/CreateTextTab';
import AddTags from './components/AddTags';
import LipsTagsInfo from './components/LipsTagsInfo';

const Create = () => {
    const [showAddTags, setShowAddTags] = useState(false);
    const [showLipsInfo, setShowLipsInfo] = useState(false);

    const [selectedHashTags, setSelectedHashTags] = useState([])
    return (
        <>
            <div id="wrap">
                <div className="lps_container">
                    <div class="theme_tab_cont">
                        <CreateImageTab
                            selectedHashTags={selectedHashTags}
                            toggleAddTags={() => setShowAddTags(!showAddTags)}
                            toggleLipsInfo={() => setShowLipsInfo(!showLipsInfo)} />
                        <CreateTextTab
                            toggleAddTags={() => setShowAddTags(!showAddTags)}
                            toggleLipsInfo={() => setShowLipsInfo(!showLipsInfo)} />
                    </div>
                    {/* <MenuOptionSlider /> */}
                </div>
            </div>
            <AddTags show={showAddTags} dismiss={() => {
                setShowAddTags(false)
                setShowLipsInfo(false)
            }}
                selectedHashTags={selectedHashTags}
                setSelectedHashTags={setSelectedHashTags}
            />
            <LipsTagsInfo show={showLipsInfo} dismiss={() => {
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


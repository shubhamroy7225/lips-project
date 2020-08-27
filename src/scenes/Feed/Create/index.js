import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import MenuOptionSlider from '../components/MenuOptionSlider';
import CreateImageTab from './components/CreateImageTab';
import CreateTextTab from './components/CreateTextTab';

const Create = () => {
    return (
        <div id="wrap">
            <div className="lps_container">
                <div class="theme_tab_cont">
                    <CreateImageTab />
                    <CreateTextTab />
                </div>
                <MenuOptionSlider />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Create));


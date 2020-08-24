import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import MenuOptionSlider from '../components/MenuOptionSlider';

const Likes = () => {
    return (
        <div id="wrap">
            <div className="lps_container">
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

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Likes));


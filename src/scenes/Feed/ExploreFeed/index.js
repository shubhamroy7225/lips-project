import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import ImageItem from './components/ImageItem';
import SearchInput from './components/SearchInput';
import MenuOptionSlider from '../components/MenuOptionSlider';

const ExploreFeed = (props) => {
    useEffect(() => {
        // Update the document title using the browser API
        console.log(props);
    });

    return (
        <div id="wrap">
            <div className="lps_container">
                <SearchInput />
                <div className="category_block browse_category">
                    <div className="product_grid">
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                        <ImageItem />
                    </div>
                </div>
                <MenuOptionSlider />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

const mapStateToDispatch = (dispatch) => ({
});

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(ExploreFeed));

import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import SearchInput from './components/SearchInput';
import MenuOptionSlider from '../components/MenuOptionSlider';
import ImageItem from '../components/ImageItem';
import { isMobile } from 'react-device-detect';

const ExploreFeed = (props) => {
    useEffect(() => {
        // Update the document title using the browser API
        console.log(props);
    });

    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
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

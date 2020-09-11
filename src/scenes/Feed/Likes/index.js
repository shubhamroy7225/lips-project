import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import MenuOptionSlider from '../components/MenuOptionSlider';
import ImageItem from '../components/ImageItem';
import { isMobile } from 'react-device-detect';

const Likes = (props) => {
    return (
        <div id="wrap" className={!isMobile ? "lps_xl_view" : ""}>
            <div class="lps_container liked_con">
                <div class="lps_inner_wrp">
                    <div class="lps_inner_cont">
                        <div class="see_also">
                            <div class="hashtag">
                                <h5 class="h5_title">YOUR MOST <img src={require("assets/images/icons/lips.svg")} alt="Image" class="lip_icn" />TAGS</h5>
                                <a href="javascript:void(0);" class="hashtag_btn">#Hashtag</a>
                                <a href="javascript:void(0);" class="hashtag_btn">#Hashtag</a>
                                <a href="javascript:void(0);" class="hashtag_btn">#Hashtag</a>
                            </div>
                        </div>
                    </div>
                    <div class="data_collection">
                        <div class="folder_block">
                            <figure class="folders">
                                <img src={require("assets/images/icons/folder.svg")} alt="Folder" />
                                <figcaption><h6 class="sm_title">Collection</h6></figcaption>
                            </figure>
                            <figure class="folders">
                                <img src={require("assets/images/icons/folder.svg")} alt="Folder" />
                                <figcaption><h6 class="sm_title">Collection</h6></figcaption>
                            </figure>
                            <figure class="folders">
                                <img src={require("assets/images/icons/folder.svg")} alt="Folder" />
                                <figcaption><h6 class="sm_title">Collection</h6></figcaption>
                            </figure>
                            <figure class="folders">
                                <img src={require("assets/images/icons/folder.svg")} alt="Folder" />
                                <figcaption><h6 class="sm_title">Collection</h6></figcaption>
                            </figure>
                            <figure class="folders">
                                <img src={require("assets/images/icons/folder.svg")} alt="Folder" />
                                <figcaption><h6 class="sm_title">Collection</h6></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="category_block browse_category">
                    <div class="title_block">
                        <h5 class="h5_title">YOUR RECENT <img src={require("assets/images/icons/lips.svg")} alt="Image" class="lip_icn" /></h5>
                    </div>
                    <div class="product_grid liked_product">
                        <div class="grid_box">
                            <ImageItem />
                            <ImageItem />
                        </div>
                        <div class="product_card gallery_box_big">
                            <div class="product_img_block">
                                <figure class="product_img">
                                    <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                                </figure>
                            </div>
                            <span class="triangle_shape"></span>
                        </div>
                    </div>
                    <div class="product_grid liked_product">
                        <div class="product_card gallery_box_big">
                            <div class="product_img_block">
                                <figure class="product_img">
                                    <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                                </figure>
                            </div>
                            <span class="triangle_shape"></span>
                        </div>
                        <div class="grid_box">
                            <ImageItem />
                            <ImageItem />
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Likes));


import React, { useEffect } from 'react';

const ImageItem = (props) => {
    return (
        <div className="product_card">
            <div className="product_img_block">
                <figure className="product_img">
                    <img src={require("assets/images/icons/landscape-image.png")} alt="Image" />
                </figure>
            </div>
        </div>
    );
}

export default ImageItem;
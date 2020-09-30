import React, { useEffect } from 'react';

const ImageItem = ({ feed, selectionHandler, isReposted }) => {
    const { attachments } = isReposted ? feed.parent : feed;
    const { photo_urls } = attachments[0]

    return (
        <div class="product_card" onClick={selectionHandler}>
            <img src={photo_urls.medium} alt="Add Image" className="add_img" />
        </div>
    );
}

export default ImageItem;
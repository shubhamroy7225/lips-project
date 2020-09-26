import React, { useEffect } from 'react';

const ImageItem = ({ feed, selectionHandler }) => {
    const { attachments } = feed;
    const { photo_urls } = attachments[0]

    return (
        <div class="product_card">
            <img src={photo_urls.medium} alt="Add Image" />
        </div>
    );
}

export default ImageItem;
import React, { useEffect } from 'react';
import placeholder from 'assets/images/thumbnails/thumb_placeholder.png';

const ImageItem = ({ feed, selectionHandler, isReposted }) => {
    const { attachments } = isReposted ? feed.parent : feed;
    const { photo_urls } = attachments.length > 0 ? attachments[0] : { photo_urls: { medium: placeholder } }; //else part is to handle the crash in case there is no image for feed type = "image"

    return (
        <div class="product_card" onClick={selectionHandler}>
            <img src={photo_urls.medium} alt="Add Image" className="add_img" />
        </div>
    );
}

export default ImageItem;
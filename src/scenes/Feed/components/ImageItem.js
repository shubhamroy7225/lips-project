import React, { useState } from 'react';
import placeholder from 'assets/images/thumbnails/thumb_placeholder.png';
import HiddenTagPost from './HiddenTagPost'

const ImageItem = ({ feed, selectionHandler, isReposted, index }) => {
    const { attachments } = isReposted ? feed.parent : feed;
    const { photo_urls } = attachments.length > 0 ? attachments[0] : { photo_urls: { medium: placeholder } }; //else part is to handle the crash in case there is no image for feed type = "image"
    const [viewAnyway, setViewAnyway] = useState(true)
    const viewAnywayHandler = (e) => {
        e.stopPropagation();
        return setViewAnyway(false)
        
    }
    if(!feed.has_hidden || !viewAnyway) {
        return (
            <div class="product_card" onClick={selectionHandler}>
                <img src={photo_urls.medium} alt="Add Image" className="add_img" />
            </div>
        );
    }else {
        return (
            <div class="grideTag product_card removeFigClass" onClick={selectionHandler}>
                <article className="lps_art lps_art_white text_center">
                <figure className="lps_fig_xs mt_25">
                  <img src={require("assets/images/icons/icn_pat_active.svg")} alt="Icon" />
                </figure>
                
              </article>
                {/* <HiddenTagPost viewAnywayHandler={viewAnywayHandler} hidden_hashtags={feed.hidden_hashtags} /> */}
            </div>
        )
    }
    
}

export default ImageItem;
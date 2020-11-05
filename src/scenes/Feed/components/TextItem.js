import React, { useEffect } from 'react';

const TextItem = ({ feed, selectionHandler, isReposted }) => {
    const { description } = isReposted ? feed.parent : feed;
    return (
        <div class="product_card" onClick={selectionHandler}>
            {description && description.substring(0, 30)}..
        </div>
    );
}

export default TextItem;
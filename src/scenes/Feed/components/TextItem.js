import React, { useEffect } from 'react';

const TextItem = ({ feed, selectionHandler }) => {
    const { description } = feed;
    return (
        <div class="product_card" onClick={selectionHandler}>
            {description.substring(0, 30)}..
        </div>
    );
}

export default TextItem;

import React, { useState } from 'react';
import {useSelector} from "react-redux";

export default ({showSuggestions, setSearchText, setShowSuggestions}) => {
    const {hashTagSuggestionList} = useSelector(store => store.feedReducer);
    const handleHashTagsSuggetion = (name) => {
        setSearchText(name)
        setShowSuggestions(false)
    }
    return (
       <> {showSuggestions && <div className="commonSearchList">
        <div className="innerList">
            <ul>
                {hashTagSuggestionList.map((tag, index) => <li onClick={() => handleHashTagsSuggetion(tag.name)} key={index}>{tag.name}</li>)}
            </ul>
        </div>
    </div>}</>
    )
}
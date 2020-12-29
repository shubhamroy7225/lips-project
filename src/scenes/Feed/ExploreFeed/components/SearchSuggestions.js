
import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default ({ submitHandler, showSuggestions, setSearchText, setShowSuggestions }) => {
    const history = useHistory()
    const { hashTagSuggestionList } = useSelector(store => store.feedReducer);
    const handleHashTagsSuggetion = (name) => {
        setSearchText(name)
        setShowSuggestions(false)
        submitHandler(name)
    }
    return (
        <> {showSuggestions && <div className="commonSearchList">
            <div className="innerList">
                <ul>
                    {hashTagSuggestionList.map((tag, index) => {
                        return (tag.is_hashtag ?
                            <li onClick={() => handleHashTagsSuggetion(tag.name)} key={index}>{tag.name}</li>
                            : <li onClick={() => history.push(`/profile/${tag.user_name}`)} key={index}>
                                <img src={tag.photo_urls && tag.photo_urls.medium ? tag.photo_urls.medium : require("assets/images/icons/icn_profile.svg")} alt="User" className="hashtag-suggestion-user-pic" />
                                {tag.user_name}</li>)
                    })}
                </ul>
            </div>
        </div>}</>
    )
}

import React, { useState } from 'react';
import { getPostSearchHashTag } from 'redux/actions';

import SearchSuggestions from "./SearchSuggestions";

import "./suggestionList.scss";

const SearchInput = ({ submitHandler }) => {   
    const [searchText, setSearchText] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const inputChangeHandler = (e) => {
        setSearchText(e.target.value.toLowerCase());
        if (e.target.value && e.target.value.trim().length > 2) getPostSearchHashTag({name: e.target.value.toLowerCase(), page:1 , limit: 10});
        else setShowSuggestions(false);
        if (!showSuggestions &&  e.target.value.trim().length > 2) setShowSuggestions(true)
    }

    return (
        <div className="lps_inner_wrp">
            <div className="lps_inner_cont">
                <div className="search_category">
                    <div className="input-group theme_input_group relative_pos">
                        <div className="exploreSearch">
                            <input id="email"
                                type="text"
                                value={searchText}
                                autoComplete="off"
                                className="form-control"
                                name="email"
                                placeholder="search for accounts and tags"
                                onChange={inputChangeHandler} />
                            {
                                searchText ? <span className="input-group-addon search-cancel-icon" onClick={() => [setSearchText(''), submitHandler('')]}>&times;</span> : 
                                <span className="input-group-addon" onClick={() => submitHandler(searchText)}><img src={require("assets/images/icons/search.svg")} alt="Search Icon" /></span> 
                            }
                        </div>
                        {searchText && <SearchSuggestions submitHandler={submitHandler} showSuggestions={showSuggestions} setSearchText={setSearchText} setShowSuggestions={setShowSuggestions}/>}
                    </div>
                    {/* <div className="see_also">
                        <div className="hashtag">
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SearchInput
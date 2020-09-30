
import React, { useState } from 'react';

const SearchInput = ({ submitHandler }) => {
    const [searchText, setSearchText] = useState("");
    const inputChangeHandler = (e) => {
        setSearchText(e.target.value.toLowerCase());
    }

    return (
        <div className="lps_inner_wrp">
            <div className="lps_inner_cont">
                <div className="search_category">
                    <div className="input-group theme_input_group">
                        <form>
                            <input id="email"
                                type="text"
                                value={searchText}
                                className="form-control"
                                name="email"
                                placeholder=""
                                onChange={inputChangeHandler} />
                            <span className="input-group-addon" onClick={() => submitHandler(searchText)}><img src={require("assets/images/icons/search.svg")} alt="Search Icon" /></span>
                        </form>
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
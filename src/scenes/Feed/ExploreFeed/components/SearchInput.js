
import React, { useEffect } from 'react';

const SearchInput = (props) => {
    return (
        <div className="lps_inner_wrp">
            <div className="lps_inner_cont">
                <div className="search_category">
                    <div className="input-group theme_input_group">
                        <input id="email" type="text" className="form-control" name="email" placeholder="" value="" />
                        <span className="input-group-addon"><img src={require("assets/images/icons/search.svg")} alt="Search Icon" /></span>
                    </div>
                    <div className="see_also">
                        <div className="hashtag">
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                            <a href="javascript:void(0);" className="hashtag_btn">#Hashtag</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput
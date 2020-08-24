import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'utility/constants/constants';

const MenuOptionSlider = () => {

    const toggle = () => {
        window.$(".collapsible").toggle("slide", { direction: "right" }, 500);
    }

    return (
        <div className="footer-menu-list" onClick={() => toggle()}>
            <div className="horizantal_coll" >
                <i className="fa fa-angle-right wr_icon" aria-hidden="true"></i>
            </div>
            <div className="collapsible">
                <ul className="ul_list custom_ul">
                    <li className="listed_item">
                        <Link to={routes.CREATE} className="collapse_links">
                            <img src={require("assets/images/icons/white_plus.svg")} className="ci_image" alt="plus" />
                        </Link>
                    </li>
                    <li className="listed_item">
                        <Link to={routes.EXPLORE} className="collapse_links">
                            <img src={require("assets/images/icons/white_search.svg")} className="ci_image" alt="search" />
                        </Link>
                    </li>
                    <li className="listed_item">
                        <Link to={routes.LIKES} className="collapse_links">
                            <img src={require("assets/images/icons/white_kiss.svg")} className="ci_image" alt="mouth" />
                        </Link>
                    </li>
                    <li className="listed_item">
                        <Link to={routes.PROFILE} className="collapse_links">
                            <img src={require("assets/images/icons/user_white.svg")} className="ci_image" alt="user" />
                        </Link>
                    </li>
                    <li className="listed_item">
                        <a href="javascript: void(0);" className="right_widget">
                            <i className="fa fa-angle-right wr_icon" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuOptionSlider
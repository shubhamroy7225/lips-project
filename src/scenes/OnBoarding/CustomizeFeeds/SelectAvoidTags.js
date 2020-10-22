import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as actions from "redux/actions";

import HashTags from "../components/hashTags";
import { routes } from "utility/constants/constants";

export default () => {
  const history = useHistory();
  const { user } = useSelector((store) => store.authReducer);
  const [selectTags, setSelectTags] = useState([]);

  const addFavoriteTags = () => {
    if (user)
      actions
        .setFavoriteAvoidTags({ hashtags: { hide: selectTags } })
        .then((res) => {
          if (res) history.push("/");
        });
    else
      actions
        .setFavoriteAvoidTagsJustBrowse({ hashtags: { hide: selectTags } })
        .then((res) => {
          if (res) history.push(routes.MAIN_FEED);
        });
  };
  return (
    <div id="wrap" className="mt_0">
      <div className="lps_container mt_0">
        <div className="lps_flx_vm_jc lps_bg_secondary lps_text_white on_boarding_wrp">
          <div className="lps_form_wrp on_boarding_wrp_spwn border_0">
            <article className="lps_art lps_art_white">
              <h3 className="mb30">
                Some things are not for everybody - and that’s ok!{" "}
              </h3>
              <h5 className="ft_Weight_400">
                Mark the ones you don't want to see and we will do our best to
                provide tag-based warnings.
              </h5>
            </article>
            <HashTags setSelectTags={setSelectTags} selectTags={selectTags} />
            <div className="pos_wrp onboarding_btm">
              <button
                onClick={addFavoriteTags}
                className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase W-50P desktopVersio"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

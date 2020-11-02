import React, {useState} from "react";
import * as commonService from "utility/utility";
import "./Loader.scss"
export default () => {

  return (
      <div className={`progress-loader`} >
        <div id="overlay"></div>
        <img src={require("assets/images/icons/icn_refresh.svg")}  alt="Loader" />
      </div>
  );
};
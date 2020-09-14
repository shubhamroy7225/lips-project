import React, {useState} from "react";
import * as commonService from "utility/utility";
import "./Loader.scss"
const Loader = () => {
  const [loading, setLoading] = useState(false);

  commonService.isLoading.subscribe(val => {
    if (loading !== val) setLoading(val);
  });

  return (
    <div className={`progress-loader`} hidden={!loading}>
      <div id="overlay"></div>
      <img src={require("assets/images/icons/icn_refresh.svg")}  alt="Loader" />
    </div>
  );
};

export default Loader;

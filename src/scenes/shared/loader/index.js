import React, {useState} from "react";
import * as commonService from "utility/utility";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  commonService.isLoading.subscribe(val => {
    if (loading !== val) setLoading(val);
  });

  return (
    <div className={`lps_loader_wrp${!loading ? "hidden" : ""}`} hidden={!loading}>
      <img src={require("assets/images/icons/icn_refresh.svg")}  alt="Loader" />
    </div>
  );
};

export default Loader;

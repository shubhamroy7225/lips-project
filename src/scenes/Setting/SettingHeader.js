import React from 'react';
import {Link} from "react-router-dom";
const SettingHeader = () => {
  return (
    <>
     <header className="main_header">
        <nav className="theme_navigation">
          <Link className="lps_header_link lps_flx_vm_jc text_uppercase" to="/setting">
             <img src={require("assets/images/icons/icn_left_arrow.png")} alt="Icon Arrow" className="lps_header_img"/> Settings
          </Link>
        </nav>
      </header>
    </>
  );
}
export default SettingHeader
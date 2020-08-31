import React from "react";
import {Link} from "react-router-dom";
export default () => {
  return (
    <>
      <div className="limiter">
      <div className="container-login100">
         <div id="wrap" className="mt_0">
            <div className="lps_container">
               <div className="lps_inner_wrp lps_flx_vm_jc full_scr">
                  <div className="lps_form_wrp">
                     <form>
                        <article>
                           <h5>Contact Jon Snow</h5>
                        </article>
                        <div className="form_group_modify">
                           <input type="text" className="input_modify" placeholder="Your Name *"/>
                        </div>
                        <div className="form_group_modify">
                           <input type="text" className="input_modify" placeholder="Your Emai Adress *"/>
                        </div>
                        <div className="form_group_modify form_group_modify_messages">
                           <textarea type="text" className="input_modify txtarea_modify" rows="1" placeholder="Type your message here"></textarea>
                        </div>
                        <div className="pos_wrp">
                           <Link to="#" className="pos_link">Send</Link>
                           <Link to="sellers_profile.html" className="link_underline">Cancel</Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
    </>
  )
}
import React, {useState, useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { routes } from "utility/constants/constants";
export default () => {
   const {SETTING_FAQ} = routes;
   const simpleValidator = useRef(new SimpleReactValidator());
   const history = useHistory();
   const [, forceUpdate] = useState();
   const [user, setUser] = useState({ name: "", email: "", message: "" });
   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      forceUpdate(1)
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   
  
      if (simpleValidator.current.allValid()) {
        var contactUser = { ...user}
        if(contactUser){
           history.goBack()
        }
        
      } //check validations
      else {
        simpleValidator.current.showMessages(); //show validation messages
        forceUpdate(1)
      }
    };
  return (
    <>
      <div className="limiter">
      <div className="container-login100">
         <div id="wrap" className="mt_0">
            <div className="lps_container">
               <div className="lps_inner_wrp lps_flx_vm_jc full_scr">
                  <div className="lps_form_wrp">
                     <form onSubmit={handleSubmit} className="contactForm">
                        <article>
                           <h5 className="contact-title">Contact Jon Snow</h5>
                        </article>
                        <div className="form_group_modify">
                           <input type="text" className="input_modify" placeholder="Your Name *" value={user.name} name="name"
                            onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('name')}/>
                            {simpleValidator.current.message('name', user.name, 'required')}
                        </div>
                        <div className="form_group_modify">
                           <input type="text" className="input_modify" placeholder="Your Emai Adress *" value={user.email} name="email"
                            onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('email')}/>
                            {simpleValidator.current.message('email', user.email, 'required|email')}
                        </div>
                        <div className="form_group_modify">
                           <textarea type="text" className="input_modify txtarea_modify" rows="5" placeholder="Type your message here *" 
                           value={user.message} onChange={handleChange} name="message" onBlur={() => simpleValidator.current.showMessageFor('message')}/>
                           {simpleValidator.current.message('message', user.message, 'required')}
                        </div>
                        <div className="pos_wrp">
                           <button type="submit" className="pos_link send-button">Send</button>
                           <button onClick={()=> history.goBack()} className="link_underline calcelBtn">Cancel</button>
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
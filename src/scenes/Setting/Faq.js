import React from 'react';
import { Link } from 'react-router-dom';

import Accordion from '../shared/accordion';
import { routes } from '../../utility/constants/constants'


const Faq = () => {
    const {CONTACT_USER, SETTING} = routes;
    let data = [{
        title: "How do I ipsune dolor sit met, consecketur?", 
        content: " Sed ut perspnatis unde natus error sit volu totem accusantium doloremque laudantium. totem re aperrarn. eaque ipsequae abillu inventors veritato et quasi architect° beatee vitae dicta suet explicabo."
    },
    {
        title: "How do I ipsune dolor sit met, consecketur?", 
        content: " Sed ut perspnatis unde natus error sit volu totem accusantium doloremque laudantium. totem re aperrarn. eaque ipsequae abillu inventors veritato et quasi architect° beatee vitae dicta suet explicabo."
    },
    {
        title: "How do I ipsune dolor sit met, consecketur?", 
        content: " Sed ut perspnatis unde natus error sit volu totem accusantium doloremque laudantium. totem re aperrarn. eaque ipsequae abillu inventors veritato et quasi architect° beatee vitae dicta suet explicabo."
    }]
    return(
        <div id="wrap" className="mt_0">
            <div className="lps_container lps_terms_con_wrps bg_grayCCC">
                <div className="lps_header_link lps_flx_vm lps_px15 mb25">
                    <Link className="lps_header_link lps_flx_vm mb25" to={SETTING}>
                        <img
                        src={require("assets/images/icons/icn_left_arrow.png")}
                        alt="Icon Arrow"
                        className="lps_header_img"
                        />
                    </Link>
                    <span className="lp_left_auto text_black ft_Weight_500">
                        FAQ
                    </span>
                </div>

                <div className="lps_terms_list lps_px15 mb25">
                    <h3>We're Here To Help You</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="mb25">
                    {data.map(({title, content}, index) => <Accordion key={index} title={title} content={content} />)}
                </div>
                <div className="lps_terms_list lps_px15 pb25">
                    <h3>Still confused?</h3>
                    <p>
                        Sed ut perspiclatis unde orrinisiste natus error sit volu tatern accusantium doloTemque laudantium. totem re aperrarn eaque ipsequae 
                    </p>
                    <Link to={CONTACT_USER} className="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase min_w_170">CONTACT US</Link>
                </div>
            </div>
        </div>
    );
}
export default Faq;
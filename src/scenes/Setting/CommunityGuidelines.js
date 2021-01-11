import React from "react";
import { Link } from "react-router-dom";
import { routes } from "utility/constants/constants";
export default () => {
  return (
     
    <div id="wrap" className="mt_0 wrap_btm_padding">
      <div className="lps_container lps_terms_con_wrps bg_grayCCC">
      <Link className="lps_header_link lps_flx_vm lps_px15 mb25" to={routes.SETTING}>
        <img
          src={require("assets/images/icons/icn_left_arrow.png")}
          alt="Icon Arrow"
          className="lps_header_img"
        />
        <span className="lp_left_auto text_black ft_Weight_500">
          community guidelines
        </span>
      </Link>
        <div className="lps_inner_wrp">
          <div className="lps_terms_cont">
            <div className="lps_terms_list">
              <p>
            Lips is a safe space that centers marginalized communities including women, non-binary folks, People of Color, and the LGBTQIA+ community. As artists and creators ourselves, we came together to build Lips because we were fed up with the censorship and harassment we faced on mainstream platforms. On Lips, we hope you feel welcomed, recognized, and valued.
            </p>
            <p>
            These 6 guiding principles are based on inclusivity and reflect our community values rather than those of the heterosexual cis white male-dominated tech industry we aim to resist. Please read them carefully and uphold them all while you occupy this digital space.
            </p>

            </div>
            <div className="lps_terms_list" id="Introduction">
              <h5 className="community-data-heading">Create</h5>
              <p>
                Lips originated as a print zine for “open and honest expression,” and this remains our calling.
              </p>
              <p> Share your original art, poetry, selfies, or anything at all, and feel free to use the reblog feature to share other’s work. Please don’t plagiarize or call another’s work  your own. 
              </p> 
              <p> 
                We welcome your experimental, unconfined, weirdest creations, and invite you to explore with curiosity and vivid imagination.
              </p>
              
            </div>
            <div className="lps_terms_list" id="intellectual">
              <h5 className="community-data-heading">Grow</h5>
              <p>
               We know Lips can be a place for us all to develop in body, mind, and spirit. To foster that, we must be a judgment-free zone.
              </p>
              <p>
               We have a zero-tolerance policy for hate speech, harassment, abuse, or discrimination. Only if we accept each other at our truest and most vulnerable will we be able to grow into our highest selves.
              </p>
              {/* <p>
                You are granted limited license only for purpose of viewing the material contained on this Website
              </p> */}
            </div>
            <div className="lps_terms_list" id="Restrictions">
              <h5 className="community-data-heading">Find Your Purpose</h5>
              <p>
                Use Lips as a space to figure out what it is you are meant to do and who it is you are meant to be. Today, creators are fortunate that we can make a living doing what we love. Lips encourages you to clarify, articulate, and act on that with our support along the way.
              </p>
              
            </div>
            <div className="lps_terms_list" id="YourContent">
              <h5 className="community-data-heading">Respect</h5>
              <p>
              Treat everyone with dignity and kindness. If someone (yourself/another) has said something hurtful, use it as a learning and teaching experience.
              </p>
              <p>
              Respect people’s boundaries by using the Lips hashtag system to thoroughly label your content so that everyone has control over what they see.
              </p>
              
            </div>
            <div className="lps_terms_list" id="Behavioral_data">
              <h5 className="community-data-heading">Empathize</h5>
              <p>
              Sometimes complex emotions and sentiments can be lost in the digital world, but trust that everyone enters this space with good intentions. You may not agree with everything you see, and that’s okay. Have empathy and learn from perspectives that are different from your own. Be comfortable with being uncomfortable. This is a “brave” space.
              </p>
            </div>
            <div className="lps_terms_list" id="Governing_Law">
              <h5 className="community-data-heading">Pursue Your Vision for a Better World</h5>
              <p>
              We have built Lips to elevate, support, and raise the voices of marginalized creators but the rest is up to YOU: the beautiful humans on this app.
              </p>
              <p>
              Use this platform to fight injustice, to foster diversity, to create more beauty, and to manifest the future you believe in.
              </p>
              <p>
                With so much Lips Love,<br/>
                Annie, Val, Julija, Primo, &amp; Perla
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}
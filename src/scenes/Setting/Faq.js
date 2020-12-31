import React from 'react';
import { Link } from 'react-router-dom';

import Accordion from '../shared/accordion';
import { routes } from '../../utility/constants/constants'


const Faq = () => {
    const {CONTACT_USER, SETTING} = routes;
    let data = [{
        title: "why are features limited?", 
        content: "<p>A more polished app experience and additional features are in the works! As you can imagine, the inherent biases of the venture capital system against women and lgbtq+ founders has made it difficult to raise funds for this project! That being said, we are really excited about the future and are in the process of securing funds to expand to meet demand. We plan to add comments, mobile notifications, DMs, community boards, a marketplace, anti-plagiarism software, anonymous logins, and more. We will get there, it might just take a minute.</p>"
    },
    {
        title: "who are you?", 
        content: " We are the masked (because of COVID), queer crusaders of the internet. lips began in 2008 as a <a href='https://digitalarchive.wm.edu/handle/10288/412' target='_blank' class='about_link'>university campus zine</a>—a P.O. box where female and lgbtq+ artists would drop their submissions to be published and distributed monthly. Lips quickly became a huge success, with creators across the southeast US reaching out to express gratitude for creating a space where their voices were finally allowed, acknowledged and valued. Now Lips has gone digital––our team is small, but mighty! we are recent high school and university graduates, journalists, activists, tech veterans, adult film makers, mental health activists, feminist researchers, artists, designers, but most of all, we are passionate about making a difference in our community. You can read our team nerding out about lips in interviews with <a href='https://mashable.com/article/sextech-optimize-sex-life-algorithms/' target='_blank' class='about_link'>Mashable</a>, <a href='https://www.forbes.com/sites/cognitiveworld/2019/08/06/ai-and-intimacy/?sh=3394df9eeb4a' target='_blank' class='about_link'>Forbes</a>, <a href='https://www.huffpost.com/entry/instagram-shadow-ban-sexist_n_5cc72935e4b0537911491a4f' target='_blank' class='about_link'>Huffington Post</a>, and more.<br/><br/><a href='https://julijarukanskaite.lt' target='_blank' class='about_link'>Julija Rukanskaitė</a>, UX Designer <br/><a href='https://www.valelefante.com/about' target='_blank' class='about_link'>Val Elefante</a>, Community Manager56456<br/>Annie Brown, Founder<br/><br/><a href='https://trailyn.com' target='_blank' class='about_link'>Barbara Bickham</a>, Technical Advisor<br/>Primo L. Gold, Youth Advisor<br/>Perla Gonzalez, Youth Advisor<br/><br/><a href='https://www.bitcot.com' target='_blank' class='about_link'>BitCot</a>, Development Team"
    },
    {
        title: "why is this important?", 
        content: " the mental and physical health and wellness of marginalized communities is being compromised by social media platforms built by silicon valley entrepreneurs—often white, heterosexual, cis-men. The root of the problem lies in biased community guidelines, exclusionary moderation algorithms, and the lack of barriers against hate speech and harassment on these platforms. As studies show, spending only a short time on mainstream applications leads women to experience lower self-esteem and more insecurity about their bodies. Meanwhile, numerous ads, products, and body-positive content are removed for being “sexually suggestive” when they are, in reality, harmless, beneficial, and even essential. Content surrounding birth control options, HIV prevention information, and breast exam techniques, is often taken down for violating the platforms policies. Feminist artists, sex educators, and women's health companies are among the vast array of groups whose posts are often hidden by instagram, or “shadow-banned,” resulting in limited exposure to the people who benefit from consuming their content or utilizing their services—women and LGBTQ+ persons.<br/><br/>some other surprising facts that point to the need for a platform like lips:<br/><br/>- <a href='https://www.advocate.com/media/2019/9/16/over-73-percent-lgbtq-content-online-flagged-inappropriate' target='_blank' class='about_link'>73% of all lgbtq content online is flagged as inappropriate</a><br/>- Keywords in ads & articles currently <a href='https://www.them.us/story/instagram-may-be-unwittingly-censoring-the-queer-community' target='_blank' class='about_link'>banned from social media platforms</a> include: vaginal health, lesbian, bisexual and gender<br/>- Studies show that <a href='https://vawnet.org/sc/serving-trans-and-non-binary-survivors-domestic-and-sexual-violence/violence-against-trans-and' target='_blank' class='about_link'>trans people are experiencing increasing rates of hate crimes and bullying online</a>"
    },
    {
        title: "what makes lips different?",
        content: "Lips uses intersectional feminist and queer theory practices, inclusive community building, UX design justice, and emerging technologies (including a patent-pending in-clusionary machine learning moderation system) to create space online for underserved digital populations and their fans. As members of these communities ourselves, and using research from user testing and co-design workshops, all of our decisions—from features, to the language of our own <a class='about_link' href='/settings/community-guidelines'>community guidelines</a>, to how our community is built, maintained, and moderated—are made with these experiences in mind.<br/><br/> We aim to give artists, brands, and influencers a place to share content that educates and empowers marginalized communities. Our community guidelines are rooted in freedom and fairness for all groups and do not tolerate hate speech and harassment. we keep our people safe through a vetting process, and only allow those who embody our values to contribute their original work to the community.<br/><br/> We've already witnessed the difference a platform like lips can make on our targeted communities through our participation in the youth mental health program, <a href='https://www.headstreaminnovation.com/community/lips-zine' target='_blank' class='about_link'>headstream accelerator.</a>"
    },
    {
        title: "Are straight, cis-men allowed on Lips?",
        content: "Yes! While lips amplifies the voices of women and LGBTQ+ identifying persons, it also exists as a space for all people to enjoy and support empowering and authentic content. Many of our community members have large cis-male fanbases, and we are excited for these fans to experience Lips! We believe that when we build a better internet for traditionally marginalized groups, EVERYONE benefits."
    },
    {
        title: "how can i provide feedback?",
        content: "Each new feature we add we want to create in line with the direct needs of our community - there will be many opportunities for feedback, suggestions, and to participate in co-design sessions as we grow! You can join our feedback chat room <a href='https://chat.whatsapp.com/F9GYpbuiD6E3IdnPfMRA3v' target='_blank' class='about_link'>here</a>. we’re excited to grow together!"
    },
    {
        title: "why can’t i find you in the app store?",
        content: "Lips is not in the app stores. You need to visit <a class='about_link' href='https://lips.social/'>lips.social</a> to use and download the app. this is an intentional design/development decision. As a progressive web app, we are not at the mercy of the moralizing that guides app store policies, which allows for more freedom of expression. you still get most of the features and the experience of a mobile app, especially when you download the app to your homescreen. We’re still making sure the download to home screen feature works across all browsers, so please be patient with us!"
    },
    {
        title: "what can i post on lips?",
        content: "Please refer to our <a class='about_link' href='/settings/community-guidelines'>community guidelines.</a>"
    },
    {
        title: "what data does lips collect?",
        content: "Please refer to our <a class='about_link' href='/settings/privacy-policy'>privacy policy.</a>"
    },
    {
        title: "how can i get involved?",
        content: "Supporting alternative platforms like ours allows for competition against the monopolistic social media industry. The existence of lips and your participation on it is in itself a protest against mainstream platforms. however, if you would like to support us beyond using the app or collaborate on future projects, please reach out to us at <a class='about_link' href='mailto:team@lips.social'>team@lips.social</a> with your ideas!"
    },
    {
        title: "how do i post on lips?",
        content: "Register your account first, <a class='about_link' href='/'>get approved</a>, and then click the + icon in the menu."
    },
    {
        title: "who can i contact if i’m having trouble with lips?",
        content: "Contact us at <a class='about_link' href='mailto:team@lips.social'>team@lips.social.</a>"
    },
    {
        title: "how do i share lips with my friends?",
        content: "We would love for you to invite your friends to Lips. To do so, <a class='about_link' href='mailto://?subject=Invitation from Lips&body=Hello,%0DJoin Today https://stage.lips.social' target='_blank'>click here.</a>"
    }

]
    return(
        <div id="wrap" className="mt_0">
            <div className="lps_container lps_terms_con_wrps bg_grayCCC">
            <Link className="lps_header_link lps_flx_vm mb25" to={SETTING}>
                        <img
                        src={require("assets/images/icons/icn_left_arrow.png")}
                        alt="Icon Arrow"
                        className="lps_header_img"
                        />
                        <span className="lp_left_auto text_black ft_Weight_500">
                            FAQ
                        </span>
                    </Link>

                <div className="lps_terms_list lps_px15 mb25">
                    {/* <h3>We're Here To Help You</h3> */}
                    <p>
                        Lips is a new app filled with new ideas, so it's normal to have questions. We've answered the most common ones here. 
                    </p>
                    <p>
                        Let us know if we missed anything! 
                    </p>
                </div>

                <div className="mb25">
                    {data.map(({title, content}, index) => <Accordion key={index} title={title} content={content} />)}
                </div>
                <div className="lps_terms_list lps_px15 pb25">
                    <h3>Still have questions about lips?</h3>
                    
                    <Link to={CONTACT_USER} className="theme_btn theme_outline_primary btnr_25 text_secondary text_uppercase min_w_170">CONTACT US</Link>
                </div>
            </div>
        </div>
    );
}
export default Faq;
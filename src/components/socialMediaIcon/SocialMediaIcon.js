import {useState} from 'react';
import {FaShareAlt,FaFacebookF,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa';

import './SocialMediaIcon.css';

const SocialMediaIcon=()=>{
    const [socialMediaIconIsOpen,setSocialMediaIconIsOpen]=useState(false);

    const socialMediaIconClickHandler=()=>{
        setSocialMediaIconIsOpen(!socialMediaIconIsOpen);
    };

    return (
        <div className="social-media">
            <div className="btn-share" onClick={socialMediaIconClickHandler}><FaShareAlt /></div>
			<div className={socialMediaIconIsOpen?"social-media-group social-media-group-open":"social-media-group"}>
                <a href="https://www.google.com/" target="_blank" className="social-media-icon facebook-icon"><FaFacebookF /></a>
                <a href="https://www.youtube.com/" target="_blank" className="social-media-icon youtube-icon"><FaYoutube /></a>
                <a href="https://www.google.com/" target="_blank" className="social-media-icon instagram-icon"><FaInstagram /></a>
                <a href="https://www.youtube.com/" target="_blank" className="social-media-icon twitter-icon"><FaTwitter /></a>
            </div>
		</div>
    );
}

export default SocialMediaIcon;
import React from 'react'
import "./Footer.css"
import fb_icon from "../../assets/facebook_icon.png"
import yt_icon from "../../assets/youtube_icon.png"
import insta_icon from "../../assets/instagram_icon.png"
import twit_icon from "../../assets/twitter_icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={fb_icon} alt="" />
        <img src={yt_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={twit_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift card</li>
        <li>Media centre</li>
        <li>Media centre</li>
        <li>Investor relations</li>
        <li>Jobs</li>
        <li>Terms and use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Prefrence</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>© Netflix Originals</p>
    </div>
  );
}

export default Footer
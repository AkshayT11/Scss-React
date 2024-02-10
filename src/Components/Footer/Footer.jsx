import React, { useEffect } from 'react'
import "./Footer.scss";
import Logo from "../../assets/Logo.png";
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin,FaYoutube} from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(()=> {
        Aos.init({duration:1000})
    } )

  return (
   <footer className="footer">
    <div className="footer_container wrapper">
        <div className="footer_col">
            <img src={Logo} alt="footer-logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio natus animi hic temporibus quisquam illo dignissimos qui velit odit?</p>
        </div>

        <div className="footer_col">
            <h3>About</h3>
            <a href="#">about us</a>
            <a href="#">Features</a>
            <a href="#">News</a>
        </div>

        <div className="footer_col">
            <h3>Company</h3>
            <a href="#">Crytocodw</a>
            <a href="#">Security</a>
            <a href="#">News</a>
        </div>


        <div className="footer_col">
            <h3>Support</h3>
            <a href="#">Faq's</a>
            <a href="#">Support</a>
            <a href="#">Contact us</a>
        </div>

        <div className="footer_col">
            <h3>Socials</h3>
            <div className="footer_icons">
                <a href="#" className="footer_icon">
                    <FaFacebookF/>
                </a>
                <a href="#" className="footer_icon">
                    <FaTwitter/>
                </a>
                <a href="#" className="footer_icon">
                    <FaInstagram/>
                </a>
                <a href="#" className="footer_icon">
                    <FaLinkedin/>
                </a>
                <a href="#" className="footer_icon">
                    <FaYoutube/>
                </a>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
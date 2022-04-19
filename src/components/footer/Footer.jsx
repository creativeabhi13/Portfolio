import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {RiYoutubeLine} from "react-icons/ri"
import {FaTelegram} from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Abhishek Kumar</a>
      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#expereince">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_social'>
        <a href="https://www.facebook.com/creativeabhi13" target="_blank"> <FaFacebookF/></a>
        <a href="https://www.Instagram.com/creativeabhi13" target="_blank"><FiInstagram/></a>
        <a href="https://www.twitter.com/creativeabhi13" target="_blank" ><IoLogoTwitter/></a>
        <a href="https://www.youtube.com/creativeabhi13" target="_blank" ><RiYoutubeLine/></a>
        <a href="https://www.telegram.me/creativeabhi143" target="_blank" ><FaTelegram/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; CREATIVEABHI13 (Abhishek Kumar). All rights reserved &copy;2022</small>
      </div>
  </footer>
  )
}

export default Footer;
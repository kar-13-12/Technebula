import React, { useState, useEffect } from 'react';
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { LogosYoutubeIcon } from "./icons";
import { LogosGoogleGmail } from "./icons";




import { LogosWhatsappIcon } from './icons';
import { SkillIconsInstagram} from './icons';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.scrollHeight;

    // Check if the user has reached the end of the page
    if (scrollPosition >= pageHeight) {
      setIsEndOfPage(true);
      setIsVisible(true);
    } else {
      setIsEndOfPage(false);
      setIsVisible(false);
    }
  };

  // Function to handle resize event
  const handleResize = () => {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;

    // Check if the window height is greater than or equal to the body height
    if (windowHeight >= bodyHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll and resize event listeners when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Clean up the event listeners when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`head-footer ${isVisible || isEndOfPage ? 'show' : 'hide'}`}>
      <div className="copy-right">
        <p>Copyright 2024 NEET, Powered by Technebula | </p>
        <ul>
          <li>Rights & Refund Policy</li>
          <li>Privacy Policy</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="neet-map">
        <div>
          <h1 className="text-4xl">
            SIVA MITHRA <span className="text-xs text-white">NEET ACADEMY</span>
          </h1>
          <p className="follow">FOLLOW US ON</p>
          <ul className="apps">
            <li>
              <a href="https://www.instagram.com/siva.mithra24/"><SkillIconsInstagram /></a>
            </li>
            <li>
              <a href="https://whatsapp.com/channel/0029VaPUcXp9mrGeVV8lXf1r"><LogosWhatsappIcon/></a>
            </li>
            <li>
              <a href=""><LogosGoogleGmail/></a>
            </li>
            <li>
              <a href="https://www.youtube.com/@SIVAMITHRA-mz4lc"><LogosYoutubeIcon /></a>
            </li>
          </ul>
        </div>
        <div></div>
        <div className="maps">
          <div>
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.6801582791086!2d77.67258587505158!3d11.430744788760613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI1JzUwLjciTiA3N8KwNDAnMzAuNiJF!5e0!3m2!1sen!2sin!4v1711456943016!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div>
            <p className="text-xl text-center">Get in Touch</p>
            <ul className="neet-icon">
              <li>
                {" "}
                <BiSolidBuildingHouse />
                SIVAMITHRA Neet Academy
              </li>
              <li>
                <FaLocationDot /> Coimbatore
              </li>
              <li>
                <MdPhoneIphone /> +91 88385 21414
              </li>
              <li>
                {" "}
                <TbWorld /> sivamithraneetacademy.in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
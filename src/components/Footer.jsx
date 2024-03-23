import React from 'react';
import "./Footer.css"; 
import image from "./image.jpg"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  // FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="footer">
          <div className="image">
              <div className="imp">
                  <span className='text'>Jennela Brown</span>
                  <span className='light-text'>Freelancer, Free Like a Brid</span>
              </div>
              <div className='footer-image-container'>

              <img className="navbar-image" src={image} alt="Navbar Image" />
              </div>
          </div>
      <div className="footer-content">
        <div className="imp1"><h2>SRIJAN 2024 </h2></div>
              <div className="imp2">info.bussiness@work.com</div>
              <div className='project-socials'>

              <div className='project-container'>
                  <h4>Selected Projects</h4>

                  <ul className='project-list'>
                    <li>project1</li>
                    <li>project2</li>
                    </ul>
                </div>

              <div className="social-media">
              <h3>Socials</h3>
                <ul className="social-media-desktop">
                    <li>
                    <a
                        href="https://www.facebook.com"
                        target="_ansari">
                        <FaFacebookSquare className="facebook" />
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.instagram.com/ansari_shahnawaaz_123/"
                        target="_ansari">
                        <FaInstagramSquare className="instagram" />
                    </a>
                    </li>
                
                </ul>
                  </div>
              </div>
      </div>
    </footer>
  );
};

export default Footer;

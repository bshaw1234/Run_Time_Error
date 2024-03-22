import React from 'react';
import "./Footer.css"; 
import image from "./img.png"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, officia.
              </div>
              <img className="navbar-image" src={image} alt="Navbar Image" />
          </div>
      <div className="footer-content">
        <div className="imp1"><h2>SRIJAN 2024 </h2></div>
              <div className="imp2">good for tommorow</div>
        
              <div>
                  <h3>Selected Projects</h3>

                  <ul>
                    <li>project1</li>
                    <li>project2</li>
                    </ul>
                </div>

              <div className="social-media">
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
    </footer>
  );
};

export default Footer;

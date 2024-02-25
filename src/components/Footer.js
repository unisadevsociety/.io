import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import "../styles/Footer.css";
import USDFAV from "../images/icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6 "> */}
          <div className="footerdivider">
            <div className="connectwithus">
              <h3 className="footer-heading">Connect with us</h3>
              <ul className="social-icons">
                <li>
                  <a href="https://facebook.com" className="black-text">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" className="black-text">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="black-text">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="black-text">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="black-text">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>

            {/* </div> */}
            <div className="quicklinks">
              {/* <div className="col-md-6"> */}
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="quick-links">
                <li>
                  <a href="#/maintenancePage" className="black-text">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/maintenancePage" className="black-text">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/maintenancePage" className="black-text">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/maintenancePage" className="black-text">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/maintenancePage" className="black-text">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="rights">
          <div className="black-text">
            {" "}
            <img src={USDFAV} className="usdicon" /> UNISA Developer Society
          </div>
          <div className="black-text">
            © All rights reserved to UNISA Developer Society
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

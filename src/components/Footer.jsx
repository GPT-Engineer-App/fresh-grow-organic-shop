import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/services" className="hover:text-gray-900">Services</Link>
          <Link to="/about" className="hover:text-gray-900">About</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <div>
          <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
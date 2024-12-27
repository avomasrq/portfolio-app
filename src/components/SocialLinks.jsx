import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <a href="https://www.linkedin.com/in/arystan-tanekov-089639338?trk=contact-info" target="_blank" className="social-button">
        <FaLinkedin />
      </a>
      <a href="https://github.com/avomasrq" target="_blank" className="social-button">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/avomasrq?igsh=dHQ4ZDJ6aHdhcXk3&utm_source=qr" target="_blank" className="social-button">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
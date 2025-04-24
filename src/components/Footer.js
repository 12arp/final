import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p className="footer-description">
                        Since 2004, we've been empowering Indian farmers with modern agricultural solutions. 
                        Our commitment to quality and innovation has made us a trusted partner in India's 
                        agricultural growth story.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('about')}>About Us</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('products')}>Products</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('testimonials')}>Testimonials</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="contact-info">
                        <li>+91 98765 43210</li>
                        <li>+91 98765 43211</li>
                        <li>+91 98765 43212</li>
                        <li>info@sahumetals.com</li>
                        <li>123, Industrial Area, Phase 1,<br />New Delhi - 110001</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
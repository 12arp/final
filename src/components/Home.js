import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faTractor, faHandshake, faHome, faBox, faInfoCircle, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <h1>Sahu Metals</h1>
                    <div className="header-right">
                        <div className="contact-buttons">
                            <a 
                                href="https://wa.me/919876543211?text=I%20want%20to%20connect%20to%20you%20for%20enquery" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="whatsapp-button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp
                            </a>
                            <a 
                                href="tel:9876543211" 
                                className="call-button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                                </svg>
                                Call
                            </a>
                        </div>
                        <button 
                            className="mobile-menu-button"
                            onClick={toggleMenu}
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>
            </header>
            <section id="hero" className="hero">
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src="https://cdn.pixabay.com/video/2024/09/21/232561_large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                </div>
                <div className="hero-content">
                    <h1>
                        Advanced Farm <br />Equipment for Modern Agriculture
                    </h1>
                    <p className="subtitle">Quality farming equipment designed for Indian farmers</p>
                    <Link to="/products" className="explore-button">
                        Explore Products
                    </Link>
                </div>
                <div id="service-highlights" className="service-highlights">
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FontAwesomeIcon icon={faRupeeSign} />
                        </div>
                        <div className="highlight-text">
                            <h3 className="highlight-title">Government Subsidies</h3>
                            <p className="highlight-subtitle">सरकारी सब्सिडी</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FontAwesomeIcon icon={faTractor} />
                        </div>
                        <div className="highlight-text">
                            <h3 className="highlight-title">Made in India</h3>
                            <p className="highlight-subtitle">मेड इन इंडिया</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <div className="highlight-text">
                            <h3 className="highlight-title">Nationwide Service</h3>
                            <p className="highlight-subtitle">पूरे भारत में सेवा</p>
                        </div>
                    </div>
                </div>
            </section>

            <nav className={`bottom-nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-content">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button onClick={() => scrollToSection('hero')} className="nav-link">
                                <FontAwesomeIcon icon={faHome} />
                                <span>Home</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                <FontAwesomeIcon icon={faBox} />
                                <span>Products</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => scrollToSection('about-sahu')} className="nav-link">
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <span>About Us</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => scrollToSection('contact-section')} className="nav-link">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>Contact Us</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Home; 
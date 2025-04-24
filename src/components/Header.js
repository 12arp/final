import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            // If already on home page, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // If on another page, navigate to home
            navigate('/');
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    
                    <Link to="/" className="logo-text" onClick={handleHomeClick}>
                        Sahu Metals
                    </Link>
                </div>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link" onClick={handleHomeClick}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#about-sahu" 
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('about-sahu');
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#contact-section" 
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact-section');
                                }}
                            >
                                Contact
                            </a>
                        </li>
                       
                    </ul>
                </nav>
                
                <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header; 
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faTractor, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <section className="hero">
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
                <div className="service-highlights">
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
        </div>
    );
}

export default Home; 
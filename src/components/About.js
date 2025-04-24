import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const values = [
        { key: 'quality', text: 'Quality Assurance', icon: faCheckCircle },
        { key: 'satisfaction', text: 'Customer Satisfaction', icon: faCheckCircle },
        { key: 'innovation', text: 'Continuous Innovation', icon: faCheckCircle },
        { key: 'sustainability', text: 'Environmental Sustainability', icon: faCheckCircle },
        { key: 'responsibility', text: 'Social Responsibility', icon: faCheckCircle }
    ];

    return (
        <section id="about-sahu" className="about-sahu">
            <div className="container">
                <h2 data-aos="fade-up">About Sahu Metals</h2>
                <div className="about-sahu-content">
                    <div className="about-sahu-text" data-aos="fade-right">
                        <h3>Our Journey</h3>
                        <p>Founded in 2003, Sahu Metals has grown from a small local business to a leading metal trading company with a strong presence across multiple states in India.</p>
                        
                        <h3>Our Mission</h3>
                        <p>To provide high-quality metal products and services while maintaining the highest standards of customer satisfaction and environmental responsibility.</p>
                        
                        <h3>Our Values</h3>
                        <ul className="values-list">
                            {values.map((value) => (
                                <li key={value.key}>
                                    <FontAwesomeIcon icon={value.icon} />
                                    {value.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-sahu-stats" data-aos="fade-left">
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Years of Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50,000+</span>
                            <span className="stat-label">Satisfied Customers</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Product Categories</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Service Centers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 
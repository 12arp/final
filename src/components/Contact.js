import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append('access_key', 'c8f467c7-3153-41f8-bd8b-31922cab7dc7');
            formDataToSubmit.append('name', formData.name);
            formDataToSubmit.append('email', formData.email);
            formDataToSubmit.append('phone', formData.phone);
            formDataToSubmit.append('message', formData.message);
            formDataToSubmit.append('from_name', 'Sahu Metals Contact Form');
            formDataToSubmit.append('subject', 'New Contact Form Submission');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSubmit
            });

            const result = await response.json();

            if (result.success) {
                setSuccess('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setError(result.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-section" className="contact-section">
            <div className="contact-container">
                <h2 data-aos="fade-up">Contact Us</h2>
                <p className="contact-subtitle" data-aos="fade-up">Get in touch with us for any inquiries or support</p>

                <div className="contact-content">
                    <div className="contact-info" data-aos="fade-right">
                        <div className="info-card">
                            <div className="info-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                                <div className="info-text">
                                    <h3>Our Location</h3>
                                    <p>Industrial Area, Ranpur, Kota, Rajasthan 324009</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                                <div className="info-text">
                                    <h3>Email Us</h3>
                                    <p>info@sahumetals.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                                <div className="info-text">
                                    <h3>Call Us</h3>
                                    <p>+91 9876543210</p>
                                    <p>+91 9876543211</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Sahu Metals Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.7046183218784!2d75.85562497506431!3d25.147595877757387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835f0b71c9b9%3A0x96ef76d8e2c37e3e!2sIndustrial%20Area%2C%20Ranpur%2C%20Kota%2C%20Rajasthan%20324009!5e0!3m2!1sen!2sin!4v1689612345678!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="contact-form" data-aos="fade-left">
                        <h3>Send us a message</h3>
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">{success}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 
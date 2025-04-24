import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = ({ product, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append('access_key', 'c8f467c7-3153-41f8-bd8b-31922cab7dc7');
            formDataToSubmit.append('name', formData.name);
            formDataToSubmit.append('email', formData.email);
            formDataToSubmit.append('phone', formData.phone);
            formDataToSubmit.append('message', formData.message);
            formDataToSubmit.append('product_name', product.title.en);
            formDataToSubmit.append('product_id', product._id);
            formDataToSubmit.append('from_name', 'Sahu Metals Product Enquiry');
            formDataToSubmit.append('subject', `Enquiry for ${product.title.en}`);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSubmit
            });

            const result = await response.json();

            if (result.success) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setError('Failed to send enquiry. Please try again.');
            }
        } catch (err) {
            setError('Failed to send enquiry. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="enquiry-form-overlay" onClick={onClose}>
            <div className="enquiry-form-container" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>Send Enquiry</h2>
                <p className="product-name">Product: {product.title.en}</p>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">Enquiry sent successfully!</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Enquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm; 
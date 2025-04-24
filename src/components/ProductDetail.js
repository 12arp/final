import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import EnquiryForm from './EnquiryForm';
import './ProductDetail.css';

const BACKEND_URL = 'http://localhost:5000';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const getFullImageUrl = (imageUrl) => {
    if (!imageUrl) return '';
    return imageUrl.startsWith('http') ? imageUrl : `${BACKEND_URL}${imageUrl}`;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/products/${id}`);
        if (response.data.success) {
          setProduct(response.data.data);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/products">Products</Link> &gt; {product.title}
      </div>

      <div className="product-main">
        <div className="product-images">
          <div className="main-image">
            <img
              src={getFullImageUrl(product.additionalImages?.[selectedImage] || product.image)}
              alt={product.title}
              className="product-img"
            />
          </div>
          <div className="thumbnail-container">
            {[product.image, ...(product.additionalImages || [])].map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={getFullImageUrl(img)} alt={`${product.title} View ${index + 1}`} />
                <span>View {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>

          <div className="key-features">
            <h2>Key Features</h2>
            <ul>
              {product.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="action-buttons">
            <button className="contact-btn" onClick={() => setShowEnquiryForm(true)}>
              Send Enquiry
            </button>
            {product.specifications?.length > 0 && (
              <button className="spec-btn" onClick={() => document.getElementById('specifications').scrollIntoView({ behavior: 'smooth' })}>
                View Specifications
              </button>
            )}
          </div>
        </div>
      </div>

      {product.specifications?.length > 0 && (
        <div id="specifications" className="specifications">
          <h2>Technical Specifications</h2>
          <div className="spec-content">
            {product.specifications.map((spec, index) => (
              <div key={index} className="spec-item">
                <span className="spec-name">{spec.name}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {showEnquiryForm && (
        <EnquiryForm 
          product={product} 
          onClose={() => setShowEnquiryForm(false)} 
        />
      )}
    </div>
  );
} 
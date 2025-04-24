import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const BACKEND_URL = 'https://adityaback.onrender.com';

const ProductItem = ({ product }) => {
    const { _id, image, title, description } = product;
    
    const getFullImageUrl = (imageUrl) => {
        if (!imageUrl) return '';
        return imageUrl.startsWith('http') ? imageUrl : `${BACKEND_URL}${imageUrl}`;
    };
    
    return (
        <div className="product-item">
            <img src={getFullImageUrl(image)} alt={title} className="product-img" />
            <h3 className="product-title">{title}</h3>
            <p className="product-desc">{description}</p>
            <Link to={`/products/${_id}`} className="btn secondary-btn">
                View Details
            </Link>
        </div>
    );
};

export default ProductItem; 
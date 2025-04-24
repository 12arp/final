import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductItem from './ProductItem';
import './Products.css';

const OurProducts = ({ currentLanguage }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://adityaback.onrender.com/api/products');
                if (response.data.success) {
                    // Take only the first three products
                    setProducts(response.data.data.slice(0, 3));
                } else {
                    setError('Failed to load products');
                }
                setLoading(false);
            } catch (err) {
                setError('Failed to load products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleExploreMore = () => {
        navigate('/products');
    };

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <section id="our-products" className="products">
            <div className="container">
                <h2 className="section-title">
                    {currentLanguage === 'en' ? 'Our Products' : 'Our Products'}
                </h2>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductItem
                            key={product._id}
                            product={product}
                            currentLanguage={currentLanguage}
                        />
                    ))}
                </div>
                <div className="explore-more-container">
                    <button 
                        className="explore-more-btn"
                        onClick={handleExploreMore}
                    >
                        {currentLanguage === 'en' ? 'Explore More' : 'Explore More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurProducts; 
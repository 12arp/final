import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import './Products.css';

const Products = ({ currentLanguage }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                if (response.data.success) {
                    setProducts(response.data.data);
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

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <section id="products" className="products">
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
            </div>
        </section>
    );
};

export default Products; 
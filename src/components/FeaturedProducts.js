import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const navigate = useNavigate();

    const featuredProducts = [
        {
            id: 1,
            name: "Rotavator",
            description: "High-performance rotavator for efficient soil cultivation",
            image: "/images/rotavator.jpg"
        },
        {
            id: 2,
            name: "Cultivator",
            description: "Advanced cultivator for precise field preparation",
            image: "/images/cultivator.jpg"
        },
        {
            id: 3,
            name: "Harrow",
            description: "Premium quality harrow for optimal soil conditioning",
            image: "/images/harrow.jpg"
        }
    ];

    const handleExploreMore = () => {
        navigate('/products');
    };

    return (
        <section className="featured-products">
            <div className="featured-container">
                <h2 data-aos="fade-up">Featured Products</h2>
                <p className="featured-subtitle" data-aos="fade-up">
                    Discover our most popular agricultural equipment
                </p>

                <div className="products-grid" data-aos="fade-up">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="product-card" data-aos="fade-up">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="explore-more-container" data-aos="fade-up">
                    <button onClick={handleExploreMore} className="explore-more-btn">
                        Explore More Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FeaturedProducts from './components/FeaturedProducts';
import LanguageSelector from './components/LanguageSelector';

import OurProducts from './components/OurProducts';
import AdminPanel from './components/AdminPanel';
import ProductDetail from './components/ProductDetail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};

function App() {
    return (
        <Router>
            <div className="App">
                <LanguageSelector />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />
                                <OurProducts />
                                <About />
                                <Contact />
                            </>
                        } />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/admin" element={
                            <ProtectedRoute>
                                <AdminPanel />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

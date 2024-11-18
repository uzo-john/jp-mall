import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage'; // Correct import
import { CartProvider } from './components/CartContext';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          
          <Route path="/products" element={<ProductList />} />
          
          <Route path="/cart" element={<CartPage />} /> {/* Corrected here */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

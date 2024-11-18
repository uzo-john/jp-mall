import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome, faInfoCircle, faTags, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <img src="/image/K-removebg-preview.png" alt="logo" />
      <div className={`nav-links ${toggle ? 'active' : ''}`}>
        <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
        <Link to="/products"><FontAwesomeIcon icon={faTags} /> Products</Link>
        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link>
        <Link to="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</Link>
        <button className='nav-button'><FontAwesomeIcon icon={faShoppingCart} /> cart</button>
      </div>
      
      <button className="nav-toggle" onClick={handleToggle}>
        &#9776;
      </button>
    </nav> 
    
   );
};
 
export default Navbar;
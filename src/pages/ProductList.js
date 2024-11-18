import React, { useEffect, useState, useContext } from 'react'; // Add useContext here
import { CartContext } from '../components/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext); // Now you can use addToCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/shoes.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        // Access the products array within the data
        if (!Array.isArray(jsonData.products)) {
          throw new Error('Data is not an array');
        }

        setProducts(jsonData.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <h1>All Products</h1>
      {error && <div className="error">{error}</div>}
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={`${product.id}-${index}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={`${product.id}-star-${i}`} // Unique key for each star
                  icon={faStar}
                  className={i < Math.round(product.rating.rate) ? 'filled' : ''}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

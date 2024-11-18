import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import CheckOutForm from '../components/CheckOutForm';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div className='cart'>
            {cart.length === 0 ? (
                <>
                    <p className="empty-cart-message">Your cart is empty</p>
                    <div className="checkout-section">
                        <CheckOutForm />
                    </div>
                </>
            ) : (
                <>
                    <div className='cart-page'> 
                        <h1>Shopping Cart</h1>
                        {cart.map(product => (
                            <div key={product.id} className="cart-item">
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                                <input
                                    type="number"
                                    value={product.quantity}
                                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-section">
                        <CheckOutForm />
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;

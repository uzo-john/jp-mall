// src/components/CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal Code is required';
        if (!formData.cardNumber) newErrors.cardNumber = 'Card Number is required';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry Date is required';
        if (!formData.cvv) newErrors.cvv = 'CVV is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Payment processed successfully!');
        }
    };

    return (
        <div className="checkout-form">
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name on Card</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {errors.city && <span className="error">{errors.city}</span>}
                </div>
                <div className="form-group">
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                    {errors.postalCode && <span className="error">{errors.postalCode}</span>}
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />
                    {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                    />
                    {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                    />
                    {errors.cvv && <span className="error">{errors.cvv}</span>}
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default CheckoutForm;

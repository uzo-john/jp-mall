import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact-container">
            <div className="contact-info">
                <h1>Let's Talk</h1>
                <div className="info-item">
                    <FaPhone className="info-icon" />
                    <h2>Phone</h2>
                    <p>+234 802 6317 407</p>
                </div>
                <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <h2>Email</h2>
                    <p>Johnpauluzowurur2018@gmail.com</p>
                </div>
                <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <h2>Address</h2>
                    <p>31, Olayemi Street,<br />Lagos, Nigeria</p>
                </div>
            </div>

            <div className="contact-form">
                <h2>Reach Out</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

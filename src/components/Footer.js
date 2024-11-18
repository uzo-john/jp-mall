import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHome, faInfoCircle, faTags, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <div className="footer-links">
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                    <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
                    <Link to="/products"><FontAwesomeIcon icon={faTags} /> Products</Link>
                    <Link to="/sales"><FontAwesomeIcon icon={faTags} /> Sales</Link>
                    <Link to="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Shoe Designers. All rights reserved. Designed by @johnpaul.</p>
            </div>
        </footer>
    );
};

export default Footer;

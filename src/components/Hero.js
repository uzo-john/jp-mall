import Discount from './Discount';
import FeatureProduct from './FeatureProduct';
import ProductSection from './ProductSection';
import LastestProduct from './LastestProduct';


const Hero = () => {
    return ( 
        <section>
            <div className="hero">
                <div className="slide">
                    <div className="slide-item">
                        <img src="/image/shoe 1.jpeg" alt="male shoe" />
                        <div className="caption">
                            <h2>Stylish shoes for men</h2>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                        <div className="slide-item">
                            <img src="/image/shoe 2.jpeg" alt="male shoe" />
                            <div className="caption">
                                <h2>Stylish Sports Wear</h2>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                </div>
            </div>
            <Discount />
            <FeatureProduct />
            <ProductSection />
            <LastestProduct />
             
        </section>
        
     );
}
 
export default Hero;
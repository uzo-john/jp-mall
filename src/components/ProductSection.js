
const products = [
    {
        src: '/image/shoes 9.jpeg',
        title: 'Minimal Collection',
        link: '#'
    },
    {
        src: '/image/shoes 11.jpeg',
        title: 'Sneakers',
        link: '#'
    }
];

const ProductSection = () => {
    return (
        <section className="product-section">
            {products.map((product, index) => (
                <div key={index} className="product-card1">
                    <img src={product.src} alt={product.title} />
                    <div className="product-info1">
                        <h2>{product.title}</h2>
                        <a href={product.link}>Shop Now</a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductSection;



const featuredProducts = [
    {
        src: '/image/shoes 12.jpeg',
        title: 'Running shoes for men',
        price: '$20',
        link: '#'
    },
    {
        src: '/image/shoes 13.jpeg',
        title: 'Running shoes for men',
        price: '$30',
        link: '#'
    },
    {
        src: '/image/shoes 14.jpeg',
        title: 'Running shoes for men',
        price: '$50',
        link: '#'
    },
    {
        src: '/image/shoes 15.jpeg',
        title: 'Running shoes for men',
        price: '$20',
        link: '#'
    },
    {
        src: '/image/shoes 16.jpeg',
        title: 'Running shoes for men',
        price: '$20',
        link: '#'
    }
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products">
            <div className="header">
                <h2>LATEST PRODUCTS</h2>
                <a href="#" className="view-all">View all</a>
            </div>
            <div className="products-container">
                {featuredProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.src} alt={product.title} />
                        <div className="product-info">
                            <p>{product.title}</p>
                            <span>{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;



const featuredProducts = [
    {
        src: '/image/shoes 4.jpeg',
        title: 'Running shoes for men',
        price: '$20',
        link: '#'
    },
    {
        src: '/image/shoes 5.jpeg',
        title: 'Running shoes for men',
        price: '$30',
        link: '#'
    },
    {
        src: '/image/shoes 6.jpeg',
        title: 'Running shoes for men',
        price: '$50',
        link: '#'
    },
    {
        src: '/image/shoes 7.jpeg',
        title: 'Running shoes for men',
        price: '$20',
        link: '#'
    },
    {
        src: '/image/shoes 8.jpeg',
        title: 'Running shoes for men',
        price: '$20',
        link: '#'
    }
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products">
            <div className="header">
                <h2>FEATURED PRODUCTS</h2>
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

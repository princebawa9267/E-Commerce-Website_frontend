const ProductCard = ({ image, name, price, discount }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 w-64 relative overflow-hidden">
        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discount}% OFF
          </span>
        )}
  
        {/* Product Image */}
        <div className="h-40 w-full">
          <img src={image} alt={name} className="w-full h-full object-cover rounded" />
        </div>
  
        {/* Product Info */}
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">₹{price}</p>
        </div>
  
        {/* Buy Now Button */}
        <button className="mt-3 bg-blue-600 text-white py-2 w-full rounded hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    );
  };
  
  // Usage Example
  const ProductList = () => {
    const products = [
      { image: "https://via.placeholder.com/150", name: "Smart Watch", price: "1,999", discount: 20 },
      { image: "https://via.placeholder.com/150", name: "Wireless Earbuds", price: "999", discount: 15 },
      { image: "https://via.placeholder.com/150", name: "Running Shoes", price: "1,499", discount: 25 },
    ];
  
    return (
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    );
  };
  
  export default ProductList;
  
import React from 'react'

const DealCart = ({ image, name, price, discount }) => {
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg p-4 w-64 relative overflow-hidden">
        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discount}% OFF
          </span>
        )}
  
        {/* Product Image */}
        <div className="h-42 w-full border-1 p-3">
          <img src={image} alt={name} className="w-full h-full object-contain rounded" />
        </div>
  
        {/* Product Info */}
        <div className="mt-3 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">₹{price}</p>
        </div>
  
        {/* Buy Now Button */}
        {/* <button className="mt-3 bg-blue-600 text-white py-2 w-full rounded hover:bg-blue-700 transition">
          Buy Now
        </button> */}
      </div>
        </div>
    )
}

export default DealCart;


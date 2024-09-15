import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const MensWear = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, mode } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div className={`p-6 md:top-[10rem] top-[4rem] 
    xl:top-[10rem] relative xl:mb-[10rem] mb-[4rem] 
    md:mb-[10rem] min-h-[20rem] ${mode === 
    'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <h2 className={`text-4xl text-center font-bold mb-12 w-fit mx-auto p-3 rounded-sm px-10 capitalize shadow-lg ${mode === 'light' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-800 text-violet-300 shadow-violet-500'}`}>
        Men's Clothing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(item => (
          <div 
            key={item.id} 
            className={`border p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ${mode === 'light' ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-800 shadow-gray-700'}`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-contain mb-4 rounded-md" 
            />
            <h3 className={`text-lg font-semibold mb-3 line-clamp-2 ${mode === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
              {item.title}
            </h3>
            <div className="flex justify-between items-center">
              <p className={`text-lg font-medium ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                ${item.price.toFixed(2)}
              </p>
              <p
                className="flex items-center text-yellow-500"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                      {item.rating?.rate} ({item.rating?.count})
                    </p>
            </div>
            <button 
                onClick={() => addToCart(item)}
                className={`px-5 py-2 rounded-sm mx-auto relative top-2 text-white md:text-sm font-semibold shadow-md transition-all duration-200 ease-in-out flex items-center ${mode === 'light' ? 'bg-orange-400 hover:bg-orange-500' : 'bg-orange-500 hover:bg-orange-600'}`}
              >
                Add To Cart
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensWear;

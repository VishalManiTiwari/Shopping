import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import Slider from './Slider';

const MainSection = ({ searchTerm }) => {
  const { addToCart, mode } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
        setProducts([...data, ...localProducts]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (user) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      addToCart(product);
      toast.success('Item added to cart!');
    } else {
      toast.error('You need to log in to add items to the cart.');
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = filteredProducts.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div
      style={{
        backgroundColor: mode === 'dark' ? 
        '#1f2937' : '#f9fafb',
        color: mode === 'dark' ? '#f9fafb' : '#1f2937',
      }}
      className="p-6 mx-auto max-w-screen-2xl"
    >
      <div className="mb-8">
        <Slider />
      </div>
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-16 ">
          <div className='text-center'>
          <h2
            className={`text-4xl text-center font-bold 
              mb-12 w-fit mx-auto p-3 rounded-sm px-10 
              capitalize shadow-lg ${mode === 'light' ? 
              'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 
              'bg-gray-800 text-violet-300 shadow-red-500'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 
            xl:grid-cols-4 gap-6 mx-auto"
          >
            {categories[category].map((product) => (
              <div
                key={product.id}
                className={`border border-gray-300 rounded-lg 
                overflow-hidden shadow-lg transform transition-all 
                hover:scale-105 hover:shadow-2xl xl:w-[18rem] mx-auto
                ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-white`}
              >
                <div
                  className="h-48 overflow-hidden bg-gray-100 
                  dark:bg-gray-700 product-image"
                >
                  <img
                    className="xl:w-[18rem] w-full h-full 
                     p-2 mx-auto"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="p-4">
                  <h2
                    className="text-lg  font-semibold mb-2 
                    product-title text-center"
                  >
                    {product.title}
                  </h2>
                  <p
                    className="text-gray-500 dark:text-gray-400 
                    mb-2 
                    text-center"
                  >
                    {product.category}
                  </p>
                  <div
                    className="flex justify-between items-center mb-4 
                    text-center"
                  >
                    <p
                      className="text-gray-800 dark:text-gray-200 
                      font-bold text-lg"
                    >
                      ₹{product.price}
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
                      {product.rating?.rate} ({product.rating?.count})
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-orange-500 hover:bg-orange-700 
                      text-white py-2 px-6 rounded-lg shadow-md 
                      transition duration-300 text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSection;


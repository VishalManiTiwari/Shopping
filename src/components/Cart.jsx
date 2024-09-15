import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Loading from "./Loading";

const Cart = () => {
  const { cart, removeFromCart, mode } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <div
      className={`p-6 min-h-[20rem] top-[4rem] relative md:top-[10rem] xl:top-[10rem] mb-[10rem] 
      ${mode === "light" ? "bg-gray-100" : "bg-gray-900"}`}
    >
      <h1
        className={`text-3xl font-bold mb-8 text-center
         w-fit mx-auto p-3 rounded-sm px-10 capitalize hover:rotate-3
         shadow-lg ${
           mode === "light"
             ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
             : "bg-gray-800 text-violet-300 shadow-violet-500"
         }`}
      >
        Shopping Cart
      </h1>
      {cart.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cart.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-center border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ${
                mode === "light"
                  ? "border-gray-200 bg-white"
                  : "border-gray-700 bg-gray-800"
              }`}
            >
              {/* Product Image */}
              <div className="relative w-full md:w-1/2 h-48 md:h-full">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* Product Details and Actions */}
              <div className="p-4 flex flex-col justify-between h-full w-full md:w-1/2">
                <div>
                  <h2
                    className={`text-xl font-semibold mb-2 ${
                      mode === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    {product.title}
                  </h2>
                  <p
                    className={`text-sm mb-4 ${
                      mode === "light" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {product.category}
                  </p>
                  <p
                    className={`text-lg font-bold ${
                      mode === "light" ? "text-gray-800" : "text-gray-300"
                    }`}
                  >
                    ₹{product.price}
                  </p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className={`flex-1 py-2 rounded-lg text-white font-semibold shadow transition-all duration-200 ease-in-out ${
                      mode === "light"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    Remove
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className={`flex-1 py-2 rounded-lg text-white font-semibold shadow transition-all duration-200 ease-in-out ${
                      mode === "light"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

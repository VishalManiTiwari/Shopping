import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext); 
  const [cart, setCart] = useState([]);
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`cart_${user.email}`);
      setCart(savedCart ? JSON.parse(savedCart) : []);
    } else {
      setCart([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'rgb(17, 24, 39)';
  }, [mode]);

  const addToCart = (product) => {
    if (user) {
      setCart(prevCart => [...prevCart, product]);
    } else {
      alert('You need to log in to add items to the cart.');
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, mode, toggleMode }}>
      {children}
    </CartContext.Provider>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './contexts/CartContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <CartProvider>
        <App />
      </CartProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
);

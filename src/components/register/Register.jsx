import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/CartContext'; 

function Register() {
  const { mode } = useContext(CartContext); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Successfully registered!");
      navigate('/login');
    } catch (error) {
      setError(error.message);
      toast.error("Registration failed: " + error.message);
    }
  };

  return (
    <div className={`max-w-md relative mt-[4rem] sm:mt-[7rem] xl:mt-[11rem] md:mt-[11rem] mx-auto p-8 rounded-lg shadow-lg ${mode === 'light' ? 'bg-white' : 'bg-gray-800 shadow-gray-900'}`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${mode === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form className="space-y-6" onSubmit={handleRegister}>
        <div>
          <label className={`block text-sm font-medium ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className={`mt-1 w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${mode === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-900 text-white border-gray-600'}`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className={`mt-1 w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${mode === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-900 text-white border-gray-600'}`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your Password"
            className={`mt-1 w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${mode === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-900 text-white border-gray-600'}`}
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-md shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${mode === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Register
        </button>
      </form>
      <div className={`mt-4 text-center ${mode === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>
        <span>Already have an account? </span>
        <Link to="/login" className={`hover:underline ${mode === 'light' ? 'text-blue-500' : 'text-blue-400'}`}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;

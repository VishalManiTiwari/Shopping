import React, { useContext, useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaToggleOn,
  FaToggleOff,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Header = ({ searchTerm, setSearchTerm }) => {
  const { cart, mode, toggleMode } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
    setIsNavOpen(false);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
    setIsNavOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Women's ", path: "/womens" },
    { name: "Men's ", path: "/mens" },
    { name: "Electronics", path: "/electronics" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={`${
          isMobile
            ? "text-white text-2xl py-3 w-full text-center border-b border-gray-600"
            : `text-lg font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
                mode === "light"
                  ? "text-gray-800 hover:text-white hover:bg-gray-800"
                  : "text-gray-100 hover:text-gray-800 hover:bg-yellow-400"
              }`
        }`}
        onClick={() => setIsNavOpen(false)}
      >
        {item.name}
      </Link>
    ));

  return (
    <>
      <header
        className={`w-full  fixed top-0 z-50 ${
          mode === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        <div className="container sm:gap-[3rem] mx-auto flex items-center justify-between py-4 px-6">
          <Link
            to="/"
            className="flex items-center text-[20px] font-extrabold hover:text-yellow-400 transition duration-300"
          >
            <span className="mr-2 text-red-500 text-3xl">🛒</span>
            <p
              className="md:flex xl:text-3xl xl:font-extrabold sm:flex xl:flex hidden
       bg-gradient-to-r from-orange-500 to-green-500 
       bg-clip-text text-transparent"
            >
              <span className=""> M</span>
              Y <span className="">SHOP</span>
            </p>
          </Link>

          {/* Search Input */}
          <motion.div
            className="relative w-full max-w-md px-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSearchSubmit}
              className="relative xl:flex md:flex 
             sm:flex 
            rounded-md w-full"
            >
              <FaSearch
                className={`absolute left-3 top-1/2 
            transform -translate-y-1/2 text-${
              mode === "light" ? "gray-600" : "gray-300"
            } text-lg`}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className={`xl:w-full md:w-full sm:w-full w-[135px]
         xl:py-3 md:py-3 sm:py-3 py-[6px] px-4 pl-10 rounded-full bg-${
           mode === "light" ? "gray-100" : "gray-800"
         } text-${mode === "light" ? "black" : "white"}
        placeholder-${
          mode === "light" ? "gray-500" : "gray-400"
        } focus:outline-none focus:ring-2 focus:ring-${
                  mode === "light" ? "yellow-500" : "blue-500"
                } transition duration-300`}
              />
            </form>
          </motion.div>

          {/* Toggle Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMode}
              className="xl:text-3xl md:text-3xl xl:left-0
             sm:letf-0 md:left-0  
            relative sm:text-3xl text-2xl"
            >
              {mode === "light" ? <FaToggleOn /> : <FaToggleOff />}
            </button>

            {/* login logout  */}
            <button className="xl:flex md:flex hidden">
              {user ? (
                <button
                  onClick={handleLogout}
                  className={`hover:${
                    mode === "light" ? "text-gray-700" : "text-yellow-400"
                  }
                  font-bold bg-violet-700 text-white
                  p-1 px-2 rounded-md `}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginRedirect}
                  className={`hover:${
                    mode === "light" ? "text-gray-700" : "text-yellow-400"
                  }`}
                >
                  Login
                </button>
              )}
            </button>

            {/* cart logo */}
            <button
              onClick={handleCartClick}
              className="relative  items-center xl:flex md:flex hidden"
            >
              <FaShoppingCart
                className={`text-2xl hover:${
                  mode === "light" ? "text-gray-700" : "text-yellow-400"
                }`}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* menu bars */}
          <button
            className={`xl:text-3xl md:text-3xl sm:text-3xl
             text-2xl text-gray-800 xl:hidden relative 
            dark:text-gray-100 md:hidden focus:outline-none
             left-[8px] ${
               mode === "light"
                 ? "bg-white text-black"
                 : "bg-gray-800 text-white"
             } `}
            aria-label="Toggle Navigation"
            onClick={toggleNav}
          >
            {isNavOpen ? <FaTimes className="text-red-500" /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`relative ${
            mode === "light" ? "bg-white" : "bg-gray-900"
          } shadow-md`}
        >
          <div
            className="hidden md:flex md:items-center
           md:justify-center md:space-x-6 p-4"
          >
            {renderNavLinks()}
          </div>

          {/* Mobile & Tablet Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-full
               bg-gray-900 flex flex-col items-center
                justify-center z-50 transition-transform
                 transform md:hidden ${
                   isNavOpen ? "translate-x-0" : "-translate-x-full"
                 } duration-300`}
          >
            {renderNavLinks(true)}

            {/* Additional Menu */}
            {isNavOpen && (
              <div className="flex justify-between gap-[13rem] mt-6">
                <button
                  onClick={handleCartClick}
                  className="relative flex items-center
                text-white "
                >
                  <FaShoppingCart
                    className={`text-2xl hover:${
                      mode === "light" ? "text-gray-700" : "text-yellow-400"
                    }`}
                  />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">
                      {cart.length}
                    </span>
                  )}
                </button>
                <button
                  className="text-white bg-gray-500 
                p-1 px-2 rounded-lg "
                >
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className={`hover:${
                        mode === "light" ? "text-orange-700" : "text-yellow-400"
                      }`}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginRedirect}
                      className={`hover:${
                        mode === "light" ? "text-orange-700" : "text-yellow-400"
                      }`}
                    >
                      Login
                    </button>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

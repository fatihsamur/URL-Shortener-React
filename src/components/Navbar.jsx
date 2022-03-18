import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="text-gray-800 body-font w-screen">
      <div className=" fixed top-0 w-screen flex flex-wrap p-5 bg-sky-800 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Shortener</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>

        {!isLoggedIn ? (
          <div>
            <button className="inline-flex items-center text-white  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <Link to="/login">Sign In</Link>
            </button>

            <button className="ml-4 inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        ) : (
          <div>
            <button className="ml-4 inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <Link to="/dashboard">Create </Link>
            </button>
            <button className="ml-4 inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <Link to="/dashboard"> Dropdown </Link>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

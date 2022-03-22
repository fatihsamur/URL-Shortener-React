import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [token, setToken] = useState('');

  const toggleDropDown = () => {
    setIsHidden(!isHidden);
  };

  const logOut = () => {
    console.log('logout');
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .post(
        'http://127.0.0.1:8000/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setToken('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, token]);

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
            <button
              onClick={toggleDropDown}
              className="ml-4 inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
            >
              Dropdown
            </button>
            <div
              id="dropdown"
              className={`${
                isHidden ? 'hidden' : ''
              } absolute  z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Profile
                  </button>
                </li>
                <li>
                  <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

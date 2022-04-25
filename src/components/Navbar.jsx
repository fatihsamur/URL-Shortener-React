import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setLogOut } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const outSideClick = useRef(null);

  const { name, token } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const closeDropdown = (e) => {
    if (
      outSideClick.current &&
      !isHidden &&
      !outSideClick.current.contains(e.target)
    ) {
      setIsHidden(true);
    }
  };

  document.addEventListener('mousedown', closeDropdown);

  const toggleDropDown = () => {
    setIsHidden(!isHidden);
  };
  const navigate = useNavigate();

  const logOut = () => {
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
        dispatch(setLogOut());
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header className="fixed top-0 w-screen flex flex-wrap p-5 bg-sky-800 body-font text-gray-800 flex-col md:flex-row items-center">
      <a
        href="/"
        className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <span className="ml-3 text-xl">Shortener</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>

      {!token ? (
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
            <Link to="/">Create </Link>
          </button>
          <button
            onClick={toggleDropDown}
            className="ml-4 inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
          >
            {name}
          </button>
          <div
            id="dropdown"
            ref={outSideClick}
            className={`${
              isHidden ? 'hidden' : ''
            } absolute  z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  <Link className="block w-full" to="/dashboard">
                    Dashboard
                  </Link>
                </button>
              </li>
              <li>
                <button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  <Link className="block w-full" to="/userProfileDetails">
                    Profile
                  </Link>
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
    </header>
  );
};

export default Navbar;

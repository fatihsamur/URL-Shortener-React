import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/login', { ...state })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      {' '}
      <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign In</h1>

              <form action="">
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-center py-3 rounded bg-sky-800 text-white hover:bg-sky-900 focus:outline-none my-1"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="text-grey-dark mt-6">
              Don't have an account?
              <Link to="/register">Sign Up</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

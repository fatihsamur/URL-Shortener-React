import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [state, setState] = useState({
    name: '',
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
    console.log(state);
    axios
      .post('http://127.0.0.1:8000/api/register', { ...state })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form action="">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                defaultValue={state.name}
              />

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={state.email}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={state.password}
              />

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full text-center py-3 rounded bg-sky-800 text-white hover:bg-sky-900 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login">Sign In</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

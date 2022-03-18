import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const MainContent = () => {
  const [url, setUrl] = useState([]);
  const [error, setError] = useState('');
  const [shortLink, setShortLink] = useState('');
  const getUrl = (e) => {
    setShortLink('');
    const url = e.target.value;
    if (validator.isURL(url)) {
      setUrl(url);
    } else {
      setUrl('');
      setError('Invalid URL');
      console.log(error);
    }
  };

  const sendUrl = (e) => {
    e.preventDefault();
    if (url) {
      axios
        .post('http://127.0.0.1:8000/api/generate-short-url', { link: url })
        .then((res) => {
          setShortLink(res.data.code);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError('Invalid URL');
    }
  };

  return (
    <div>
      <section className="w-screen text-gray-600 body-font">
        <div className="w-screen h-screen  mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-900">
              URL Shortener
            </h1>
            <div className="flex mt-8 w-full justify-center items-center">
              <div className="relative mr-4 justify-items-center lg:w-screen xl:w-1/2 w-2/4 md:w-screen text-center">
                <input
                  type="url"
                  onChange={getUrl}
                  id="url"
                  name="url"
                  placeholder="Enter URL"
                  className="w-full mb-1 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  onClick={sendUrl}
                  className=" mb-1 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Shorten
                </button>

                <div className=" w-full mb-1 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  bit.ly/{shortLink}
                </div>
              </div>
            </div>
            <div className="flex"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;

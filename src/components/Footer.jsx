import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font flex">
        <div className="container fixed bottom-0 px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
          <a
            className="flex title-font font-medium items-center  justify-center text-gray-900"
            href="/"
          >
            <span className="ml-3 text-xl">Shortener</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Shortener
            <a
              href="http://www.fatihsamur.com"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Fatih Samur
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from 'react';
import { useSelector } from 'react-redux';

const UserProfileDetails = () => {
  const { name, email } = useSelector((state) => state.user);

  return (
    <div className="grid place-items-center content-center h-screen ">
      <div className="w-1/2 sm:flex sm:justify-between items-center bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-white"> {name} </h3>
        <button className="bg-grey-light hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/2 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y text-gray-900">
          <li>
            <a href="/" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-lg  font-bold text-gray-900">
                      <time dateTime="2020-01-07"> Name </time>
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                      {name}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-lg  font-bold text-gray-900">
                      <time dateTime="2020-01-07"> Email </time>
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                      {email}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileDetails;

import React, { useEffect, useState } from 'react';
import Pagination from '@material-tailwind/react/Pagination';
import PaginationItem from '@material-tailwind/react/PaginationItem';
import Icon from '@material-tailwind/react/Icon';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUserShortLinks } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = () => {
  const { name, token, userShortLinks } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios
        .get('http://127.0.0.1:8000/api/user-short-Links', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setUserShortLinks(res.data));
          setLoading(false);
          console.log(userShortLinks);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate('/login');
    }
  }, [token, dispatch, navigate]);

  const deleteShortLink = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/user-short-Link/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(setUserShortLinks(res.data.shortLinks));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!loading && token ? (
        <div className="flex flex-col flex-1 overflow-hidden place-items-center content-center mt-36 mb-36">
          <div className="w-3/4 sm:flex  sm:justify-between items-center bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-white">
              {' '}
              {name}{' '}
            </h3>
          </div>
          <div className="w-3/4 bg-white overflow-y-auto shadow sm:rounded-md">
            <ul className="divide-y text-gray-900 overflow-y-scroll">
              {userShortLinks.shortLinks.length > 0 ? (
                userShortLinks.shortLinks.map((shortLink) => (
                  <li key={shortLink.id}>
                    <div className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm font-light text-gray-900">
                              <time
                                dateTime={format(
                                  new Date(shortLink.created_at),
                                  'yyyy-MM-dd, HH:mm:ss'
                                )}
                              >
                                {' '}
                                {format(
                                  new Date(shortLink.created_at),
                                  'yyyy-MM-dd, HH:mm:ss'
                                )}{' '}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-lg  font-bold text-gray-900">
                              sol.{shortLink.code}
                            </p>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
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
                            <button
                              onClick={() => deleteShortLink(shortLink.id)}
                              className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                              >
                                {' '}
                                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-normal text-gray-900 truncate">
                            {shortLink.link}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-900">
                  You have no short links yet.
                </p>
              )}
            </ul>
          </div>

          <Pagination>
            <PaginationItem href="#last" ripple="dark">
              <Icon name="keyboard_arrow_left" />
            </PaginationItem>
            <PaginationItem color="lightBlue" href="#1" ripple="light">
              1
            </PaginationItem>
            <PaginationItem href="#2" ripple="dark">
              2
            </PaginationItem>
            <PaginationItem href="#3" ripple="dark">
              3
            </PaginationItem>

            <PaginationItem href="#last" ripple="dark">
              <Icon name="keyboard_arrow_right" />
            </PaginationItem>
          </Pagination>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Dashboard;

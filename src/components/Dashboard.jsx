import React from 'react';

const Dashboard = () => {
  return (
    <div>
      {' '}
      <div class="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-white">Your Goals</h3>
      </div>
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li>
            <a href="/" class="block hover:bg-gray-50">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-thin text-gray-700 truncate">
                    Increase sales by 10% year over year
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      On-Track
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-sm font-light text-gray-500">
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="/" class="block hover:bg-gray-50">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-thin text-gray-700 truncate">
                    Increase newsletter subscribers by 500
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      At-Risk
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-sm font-light text-gray-500">
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="/" class="block hover:bg-gray-50">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-thin text-gray-700 truncate">
                    Increase customer satisfaction rating by 10 points
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      On-Track
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-sm font-light text-gray-500">
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="inline-flex items-center m-4 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative sm:max-w-xl sm:mx-auto w-full">
        <div className="relative bg-white shadow-lg rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 sm:py-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl font-semibold text-center sm:text-left mb-6">
              Login 
            </h1>
            <div className="divide-y divide-gray-200">
              <div className="py-6 space-y-6 text-gray-700 text-base sm:text-lg">
                {/* Email Input */}

                <div className="relative">
                  <input
                    autoComplete="off"
                    id="full_nmae"
                    name="full_name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Full name (User name)"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                  Full Name (user name )
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                {/* Submit Button */}
                <div className="relative">
                  <button className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-300">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Login;

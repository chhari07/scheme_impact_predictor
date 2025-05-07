import React, { useState } from 'react';

const Register = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative sm:max-w-xl sm:mx-auto w-full">
        <div className="relative bg-white shadow-lg rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 sm:py-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl font-semibold text-center sm:text-left mb-6">
              Register
            </h1>
            <div className="divide-y divide-gray-200">
              <div className="py-6 space-y-6 text-gray-700 text-base sm:text-lg">
                
                {/* Profile Photo Upload */}
                <div className="relative">
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                  <label
                    htmlFor="photo"
                    className="block text-gray-600 text-sm mt-2"
                  >
                    Upload Profile Photo
                  </label>
                  {photoPreview && (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="mt-4 w-24 h-24 rounded-full object-cover border"
                    />
                  )}
                </div>

                {/* Full Name Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="full_name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                {/* Date of Birth Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="dob"
                    name="dob"
                    type="date"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Date of Birth"
                  />
                  <label
                    htmlFor="dob"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Date of Birth
                  </label>
                </div>

                {/* Phone Number Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="phone"
                    name="phone"
                    type="tel"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Phone Number"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Phone Number
                  </label>
                </div>

                {/* Password Input with toggle */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 pr-16"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-sm text-blue-600 hover:underline"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'View'}
                  </button>
                </div>

                {/* Confirm Password Input with toggle */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="confirm_password"
                    name="confirm_password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 pr-16"
                    placeholder="Confirm Password"
                  />
                  <label
                    htmlFor="confirm_password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-sm text-blue-600 hover:underline"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? 'Hide' : 'View'}
                  </button>
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

export default Register;

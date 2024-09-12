"use client";

import { useState } from "react";

function Login() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="btn"
        onClick={() => setOpenModal(true)}
      >
        Login 
      </button>

      {/* Modal with grey background */}
      {openModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          {/* Modal content */}
          <div className="bg-gray-50  p-8 rounded-lg shadow-lg w-full sm:max-w-md">
            <div className="flex flex-col items-center justify-center">
              
              <div className="w-full bg-white rounded-lg shadow dark:border">
                <div className="p-6 space-y-4 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className=" text-gray-900 border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className=" border border-gray-400  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                            required
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            {/* Close button */}
            <button
              className="mt-4 text-white bg-red-500 px-4 py-2 rounded"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

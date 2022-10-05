import React from "react";
import {useNavigate} from "react-router";
import {useScrollToTop} from "./utils.jsX";
function Forgotpassword() {
  const navigate = useNavigate();
  const setScrollToTop = useScrollToTop(true);
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="px-6
              mt-7 ml-4
               py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        go Back
      </button>
      <main id="content" role="main" class="w-full max-w-md mx-auto p-6">
        <div class="mt-7   rounded-xl shadow-lg ">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold ">Forgot password?</h1>
              <p class="mt-2 text-sm ">
                Remember your password?
                <a
                  class="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Login here
                </a>
              </p>
            </div>

            <div class="mt-5">
              <form>
                <div class="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <button
                    type="submit"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 ">
          <a
            class="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="#"
          >
            Contact us!
          </a>
        </p>
        <button
          className="
          absolute bottom-7 right-8
              mt-7 ml-4
                py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        
         
          
          onClick={() => setScrollToTop(true)}>
          scroll to top
        </button>
      </main>
    </>
  );
}

export default Forgotpassword;

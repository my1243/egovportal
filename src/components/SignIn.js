import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const SignIn = () => {
  useEffect(() => {
    loadCaptchaEnginge(6, "#d1d5db", "red");
  });

  const submit_form = () => {
    if (validateCaptcha("555555", false) == true) {
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };

  function re_home() {
    window.location.href = "http://localhost:3000/home";
  }

  return (
    <>
      <div className="relative flex items-center h-screen bg-orange-200 overflow-hidden">
        <div className=" absolute rotate-45 -top-40 left-0 rounded-2xl h-80 w-96 bg-blue-900"></div>
        <div className="absolute rotate-45 -bottom-40 -right-16 rounded-2xl h-96 w-96 bg-orange-500"></div>
        <div className="z-50 h-[80vh] max-w-[80vw] bbs bg-white mx-auto rounded-lg">
          <div className="flex items-center font-bold mx-8 mt-8 mb-4 lg:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-orange-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-orange-500">Student Portal</span>
          </div>
          <div className="flex">
            <div className="w-3/5 hidden lg:block mx-6 mb-6 lg:m-12">
              <p className="text-2xl tracking-wider text-[#19235a] font-extrabold">
                Welcome To Dharmsinh Desai University's Student's Portal
              </p>
              <div className="flex justify-center">
                <img
                  className="h-auto max-h-80 min-w-80"
                  src="../images/Animation.gif"
                />
              </div>
            </div>
            <div className="w-2/5 mx-6 mb-6">
              <div className="z-40 h-full bg-orange-200 rounded-xl shadow-2xl shadow-slate-300 p-4 w-96 mx-6">
                <h1 className="text-center text-orange-700 text-2xl font-bold uppercase flex justify-center flex-col items-center">
                  Sign In
                  <hr className="border-orange-700 border-2 bg-orange-700 rounded-lg mt-1 w-6" />
                </h1>
                <form className="mt-6">
                  <input
                    className="w-full mb-4 outline-none border border-orange-500 p-2 rounded-lg"
                    type={"text"}
                    placeholder="College ID"
                  />
                  <input
                    className="w-full mb-4 outline-none border border-orange-500 p-2 rounded-lg"
                    type={"password"}
                    placeholder="password"
                  />
                  <LoadCanvasTemplate />
                  <input
                    className="w-full my-4 outline-none border border-orange-500 p-2 rounded-lg"
                    type={"text"}
                    placeholder="Captcha"
                  />
                </form>
                <button
                  className="p-2 w-full text-center bg-[#e64b09] hover:bg-orange-400 text-white font-medium rounded-md transition-colors duration-300 ease-linear mt-4"
                  onClick={re_home}
                >
                  {/* <Link to={"/home"}>Sign In</Link> */}
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

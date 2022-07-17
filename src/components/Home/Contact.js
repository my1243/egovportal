import React, { useState } from "react";

const Contact = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <>
      {isActive && (
        <div
          class="overflow-y-auto fixed inset-0 z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:"
              aria-hidden="true"
            >
              ​
            </span>

            <div className="flex justify-center">
              <div className="ml-20 mt-10 bg-white border-orange-300 border-4 w-2/5 rounded-xl shadow-2xl">
                <div className="flex flex-row bg-orange-300 rounded-xl h-2/11 -mt-1">
                  <h1 className="font-bold text-3xl ml-6 mt-3 mb-3">
                    Local Contact Information
                  </h1>
                  <button
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                    className="font-bold hover:bg-orange-500 transition-colors duration-300 ease-in hover:text-white text-3xl ml-40 p-2 rounded-full"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="ml-4 flex flex-row">
                  <div>
                    <div className="flex flex-row mt-7">
                      <h2 className="font-medium">House No. : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>
                    <div className="flex flex-row mt-6">
                      <h2 className="font-medium">Country : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>
                    <div className="flex flex-row mt-6">
                      <h2 className="font-medium">City : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>
                    <div className="flex flex-row mt-6">
                      <h2 className="font-medium">Phone No. : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="flex flex-row mt-7">
                      <h2 className="font-medium">Pincode : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>

                    <div className="flex flex-row mt-6">
                      <h2 className="font-medium">Mobile No. : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>

                    <div className="flex flex-row mt-6">
                      <h2 className="font-medium">State : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>

                    <div className="flex flex-row mt-6">
                      <h2 className="font-medium">Fax No. : </h2>
                      <input className="border-orange-300 border-2 ml-3"></input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-12 ml-4">
                  <h2 className="font-medium">Street/Society : </h2>
                  <input className="border-orange-300 border-2 ml-3 w-3/4"></input>
                </div>

                <div className="flex flex-row mt-8 ml-4">
                  <h2 className="font-medium">Near By : </h2>
                  <input className="border-orange-300 border-2 ml-3 w-3/4"></input>
                </div>

                <div className="flex flex-row my-8 ml-4">
                  <h2 className="font-medium">Email : </h2>
                  <input className="border-orange-300 border-2 ml-3 w-3/4"></input>
                </div>
                <div className="flex justify-end border-orange-300 border-4 -mb-1 rounded-md -ml-1 -mr-1">
                  <button className="bg-orange-700 rounded-md w-20 h-10 pt-2 pb-2  mt-6 mb-4 text-white mr-6">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="lg:w-1/2 w-full">
        <div className="mt-4 flex justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Contact Information
          </h1>
          <button
            onClick={() => {
              setisActive(!isActive);
            }}
            className="cursor-pointer p-2 bg-[#e64b09] hover:text-orange-600 hover:bg-white ibs text-white font-medium rounded-md flex gap-x-2 items-center transition-colors duration-300 ease-linear"
          >
            Edit
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <hr className="rounded-full shadow-xl mt-2 mb-4 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        <div className="h-80 font-medium rounded-lg border shadow-xl text-[12px] lg:text-[16px] border-orange-500 px-2 py-4 flex justify-evenly flex-col bg-orange-200">
          <div className="flex justify-between">
            <h2>Address 1</h2>
            <h4>27</h4>
          </div>
          <div className="flex justify-between">
            <h2>Address 2</h2>
            <h4>Harikrishna Society</h4>
          </div>
          <div className="flex justify-between">
            <h2>Address 3</h2>
            <h4>Ankleshwar MAhadev Road</h4>
          </div>
          <div className="flex justify-between">
            <h2>City</h2>
            <h4>Godhra</h4>
          </div>
          <div className="flex justify-between">
            <h2>Pincode</h2>
            <h4>389001</h4>
          </div>
          <div className="flex justify-between">
            <h2>State</h2>
            <h4>Gujarat</h4>
          </div>
          <div className="flex justify-between">
            <h2>Country</h2>
            <h4>India</h4>
          </div>
          <div className="flex justify-between">
            <h2>Phone No</h2>
            <h4>8732937702</h4>
          </div>
          <div className="flex justify-between">
            <h2>Mobile No</h2>
            <h4>6359428485</h4>
          </div>
          <div className="flex justify-between">
            <h2>Email</h2>
            <h4>vraj.patel4801@gmail.com</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

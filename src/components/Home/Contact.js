import React from "react";

const Contact = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full">
        <div className="flex justify-between items-center">
          <h1 className="my-4 text-4xl font-bold">Contact Information</h1>
          <button className="p-2 bg-[#e64b09] hover:text-orange-600 hover:bg-white ibs  text-white font-medium rounded-md flex gap-x-2 items-center transition-colors duration-300 ease-linear">
            Edit
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        <div className="h-80 font-medium rounded-lg border shadow-xl border-orange-500 px-8 py-4 flex justify-evenly flex-col bg-orange-200">
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

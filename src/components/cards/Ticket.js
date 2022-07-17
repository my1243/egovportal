import React from "react";

const Ticket = () => {
  return (
    <>
      <div className="res-text h-72 font-medium rounded-lg border shadow-xl border-orange-500 p-4 flex justify-evenly flex-col bg-orange-200">
        <div className="flex justify-between">
          <h2>Exam Code</h2>
          <h4>-</h4>
        </div>
        <div className="flex justify-between">
          <h2>Exam No</h2>
          <h4>-</h4>
        </div>
        <div className="flex justify-between">
          <h2>Session No</h2>
          <h4>1</h4>
        </div>
        <div className="flex justify-between">
          <h2>Exam Type</h2>
          <h4>-</h4>
        </div>
        <div className="flex justify-between">
          <h2>Exam Category</h2>
          <h4>-</h4>
        </div>
        <div className="flex justify-between">
          <h2>Month</h2>
          <h4>July</h4>
        </div>
        <div className="flex justify-between">
          <h2>Year</h2>
          <h4>2022</h4>
        </div>
        <div className="flex justify-between">
          <h2>View Hall Ticket</h2>
          <h4>
            <a className="cursor-pointer underline text-blue-800 font-medium">
              view hallticket
            </a>
          </h4>
        </div>
        <div className="flex justify-between items-center">
          Hall Ticket
          <button className="p-2 bg-[#e64b09] hover:text-orange-600 hover:bg-white ibs transition-colors duration-300 ease-in text-white font-medium rounded-md flex gap-x-2 items-center">
            Download
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="m3.25 13.25h9m-8.5-6.5 4 3.5 4-3.5m-4-5v8.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ticket;

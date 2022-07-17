import React from "react";

const Graduation = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full">
        <h1 className="mb-4 lg:m-4 font-bold">
          Guardian
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        </h1>
        <div className="h-60 lg:h-80 font-medium rounded-lg border shadow-xl border-orange-500 p-4 flex justify-evenly flex-col bg-orange-200 w-full">
          <div className="flex justify-between">
            <h2>Relation Type</h2>
            <h4 className="text-right">Father</h4>
          </div>
          <div className="flex justify-between">
            <h2>Full Name</h2>
            <h4 className="text-right">Patel kamleshkumar Punamchandbhai</h4>
          </div>
          <div className="flex justify-between">
            <h2>Occupation</h2>
            <h4 className="text-right">Shop</h4>
          </div>
          <div className="flex justify-between">
            <h2>Organization Name</h2>
            <h4 className="text-right">Shree Ram</h4>
          </div>
          <div className="flex justify-between">
            <h2>Annual Income</h2>
            <h4 className="text-right">75000.00</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;

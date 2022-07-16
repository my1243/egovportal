import React from "react";

const ViewSearch = () => {
  return (
    <>
      <div>
        <div className="vi_info flex lg:flex-row md:flex-col border border-orange-500 bg-orange-200 shadow-md shadow-black ml-10 mr-10 mt-20 lg:w-6/7 h-full">
          <div className="flex flex-col justify-evenly mt-10 mx-12 w-1/2">
            <div className="flex justify-between">
              <h2 className="mb-4">Subject code</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Name</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">Alias</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">Program</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">Rec Status</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">Session No.</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">Elective</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">Credit</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">ThMinPass1</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="mb-4">ThMinPass2</h2>
              <h2 className="mb-4">Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>ThTotal</h2>
              <h2 className="mb-4">Info</h2>
            </div>
          </div>
          <div className="flex flex-col w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default ViewSearch;

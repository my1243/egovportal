import React from "react";

const ProgInfo = () => {
  return (
    <>
      <div>
        <h1 className="mx-2 md:mx-12 m-4 font-bold pb-2">
          Program Info
          <hr className="rounded-full shadow-xl mt-2 pt-1 justify-around max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        </h1>
        <div className="res-text flex flex-col md:flex-row bg-orange-200 md:divide-x-2 p-4 divide-orange-500 rounded-md border border-orange-500 font-medium mx-2 md:mx-12 mb-12 min-h-60">
          <div className="flex flex-col justify-evenly w-full md:w-1/2 md:p-4">
            <div className="flex justify-between">
              <h2>Institute Information</h2>
              <h2>Faculty of technology</h2>
            </div>
            <div className="flex justify-between">
              <h2>Name</h2>
              <h2>Bachlor of technology</h2>
            </div>
            <div className="flex justify-between">
              <h2>Program code</h2>
              <h2>BT</h2>
            </div>
            <div className="flex justify-between">
              <h2>Alias</h2>
              <h2>B.Tech</h2>
            </div>
            <div className="flex justify-between">
              <h2>Program type</h2>
              <h2>Under Graduate</h2>
            </div>
            <div className="flex justify-between">
              <h2>Session type</h2>
              <h2>Semester</h2>
            </div>
          </div>

          <div className="flex flex-col justify-evenly w-full md:w-1/2 md:p-4">
            <div className="flex justify-between">
              <h2 >No. of sem</h2>
              <h2 >8</h2>
            </div>
            <div className="flex justify-between">
              <h2>No. of year</h2>
              <h2>4</h2>
            </div>
            <div className="flex justify-between">
              <h2>Eligibility Criteria</h2>
              <h2>SSC, Diploma, hsc, gujcet</h2>
            </div>
            <div className="flex justify-between">
              <h2>Result Type</h2>
              <h2>Grade</h2>
            </div>
            <div className="flex justify-between">
              <h2>Compulsary Sessional</h2>
              <h2>4</h2>
            </div>
            <div className="flex justify-between">
              <h2>Session type</h2>
              <h2>Semester</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgInfo;

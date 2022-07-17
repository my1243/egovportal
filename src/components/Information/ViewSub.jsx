import React, { useState } from "react";
import Subjects from "../Data";

const ViewSub = () => {
  const obj = Subjects.find((val) => val.Name === "DataBase");
  console.log(obj);

  const [user, setuser] = useState({
    sname: "",
  });
  const [print, setprint] = useState();
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  return (
    <>
      <div>
        <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold pb-2">
          View Subjects
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        </h1>
        <div className="mx-2 md:mx-12 mb-12 border-orange-500 border bg-orange-200 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <p className="mr-2 font-medium">Institute:</p>
            <h3>Faculty Of Technology</h3>
          </div>
          <div className="flex items-center mb-2">
            <p className="mr-2 font-medium">Program:</p>
            <h3>Information Technology</h3>
          </div>
          <div className="flex items-center">
            <p className="mr-2 font-medium">Subject:</p>
            <input
              className="p-2 border-orange-500 border rounded-lg"
              placeholder="Search Subject"
            />
          </div>
          <button className="p-2 bg-orange-500 rounded-lg my-4 w-40 font-medium text-white">
            Search
          </button>
        </div>
      </div>

      {/* Table view of result of search*/}

      <div>
        <div className="flex flex-col md:flex-row rounded-lg border border-orange-500 bg-orange-200 shadow-md mx-12 mt-20">
          <div className="flex flex-col justify-evenly mt-10 mx-12 w-1/2">
            <div className="flex justify-between">
              <h2>Subject code</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Name</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Alias</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Program</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Rec Status</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Session No.</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Elective</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>Credit</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>ThMinPass1</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>ThMinPass2</h2>
              <h2>Info</h2>
            </div>
            <div className="flex justify-between">
              <h2>ThTotal</h2>
              <h2>Info</h2>
            </div>
          </div>
          <div className="flex flex-col w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default ViewSub;

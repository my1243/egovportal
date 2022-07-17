import React from "react";
import Subjects from "../Data";

const ViewSub = () => {
  const obj = Subjects.find((val) => val.Name === "DataBase");
  console.log(obj);

  return (
    <>
      <div>
        <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold pb-2">
          View Subjects
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        </h1>
        <div className="flex flex-row bg-orange-100 border border-orange-500 rounded-md mx-12 mb-12 md:h-72 vi">
          <div className="flex flex-row gap-28 mt-10 mb-10">
            <div className="font-medium ml-9">
              <div className="flex lg:flex-row col">
                <h2 className="font-semibold lg:text-xl md:text-md inst">
                  Institute:
                </h2>
                <input className="border rounded-lg outline-none border-orange-500 ml-3 mb-2 p-1 w-60 inp"></input>
              </div>
              <div className="flex flex-row col">
                <h2 className="font-semibold lg:text-xl md:text-md inst">
                  Program:
                </h2>
                <input className="border rounded-lg mb-2 border-orange-500 ml-2 p-1 w-60 inp"></input>
              </div>
              <div className="flex flex-row col">
                <h2 className="font-semibold lg:text-xl md:text-md md:-mr-7 inst">
                  Name:{" "}
                </h2>
                <input
                  type={"search"}
                  className="border-orange-500 border p-1 rounded-md ml-12 w-60 inp"
                ></input>
              </div>
              <div>
                <button className="bg-orange-400 p-2  rounded-lg w-24  mt-10">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table view of result of search*/}

      <div>
        
        <div className="lg:mr-12 lg:ml-12 sm:mx-4 mb-12">
          <table className="table_a rounded-lg overflow-hidden table-auto w-full h-60 shadow-md">
            <thead className="bg-orange-500 h-12 text-white">
              <tr>
                <th className="border border-white">Subject code</th>
                <th className="border border-white">Name</th>
                <th className="border border-white">Alias</th>
                <th className="border border-white">Program</th>
                <th className="border border-white">Rec status</th>
                <th className="border border-white">Session no.</th>
                <th className="border border-white">Elective</th>
                <th className="border border-white">Credit</th>
                <th className="border border-white">ThMinPass1</th>
                <th className="border border-white">ThMinPass2</th>
                <th className="border border-white">ThTotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-100">
                <td data-label="Subject code" className="text-center border border-white">IT-709</td>
                <td data-label="Name" className="text-center border border-white">DBMS</td>
                <td data-label="Alias" className="text-center border border-white">BSNL</td>
                <td data-label="Program" className="text-center border border-white">B.Tech</td>
                <td data-label="Rec status" className="text-center border border-white">hello</td>
                <td data-label="Session No." className="text-center border border-white">1</td>
                <td data-label="Elective" className="text-center border border-white">AMP</td>
                <td data-label="Credit" className="text-center border border-white">5.5</td>
                <td data-label="ThMinPass1" className="text-center border border-white">34</td>
                <td data-label="ThMinPass2" className="text-center border border-white">34</td>
                <td data-label="ThTotal" className="text-center border border-white">70</td>
              </tr>
              <tr className="bg-orange-300">

              <td data-label="Subject code" className="text-center border border-white">IT-709</td>
                                <td data-label="Name" className="text-center border border-white">DBMS</td>
                                <td data-label="Alias" className="text-center border border-white">BSNL</td>
                                <td data-label="Program" className="text-center border border-white">B.Tech</td>
                                <td data-label="Rec status" className="text-center border border-white">hello</td>
                                <td data-label="Session No." className="text-center border border-white">1</td>
                                <td data-label="Elective" className="text-center border border-white">AMP</td>
                                <td data-label="Credit" className="text-center border border-white">5.5</td>
                                <td data-label="ThMinPass1" className="text-center border border-white">34</td>
                                <td data-label="ThMinPass2" className="text-center border border-white">34</td>
                                <td data-label="ThTotal" className="text-center border border-white">70</td>
              </tr>
              <tr className="bg-orange-100">


              <td data-label="Subject code" className="text-center border border-white">IT-709</td>
                                <td data-label="Name" className="text-center border border-white">DBMS</td>
                                <td data-label="Alias" className="text-center border border-white">BSNL</td>
                                <td data-label="Program" className="text-center border border-white">B.Tech</td>
                                <td data-label="Rec status" className="text-center border border-white">hello</td>
                                <td data-label="Session No." className="text-center border border-white">1</td>
                                <td data-label="Elective" className="text-center border border-white">AMP</td>
                                <td data-label="Credit" className="text-center border border-white">5.5</td>
                                <td data-label="ThMinPass1" className="text-center border border-white">34</td>
                                <td data-label="ThMinPass2" className="text-center border border-white">34</td>
                                <td data-label="ThTotal" className="text-center border border-white">70</td>
              </tr>
              <tr className="bg-orange-300">

              <td data-label="Subject code" className="text-center border border-white">IT-709</td>
                                <td data-label="Name" className="text-center border border-white">DBMS</td>
                                <td data-label="Alias" className="text-center border border-white">BSNL</td>
                                <td data-label="Program" className="text-center border border-white">B.Tech</td>
                                <td data-label="Rec status" className="text-center border border-white">hello</td>
                                <td data-label="Session No." className="text-center border border-white">1</td>
                                <td data-label="Elective" className="text-center border border-white">AMP</td>
                                <td data-label="Credit" className="text-center border border-white">5.5</td>
                                <td data-label="ThMinPass1" className="text-center border border-white">34</td>
                                <td data-label="ThMinPass2" className="text-center border border-white">34</td>
                                <td data-label="ThTotal" className="text-center border border-white">70</td>
              </tr>

              <tr className="bg-orange-100">

              <td data-label="Subject code" className="text-center border border-white">IT-709</td>
                                <td data-label="Name" className="text-center border border-white">DBMS</td>
                                <td data-label="Alias" className="text-center border border-white">BSNL</td>
                                <td data-label="Program" className="text-center border border-white">B.Tech</td>
                                <td data-label="Rec status" className="text-center border border-white">hello</td>
                                <td data-label="Session No." className="text-center border border-white">1</td>
                                <td data-label="Elective" className="text-center border border-white">AMP</td>
                                <td data-label="Credit" className="text-center border border-white">5.5</td>
                                <td data-label="ThMinPass1" className="text-center border border-white">34</td>
                                <td data-label="ThMinPass2" className="text-center border border-white">34</td>
                                <td data-label="ThTotal" className="text-center border border-white">70</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewSub;

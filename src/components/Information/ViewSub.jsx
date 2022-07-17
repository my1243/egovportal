import React from "react";
import Subjects from "../Data";

const ViewSub = () => {
    const obj = Subjects.find((val) => val.Name === "DataBase");
    console.log(obj);

    return (
        <>
            <div>
                <h1 className="mx-2 md:mx-12 m-4 font-bold pb-2">
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
                <div className="tableDiv pb-12 sm:pb-24 sm:pt-0 sm:mx-12">
                    {/* <table className="table rounded-lg overflow-hidden table-auto w-full h-60 shadow-md"> */}
                    <table className="table rounded-lg border border-collapse overflow-hidden font-medium w-full shadow-lg text-md sm:text-xl px-2 py-4">
                        <thead className="bg-orange-500 h-12 text-white">
                            <tr className="text-white tr">
                                <th className="p-4 th res-text-th">Subject code</th>
                                <th className="th res-text-th">Name</th>
                                <th className="th res-text-th">Alias</th>
                                <th className="th res-text-th">Program</th>
                                <th className="th res-text-th">Rec status</th>
                                <th className="th res-text-th">Session no.</th>
                                <th className="th res-text-th">Elective</th>
                                <th className="th res-text-th">Credit</th>
                                <th className="th res-text-th">ThMinPass1</th>
                                <th className="th res-text-th">ThMinPass2</th>
                                <th className="th res-text-th">ThTotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Subject code" className="td p-4 rmv-padding res-text-td">IT-709</td>
                                <td data-label="Name" className="td res-text-td">DBMS</td>
                                <td data-label="Alias" className="td res-text-td">BSNL</td>
                                <td data-label="Program" className="td res-text-td">B.Tech</td>
                                <td data-label="Rec status" className="td res-text-td">hello</td>
                                <td data-label="Session No." className="td res-text-td">1</td>
                                <td data-label="Elective" className="td res-text-td">AMP</td>
                                <td data-label="Credit" className="td res-text-td">5.5</td>
                                <td data-label="ThMinPass1" className="td res-text-td">34</td>
                                <td data-label="ThMinPass2" className="td res-text-td">34</td>
                                <td data-label="ThTotal" className="td res-text-td">70</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Subject code" className="td p-4 rmv-padding res-text-td">IT-709</td>
                                <td data-label="Name" className="td res-text-td">DBMS</td>
                                <td data-label="Alias" className="td res-text-td">BSNL</td>
                                <td data-label="Program" className="td res-text-td">B.Tech</td>
                                <td data-label="Rec status" className="td res-text-td">hello</td>
                                <td data-label="Session No." className="td res-text-td">1</td>
                                <td data-label="Elective" className="td res-text-td">AMP</td>
                                <td data-label="Credit" className="td res-text-td">5.5</td>
                                <td data-label="ThMinPass1" className="td res-text-td">34</td>
                                <td data-label="ThMinPass2" className="td res-text-td">34</td>
                                <td data-label="ThTotal" className="td res-text-td">70</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Subject code" className="td p-4 rmv-padding res-text-td">IT-709</td>
                                <td data-label="Name" className="td res-text-td">DBMS</td>
                                <td data-label="Alias" className="td res-text-td">BSNL</td>
                                <td data-label="Program" className="td res-text-td">B.Tech</td>
                                <td data-label="Rec status" className="td res-text-td">hello</td>
                                <td data-label="Session No." className="td res-text-td">1</td>
                                <td data-label="Elective" className="td res-text-td">AMP</td>
                                <td data-label="Credit" className="td res-text-td">5.5</td>
                                <td data-label="ThMinPass1" className="td res-text-td">34</td>
                                <td data-label="ThMinPass2" className="td res-text-td">34</td>
                                <td data-label="ThTotal" className="td res-text-td">70</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Subject code" className="td p-4 rmv-padding res-text-td">IT-709</td>
                                <td data-label="Name" className="td res-text-td">DBMS</td>
                                <td data-label="Alias" className="td res-text-td">BSNL</td>
                                <td data-label="Program" className="td res-text-td">B.Tech</td>
                                <td data-label="Rec status" className="td res-text-td">hello</td>
                                <td data-label="Session No." className="td res-text-td">1</td>
                                <td data-label="Elective" className="td res-text-td">AMP</td>
                                <td data-label="Credit" className="td res-text-td">5.5</td>
                                <td data-label="ThMinPass1" className="td res-text-td">34</td>
                                <td data-label="ThMinPass2" className="td res-text-td">34</td>
                                <td data-label="ThTotal" className="td res-text-td">70</td>
                            </tr>

                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Subject code" className="td p-4 rmv-padding res-text-td">IT-709</td>
                                <td data-label="Name" className="td res-text-td">DBMS</td>
                                <td data-label="Alias" className="td res-text-td">BSNL</td>
                                <td data-label="Program" className="td res-text-td">B.Tech</td>
                                <td data-label="Rec status" className="td res-text-td">hello</td>
                                <td data-label="Session No." className="td res-text-td">1</td>
                                <td data-label="Elective" className="td res-text-td">AMP</td>
                                <td data-label="Credit" className="td res-text-td">5.5</td>
                                <td data-label="ThMinPass1" className="td res-text-td">34</td>
                                <td data-label="ThMinPass2" className="td res-text-td">34</td>
                                <td data-label="ThTotal" className="td res-text-td">70</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ViewSub;

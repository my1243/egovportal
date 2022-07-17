import React from "react";


const Attend = () => {
    return (
        <>
            <div>
                <h1 className="mx-2 md:mx-12 m-4 font-bold pb-2">
                    Attendance To Marks Conversion
                    <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" /></h1>
                <div className="tableDiv pb-12 sm:pb-24 sm:pt-0 sm:mx-12">
                    <table className="table rounded-lg border border-collapse overflow-hidden font-medium w-full shadow-lg text-md sm:text-xl px-2 py-4">
                        <thead className="bg-orange-500">
                            <tr className="text-white tr">
                                <th className="th p-4 res-text-th">Program</th>
                                <th className="th res-text-th">From percentage</th>
                                <th className="th res-text-th">To percentage</th>
                                <th className="th res-text-th">Attendence marks</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Program" className="td res-text-td td rmv-padding p-4 res-text-td">Bachelor of technology</td>
                                <td data-label="From percentage" className="td res-text-td">80</td>
                                <td data-label="To percentage" className="td res-text-td">100</td>
                                <td data-label="Attendence marks" className="td res-text-td">4</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-[#ffd1b1]">
                                <td data-label="Program" className="td res-text-td td rmv-padding p-4 res-text-td">Bachelor of technology</td>
                                <td data-label="From percentage" className="td res-text-td">80</td>
                                <td data-label="To percentage" className="td res-text-td">100</td>
                                <td data-label="Attendence marks" className="td res-text-td">4</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Program" className="td res-text-td td rmv-padding p-4 res-text-td">Bachelor of technology</td>
                                <td data-label="From percentage" className="td res-text-td">80</td>
                                <td data-label="To percentage" className="td res-text-td">100</td>
                                <td data-label="Attendence marks" className="td res-text-td">4</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-[#ffd1b1]">
                                <td data-label="Program" className="td res-text-td td rmv-padding p-4 res-text-td">Bachelor of technology</td>
                                <td data-label="From percentage" className="td res-text-td">80</td>
                                <td data-label="To percentage" className="td res-text-td">100</td>
                                <td data-label="Attendence marks" className="td res-text-td">4</td>
                            </tr>

                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Program" className="td res-text-td td rmv-padding p-4 res-text-td">Bachelor of technology</td>
                                <td data-label="From percentage" className="td res-text-td">80</td>
                                <td data-label="To percentage" className="td res-text-td">100</td>
                                <td data-label="Attendence marks" className="td res-text-td">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Attend;
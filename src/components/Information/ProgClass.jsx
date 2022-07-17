import React from "react";

const ProgClass = () => {
    return (
        <>
            <div>
                <h1 className="mx-2 md:mx-12 m-4 font-bold pb-2">
                    Program Class Info
                    <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" /></h1>
                <div className="tableDiv pb-12 sm:pb-24 sm:pt-0 sm:mx-12">
                    <table className="table rounded-lg border border-collapse overflow-hidden font-medium w-full shadow-lg text-md sm:text-xl px-2 py-4">
                        <thead className="bg-orange-500">
                            <tr className="text-white tr">
                                <th className="th p-4 res-text-th">Institute</th>
                                <th className="th res-text-th">Program</th>
                                <th className="th res-text-th">Class code</th>
                                <th className="th res-text-th">From Marks/Cpi</th>
                                <th className="th res-text-th">To marks/Cpi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Institute" className="td rmv-padding p-4 res-text-td">Faculty of technology</td>
                                <td data-label="Program" className="td res-text-td">Bachelor of technology</td>
                                <td data-label="Class code" className="td res-text-td">Secondclass with distinction</td>
                                <td data-label="From Marks" className="td res-text-td">7.50</td>
                                <td data-label="To marks/Cpi" className="td res-text-td">10.00</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-[#ffd1b1]">
                                <td data-label="Institute" className="td rmv-padding p-4 res-text-td">Faculty of technology</td>
                                <td data-label="Program" className="td res-text-td">Master of technology</td>
                                <td data-label="Class code" className="td res-text-td">First class with distinction</td>
                                <td data-label="From Marks" className="td res-text-td">8.50</td>
                                <td data-label="To marks/Cpi" className="td res-text-td">10.00</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Institute" className="td rmv-padding p-4 res-text-td">Faculty of technology</td>
                                <td data-label="Program" className="td res-text-td">Master of Buisness Administration</td>
                                <td data-label="Class code" className="td res-text-td">Second class with distinction</td>
                                <td data-label="From Marks" className="td res-text-td">6.50</td>
                                <td data-label="To marks/Cpi" className="td res-text-td">10.00</td>
                            </tr>
                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-[#ffd1b1]">
                                <td data-label="Institute" className="td rmv-padding p-4 res-text-td">Faculty of technology</td>
                                <td data-label="Program" className="td res-text-td">Bachelor of technology</td>
                                <td data-label="Class code" className="td res-text-td">Third class with distinction</td>
                                <td data-label="From marks" className="td res-text-td">5.50</td>
                                <td data-label="To marks/Cpi" className="td res-text-td">10.00</td>
                            </tr>

                            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
                                <td data-label="Institute" className="td rmv-padding p-4 res-text-td">Faculty of technology</td>
                                <td data-label="Program" className="td res-text-td">Master of technology</td>
                                <td data-label="Class code" className="td res-text-td">First class with distinction</td>
                                <td data-label="From Marks" className="td res-text-td">9.50</td>
                                <td data-label="To marks/Cpi" className="td res-text-td">10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProgClass;
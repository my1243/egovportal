import React from "react";

const ProgClass = () => {
    return (
        <>
            <div>
                <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold pb-2">
                    Program Class Info
                    <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" /></h1>
                <div className="mx-12 mb-12">
                    <table className="table_a rounded-lg overflow-hidden border-orange-500 table-auto w-full h-72 shadow-md">
                        <thead className="bg-orange-500 h-16 text-white">
                            <tr>
                                <th className="border border-white">Institute</th>
                                <th className="border border-white">Program</th>
                                <th className="border border-white">Class code</th>
                                <th className="border border-white">From Marks/Cpi</th>
                                <th className="border border-white">To marks/Cpi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border border-white">Secondclass with distinction</td>
                                <td data-label="From Marks" className="text-center border border-white">7.50</td>
                                <td data-label="To marks/Cpi" className="text-center border border-white">10.00</td>
                            </tr>
                            <tr className="bg-orange-300">
                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Master of technology</td>
                                <td data-label="Class code" className="text-center border border-white">First class with distinction</td>
                                <td data-label="From Marks" className="text-center border border-white">8.50</td>
                                <td data-label="To marks/Cpi" className="text-center border border-white">10.00</td>
                            </tr>
                            <tr className="bg-orange-100">

                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Master of Buisness Administration</td>
                                <td data-label="Class code" className="text-center border border-white">Second class with distinction</td>
                                <td data-label="From Marks" className="text-center border border-white">6.50</td>
                                <td data-label="To marks/Cpi" className="text-center border border-white">10.00</td>
                            </tr>
                            <tr className="bg-orange-300">
                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border border-white">Third class with distinction</td>
                                <td data-label="From marks" className="text-center border border-white">5.50</td>
                                <td data-label="To marks/Cpi" className="text-center border border-white">10.00</td>
                            </tr>

                            <tr className="bg-orange-100">
                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Master of technology</td>
                                <td data-label="Class code" className="text-center border border-white">First class with distinction</td>
                                <td data-label="From Marks" className="text-center border border-white">9.50</td>
                                <td data-label="To marks/Cpi" className="text-center border border-white">10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProgClass;
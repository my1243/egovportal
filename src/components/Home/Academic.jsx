import React from "react";


const Academic = () => {
    return (
        <>
            <div>
            <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold pb-2">Academic Information<hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]"/></h1>
                <div className="mx-12 mb-12">
                    <table className="table_a rounded-lg overflow-hidden border border-orange-500 table-auto w-full h-96">
                        <thead className="bg-orange-500 h-20 text-white">
                            <tr>
                                <th className="text-center border border-white">Medium of exam</th>
                                <th className="border text-center border-white">Seat no.</th>
                                <th className="border border-white text-center">Pass Year</th>
                                <th className="border border-white text-center">Pass Month</th>
                                <th className="border border-white text-center">Board Name</th>
                                <th className="border border-white text-center">Institute Name</th>
                                <th className="border border-white text-center">Specialisation</th>
                                <th className="border border-white text-center">Result Type</th>
                                <th className="border border-white text-center">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Medium of exam" className="text-center border border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border border-white">March</td>
                                <td data-label="Board Name" className="text-center border border-white">GSEB</td>
                                <td data-label="Institute Name" className="text-center border border-white">M and m mehta high school</td>
                                <td data-label="Specialisation" className="text-center border border-white">science</td>
                                <td data-label="Result Type" className="text-center border border-white">percentile</td>
                                <td data-label="Result" className="text-center border border-white">99.05</td>
                            </tr>
                            <tr  className="bg-orange-300">
                                <td data-label="Medium of exam" className="text-center border border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border border-white">March</td>
                                <td data-label="Board Name" className="text-center border border-white">GSEB</td>
                                <td data-label="Institute Name" className="text-center border border-white">M and m mehta high school</td>
                                <td data-label="Specialisation" className="text-center border border-white">science</td>
                                <td data-label="Result Type" className="text-center border border-white">percentile</td>
                                <td data-label="Result" className="text-center border border-white">99.05</td>
                            </tr>
                            <tr  className="bg-orange-100">

                                <td data-label="Medium of exam" className="text-center border border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border border-white">March</td>
                                <td data-label="Board Name" className="text-center border border-white">GSEB</td>
                                <td data-label="Institute Name" className="text-center border border-white">M and m mehta high school</td>
                                <td data-label="Specialisation" className="text-center border border-white">science</td>
                                <td data-label="Result Type" className="text-center border border-white">percentile</td>
                                <td data-label="Result" className="text-center border border-white">99.05</td>
                            </tr>
                            <tr className="bg-orange-300">
                                <td data-label="Medium of exam" className="text-center border border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border border-white">March</td>
                                <td data-label="Board Name" className="text-center border border-white">GSEB</td>
                                <td  data-label="Institute Name" className="text-center border border-white">M and m mehta high school</td>
                                <td data-label="Specialisation"className="text-center border border-white">science</td>
                                <td data-label="Result Type" className="text-center border border-white">percentile</td>
                                <td data-label="Result" className="text-center border border-white">99.05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Academic;
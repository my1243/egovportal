import React from "react";


const Academic = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="font-bold text-3xl ml-16 mt-10">Academic Information</h1>
                </div>
                <div className="mt-20 mr-4 ml-4">
                    <table className="table_a table-auto w-full h-96 shadow-md shadow-black">
                        <thead className="bg-orange-500 h-20 text-white">
                            <tr>
                                <th className="text-center border-4 border-white">Medium of exam</th>
                                <th className="border-4 text-center border-white">Seat no.</th>
                                <th className="border-4 border-white text-center">Pass Year</th>
                                <th className="border-4 border-white text-center">Pass Month</th>
                                <th className="border-4 border-white text-center">Board Name</th>
                                <th className="border-4 border-white text-center">Institute Name</th>
                                <th className="border-4 border-white text-center">Specialisation</th>
                                <th className="border-4 border-white text-center">Result Type</th>
                                <th className="border-4 border-white text-center">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Medium of exam" className="text-center border-4 border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border-4 border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border-4 border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border-4 border-white">March</td>
                                <td data-label="Board Name" className="text-center border-4 border-white">GSEB</td>
                                <td data-label="Institute Name" className="text-center border-4 border-white">M and m mehta high school</td>
                                <td data-label="Specialisation" className="text-center border-4 border-white">science</td>
                                <td data-label="Result Type" className="text-center border-4 border-white">percentile</td>
                                <td data-label="Result" className="text-center border-4 border-white">99.05</td>
                            </tr>
                            <tr  className="bg-orange-300">
                                <td data-label="Medium of exam" className="text-center border-4 border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border-4 border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border-4 border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border-4 border-white">March</td>
                                <td data-label="Board Name" className="text-center border-4 border-white">GSEB</td>
                                <td data-label="Institute Name" className="text-center border-4 border-white">M and m mehta high school</td>
                                <td data-label="Specialisation" className="text-center border-4 border-white">science</td>
                                <td data-label="Result Type" className="text-center border-4 border-white">percentile</td>
                                <td data-label="Result" className="text-center border-4 border-white">99.05</td>
                            </tr>
                            <tr  className="bg-orange-100">

                                <td data-label="Medium of exam" className="text-center border-4 border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border-4 border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border-4 border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border-4 border-white">March</td>
                                <td data-label="Board Name" className="text-center border-4 border-white">GSEB</td>
                                <td data-label="Institute Name" className="text-center border-4 border-white">M and m mehta high school</td>
                                <td data-label="Specialisation" className="text-center border-4 border-white">science</td>
                                <td data-label="Result Type" className="text-center border-4 border-white">percentile</td>
                                <td data-label="Result" className="text-center border-4 border-white">99.05</td>
                            </tr>
                            <tr className="bg-orange-300">
                                <td data-label="Medium of exam" className="text-center border-4 border-white">SSC</td>
                                <td data-label="Seat no." className="text-center border-4 border-white">B2038286</td>
                                <td data-label="Pass Year" className="text-center border-4 border-white">2018</td>
                                <td data-label="Pass Month" className="text-center border-4 border-white">March</td>
                                <td data-label="Board Name" className="text-center border-4 border-white">GSEB</td>
                                <td  data-label="Institute Name" className="text-center border-4 border-white">M and m mehta high school</td>
                                <td data-label="Specialisation"className="text-center border-4 border-white">science</td>
                                <td data-label="Result Type" className="text-center border-4 border-white">percentile</td>
                                <td data-label="Result" className="text-center border-4 border-white">99.05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Academic;
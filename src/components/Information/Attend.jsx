import React from "react";


const Attend = () => {
    return (
        <>

            <div>
                <div>
                    <h1 className="font-bold text-3xl ml-16 mt-10">Attendence To Marks Conversion</h1>
                </div>
                <div className="mt-10 lg:mr-12 lg:ml-12 sm:ml-4 sm:mr-4">
                    <table className="table_a table-auto w-full h-96 shadow-md shadow-black">
                        <thead className="bg-orange-500 h-20 text-white">
                            <tr>
                                <th className="border-4 border-white">Program</th>
                                <th className="border-4 border-white">From percentage</th>
                                <th className="border-4 border-white">To percentage</th>
                                <th className="border-4 border-white">Attendence marks</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border-4 border-white">80</td>
                                <td data-label="To percentage" className="text-center border-4 border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border-4 border-white">4</td>
                            </tr>
                            <tr className="bg-orange-300">

                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border-4 border-white">80</td>
                                <td data-label="To percentage" className="text-center border-4 border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border-4 border-white">4</td>
                            </tr>
                            <tr className="bg-orange-100">


                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border-4 border-white">80</td>
                                <td data-label="To percentage" className="text-center border-4 border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border-4 border-white">4</td>
                            </tr>
                            <tr className="bg-orange-300">

                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border-4 border-white">80</td>
                                <td data-label="To percentage" className="text-center border-4 border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border-4 border-white">4</td>
                            </tr>

                            <tr className="bg-orange-100">

                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border-4 border-white">80</td>
                                <td data-label="To percentage" className="text-center border-4 border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border-4 border-white">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Attend;
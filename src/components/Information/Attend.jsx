import React from "react";


const Attend = () => {
    return (
        <>

            <div>
            <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold pb-2">
            Attendance To Marks Conversion
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" /></h1>
                <div className="lg:mr-12 lg:ml-12 sm:mx-4 mb-12">
                    <table className="table_a rounded-lg overflow-hidden table-auto w-full h-60 shadow-md">
                        <thead className="bg-orange-500 h-12 text-white">
                            <tr>
                                <th className="border border-white">Program</th>
                                <th className="border border-white">From percentage</th>
                                <th className="border border-white">To percentage</th>
                                <th className="border border-white">Attendence marks</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border border-white">80</td>
                                <td data-label="To percentage" className="text-center border border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border border-white">4</td>
                            </tr>
                            <tr className="bg-orange-300">

                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border border-white">80</td>
                                <td data-label="To percentage" className="text-center border border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border border-white">4</td>
                            </tr>
                            <tr className="bg-orange-100">


                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border border-white">80</td>
                                <td data-label="To percentage" className="text-center border border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border border-white">4</td>
                            </tr>
                            <tr className="bg-orange-300">

                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border border-white">80</td>
                                <td data-label="To percentage" className="text-center border border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border border-white">4</td>
                            </tr>

                            <tr className="bg-orange-100">

                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="From percentage" className="text-center border border-white">80</td>
                                <td data-label="To percentage" className="text-center border border-white">100</td>
                                <td data-label="Attendence marks" className="text-center border border-white">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Attend;
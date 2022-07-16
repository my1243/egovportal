import React from "react";

const ProgClass = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="font-bold text-3xl ml-16 mt-10">Program Class Info</h1>
                </div>
                <div className="mt-10 mr-12 ml-12">
                    <table className="table_a table-auto w-full h-96 shadow-md shadow-black">
                        <thead className="bg-orange-500 h-20 text-white">
                            <tr>
                                <th className="border-4 border-white">Institute</th>
                                <th className="border-4 border-white">Program</th>
                                <th className="border-4 border-white">Class code</th>
                                <th className="border-4 border-white">From Marks/Cpi</th>
                                <th className="border-4 border-white">To marks/Cpi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Institute" className="text-center border-4 border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border-4 border-white">First class with distinction</td>
                                <td data-label="From Marks" className="text-center border-4 border-white">7.50</td>
                                <td data-label="To marks/Cpi" className="text-center border-4 border-white">10.00</td>
                            </tr>
                            <tr className="bg-orange-300">
                            <td data-label="Institute" className="text-center border-4 border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border-4 border-white">First class with distinction</td>
                                <td data-label="From Marks" className="text-center border-4 border-white">7.50</td>
                                <td data-label="To marks/Cpi" className="text-center border-4 border-white">10.00</td>
                            </tr>
                            <tr className="bg-orange-100">

                            <td data-label="Institute"className="text-center border-4 border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border-4 border-white">First class with distinction</td>
                                <td data-label="From Marks" className="text-center border-4 border-white">7.50</td>
                                <td data-label="To marks/Cpi" className="text-center border-4 border-white">10.00</td>
                            </tr>
                            <tr className="bg-orange-300">
                            <td data-label="Institute" className="text-center border-4 border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border-4 border-white">First class with distinction</td>
                                <td data-label="From marks" className="text-center border-4 border-white">7.50</td>
                                <td data-label="To marks/Cpi" className="text-center border-4 border-white">10.00</td>
                            </tr>
                            
                            <tr className="bg-orange-100">
                            <td data-label="Institute" className="text-center border-4 border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border-4 border-white">Bachelor of technology</td>
                                <td data-label="Class code" className="text-center border-4 border-white">First class with distinction</td>
                                <td data-label="From Marks" className="text-center border-4 border-white">7.50</td>
                                <td data-label="To marks/Cpi" className="text-center border-4 border-white">10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProgClass;
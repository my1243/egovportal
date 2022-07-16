import React from "react";



const ViewSub = () => {
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
                                <h2 className="font-semibold lg:text-xl md:text-md inst">Institute:</h2>
                                <input className="border rounded-lg outline-none border-orange-500 ml-3 mb-2 p-1 w-60 inp"></input>
                            </div>
                            <div className="flex flex-row col">
                                <h2 className="font-semibold lg:text-xl md:text-md inst">Program:</h2>
                                <input className="border rounded-lg mb-2 border-orange-500 ml-2 p-1 w-60 inp"></input>
                            </div>
                            <div className="flex flex-row col">
                                <h2 className="font-semibold lg:text-xl md:text-md md:-mr-7 inst">Name: </h2>
                                <input type={'search'} className="border-orange-500 border p-1 rounded-md ml-12 w-60 inp"></input>
                            </div>
                            <div>
                                <button className="bg-orange-400 p-2  rounded-lg w-24  mt-10">Search</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewSub;
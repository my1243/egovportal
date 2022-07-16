import React from "react";



const ViewSub = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="vh ml-20 mt-10 font-bold text-3xl">View Subjects</h1>
                </div>
                <div className="flex flex-row bg-orange-100 border-4 border-orange-500 rounded-md mr-20 ml-20 mt-10 md:w-3/4 md:h-72 vi">
                    <div className="flex flex-row gap-28 mt-10 mb-10">
                        <div className="font-medium ml-9">
                            <div className="flex lg:flex-row col">
                                <h2 className="font-semibold lg:text-xl md:text-md md:-mr-7 inst">Institute &nbsp;&nbsp; : </h2>
                                <input className="border-2 border-orange-500 ml-10 mb-5 w-60 inp"></input>
                            </div>
                            <div className="flex flex-row col">
                                <h2 className="font-semibold lg:text-xl md:text-md md:-mr-7 inst">Program &nbsp; : </h2>
                                <input className="border-2 border-orange-500 ml-10 mb-5 w-60 inp"></input>
                            </div>
                            <div className="flex flex-row col">
                                <h2 className="font-semibold lg:text-xl md:text-md md:-mr-7 inst">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </h2>
                                <input className=" bg-orange-300 rounded-md ml-10 w-60 inp"></input>
                                <h1 className="font-bold text-2xl lg:-ml-7 sym">⨂ </h1>
                            </div>
                            <div>
                                <button className="bg-orange-400 border-4 border-white rounded-lg w-24 h-10 lg:ml-36 md:ml-24 mt-10">Search</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewSub;
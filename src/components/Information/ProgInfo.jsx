import React from "react";


const ProgInfo = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="ml-20 mt-10 font-bold text-3xl ph">Program Info</h1>
                </div>
                <div className="prog_info flex lg:flex-row bg-orange-200 border-4 border-orange-500 rounded-md mr-20 ml-20 mt-10 lg:w-5/6 md:w-5/6 md:flex-col">
                    <div className="flex flex-row gap-28 mt-10 mb-10">
                        <div className="font-medium ml-8">
                            <h2 className="mb-10">Institute Information</h2>
                            <h2 className="mb-12">Name</h2>
                            <h2 className="mb-10">Program code</h2>
                            <h2 className="mb-10">Alias</h2>
                            <h2 className="mb-10">Program type</h2>
                            <h2>Session type</h2>
                        </div>
                        <div className="text-orange-800 font-medium foc">
                            <h2 className="mb-10">Faculty of technology</h2>
                            <h2 className="mb-12">Bachlor of technology</h2>
                            <h2 className="mb-10">BT</h2>
                            <h2 className="mb-10">B.Tech</h2>
                            <h2 className="mb-10">Under Graduate</h2>
                            <h2>Semester</h2>
                        </div>
                        <div className="lg:border-2 lg:bg-orange-500 lg:border-orange-500 ml-32 -mr-20 h-64 -mt-3 lg:-ml-5 lg:h-full md:border-white md:bg-white">
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-row gap-28 lg:mt-10 mb-10 ml-56 md:-mt-1 nos">
                        <div className="font-medium ml-9 lg:-ml-10 md:-ml-48">
                            <h2 className="mb-10">No. of sem</h2>
                            <h2 className="mb-10">No. of year</h2>
                            <h2 className="mb-10">Eligibility Criteria</h2>
                            <h2 className="mb-10">Result Type</h2>
                            <h2 className="mb-10">Compulsary Sessional</h2>
                            <h2>Session type</h2>
                        </div>
                        <div className="text-orange-800 font-medium ssc">
                            <h2 className="mb-10">8</h2>
                            <h2 className="mb-10">4</h2>
                            <h2 className="mb-10">SSC, Diploma, hsc, gujcet</h2>
                            <h2 className="mb-10">Grade</h2>
                            <h2 className="mb-10 lg:mb-16">4</h2>
                            <h2>3</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgInfo;
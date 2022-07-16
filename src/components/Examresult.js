import React from "react";
import Result from "./cards/Result";

const ExamResult = () => {
    return(
        <>
        <h1 className="text-4xl font-bold my-8 mx-12">Exam Result<hr className="rounded-full shadow-xl mt-2 pt-2 w-[40rem] bg-gradient-to-r from-[#f4510b] to-[#e9d022]"/></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 md:mx-12 mb-12">
                {
                    [...Array(8)].map(() => {
                        return(
                            <Result/>
                        )
                    })
                }
            </div>
        </>
    );
}

export default ExamResult;
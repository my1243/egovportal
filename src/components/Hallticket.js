import React from "react";
import Ticket from "./cards/Ticket";

const HallTicket = () => {
    return(
        <>
        <h1 className="text-4xl font-bold my-8 mx-12">Hall Ticket<hr className="rounded-full shadow-xl mt-2 pt-1 w-[40rem] bg-gradient-to-r from-[#f4510b] to-[#e9d022]"/></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 md:mx-12 mb-12">
                {
                    [...Array(8)].map(() => {
                        return(
                            <Ticket/>
                        )
                    })
                }
            </div>
        </>
    );
}

export default HallTicket;